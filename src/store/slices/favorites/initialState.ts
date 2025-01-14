import {I_SpotifyAlbumItem, I_SpotifyTrackItem} from '../../../types/other';

interface I_FavoriteAlbum {
    album: I_SpotifyAlbumItem,
}

interface I_FavoriteTrack {
    track: I_SpotifyTrackItem,
}

export interface I_Favorites {
    albums: Array<number>;
    tracks: Array<number>;
}

export interface I_FavoritesState {
    loading: boolean;
    error: string | null;
    loginModalVisible: boolean;
    favorites: I_Favorites;
    shouldReload: boolean;
    albums: Array<I_FavoriteAlbum>;
    tracks: Array<I_FavoriteTrack>;
}

export const initialState: I_FavoritesState = {
    loading: false,
    error: null,
    loginModalVisible: false,
    favorites: {
        albums: [],
        tracks: [],
    },
    shouldReload: false,
    albums: [],
    tracks: [],
};