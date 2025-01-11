import { Spotify } from '../types/spotify.ts';
import { axiosInstance } from './auth.ts';

export const getSavedAlbums = async (): Promise<Spotify.Search.Response> => {
    const response = await axiosInstance.get('/me/albums');
    return response.data;
};