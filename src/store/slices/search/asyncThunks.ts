import { createAsyncThunk } from '@reduxjs/toolkit';
import { Spotify } from '../../../types/spotify';
import spotifyAPI from '../../../API/spotifyAPI';

//@ts-ignore
export const fetchSearchResults = createAsyncThunk(
    'search/fetchSearchResults',
    async (params: Spotify.Search.Params, thunkAPI): Promise<Spotify.Search.Response> => {
        try {
            return await spotifyAPI.search(params);
        } catch (error) {
            //@ts-ignore
            return thunkAPI.rejectWithValue('Failed to fetch results');
        }
    }
);