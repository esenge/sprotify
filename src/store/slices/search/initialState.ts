import { SpotifySearchType } from '../../../types/spotify';

export interface I_SearchTypeState {
    searchType: SpotifySearchType;
    query: string,
    results: any,
    isLoading: boolean;
    error: string | null;
}

export const initialState: I_SearchTypeState = {
    searchType: 'album',
    query: '',
    results: null,
    isLoading: false,
    error: null,
};