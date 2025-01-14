import { createAsyncThunk } from '@reduxjs/toolkit';
import spotifyAPI from '../../../API/spotifyAPI';
import { I_Favorites, I_ModifyFavorite, I_SavedItems } from '../../../types/other';

export const fetchSavedItems = createAsyncThunk(
    'favorites/fetchSavedItems',
    async (params: I_SavedItems, { rejectWithValue }) => {
        try {
            const response = await spotifyAPI.savedItems(params);
            return { data: response, type: params.type };
        } catch (error: any) {
        }
    }
);

export const fetchFavoriteIds = createAsyncThunk(
    'favorites/fetchFavoriteIds',
    async (params: I_Favorites, { rejectWithValue }) => {
        try {
            const response = await spotifyAPI.favorites(params);
            return { data: response, type: params.type };
        } catch (error: any) {
        }
    }
);

export const saveFavorite = createAsyncThunk(
    'favorites/saveFavorite',
    async (params: I_ModifyFavorite, { rejectWithValue }) => {
        try {
            const response = await spotifyAPI.addFavorite(params);
            return { data: response, type: params.type};
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
            const response = await spotifyAPI.removeFavorite(params);
            return { data: response, type: params.type};
        } catch (error: any) {
            if (error.response?.status === 401) {
                return rejectWithValue({ code: 401, message: 'Unauthorized' });
            }
            return rejectWithValue(error.response?.data || 'An unknown error occurred');
        }
    }
);

