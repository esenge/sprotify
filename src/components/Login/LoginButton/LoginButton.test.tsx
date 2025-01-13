import { render, screen, fireEvent } from '@testing-library/react';
import LoginButton from '.';
import { LOGIN_URL } from '../../../API/authConfig';

// Mock the module that contains LOGIN_URL
jest.mock('../../../API/authConfig', () => ({
    LOGIN_URL: 'https://example.com/login-test-url',
}));

describe('LoginButton Component', () => {
    it('renders the button with correct text', () => {
        render(<LoginButton />);

        const button = screen.getByRole('button', { name: /log in/i });
        expect(button).toBeInTheDocument();
    });

    it('redirects to the correct URL on click', () => {
        delete window.location;
        window.location = { href: '' } as Location;

        render(<LoginButton />);

        const button = screen.getByRole('button', { name: /log in/i });
        fireEvent.click(button);

        expect(window.location.href).toBe(LOGIN_URL);
    });
});
