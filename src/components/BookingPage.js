import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes, submitForm as submitBooking } from '../utils/bookingUtils';
import { saveReservation } from '../utils/reservations';

function initializeBookingState() {
  try {
    return { availableTimes: initializeTimes(), error: '' };
  } catch (error) {
    return { availableTimes: [], error: error.message };
  }
}

function bookingReducer(state, action) {
  if (!action.date) {
    return state;
  }

  try {
    return { availableTimes: updateTimes(action.date), error: '' };
  } catch (error) {
    return { ...state, error: error.message };
  }
}

function BookingPage() {
  const navigate = useNavigate();
  const [{ availableTimes, error }, dispatch] = useReducer(
    bookingReducer,
    undefined,
    initializeBookingState
  );

  const handleDateChange = (event) => {
    dispatch({ date: event.target.value });
  };

  const handleSubmit = (formData) => {
    const success = submitBooking(formData);
    if (success) {
      let savedReservation;
      let storageError = '';
      try {
        savedReservation = saveReservation(formData);
      } catch (error) {
        storageError = 'Your booking was confirmed, but could not be saved to this device.';
      }
      navigate('/booking/confirmed', {
        state: { booking: formData, savedReservation, storageError },
      });
    }
    return success;
  };

  return (
    <section className="booking-page container">
      <div className="booking-copy">
        <p className="eyebrow">Reservations</p>
        <h1>Book a table</h1>
        <p>Reserve your next Little Lemon dining experience for an evening of Mediterranean flavor.</p>
      </div>

      <div className="booking-panel">
        <BookingForm
          availableTimes={availableTimes}
          availabilityError={error}
          submitForm={handleSubmit}
          onDateChange={handleDateChange}
        />
      </div>
    </section>
  );
}

export default BookingPage;
