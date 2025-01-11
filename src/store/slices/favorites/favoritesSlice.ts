import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState.ts';
import {fetchSavedAlbums, fetchFavoriteAlbumIds} from './asyncThunks.ts';

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
            });
    },
});

export default favoritesSlice.reducer;
