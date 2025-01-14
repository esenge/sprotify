import { Stack } from '@mui/material';
import { ALL_SPOTIFY_SEARCH_TYPES } from '../../constants';
import SearchTypeListItem from './SearchTypeListItem';
import { SpotifySearchType } from '../../types/spotify';

const SearchTypeList: React.FC = () => {
    return (
        <Stack direction="row" spacing={1} justifyContent="center">
            {ALL_SPOTIFY_SEARCH_TYPES.map((type) => (
                <SearchTypeListItem type={type as SpotifySearchType} key={type} />
            ))}
        </Stack>
    );
};

export default SearchTypeList;