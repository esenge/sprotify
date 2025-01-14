export interface I_FavoritesState {
    loading: boolean;
    error: string | null;
    loginModalVisible: boolean;
    favorites: any;
    shouldReload: boolean;
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
};