import { ImageList } from '@mui/material';
import { Spotify } from '../../types/spotify';
import AlbumItem from './AlbumItem';

interface I_AlbumGrid {
    items: Array<Spotify.Album>;
}

const AlbumGrid: React.FC<I_AlbumGrid> = ({
    items,
}) => {
    return (
        <ImageList cols={5}>
            {items?.map((item) => (
                <AlbumItem item={item} key={item.id} />
            ))}
        </ImageList>
    );
};

export default AlbumGrid;