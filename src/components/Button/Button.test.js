import { render, screen } from '@testing-library/react';
import {
  PrimaryButton,
  ButtonWydatki,
  ButtonPrzychody,
  IconButton,
} from './Button';

describe('button', () => {
  test('if renders properly in the document', () => {
    render(<PrimaryButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});

describe('button', () => {
  test('if renders properly in the document', () => {
    render(<ButtonWydatki />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});

describe('button', () => {
  test('if renders properly in the document', () => {
    render(<ButtonPrzychody />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});

describe('button', () => {
  test('if renders properly in the document', () => {
    render(<IconButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
