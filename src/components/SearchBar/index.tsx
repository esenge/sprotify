import { useState } from 'react';
import {InputAdornment, Paper, TextField} from '@mui/material';
import {Search} from '@mui/icons-material';
import {SpotifySearchType} from '../../types.ts';

interface Props {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
    const [inputVal, setInput] = useState('');

    const handleSearch = (value) => {
        console.log("value", value);
        onSearch(value.target.value);
    };

    return (
        // <Paper>
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
            />
        // </Paper>
        // <div>
        //     <input
        //         type="text"
        //         value={input}
        //         onChange={(e) => setInput(e.target.value)}
        //         placeholder="Search for tracks, albums, artists..."
        //     />
        //     <button onClick={handleSearch}>Search</button>
        // </div>
    );
};

export default SearchBar;
