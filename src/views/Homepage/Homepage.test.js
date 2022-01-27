import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';

describe('Check if view is rendered', () => {
  it('Should render Homepage view without crashing', () => {
    render(<Homepage />);
    screen.getByRole('heading', { name: 'Odzyskaj kontrolę nad wydatkami!' });
  });
});
