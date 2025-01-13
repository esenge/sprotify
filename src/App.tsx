import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import { useGlobalAuth } from './hooks/useGlobalAuth';
import NotFound from './pages/NotFound';
import { Container, Grid2 } from '@mui/material';
import NavBar from './components/NavBar';

const App: React.FC = () => {
    useGlobalAuth();

    return (
        <Grid2 container spacing={3}>
            <Grid2 size={12}>
                <NavBar />
            </Grid2>
            <Container>
                <Grid2 size={12}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Grid2>
            </Container>
        </Grid2>
    );
};

export default App;
