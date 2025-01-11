import SearchBar from '../../components/SearchBar';
import { useEffect } from 'react';
import { Container, Grid2 } from '@mui/material';
import SearchTypeList from '../../components/SearchTypeList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ALL_SPOTIFY_SEARCH_TYPES } from '../../constants.ts';
import arrayToCommaSeparatedString from '../../helpers/arrayToCommaSeparatedString/arrayToCommaSeparatedString.ts';
import SearchResultsGrid from '../../components/SearchResultsGrid';
import { fetchSearchResults } from '../../store/slices/search/asyncThunks..ts';

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const { searchType, query } = useSelector((state: RootState) => state.search);

    useEffect(() => {
        const type = searchType === 'all' ? arrayToCommaSeparatedString(ALL_SPOTIFY_SEARCH_TYPES, ',') : searchType;
        dispatch(fetchSearchResults({ query, type }));
    }, [searchType, query]);

    return (
        <Container>
            <Grid2 container spacing={2}>
                <Grid2 size={12}>
                    <h1>Spotify Search</h1>
                </Grid2>
                <Grid2 size={12}>
                    <SearchBar />
                </Grid2>
                <Grid2 size={12}>
                    <SearchTypeList />
                </Grid2>
                <Grid2 size={12}>
                    <SearchResultsGrid />
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default HomePage;