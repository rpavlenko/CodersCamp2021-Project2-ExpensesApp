import { render, screen } from '@testing-library/react';
import LimitPage from './LimitPage';

describe('Check if view is rendered', () => {
  it('Should render Limit view without crashing', () => {
    render(<LimitPage />);
    screen.getByRole('heading', { name: 'Ustaw limit miesięczny' });
  });
});
