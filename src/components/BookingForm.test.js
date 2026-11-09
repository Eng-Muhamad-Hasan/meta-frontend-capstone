import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('allows selecting a reservation time from the custom dropdown', () => {
  render(
    <BookingForm
      availableTimes={['17:00', '18:00', '19:00']}
      submitForm={jest.fn()}
    />
  );

  fireEvent.click(screen.getByRole('button', { name: 'Choose time' }));
  fireEvent.click(screen.getByRole('option', { name: '19:00' }));

  expect(screen.getByRole('button', { name: 'Choose time: 19:00' })).toHaveTextContent('19:00');
});
