import { createSlice, isPending, isFulfilled, isRejected } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
    fetchFavoriteIds,
    fetchSavedItems,
    saveFavorite,
    removeFavorite,
} from './asyncThunks';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(isPending(fetchFavoriteIds, fetchSavedItems, saveFavorite, removeFavorite), (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addMatcher(isFulfilled(fetchFavoriteIds, fetchSavedItems, saveFavorite, removeFavorite), (state, action) => {
            state.loading = false;
            switch (action.type) {
                case fetchSavedItems.fulfilled.type:
                    state[action.payload.type] = action.payload.data;
                    break;
                case fetchFavoriteIds.fulfilled.type:
                    state.favorites[action.payload.type] = action.payload.data;
                    break;
                case saveFavorite.fulfilled.type:
                    state.favoriteAlbumIds = action.payload;
                    break;
                case removeFavorite.fulfilled.type:
                    state.favoriteAlbumIds = action.payload;
                    break;
                default:
                    break;
            }
        });
        builder.addMatcher(isRejected(fetchFavoriteIds, fetchSavedItems, saveFavorite, removeFavorite), (state, action) => {
            state.loading = false;
            switch (action.type) {
                case saveFavorite.rejected.type:
                case removeFavorite.rejected.type:
                    if (action.payload?.code === 401) {
                        state.loginModalVisible = true; // Show modal for unauthorized error
                    } else {
                        state.error = action.payload?.message || 'An error occurred';
                    }
                    break;
                default:
                    state.error = action.payload as string;
            }
        });
    },
});

export default favoritesSlice.reducer;
