import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchSpotify } from '../../services/spotifyApi';
import {Spotify} from '../../types/spotify.ts';

export const fetchSearchResults = createAsyncThunk(
    'search/fetchSearchResults',
    async (params: Spotify.Search.Params, thunkAPI): Promise<any[]> => {
        try {
            return await searchSpotify(params);
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to fetch results');
        }
    }
);