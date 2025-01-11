import {ImageListItem, ImageListItemBar} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import {Favorite} from '@mui/icons-material';

interface I_AlbumItem {
    item: any;
}

const AlbumItem: React.FC<I_AlbumItem> = ({
    item,
}) => {
    const handleFavorite = () => {
        // todo: try to move to toogle service.
        if (item.isFavorite) {
            console.log("remove");
        } else {
            console.log("add");
        }
    };

    return (
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

    );
};

export default AlbumItem;