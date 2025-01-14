import { Card, CardContent, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Favorite } from '@mui/icons-material';
import { removeFavorite, saveFavorite } from '../../../store/slices/favorites/asyncThunks';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store';
import { useState } from 'react';
import LoginModal from '../../Login/LoginModal';
import iconButtonColor from '../../../helpers/iconButtonColor/iconButtonColor';
import {Spotify} from '../../../types/spotify';
import {I_SpotifyTrackItem} from '../../../types/other';

interface I_TrackItem {
    item: I_SpotifyTrackItem;
}

const TrackItem: React.FC<I_TrackItem> = ({ item }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { accessToken } = useSelector((state: RootState) => state.auth);
    const [showLoginModal, setShowModal] = useState<boolean>(false);

    const handleFavorite = () => {
        if (!accessToken) {
            setShowModal(true);
            return;
        }
        if (item.isFavorite) {
            dispatch(removeFavorite({accessToken, type: 'tracks', ids: item.id}))
        } else {
            dispatch(saveFavorite({accessToken, type: 'tracks', ids: item.id}))
        }
    };

    return (
        <>
            <Card>
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box>
                        <Typography component="div" variant="h6">
                            {item.name}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{ color: 'text.secondary' }}
                        >
                            {/*@ts-ignore*/}
                            {item?.artists?.map((item) => item.name).join(', ')}
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton
                            aria-label="add to favorites"
                            color={iconButtonColor(!!item.isFavorite)}
                            onClick={handleFavorite}
                        >
                            <Favorite sx={{height: 24, width: 24}} />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
            {showLoginModal && <LoginModal />}
        </>
    );
};

export default TrackItem;
