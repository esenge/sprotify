import { ImageListItem, ImageListItemBar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Favorite } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite, saveFavorite } from '../../../store/slices/favorites/asyncThunks';
import { AppDispatch, RootState } from '../../../store';
import { useState } from 'react';
import LoginModal from '../../Login/LoginModal';
import iconButtonColor from '../../../helpers/iconButtonColor/iconButtonColor';
import { I_SpotifyAlbumItem } from '../../../types/other';

interface I_AlbumItem {
    item: I_SpotifyAlbumItem;
}

const AlbumItem: React.FC<I_AlbumItem> = ({
    item,
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const { accessToken } = useSelector((state: RootState) => state.auth);
    const [showLoginModal, setShowModal] = useState<boolean>(false);

    const handleFavorite = () => {
        if (!accessToken) {
            setShowModal(true);
            return;
        }
        if (item.isFavorite) {
            dispatch(removeFavorite({accessToken, type: 'albums', ids: item.id}))
        } else {
            dispatch(saveFavorite({accessToken, type: 'albums', ids: item.id}))
        }
    };

    return (
        <>
            <ImageListItem>
                <img
                    srcSet={`${item.images[0].url}`}
                    src={`${item.images[0].url}`}
                    alt={item.name}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={item.name}
                    position="below"
                    actionIcon={
                        <IconButton
                            aria-label="add to favorites"
                            color={iconButtonColor(!!item.isFavorite)}
                            onClick={handleFavorite}
                        >
                            <Favorite sx={{height: 24, width: 24}} />
                        </IconButton>
                    }
                />
            </ImageListItem>
            {showLoginModal && <LoginModal />}
        </>
    );
};

export default AlbumItem;