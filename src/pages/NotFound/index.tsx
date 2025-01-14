import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import style from './NotFound.module.scss';

const NotFound: React.FC = () => {
    return (
        <Box className={style.NotFoundContainer}>
            <img
                src="/assets/images/404.webp"
                alt="404 - Page Not Found"
                style={{ maxWidth: '400px', width: '100%', marginBottom: '20px' }}
            />
            <Typography variant="h4" gutterBottom>
                Oops! Page Not Found
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
                The page you’re looking for doesn’t exist or has been moved.
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                component={Link}
                to="/"
            >
                Go Back to Home
            </Button>
        </Box>
    );
};

export default NotFound;
