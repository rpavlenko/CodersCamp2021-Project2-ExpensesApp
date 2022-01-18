import { render, screen } from '@testing-library/react';
import Alert from './Alert';

describe('Check if component is rendered', () => {
  it('Should render Alert component without crashing', () => {
    render(<Alert />);
    expect(
      screen.getByText((content, element) =>
        content.startsWith('Przekroczyłeś limit wydatków w kategorii'),
      ),
    ).toBeInTheDocument();
  });
});
