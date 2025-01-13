import {Box, Grid2, Typography} from '@mui/material';

const NoResults: React.FC = () => {
    return (
        <Grid2 item size={12}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center',
                    py: 4,
                }}
            >
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