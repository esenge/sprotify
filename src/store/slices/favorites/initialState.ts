interface I_FavoritesState {
    albums: any[];
    favoriteAlbumIds: any[];
    artists: any[];
    loading: boolean;
    error: string | null;
}

export const initialState: I_FavoritesState = {
    albums: [],
    favoriteAlbumIds: [],
    artists: [],
    loading: false,
    error: null,
};