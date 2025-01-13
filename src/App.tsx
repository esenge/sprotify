import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import { useGlobalAuth } from './hooks/useGlobalAuth';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
    useGlobalAuth();

    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
