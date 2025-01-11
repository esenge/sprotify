import { createAsyncThunk } from '@reduxjs/toolkit';
import { Spotify } from '../../../types/spotify.ts';
import { search } from '../../../API/search.ts';
import spotifyAPI from '../../../API/spotifyAPI.ts';

export const fetchSearchResults = createAsyncThunk(
    'search/fetchSearchResults',
    async (params: Spotify.Search.Params, thunkAPI): Promise<any[]> => {
        try {
            return await spotifyAPI.search(params);
            // return await search(params);
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to fetch results');
        }
    }
);