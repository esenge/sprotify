import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                textAlign: 'center',
                backgroundColor: '#f7f7f7',
                padding: 4,
            }}
        >
            <img
                src="/assets/images/404.webp"
                alt="404 - Page Not Found"
                style={{ maxWidth: '400px', width: '100%', marginBottom: '20px' }}
            />
            <Typography variant="h4" gutterBottom>
                Oops! Page Not Found
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 3 }}>
                The page you’re looking for doesn’t exist or has been moved.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/"
                sx={{
                    textTransform: 'none',
                    fontWeight: 'bold',
                    paddingX: 4,
                }}
            >
                Go Back to Home
            </Button>
        </Box>
    );
};

export default NotFound;
