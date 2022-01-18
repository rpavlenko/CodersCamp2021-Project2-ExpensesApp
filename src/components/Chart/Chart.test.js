import { render, screen } from '@testing-library/react';
import Chart from './Chart';

describe('Check if component is rendered', () => {
  it('Should render Chart component without crashing', () => {
    render(<Chart />);

    const title = screen.getByText((content) => content.startsWith('Wykres'));
    const chart = screen.getByTestId('chart');

    expect(title).toBeInTheDocument();
    expect(chart).toBeInTheDocument();
  });
});
