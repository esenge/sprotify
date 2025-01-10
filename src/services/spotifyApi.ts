import axios from 'axios';


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
                    Authorization: `Basic ${btoa(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`)}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );
        accessToken = response.data.access_token;
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }

    return accessToken;
};

export const searchSpotify = async (query: string, type: string) => {
    await getAccessToken();
    const response = await axiosInstance.get('/search', {
        params: { q: query, type, limit: 10 },
    });

    return response.data;
};
