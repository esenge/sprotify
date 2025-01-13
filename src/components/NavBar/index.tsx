import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => (
    <AppBar position="static" color="secondary">
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>Šprotify</Typography>
            <Box>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
                <Button color="inherit" component={Link} to="/profile">Profile</Button>
            </Box>
        </Toolbar>
    </AppBar>
);

export default NavBar;
