import ListItem from '../ListItem';
import style from './List.module.scss';
import {Box, Grid2} from '@mui/material';

interface Props {
    items: any[];
}

const List: React.FC<Props> = ({ items }) => {
    const handleFavorite = (item: any) => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        localStorage.setItem('favorites', JSON.stringify([...favorites, item]));
        alert(`${item.name} added to favorites!`);
    };

    return (
        <Box className={style.List}>
            <Grid2 container spacing={2}>
                {items.map((item) => (
                    <Grid2 key={item.id} xs={12} sm={6} md={4} lg={3} item>
                        <ListItem item={item} onFavorite={() => handleFavorite(item)} />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    );
};

export default List;
