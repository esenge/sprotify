import { SpotifySearchType } from '../../../types/spotify.ts';
import { TYPE_ALL } from '../../../types/other.ts';

interface I_SearchTypeState {
    searchType: SpotifySearchType | TYPE_ALL;
    query: string,
    results: any,
}

export const initialState: I_SearchTypeState = {
    searchType: TYPE_ALL,
    query: '',
    results: null,
};