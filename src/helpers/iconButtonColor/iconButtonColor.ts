const iconButtonColor = (isFavorite: boolean): 'error' | 'default' => {
    return isFavorite ? 'error' : 'default';
}

export default iconButtonColor;