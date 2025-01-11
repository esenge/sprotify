export const SCOPES = ['user-library-read'].join(' ');

export const LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${import.meta.env.VITE_CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
    import.meta.env.VITE_URI_REDIRECT
)}&scope=${encodeURIComponent(SCOPES)}`