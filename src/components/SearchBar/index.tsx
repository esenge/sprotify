import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../store/slices/search/searchSlice.ts';

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();

    const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setQuery(e.target.value));
    };

    return (
        <TextField
            id="input-with-icon-textfield"
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                },
            }}
            variant="outlined"
            onChange={handleSearch}
            fullWidth={true}
        />
    );
};

export default SearchBar;
