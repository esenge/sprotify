import {ImageListItem, ImageListItemBar} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import {Favorite} from '@mui/icons-material';
import {useDispatch, useSelector} from 'react-redux';
import {removeFavorite, saveFavorite} from '../../../store/slices/favorites/asyncThunks';
import {AppDispatch, RootState} from '../../../store';
import {useEffect, useState} from 'react';
import LoginModal from '../../Login/LoginModal';

interface I_AlbumItem {
    item: any;
}

const AlbumItem: React.FC<I_AlbumItem> = ({
    item,
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const { accessToken } = useSelector((state: RootState) => state.auth);
    const [showLoginModal, setShowModal] = useState<boolean>(false);
    const handleFavorite = () => {
        if (!accessToken) {
            console.log("JĀRĀDA MODĀLAIS");
            setShowModal(true);
            return;
        }
        // todo: try to move to toogle service.
        if (item.isFavorite) {
            dispatch(removeFavorite({accessToken, type: 'albums', ids: item.id}))
        } else {
            dispatch(saveFavorite({accessToken, type: 'albums', ids: item.id}))
        }
    };

    return (
        <>
            <ImageListItem key={item.id}>
                <img
                    srcSet={`${item.images[0].url}`}
                    src={`${item.images[0].url}`}
                    alt={item.name}
                    loading="lazy"
                />
                <ImageListItemBar
                    title={item.name}
                    subtitle={<span>by: {item.release_date}</span>}
                    position="below"
                    actionIcon={
                        <IconButton
                            aria-label="add to favorites"
                            color={item.isFavorite ? 'error' : 'default'}
                            onClick={handleFavorite}
                        >
                            <Favorite sx={{height: 24, width: 24}} />
                            {item.isFavorite}
                        </IconButton>
                    }
                />
            </ImageListItem>
            {showLoginModal && <LoginModal />}
        </>
    );
};

export default AlbumItem;