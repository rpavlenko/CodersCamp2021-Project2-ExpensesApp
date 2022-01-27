import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('Check if view is rendered', () => {
  it('Should render LoginPage view without crashing', () => {
    render(<LoginPage />);
    screen.getByRole('heading', { name: 'Logowanie:' });
  });
});
