import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {useEffect, useMemo} from 'react';
import arrayToCommaSeparatedString from '../../helpers/arrayToCommaSeparatedString/arrayToCommaSeparatedString';
import {fetchFavoriteIds} from '../../store/slices/favorites/asyncThunks';
import TrackGrid from '../TrackGrid';
import AlbumGrid from '../AlbumGrid';
import {Spotify, SpotifySavedType} from '../../types/spotify';
import {I_Favorites} from '../../store/slices/favorites/initialState';

interface I_GenericGrid {
    items: Array<Spotify.Album> | Array<Spotify.Track>;
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
        const favoritesOfType = favorites[type as keyof I_Favorites];
        if (favoritesOfType) {
            return items.map((item, index) => ({
                ...item,
                isFavorite: favoritesOfType[index] ?? false,
            }));
        }
        return items;
    }, [favorites, items, type]);


    useEffect(() => {
        const ids = arrayToCommaSeparatedString(itemIds, ',');
        if (accessToken) {
            dispatch(fetchFavoriteIds({accessToken, type: type as SpotifySavedType, ids}));
        }
    }, [accessToken, shouldReload]);


    const renderGrid = () => {
        switch (type) {
            case 'tracks':
                return <TrackGrid items={itemsToShow as Array<Spotify.Track>} />;
            case 'albums':
                return <AlbumGrid items={itemsToShow as Array<Spotify.Album>} />
        }
    };

    return (
        <>
            {renderGrid()}
        </>
    );
};

export default GenericGrid;