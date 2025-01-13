import { Spotify, SpotifySavedType } from '../types/spotify';
import { axiosInstance, getAccessToken } from './auth';
import {I_Favorites, I_ModifyFavorite, I_SavedItems, MAX_LIMIT} from '../types/other';

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
        const response = await axiosInstance.get(
            `/me/${params.type}/contains`,
            {
                params: {
                    ids: params.ids,
                }
            });
        return response.data;
    },
    addFavorite: async (params: I_ModifyFavorite) => {
        const response = await axiosInstance.put(
            `/me/${params.type}`,
            null,
            {
                params: {
                    ids: params.ids
                },
            });
        return response.data;
    },
    removeFavorite: async (params: I_ModifyFavorite) => {
        const response = await axiosInstance.delete(
            `/me/${params.type}`,
            {
                params: {
                    ids: params.ids,
                }
            });
        return response.data;
    },
};

export default spotifyAPI;