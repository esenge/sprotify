import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';

const App: React.FC = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </div>
    );
};

export default App;
