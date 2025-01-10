import axios from 'axios';
import { Spotify } from '../types/spotify.ts';
import { MAX_LIMIT } from '../types/other.ts';

const API_BASE_URL = 'https://api.spotify.com/v1';

let accessToken = '';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
});

const getAccessToken = async (): Promise<string> => {
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

export const searchSpotify = async (params): Promise<Spotify.Search.Response> => {
    await getAccessToken();
    const response = await axiosInstance.get('/search', {
        params: {
            q: params.query,
            type: params.type,
            limit: MAX_LIMIT,
        }
    });

    return response.data;
};