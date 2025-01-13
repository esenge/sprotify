import iconButtonColor from './iconButtonColor';

describe('helpers/iconButtonColor', () => {
    it('returns "error" when isFavorite is true', () => {
        const result = iconButtonColor(true);
        expect(result).toBe('error');
    });

    it('returns "default" when isFavorite is false', () => {
        const result = iconButtonColor(false);
        expect(result).toBe('default');
    });
});
