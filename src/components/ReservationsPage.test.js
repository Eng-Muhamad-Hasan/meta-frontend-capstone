import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ReservationsPage from './ReservationsPage';

afterEach(() => {
  window.localStorage.clear();
});

test('shows saved reservations as cards with reservation details', () => {
  window.localStorage.setItem('little-lemon-reservations', JSON.stringify([
    {
      id: 'reservation-1',
      date: '2030-01-02',
      time: '18:00',
      guests: '2',
      occasion: 'Birthday',
      status: 'Confirmed',
    },
  ]));

  render(
    <MemoryRouter>
      <ReservationsPage />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: 'Your Reservations' })).toBeInTheDocument();
  expect(screen.getByRole('article')).toHaveTextContent('January 2, 2030');
  expect(screen.getByRole('article')).toHaveTextContent('18:00');
  expect(screen.getByRole('article')).toHaveTextContent('Birthday');
  expect(screen.getByRole('link', { name: 'Make a reservation' })).toHaveAttribute('href', '/booking');
});

test('shows a useful empty state when the user has no saved reservations', () => {
  render(
    <MemoryRouter>
      <ReservationsPage />
    </MemoryRouter>
  );

  expect(screen.getByRole('heading', { name: 'No reservations yet' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Book your first table' })).toHaveAttribute('href', '/booking');
});
