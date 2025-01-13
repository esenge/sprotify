import style from '../SearchTypeList.module.scss';
import { Chip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch, RootState} from '../../../store';
import { SpotifySearchType } from '../../../types/spotify';
import { setSearchType } from '../../../store/slices/search/searchSlice';

interface I_SearchTypeListItem {
    type: SpotifySearchType,
}

const SearchTypeListItem: React.FC<I_SearchTypeListItem> = ({
    type,
}) => {
    const dispatch = useDispatch<AppDispatch>();

    const { searchType } = useSelector((state: RootState) => state.search);

    const handleClick = () => {
        dispatch(setSearchType(type));
    };

    return (
        <Chip
            label={type}
            variant={searchType === type ? 'filled' : 'outlined' as 'filled' | 'outlined'}
            onClick={handleClick}
            className={style.SearchTypeItem}
            color="secondary"
        />
    )
};

export default SearchTypeListItem;