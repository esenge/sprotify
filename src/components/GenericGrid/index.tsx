import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {useEffect, useMemo} from 'react';
import arrayToCommaSeparatedString from '../../helpers/arrayToCommaSeparatedString/arrayToCommaSeparatedString';
import {fetchFavoriteIds} from '../../store/slices/favorites/asyncThunks';
import TrackGrid from '../TrackGrid';
import AlbumGrid from '../AlbumGrid';
import {SpotifySavedType} from '../../types/spotify';

interface I_GenericGrid {
    items: any[];
    type: string;
}

const GenericGrid: React.FC<I_GenericGrid> = ({
    items,
    type,
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const { favorites, shouldReload } = useSelector((state: RootState) => state.favorites);
    const { accessToken } = useSelector((state: RootState) => state.auth);
    const itemIds = items.map((item) => item.id);

    const itemsToShow = useMemo(() => {
        return favorites[type]
            ? items.map((item, index) => ({
                ...item,
                isFavorite: favorites[type][index],
            }))
            : items
    }, [favorites, items]);

    useEffect(() => {
        const ids = arrayToCommaSeparatedString(itemIds, ',');
        if (accessToken) {
            dispatch(fetchFavoriteIds({accessToken, type: type as SpotifySavedType, ids}));
        }
    }, [accessToken, shouldReload]);


    const renderGrid = () => {
        switch (type) {
            case 'tracks':
                return <TrackGrid items={itemsToShow} />;
            case 'albums':
                return <AlbumGrid items={itemsToShow} />
        }
    };

    return (
        <>
            {renderGrid()}
        </>
    );
};

export default GenericGrid;