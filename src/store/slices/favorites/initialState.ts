interface I_FavoritesState {
    albums: any[];
    favoriteAlbumIds: any[];
    artists: any[];
    loading: boolean;
    error: string | null;
    loginModalVisible: boolean;
    favorites: any;
}

export const initialState: I_FavoritesState = {
    albums: [],
    favoriteAlbumIds: [],
    artists: [],
    loading: false,
    error: null,
    loginModalVisible: false,
    favorites: {
        albums: [],
        tracks: [],
    },
};