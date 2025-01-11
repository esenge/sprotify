import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState.ts';
import { fetchSearchResults } from './asyncThunks..ts';

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