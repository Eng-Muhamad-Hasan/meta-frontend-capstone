import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Little Lemon homepage', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /little lemon/i })).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: /primary navigation/i })).toHaveTextContent('Reservations');
});
