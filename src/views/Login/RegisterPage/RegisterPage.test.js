import { render, screen } from '@testing-library/react';
import RegisterPage from './RegisterPage';

describe('Check if view is rendered', () => {
  it('Should render RegisterPage view without crashing', () => {
    render(<RegisterPage />);
    screen.getByRole('heading', { name: 'Rejestracja:' });
  });
});
