import style from '../SearchTypeList.module.scss';
import {Chip} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {setActiveType} from '../../../store/slices/searchTypeSlice.ts';
import {SpotifySearchType} from '../../../types/spotify.ts';

interface I_SearchTypeListItem {
    type: SpotifySearchType | 'all',
}

const SearchTypeListItem: React.FC<I_SearchTypeListItem> = ({
    type,
}) => {
    const dispatch = useDispatch();

    const activeType = useSelector((state: RootState) => state.searchType.activeType);

    const handleClick = () => {
        dispatch(setActiveType(type));
    };

    return (
        <Chip
            label={type}
            variant={activeType === type ? 'filled' : 'outlined' as 'filled' | 'outlined'}
            onClick={handleClick}
            className={style.SearchTypeItem}
            color="success"
        />
    )
};

export default SearchTypeListItem;