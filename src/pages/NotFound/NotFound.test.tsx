import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '.';

describe('NotFound Component', () => {
    it('renders the image with correct alt text', () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        );

        const image = screen.getByAltText('404 - Page Not Found');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/assets/images/404.webp');
    });

    it('renders the title', () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        );

        const title = screen.getByText('Oops! Page Not Found');
        expect(title).toBeInTheDocument();
    });

    it('renders the description', () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        );

        const description = screen.getByText(
            'The page you’re looking for doesn’t exist or has been moved.'
        );
        expect(description).toBeInTheDocument();
    });

    it('renders the button to go back home', () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        );

        const link = screen.getByRole('link', { name: /Go Back to Home/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/');
    });
});
