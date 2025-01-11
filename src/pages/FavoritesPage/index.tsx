import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useEffect } from 'react';
import { fetchSavedAlbums } from '../../store/slices/favorites/asyncThunks.ts';
import { Button } from '@mui/material';
import { LOGIN_URL } from '../../API/authConfig.ts';

const FavoritesPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { albums } = useSelector((state: RootState) => state.favorites);

    const { accessToken } = useSelector((state: RootState) => state.auth);

    const handleLogin = () => {
        window.location.href = LOGIN_URL;
    };

    useEffect(() => {
        if (accessToken) {
            dispatch(fetchSavedAlbums(accessToken));
        }
    }, [accessToken]);

    return (
        <div>
            <h1>Favorites</h1>

            {!accessToken && <Button onClick={handleLogin}>Log in</Button>}
            {accessToken && (
                <ul>
                    {albums.map((album: any) => (
                        <li key={album.album.id}>{album.album.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FavoritesPage;
