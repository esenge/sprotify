import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchSpotify } from '../../services/spotifyApi';

interface SearchState {
    results: any[];
    query: string;
    isLoading: boolean;
    error: string | null;
}

const initialState: SearchState = {
    results: [],
    query: '',
    isLoading: false,
    error: null,
};

// Async thunk to fetch search results
export const fetchSearchResults = createAsyncThunk(
    'searchResults/fetchSearchResults',
    async ({ query, type }: { query: string; type: string }, thunkAPI) => {
        try {
            return await searchSpotify(query, type);
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to fetch search results.');
        }
    }
);

const searchResultsSlice = createSlice({
    name: 'searchResults',
    initialState,
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchResults.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchSearchResults.fulfilled, (state, action) => {
                state.isLoading = false;
                state.results = action.payload;
                console.log("action.payload", action);
            })
            .addCase(fetchSearchResults.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setQuery } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
