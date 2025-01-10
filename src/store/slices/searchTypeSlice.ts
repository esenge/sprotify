import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SpotifySearchType } from '../../types/spotify.ts';

interface SearchTypeState {
    activeType: SpotifySearchType | "all";
}

const initialState: SearchTypeState = {
    activeType: "all",
};

const searchTypeSlice = createSlice({
    name: 'searchType',
    initialState,
    reducers: {
        setActiveType: (state, action: PayloadAction<SpotifySearchType | "all">) => {
            state.activeType = action.payload;
        },
    },
});

export const { setActiveType } = searchTypeSlice.actions;
export default searchTypeSlice.reducer;
