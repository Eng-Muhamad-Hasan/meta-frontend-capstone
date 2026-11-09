const STORAGE_KEY = 'little-lemon-reservations';

export function getReservations() {
  const savedReservations = window.localStorage.getItem(STORAGE_KEY);
  if (!savedReservations) {
    return [];
  }

  const reservations = JSON.parse(savedReservations);
  if (!Array.isArray(reservations)) {
    throw new Error('Saved reservations could not be read. Clear this site’s stored data and try again.');
  }

  return reservations;
}

export function saveReservation(details) {
  const reservation = {
    ...details,
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    status: 'Confirmed',
  };
  const reservations = getReservations();
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([reservation, ...reservations]));
  return reservation;
}
