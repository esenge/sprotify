import { createAsyncThunk } from '@reduxjs/toolkit';
import spotifyAPI from '../../../API/spotifyAPI.ts';

export const fetchSavedAlbums = createAsyncThunk(
    'favorites/fetchSavedAlbums',
    async (params, { rejectWithValue }) => {
        try {
            return await spotifyAPI.savedItems(params);
        } catch (error: any) {
        }
    }
);

export const fetchFavoriteAlbumIds = createAsyncThunk(
    'favorites/fetchFavoriteAlbumIds',
    async (params, { rejectWithValue }) => {
        try {
            return await spotifyAPI.favorites(params);
        } catch (error: any) {
        }
    }
);

export const saveFavoriteAlbum = createAsyncThunk(
    'favorites/saveFavoriteAlbum',
    async (params, { rejectWithValue }) => {
        try {
            return await spotifyAPI.addFavorite(params);
        } catch (error: any) {
        }
    }
);

