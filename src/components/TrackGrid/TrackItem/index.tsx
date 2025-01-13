import {Card, CardContent, Typography} from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import * as React from 'react';
import {Favorite, PlayArrow} from '@mui/icons-material';

interface Props {
    item: any;
}

const TrackItem: React.FC<Props> = ({ item }) => {
    const handleFavorite = (item: any) => {

    };

    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        {item.name}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        {item?.artists?.map((item) => item.name).join(', ')}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    {item.is_playable
                        && (
                            <IconButton aria-label="play/pause">
                                <PlayArrow sx={{height: 24, width: 24}} />
                            </IconButton>
                        )
                    }
                    <IconButton
                        aria-label="add to favorites"
                        color={item.isFavorite ? 'error' : 'default'}
                        onClick={() => handleFavorite(item)}
                    >
                        <Favorite sx={{height: 24, width: 24}} />
                    </IconButton>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 150 }}
                image={item.album.images[0].url}
                alt={item.album.images[0].alt}
            />
        </Card>

    );
};

export default TrackItem;
