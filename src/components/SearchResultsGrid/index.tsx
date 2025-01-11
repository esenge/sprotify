import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {Grid2, Typography} from '@mui/material';
import List from '../List';
import AlbumGrid from '../AlbumGrid';

const SearchResultsGrid: React.FC = () => {
    const { results } = useSelector((state: RootState) => state.search);
    const { favoriteAlbumIds } = useSelector((state: RootState) => state.favorites);

    console.log("results", results);
    console.log("favoriteAlbumIds", favoriteAlbumIds);

    const renderContent = (key: string) => {
        switch (key) {
            case 'albums':
                return <AlbumGrid items={results[key]?.items} />
            // case 'artists':
            // case 'audiobooks':
            // case 'episodes':
            // case 'playlists':
            // case 'shows':
            case 'tracks':
                return <List items={results[key]?.items} />
        }
    }

    return (
        <Grid2 size={12}>
            {results ? Object.keys(results).map((key) => (
                <div>
                    <Typography variant="h5">
                        {key}
                    </Typography>
                    { renderContent(key) }
                </div>
            )): <div>No results</div>}
        </Grid2>
    );
};

export default SearchResultsGrid;