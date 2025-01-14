import { Box, Grid2, Typography } from '@mui/material';
import style from './NoResults.module.scss';

const NoResults: React.FC = () => {
    return (
        <Grid2 size={12}>
            <Box className={style.NoResults}>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                    No results found
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Use the search to discover something
                </Typography>
            </Box>
        </Grid2>
    )
};

export default NoResults;