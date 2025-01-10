import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { Spotify } from '../../types/spotify.ts';

interface I_AlbumGrid {
    items: Array<Spotify.Album>;
}

const AlbumGrid: React.FC<I_AlbumGrid> = ({
    items
}) => {
    return (
        <ImageList cols={4}>
            {items.map((item) => (
                <ImageListItem key={item.id}>
                    <img
                        srcSet={item.images[0].url}
                        src={item.images[0].url}
                        alt={item.name}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.name}
                        subtitle={item.release_date}
                        position="below"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};

export default AlbumGrid;