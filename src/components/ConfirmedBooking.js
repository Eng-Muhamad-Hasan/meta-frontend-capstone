import { Link, useLocation } from 'react-router-dom';

function ConfirmedBooking() {
  const location = useLocation();
  const booking = location.state?.booking;

  return (
    <section className="confirmation-page container">
      <div className="confirmation-card">
        <p className="eyebrow">Confirmed</p>
        <h1>Your reservation is booked.</h1>
        {booking ? (
          <ul className="booking-summary">
            <li><strong>Date:</strong> {booking.date}</li>
            <li><strong>Time:</strong> {booking.time}</li>
            <li><strong>Guests:</strong> {booking.guests}</li>
            <li><strong>Occasion:</strong> {booking.occasion}</li>
          </ul>
        ) : null}
        <Link to="/" className="primary-button">Back to homepage</Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
