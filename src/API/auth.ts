import axios from 'axios';

const API_BASE_URL = 'https://api.spotify.com/v1';
let accessToken = '';

export const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});

export const getAccessToken = async (): Promise<string> => {
    if (!accessToken) {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({ grant_type: 'client_credentials' }),
            {
                headers: {
                    Authorization: `Basic ${btoa(`${import.meta.env.VITE_CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`)}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );
        accessToken = response.data.access_token;
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
    return accessToken;
};
