import {Box, Grid2} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {useEffect, useMemo} from 'react';
import arrayToCommaSeparatedString from '../../helpers/arrayToCommaSeparatedString/arrayToCommaSeparatedString';
import {fetchFavoriteAlbumIds} from '../../store/slices/favorites/asyncThunks';
import TrackItem from './TrackItem';

interface Props {
    items: any[];
}

const TrackGrid: React.FC<Props> = ({ items }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { favoriteAlbumIds } = useSelector((state: RootState) => state.favorites);
    const { accessToken } = useSelector((state: RootState) => state.auth);
    const itemIds = items.map((item) => item.id);

    // todo: move this to item
    useEffect(() => {
        const ids = arrayToCommaSeparatedString(itemIds, ',');
        if (accessToken) {
            dispatch(fetchFavoriteAlbumIds({accessToken, type: 'tracks', ids}));
        }
    }, [accessToken]);

    const tracksToShow = useMemo(() => {
        return favoriteAlbumIds
            ? items.map((item, index) => ({
                ...item,
                isFavorite: favoriteAlbumIds[index],
            }))
            : items
    }, [favoriteAlbumIds, items]);

    return (
        <Box>
            <Grid2 container spacing={2}>
                {tracksToShow?.map((item) => (
                    <Grid2 key={item.id} xs={12} sm={6} md={4} lg={3} item>
                        <TrackItem item={item} />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
};

export default TrackGrid;
