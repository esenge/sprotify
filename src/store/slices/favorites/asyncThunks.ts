import { createAsyncThunk } from '@reduxjs/toolkit';
import spotifyAPI from '../../../API/spotifyAPI';
import {I_Favorites, I_ModifyFavorite, I_SavedItems} from '../../../types/other';

export const fetchSavedAlbums = createAsyncThunk(
    'favorites/fetchSavedAlbums',
    async (params: I_SavedItems, { rejectWithValue }) => {
        try {
            return await spotifyAPI.savedItems(params);
        } catch (error: any) {
        }
    }
);

export const fetchFavoriteAlbumIds = createAsyncThunk(
    'favorites/fetchFavoriteAlbumIds',
    async (params: I_Favorites, { rejectWithValue }) => {
        try {
            return await spotifyAPI.favorites(params);
        } catch (error: any) {
        }
    }
);

export const saveFavorite = createAsyncThunk(
    'favorites/saveFavorite',
    async (params: I_ModifyFavorite, { rejectWithValue }) => {
        try {
            return await spotifyAPI.addFavorite(params);
        } catch (error: any) {
            if (error.response?.status === 401) {
                return rejectWithValue({ code: 401, message: 'Unauthorized' });
            }
            return rejectWithValue(error.response?.data || 'An unknown error occurred');
        }
    }
);

export const removeFavorite = createAsyncThunk(
    'favorites/removeFavorite',
    async (params: I_ModifyFavorite, { rejectWithValue }) => {
        try {
            return await spotifyAPI.removeFavorite(params);
        } catch (error: any) {
            if (error.response?.status === 401) {
                return rejectWithValue({ code: 401, message: 'Unauthorized' });
            }
            return rejectWithValue(error.response?.data || 'An unknown error occurred');
        }
    }
);

