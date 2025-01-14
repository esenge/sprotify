import { useState } from 'react';
import { InputAdornment, TextField, Button, Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../store/slices/search/searchSlice';
import style from './SearchBar.module.scss';

const SearchBar: React.FC = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = () => {
        dispatch(setQuery(searchTerm));
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearchSubmit();
        }
    };

    return (
        <Box className={style.SearchBarContainer}>
            <TextField
                id="input-with-icon-textfield"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                fullWidth={true}
                onKeyDown={handleKeyDown}
            />
            <Button
                variant="contained"
                color="secondary"
                onClick={handleSearchSubmit}
                className={style.Button}
            >
                Search
            </Button>
        </Box>
    );
};

export default SearchBar;
