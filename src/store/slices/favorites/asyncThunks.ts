import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../API/auth.ts';

export const fetchSavedAlbums = createAsyncThunk(
    'favorites/fetchSavedAlbums',
    async (accessToken: string, { rejectWithValue }) => {
        console.log("fetchSavedAlbums");
        try {
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            const response = await axiosInstance.get('/me/albums');
            return response.data.items;
        } catch (error: any) {
            console.error('Error fetching saved albums:', error);
            return rejectWithValue(error.response?.data || 'Failed to fetch saved albums');
        }
    }
);