import { createSlice, isPending, isFulfilled, isRejected, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
    fetchFavoriteIds,
    fetchSavedItems,
    saveFavorite,
    removeFavorite,
} from './asyncThunks';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setShouldReload(state, action: PayloadAction<boolean>) {
            state.shouldReload = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(isPending(fetchFavoriteIds, fetchSavedItems, saveFavorite, removeFavorite), (state) => {
            //@ts-ignore
            state.loading = true;
            //@ts-ignore
            state.error = null;
        });
        builder.addMatcher(isFulfilled(fetchFavoriteIds, fetchSavedItems, saveFavorite, removeFavorite), (state, action) => {
            //@ts-ignore
            state.loading = false;
            switch (action.type) {
                case fetchSavedItems.fulfilled.type:
                    //@ts-ignore
                    state.shouldReload = false;
                    //@ts-ignore
                    state[action.payload.type] = action.payload.data;
                    break;
                case fetchFavoriteIds.fulfilled.type:
                    //@ts-ignore
                    state.favorites[action.payload.type] = action.payload.data;
                    //@ts-ignore
                    state.shouldReload = false;
                    break;
                case saveFavorite.fulfilled.type:
                    //@ts-ignore
                    state.shouldReload = true;
                    break;
                case removeFavorite.fulfilled.type:
                    //@ts-ignore
                    state.shouldReload = true;
                    break;
                default:
                    break;
            }
        });
        builder.addMatcher(isRejected(fetchFavoriteIds, fetchSavedItems, saveFavorite, removeFavorite), (state, action) => {
            //@ts-ignore
            state.loading = false;
            switch (action.type) {
                case saveFavorite.rejected.type:
                case removeFavorite.rejected.type:
                    //@ts-ignore
                    if (action.payload?.code === 401) {
                        //@ts-ignore
                        state.loginModalVisible = true;
                    }
                    break;
                default:
                    //@ts-ignore
                    state.error = action.payload as string;
            }
        });
    },
});
export const {
    setShouldReload
} = favoritesSlice.actions;
export default favoritesSlice.reducer;
