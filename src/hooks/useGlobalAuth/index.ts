import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearAccessToken, setAccessToken } from '../../store/slices/auth/authSlice.ts';

export const useGlobalAuth = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // Check if token is valid in localStorage
        const expiresAt = parseInt(localStorage.getItem('spotifyTokenExpiresAt') || '0', 10);
        if (Date.now() > expiresAt) {
            dispatch(clearAccessToken());
        }

        // Extract token from URL after login
        const hash = window.location.hash;
        const token = new URLSearchParams(hash.replace('#', '?')).get('access_token');
        if (token) {
            const expiresAt = Date.now() + 3600 * 1000; // 1-hour expiration
            dispatch(setAccessToken({ token, expiresAt }));
            window.history.replaceState({}, document.title, window.location.pathname); // Clear URL hash
        }
    }, [dispatch]);
};
