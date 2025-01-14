import { Spotify, SpotifySearchType} from '../../../types/spotify';

export interface I_SearchTypeState {
    searchType: SpotifySearchType;
    query: string,
    results: Spotify.Search.Response,
    isLoading: boolean;
    error: string | null;
}

export const initialState: I_SearchTypeState = {
    searchType: 'album',
    query: '',
    results: {},
    isLoading: false,
    error: null,
};