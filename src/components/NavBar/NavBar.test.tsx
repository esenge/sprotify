import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '.';

describe('NavBar Component', () => {
    it('renders the navigation bar with all links', () => {
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );

        expect(screen.getByText('Šprotify')).toBeInTheDocument();

        expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/');
        expect(screen.getByRole('link', { name: /favorites/i })).toHaveAttribute('href', '/favorites');
        expect(screen.getByRole('link', { name: /profile/i })).toHaveAttribute('href', '/profile');
    });

    it('renders links that are accessible', () => {
        render(
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        );

        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(3);
        links.forEach((link) => {
            expect(link).toBeVisible();
            expect(link).toHaveAccessibleName();
        });
    });
});
