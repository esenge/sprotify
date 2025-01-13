import SearchBar from '../../components/SearchBar';
import { useEffect } from 'react';
import { Container, Grid2 } from '@mui/material';
import SearchTypeList from '../../components/SearchTypeList';
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import SearchResultsGrid from '../../components/SearchResultsGrid';
import { fetchSearchResults } from '../../store/slices/search/asyncThunks';

const HomePage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { searchType, query } = useSelector((state: RootState) => state.search);

    useEffect(() => {
        dispatch(fetchSearchResults({ query, type: searchType }));
    }, [searchType, query]);

    return (
        <Container>
            <Grid2 container spacing={2}>
                <Grid2 size={12}>
                    <h1>Šprotify</h1>
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