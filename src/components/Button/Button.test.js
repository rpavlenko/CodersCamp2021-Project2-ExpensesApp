import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('button', () => {
  test('if renders properly in the document', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
