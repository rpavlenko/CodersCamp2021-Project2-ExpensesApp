import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('component render', () => {
  test('render Header component', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
});
