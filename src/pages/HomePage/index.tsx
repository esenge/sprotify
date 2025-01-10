import {searchSpotify} from '../../services/spotifyApi.ts';
import SearchBar from '../../components/SearchBar';
import {useState} from 'react';
import List from '../../components/List';
import {Container, Grid2} from '@mui/material';
import SearchTypeList from '../../components/SearchTypeList';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {ALL_SPOTIFY_SEARCH_TYPES} from '../../constants.ts';
import arrayToCommaSeparatedString from '../../helpers/arrayToCommaSeparatedString/arrayToCommaSeparatedString.ts';
import {fetchSearchResults} from '../../store/slices/searchResultsSlice.ts';

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const activeType = useSelector((state: RootState) => state.searchType.activeType);
    const [results, setResults] = useState<any[]>([]);
    const [query, setQuery] = useState('');

    const handleSearch = async (searchQuery: string) => {
        const type = activeType === 'all' ? arrayToCommaSeparatedString(ALL_SPOTIFY_SEARCH_TYPES, ',') : activeType;
        setQuery(searchQuery);
        const data = await searchSpotify(searchQuery, type);
        // setResults(data.tracks.items);

        dispatch(fetchSearchResults({ query: searchQuery, type }));

    };

    return (
        <Container>
            <Grid2 container spacing={2}>
                {/*<SpotifyAuth />*/}
                <Grid2 size={12}>
                    <h1>Spotify Search</h1>
                </Grid2>
                <Grid2 size={12}>
                    <SearchBar onSearch={handleSearch} />
                </Grid2>
                <Grid2 size={12}>
                    <SearchTypeList />
                </Grid2>
                <Grid2 size={12}>
                    {results?.length > 0 && <List items={results}/>}
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default HomePage;