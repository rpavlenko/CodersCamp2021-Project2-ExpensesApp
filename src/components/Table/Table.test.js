import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';

describe('Check if component is rendered', () => {
  test('Display the Table component', () => {
    render(<Table />);

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });
});

// describe('Check if values for expenses and incomes are rendered', () => {
//   test('Display expenses prop', () => {
//     const expenses = 300;
//
//     render(<Table expenses={expenses} />);
//
//     const expensesValue = screen.getByRole('row', { name: /Wydatki 300 zł/i });
//     expect(expensesValue).toBeInTheDocument();
//   });
//
//   test('Display incomes prop', () => {
//     const incomes = 800;
//
//     render(<Table incomes={incomes} />);
//
//     const incomesValue = screen.getByRole('row', { name: /Przychody 800 zł/i });
//     expect(incomesValue).toBeInTheDocument();
//   });
// });
//
// describe('Check if calculations return correct values', () => {
//   test('Should correctly calculate the balance with positive expenses and incomes values', () => {
//     render(<Table expenses={300} incomes={800} />);
//
//     const balance = screen.getByRole('row', { name: /Saldo 500 zł/i });
//     expect(balance).toHaveTextContent('500 zł');
//   });
//
//   test('Should correctly calculate the balance with negative expenses and positive incomes values', () => {
//     render(<Table expenses={-300} incomes={800} />);
//
//     const balance = screen.getByRole('row', { name: /Saldo 500 zł/i });
//     expect(balance).toHaveTextContent('500 zł');
//   });
//
//   test('Should correctly calculate the balance with negative expenses and negative incomes values', () => {
//     render(<Table expenses={-300} incomes={-800} />);
//
//     const balance = screen.getByRole('row', { name: /Saldo 0 zł/i });
//     expect(balance).toHaveTextContent('0 zł');
//   });
// });
