interface I_AuthState {
    accessToken: string | null;
    expiresAt: number | null;
}

export const initialState: I_AuthState = {
    accessToken: localStorage.getItem('spotifyAccessToken') || null,
    expiresAt: parseInt(localStorage.getItem('spotifyTokenExpiresAt') || '0', 10) || null,
};