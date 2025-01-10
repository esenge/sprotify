import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {SpotifySearchType} from '../../types/spotify.ts';
import {fetchSearchResults} from '../thunks/searchThunks.ts';
import {TYPE_ALL} from '../../types/other.ts';

interface SearchTypeState {
    searchType: SpotifySearchType | TYPE_ALL;
    query: string,
    results: any,
}

const initialState: SearchTypeState = {
    searchType: TYPE_ALL,
    query: '',
    results: null,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchType(state, action: PayloadAction<string>) {
            state.searchType = action.payload;
            state.currentPage = 1;
        },
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
            state.currentPage = 1;
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
            })
            .addCase(fetchSearchResults.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const {
    setSearchType,
    setQuery,
} = searchSlice.actions;
export default searchSlice.reducer;