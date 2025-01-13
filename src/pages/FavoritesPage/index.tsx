import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useEffect, useState} from 'react';
import { fetchSavedItems} from '../../store/slices/favorites/asyncThunks';
import LoginButton from '../../components/Login/LoginButton';
import {Box, Grid2, Tab, Tabs, Typography} from '@mui/material';
import AlbumGrid from '../../components/AlbumGrid';
import TrackGrid from '../../components/TrackGrid';

const FavoritesPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { albums, tracks } = useSelector((state: RootState) => state.favorites);
    const { accessToken } = useSelector((state: RootState) => state.auth);
    const [value, setValue] = useState('albums');

    useEffect(() => {
        if (accessToken) {
            dispatch(fetchSavedItems({ accessToken, type: value }));
        }
    }, [accessToken, value]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    if (!accessToken) {
        return (
            <Grid2 container size={12} spacing={3}>
                <Grid2 container size={12} spacing={2} direction="column">
                    <Grid2 item>
                        <Typography variant="h5">
                            Your Favorite Items
                        </Typography>
                    </Grid2>
                    {!accessToken && <>
                        <Grid2 item>
                            <Typography variant="body1" color="textSecondary">
                                Log in to view and manage your favorites
                            </Typography>
                        </Grid2>
                    </>}
                </Grid2>
                <LoginButton />
            </Grid2>
        )
    }

    return (
        <Grid2 container size={12} spacing={3}>
            <Grid2 container size={12} spacing={2} direction="column">
                <Grid2 item>
                    <Typography variant="h5">
                        Your Favorite Items
                    </Typography>
                </Grid2>
            </Grid2>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="favorite tabs"
                >
                    <Tab value="albums" label="Albums" />
                    <Tab value="tracks" label="Songs" />
                </Tabs>
            </Box>
            {value === 'albums' && (
                <AlbumGrid
                    items={albums
                        ?.filter((item) => item?.album)
                        .map((item) => ({
                            ...item.album,
                            isFavorite: true,
                        }))}
                />
            )}
            {value === 'tracks' && (
                <TrackGrid
                    items={tracks
                        ?.filter((item) => item?.track)
                        .map((item) => ({
                            ...item.track,
                            isFavorite: true,
                        }))}
                />
            )}
        </Grid2>
    );
};

export default FavoritesPage;
