import { configureStore } from '@reduxjs/toolkit';
import searchTypeReducer from '../store/slices/searchTypeSlice.ts';
import searchResultsReducer from '../store/slices/searchResultsSlice.ts';

const store = configureStore({
    reducer: {
        searchType: searchTypeReducer,
        searchResults: searchResultsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
