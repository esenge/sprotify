import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/search/searchSlice';
import authReducer from './slices/auth/authSlice';
import favoritesReducer from './slices/favorites/favoritesSlice';
import {Button} from '@mui/material';

const store = configureStore({
    reducer: {
        auth: authReducer,
        search: searchReducer,
        favorites: favoritesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;


