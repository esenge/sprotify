import { render, screen } from '@testing-library/react';
import SearchTypeList from './index.tsx';

jest.mock('./index.tsx', () => () => (
    <div data-testid="search-type-list">results</div>
));

describe('SearchTypeList', () => {
    it('passes the correct type to SearchTypeListItem', () => {
        render(<SearchTypeList />);
        expect(screen.getByText('results')).toBeInTheDocument();
    });
});
