import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteAlbumIds } from '../../store/slices/favorites/asyncThunks';
import arrayToCommaSeparatedString from '../../helpers/arrayToCommaSeparatedString/arrayToCommaSeparatedString';
import { AppDispatch, RootState } from '../../store';
import {SpotifySearchType} from '../../types/spotify.ts';

interface UseFavoriteItemsProps {
    items: any[];
    type: SpotifySearchType;
}

const useFavoriteItems = ({ items, type }: UseFavoriteItemsProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const { favoriteAlbumIds } = useSelector((state: RootState) => state.favorites);
    const { accessToken } = useSelector((state: RootState) => state.auth);
    const itemIds = items.map((item) => item.id);

    useEffect(() => {
        if (accessToken) {
            const ids = arrayToCommaSeparatedString(itemIds, ',');
            dispatch(fetchFavoriteAlbumIds({ accessToken, type, ids }));
        }
    }, [accessToken, type, itemIds]);

    const itemsToShow = useMemo(() => {
        return favoriteAlbumIds
            ? items.map((item, index) => ({
                ...item,
                isFavorite: favoriteAlbumIds[index],
            }))
            : items;
    }, [favoriteAlbumIds, items]);

    return itemsToShow;
};

export default useFavoriteItems;
