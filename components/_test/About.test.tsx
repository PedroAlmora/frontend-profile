import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

test('renders About page correctly', () => {
  render(<About />);
  expect(screen.getByText('Sobre Mí')).toBeInTheDocument();
});
