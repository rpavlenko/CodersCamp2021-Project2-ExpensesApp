import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app page title', () => {
  // render(<App />);
  const linkElement = screen.getByText(/Expenses App/i);
  expect(linkElement).toBeInTheDocument();
});
