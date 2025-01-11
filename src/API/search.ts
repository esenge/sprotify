import { axiosInstance, getAccessToken } from './auth';
import { MAX_LIMIT } from '../types/other';
import { Spotify } from '../types/spotify.ts';

export const search = async (params): Promise<Spotify.Search.Response> => {
    await getAccessToken();
    const response = await axiosInstance.get('/search', {
        params: {
            q: params.query,
            type: params.type,
            limit: MAX_LIMIT,
        },
    });
    return response.data;
};
