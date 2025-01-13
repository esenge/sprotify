import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {fetchSavedAlbums, fetchFavoriteAlbumIds, saveFavorite} from './asyncThunks';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSavedAlbums.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSavedAlbums.fulfilled, (state, action) => {
                state.loading = false;
                state.albums = action.payload;
            })
            .addCase(fetchSavedAlbums.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })

            .addCase(fetchFavoriteAlbumIds.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFavoriteAlbumIds.fulfilled, (state, action) => {
                state.loading = false;
                state.favoriteAlbumIds = action.payload;
            })
            .addCase(fetchFavoriteAlbumIds.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(saveFavorite.pending, (state) => {
                state.loading = true;
            })
            .addCase(saveFavorite.fulfilled, (state, action) => {
                state.loading = false;
                console.log('saveFavorite action.payload', action.payload);
                state.favoriteAlbumIds = action.payload;
            })
            .addCase(saveFavorite.rejected, (state, action) => {
                state.loading = false;
                console.log('saveFavorite error payload', action.payload);

                // Check for 401 error and show modal
                if (action.payload?.code === 401) {
                    state.loginModalVisible = true; // Show modal
                } else {
                    state.error = action.payload?.message || 'Failed to save favorite';
                }
            });
    },
});

export default favoritesSlice.reducer;
