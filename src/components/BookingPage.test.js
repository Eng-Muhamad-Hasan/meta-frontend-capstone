import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

function renderBookingPage() {
  return render(
    <MemoryRouter initialEntries={['/booking']}>
      <Routes>
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </MemoryRouter>
  );
}

function completeReservation() {
  fireEvent.change(screen.getByLabelText('Choose date'), {
    target: { value: '2030-01-02' },
  });
  fireEvent.click(screen.getByRole('button', { name: 'Choose time' }));
  fireEvent.click(screen.getByRole('option', { name: '18:00' }));
  fireEvent.click(screen.getByRole('button', { name: 'Occasion' }));
  fireEvent.click(screen.getByRole('option', { name: 'Birthday' }));
}

afterEach(() => {
  delete window.fetchAPI;
  delete window.submitAPI;
  window.localStorage.clear();
});

test('loads availability for today and refreshes it with the selected date', () => {
  window.fetchAPI = jest.fn((date) => (
    date.getFullYear() === 2030 ? ['18:00'] : ['17:00']
  ));

  renderBookingPage();

  expect(window.fetchAPI).toHaveBeenCalledTimes(1);
  expect(window.fetchAPI.mock.calls[0][0]).toBeInstanceOf(Date);
  expect(screen.getByRole('button', { name: 'Choose time' })).toHaveTextContent('Choose time');

  fireEvent.change(screen.getByLabelText('Choose date'), {
    target: { value: '2030-01-02' },
  });

  expect(window.fetchAPI).toHaveBeenCalledTimes(2);
  expect(window.fetchAPI.mock.calls[1][0]).toEqual(new Date(2030, 0, 2));
  fireEvent.click(screen.getByRole('button', { name: 'Choose time' }));
  fireEvent.click(screen.getByRole('option', { name: '18:00' }));
  expect(screen.getByRole('button', { name: 'Choose time: 18:00' })).toBeInTheDocument();
});

test('disables the time dropdown and explains when the selected date has no available times', () => {
  window.fetchAPI = jest.fn(() => []);
  renderBookingPage();

  fireEvent.change(screen.getByLabelText('Choose date'), {
    target: { value: '2030-01-02' },
  });

  const timeDropdown = screen.getByRole('button', { name: 'Choose time' });
  expect(timeDropdown).toBeDisabled();
  expect(timeDropdown).toHaveTextContent('No available times');
});

test('submits the reservation and navigates only when the API succeeds', () => {
  window.fetchAPI = jest.fn(() => ['18:00']);
  window.submitAPI = jest.fn(() => true);
  renderBookingPage();

  completeReservation();
  fireEvent.click(screen.getByRole('button', { name: 'Make Your Reservation' }));

  expect(window.submitAPI).toHaveBeenCalledWith({
    date: '2030-01-02',
    time: '18:00',
    guests: '2',
    occasion: 'Birthday',
  });
  expect(JSON.parse(window.localStorage.getItem('little-lemon-reservations'))).toEqual([
    expect.objectContaining({
      date: '2030-01-02',
      time: '18:00',
      guests: '2',
      occasion: 'Birthday',
      status: 'Confirmed',
    }),
  ]);
  expect(screen.getByRole('heading', { name: 'Your reservation is booked.' })).toBeInTheDocument();
});

test('shows a submission failure and stays on the booking page when the API rejects it', () => {
  window.fetchAPI = jest.fn(() => ['18:00']);
  window.submitAPI = jest.fn(() => false);
  renderBookingPage();

  completeReservation();
  fireEvent.click(screen.getByRole('button', { name: 'Make Your Reservation' }));

  expect(screen.getByRole('alert')).toHaveTextContent('We could not complete your reservation');
  expect(screen.getByRole('heading', { name: 'Book a table' })).toBeInTheDocument();
});

test('reports an unavailable availability API instead of fabricating times', () => {
  renderBookingPage();

  expect(screen.getByRole('alert')).toHaveTextContent('booking service is unavailable');
  expect(screen.getByRole('button', { name: 'Choose time' })).toHaveTextContent('No available times');
});
