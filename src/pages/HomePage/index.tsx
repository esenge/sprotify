import SearchBar from '../../components/SearchBar';
import { useEffect } from 'react';
import { Grid2, Typography, Box } from '@mui/material';
import SearchTypeList from '../../components/SearchTypeList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import SearchResultsGrid from '../../components/SearchResultsGrid';
import { fetchSearchResults } from '../../store/slices/search/asyncThunks';

const HomePage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { searchType, query } = useSelector((state: RootState) => state.search);

    useEffect(() => {
        if (query) {
            dispatch(fetchSearchResults({ query, type: searchType }));
        }
    }, [searchType, query, dispatch]);

    return (
        <Grid2 container size={12} spacing={3}>
            <Grid2 container size={12} justifyContent="center">
                <Typography variant="h5">
                    Discover and explore your favorite tracks, albums, and artists.
                </Typography>
            </Grid2>
            <Grid2 container size={12} spacing={3} justifyContent="center">
                <SearchBar />
                <SearchTypeList />
                <SearchResultsGrid />
            </Grid2>
        </Grid2>
    );
};

export default HomePage;
