import { Link, useLocation } from 'react-router-dom';

function ConfirmedBooking() {
  const location = useLocation();
  const booking = location.state?.booking;
  const { storageError } = location.state || {};

  return (
    <section className="confirmation-page container">
      <div className="confirmation-card">
        <p className="eyebrow">Confirmed</p>
        <h1>Your reservation is booked.</h1>
        {storageError ? <p className="form-error" role="status">{storageError}</p> : null}
        {booking ? (
          <ul className="booking-summary">
            <li><strong>Date:</strong> {booking.date}</li>
            <li><strong>Time:</strong> {booking.time}</li>
            <li><strong>Guests:</strong> {booking.guests}</li>
            <li><strong>Occasion:</strong> {booking.occasion}</li>
          </ul>
        ) : null}
        <div className="confirmation-actions">
          <Link to="/reservations" className="primary-button">View reservations</Link>
          <Link to="/" className="text-link">Back to homepage</Link>
        </div>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
