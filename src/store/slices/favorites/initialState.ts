interface I_FavoritesState {
    albums: any[];
    artists: any[];
    loading: boolean;
    error: string | null;
    loginModalVisible: boolean;
    favorites: any;
    shouldReload: boolean;
}

export const initialState: I_FavoritesState = {
    albums: [],
    artists: [],
    loading: false,
    error: null,
    loginModalVisible: false,
    favorites: {
        albums: [],
        tracks: [],
    },
    shouldReload: false,
};