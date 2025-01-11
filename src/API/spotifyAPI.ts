import { Spotify, SpotifySavedType } from '../types/spotify.ts';
import { axiosInstance, getAccessToken } from './auth.ts';
import { MAX_LIMIT } from '../types/other.ts';

interface I_SavedItems {
    type: SpotifySavedType,
    accessToken: string;
}

interface I_Favorites {
    type: SpotifySavedType,
    accessToken: string;
    ids: string;
}

interface I_AddFavorite {
    type: SpotifySavedType,
    accessToken: string;
    ids: string;
}

const spotifyAPI = {
    search: async (params: Spotify.Search.Params): Promise<Spotify.Search.Response> => {
        await getAccessToken();
        const response = await axiosInstance.get('/search', {
            params: {
                q: params.query,
                type: params.type,
                limit: MAX_LIMIT,
            }
        });
        return response.data;
    },
    savedItems: async (params: I_SavedItems) => {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${params.accessToken}`;
        const response = await axiosInstance.get(`/me/${params.type}`);
        return response.data.items;
    },
    favorites: async (params: I_Favorites) => {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${params.accessToken}`;
        const response = await axiosInstance.get(`/me/${params.type}/contains`, {
            params: {
                ids: params.ids,
            }
        });
        return response.data;
    },
    addFavorite: async (params: I_AddFavorite) => {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${params.accessToken}`;
        const response = await axiosInstance.get(`/me/${params.type}`);
        return response.data;
    },
};

export default spotifyAPI;