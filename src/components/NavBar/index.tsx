import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import style from './NavBar.module.scss';

const NavBar: React.FC = () => (
    <AppBar position="static" color="secondary">
        <Toolbar>
            <Typography variant="h6" className={style.Title}>Šprotify</Typography>
            <Box>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
                <Button color="inherit" component={Link} to="/profile">Profile</Button>
            </Box>
        </Toolbar>
    </AppBar>
);

export default NavBar;
