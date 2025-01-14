import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchSearchResults } from './asyncThunks';
import {SpotifySearchType} from '../../../types/spotify';

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchType(state, action: PayloadAction<string>) {
            state.searchType = action.payload as SpotifySearchType;
        },
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchResults.pending, (state) => {
                //@ts-ignore
                state.isLoading = true;
                //@ts-ignore
                state.error = null;
            })
            .addCase(fetchSearchResults.fulfilled, (state, action) => {
                //@ts-ignore
                state.isLoading = false;
                //@ts-ignore
                state.results = action.payload;
            })
            .addCase(fetchSearchResults.rejected, (state, action) => {
                //@ts-ignore
                state.isLoading = false;
                //@ts-ignore
                state.error = action.payload as string;
            });
    },
});

export const {
    setSearchType,
    setQuery,
} = searchSlice.actions;
export default searchSlice.reducer;