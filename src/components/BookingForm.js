import { useState } from 'react';

const defaultForm = {
  date: '',
  time: '17:00',
  guests: '2',
  occasion: 'Birthday',
};

function CustomSelect({ label, name, value, options, onChange, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (nextValue) => {
    onChange({ target: { name, value: nextValue } });
    setIsOpen(false);
  };

  return (
    <div className={`custom-select ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="custom-select-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={label}
      >
        <span className="custom-select-icon" aria-hidden="true">{icon}</span>
        <span className="custom-select-label">{isOpen ? value : label}</span>
        <span className="custom-select-chevron" aria-hidden="true">⌃</span>
      </button>

      <div className="custom-select-menu" role="listbox" aria-label={label}>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`custom-select-option ${value === option ? 'is-selected' : ''}`}
            onClick={() => handleSelect(option)}
            role="option"
            aria-selected={value === option}
          >
            <span className="custom-select-option-marker" aria-hidden="true" />
            <span>{option}</span>
          </button>
        ))}
      </div>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="visually-hidden"
        aria-label={label}
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

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

      <CustomSelect
        label="Occasion"
        name="occasion"
        value={formData.occasion}
        options={['Birthday', 'Engagement', 'Anniversary']}
        icon="🍷"
        onChange={handleChange}
      />

      {error ? <p className="form-error" role="alert">{error}</p> : null}

      <button type="submit" className="primary-button full-width">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;
