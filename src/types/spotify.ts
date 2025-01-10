export type SpotifySearchType = "album" | "artist" | "playlist" | "track" | "show" | "episode" | "audiobook";

namespace Spotify {
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
            albums?: any;
            artists?: any;
            audiobooks?: any;
            episodes?: any;
            playlists?: any;
            shows?: any;
            tracks?: any;
        }
    }
}