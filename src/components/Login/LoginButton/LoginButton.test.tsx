import { render, screen } from '@testing-library/react';
import LoginButton from '.';

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
});
