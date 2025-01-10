import { Stack } from '@mui/material';
import { ALL_SPOTIFY_SEARCH_TYPES } from '../../constants.ts';
import SearchTypeListItem from './SearchTypeListItem';

const SearchTypeList: React.FC = () => {
    return (
        <Stack direction="row" spacing={1} justifyContent="center">
            {['all', ...ALL_SPOTIFY_SEARCH_TYPES].map((type) => (
                <SearchTypeListItem type={type} key={type} />
            ))}
        </Stack>
    );
};

export default SearchTypeList;