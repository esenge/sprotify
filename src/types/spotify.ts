export type SpotifySearchType = "album" | "artist" | "playlist" | "track" | "show" | "episode" | "audiobook";
export type SpotifySavedType = "albums" | "artists" | "playlists" | "tracks" | "shows" | "episodes" | "audiobooks";

export namespace Spotify {
    export interface Image {
        url: string;
    }
    export interface Album {
        id: string;
        name: string;
        release_date: string;
        images: Array<Image>;
    }
    export namespace Search {
        export interface Params {
            query: string;
            type: Array<SpotifySearchType>;
        }
        export interface Response {
            error?: {
                message: string;
                status: number;
            }
            albums?: Array<Album>;
            artists?: any;
            audiobooks?: any;
            episodes?: any;
            playlists?: any;
            shows?: any;
            tracks?: any;
        }
    }
}