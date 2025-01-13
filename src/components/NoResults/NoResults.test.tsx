import { render, screen } from '@testing-library/react';
import NoResults from '.';

describe('NoResults', () => {
    it('renders the title correctly', () => {
        render(<NoResults />);
        expect(screen.getByText('No results found')).toBeInTheDocument();
    });

    it('renders the subtitle correctly', () => {
        render(<NoResults />);
        expect(screen.getByText('Use the search to discover something')).toBeInTheDocument();
    });
});
