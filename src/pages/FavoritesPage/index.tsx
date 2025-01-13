import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useEffect } from 'react';
import { fetchSavedAlbums} from '../../store/slices/favorites/asyncThunks';
import { Button } from '@mui/material';
import { LOGIN_URL } from '../../API/authConfig';
import LoginButton from '../../components/Login/LoginButton';

const FavoritesPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { albums } = useSelector((state: RootState) => state.favorites);

    const { accessToken } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (accessToken) {
            dispatch(fetchSavedAlbums({ accessToken, type: 'albums' }));
        }
    }, [accessToken]);

    return (
        <div>
            <h1>Favorites</h1>

            {!accessToken && <LoginButton />}
            {accessToken && (
                <ul>
                    {albums.map((album: any) => (
                        <li key={album.album.id}>
                            {album.album.name}
                            {album.isFavorite && <p className="favorite-badge">My Favorite</p>}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FavoritesPage;
