import { useState } from 'react';

const defaultForm = {
  date: '',
  time: '17:00',
  guests: '2',
  occasion: 'Birthday',
};

function BookingForm({ availableTimes, submitForm, onDateChange }) {
  const [formData, setFormData] = useState(defaultForm);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleDateChange = (event) => {
    handleChange(event);
    if (onDateChange) {
      onDateChange(event);
    }
  };

  const validate = () => {
    if (!formData.date) return 'Please choose a date.';
    if (!formData.time) return 'Please choose a time.';
    if (Number(formData.guests) < 1 || Number(formData.guests) > 10) return 'Guests must be between 1 and 10.';
    return '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextError = validate();

    if (nextError) {
      setError(nextError);
      return;
    }

    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="res-date">Choose date</label>
      <input
        id="res-date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={formData.time} onChange={handleChange} required>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        id="guests"
        name="guests"
        type="number"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Other">Other</option>
      </select>

      {error ? <p className="form-error" role="alert">{error}</p> : null}

      <button type="submit" className="primary-button full-width">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;
