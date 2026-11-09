import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes, submitForm as submitBooking } from '../utils/bookingUtils';

function BookingPage() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(
    (state, action) => {
      if (!action.date) {
        return state;
      }
      return updateTimes(action.date);
    },
    initializeTimes()
  );

  const handleDateChange = (event) => {
    dispatch({ date: event.target.value });
  };

  const handleSubmit = (formData) => {
    const success = submitBooking(formData);
    if (success) {
      navigate('/booking/confirmed', { state: { booking: formData } });
    }
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
          submitForm={handleSubmit}
          onDateChange={handleDateChange}
        />
      </div>
    </section>
  );
}

export default BookingPage;
