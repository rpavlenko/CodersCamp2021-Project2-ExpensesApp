import { render, screen } from '@testing-library/react';
import Limit from './Limit';

describe('Check if component is rendered', () => {
  it('Should render Limit component without crashing', () => {
    render(<Limit />);
    expect(
      screen.getByText((content, element) =>
        content.startsWith('Przekroczyłeś limit wydatków w kategorii'),
      ),
    ).toBeInTheDocument();
  });
});
