import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<{ token: string; expiresAt: number }>) => {
            state.accessToken = action.payload.token;
            state.expiresAt = action.payload.expiresAt;

            localStorage.setItem('spotifyAccessToken', action.payload.token);
            localStorage.setItem('spotifyTokenExpiresAt', action.payload.expiresAt.toString());
        },
        clearAccessToken: (state) => {
            state.accessToken = null;
            state.expiresAt = null;

            localStorage.removeItem('spotifyAccessToken');
            localStorage.removeItem('spotifyTokenExpiresAt');
        },
    },
});

export const {
    setAccessToken,
    clearAccessToken
} = authSlice.actions;
export default authSlice.reducer;
