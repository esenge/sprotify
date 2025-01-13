import {SpotifySavedType} from './spotify';

export const MAX_LIMIT = 10;

export interface I_SavedItems {
    type: SpotifySavedType,
    accessToken: string;
}

export interface I_Favorites {
    type: SpotifySavedType,
    accessToken: string;
    ids: string;
}

export interface I_ModifyFavorite {
    type: SpotifySavedType,
    accessToken: string;
    ids: string;
}