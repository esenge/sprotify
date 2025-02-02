import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Grid2 } from '@mui/material';
import GenericGrid from '../GenericGrid';
import NoResults from '../NoResults';

const SearchResultsGrid: React.FC = () => {
    const { results, query } = useSelector((state: RootState) => state.search);
    return (
        <Grid2 size={12}>
            {results && query ? Object.keys(results).map((key) => (
                <div key={key}>
                    <GenericGrid items={results[key]?.items} type={key} />
                </div>
            )): <NoResults />}
        </Grid2>
    );
};

export default SearchResultsGrid;