import { ImageList } from '@mui/material';
import { Spotify } from '../../types/spotify';
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import { useEffect, useMemo } from 'react';
import { fetchFavoriteAlbumIds } from '../../store/slices/favorites/asyncThunks';
import arrayToCommaSeparatedString from '../../helpers/arrayToCommaSeparatedString/arrayToCommaSeparatedString';
import AlbumItem from './AlbumItem';

interface I_AlbumGrid {
    items: Array<Spotify.Album>;
}

const AlbumGrid: React.FC<I_AlbumGrid> = ({
    items
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const { favoriteAlbumIds } = useSelector((state: RootState) => state.favorites);
    const { accessToken } = useSelector((state: RootState) => state.auth);
    const itemIds = items.map((item) => item.id);

    // todo: move this to item
    useEffect(() => {
        const ids = arrayToCommaSeparatedString(itemIds, ',');
        if (accessToken) {
            dispatch(fetchFavoriteAlbumIds({accessToken, type: 'albums', ids}));
        }
    }, [accessToken]);

    const albumsToShow = useMemo(() => {
        return favoriteAlbumIds
        ? items.map((item, index) => ({
                ...item,
                isFavorite: favoriteAlbumIds[index],
            }))
        : items
    }, [favoriteAlbumIds, items]);

    return (
        <ImageList cols={5}>
            {albumsToShow?.map((item) => (
                <AlbumItem item={item} />
            ))}
        </ImageList>
    );
};

export default AlbumGrid;