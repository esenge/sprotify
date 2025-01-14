import { Button } from '@mui/material';
import { LOGIN_URL } from '../../../API/authConfig';

const LoginButton: React.FC = () => {
    const handleLogin = () => {
        window.location.href = LOGIN_URL;
    };

    return (
        <Button variant="contained" color="secondary" onClick={handleLogin}>
            Log In
        </Button>
    )
};

export default LoginButton;