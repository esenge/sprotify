interface I_FavoritesState {
    albums: any[];
    artists: any[];
    loading: boolean;
    error: string | null;
}

export const initialState: I_FavoritesState = {
    albums: [],
    artists: [],
    loading: false,
    error: null,
};