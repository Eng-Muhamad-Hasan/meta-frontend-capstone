import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getReservations } from '../utils/reservations';

function readReservations() {
  try {
    return { items: getReservations(), error: '' };
  } catch (error) {
    return { items: [], error: error.message };
  }
}

function formatReservationDate(date) {
  const [year, month, day] = date.split('-').map(Number);
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'long',
  }).format(new Date(year, month - 1, day));
}

function ReservationsPage() {
  const [reservationsState] = useState(readReservations);
  const { items, error } = reservationsState;

  return (
    <section className="reservations-page container">
      <header className="page-heading">
        <div>
          <p className="eyebrow">Your Little Lemon visits</p>
          <h1>Your Reservations</h1>
          <p>Review the reservations confirmed on this device.</p>
        </div>
        <Link to="/booking" className="primary-button">Make a reservation</Link>
      </header>

      {error ? <p className="form-error" role="alert">{error}</p> : null}

      {!error && items.length === 0 ? (
        <div className="empty-reservations">
          <span className="empty-reservations-icon" aria-hidden="true">◷</span>
          <h2>No reservations yet</h2>
          <p>Your confirmed bookings will appear here.</p>
          <Link to="/booking" className="secondary-button">Book your first table</Link>
        </div>
      ) : null}

      {items.length > 0 ? (
        <div className="reservation-grid">
          {items.map((reservation) => (
            <article key={reservation.id} className="reservation-card">
              <div className="reservation-card-header">
                <span className="reservation-status">
                  <span aria-hidden="true" /> {reservation.status}
                </span>
                <span className="reservation-occasion">{reservation.occasion}</span>
              </div>
              <h2>{formatReservationDate(reservation.date)}</h2>
              <dl className="reservation-details">
                <div>
                  <dt>Time</dt>
                  <dd>{reservation.time}</dd>
                </div>
                <div>
                  <dt>Guests</dt>
                  <dd>{reservation.guests}</dd>
                </div>
              </dl>
              <Link to="/booking" className="reservation-card-link">Plan another visit <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default ReservationsPage;
