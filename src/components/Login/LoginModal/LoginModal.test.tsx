import { render, screen } from '@testing-library/react';
import LoginModal from '.';

jest.mock('../../../API/authConfig', () => ({
    LOGIN_URL: 'https://mocked-login-url.com',
}));


describe('LoginModal', () => {
    it('renders the modal with title and description', () => {
        render(<LoginModal />);

        // Check if the title is rendered
        expect(screen.getByText('Action Required')).toBeInTheDocument();

        // Check if the description is rendered
        expect(screen.getByText('You should be logged in to add favorites')).toBeInTheDocument();
    });
});
