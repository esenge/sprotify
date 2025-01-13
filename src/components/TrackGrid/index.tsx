import { Box, Grid2 } from '@mui/material';
import TrackItem from './TrackItem';

interface Props {
    items: any[];
}

const TrackGrid: React.FC<Props> = ({ items }) => {
    return (
        <Box>
            <Grid2 container spacing={2}>
                {items?.map((item) => (
                    <Grid2 key={item.id} size={6}>
                        <TrackItem item={item} />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
};

export default TrackGrid;
