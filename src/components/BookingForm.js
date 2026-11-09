import { useEffect, useState } from 'react';

const defaultForm = {
  date: '',
  time: '',
  guests: '2',
  occasion: '',
};

function CustomSelect({ id, label, name, value, options, onChange, icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasOptions = options.length > 0;

  const handleSelect = (nextValue) => {
    onChange({ target: { name, value: nextValue } });
    setIsOpen(false);
  };

  return (
    <div className={`custom-select ${isOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="custom-select-trigger"
        disabled={!hasOptions}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={`${id || name}-options`}
        aria-label={`${label}${value ? `: ${value}` : ''}`}
      >
        <span className="custom-select-icon" aria-hidden="true">{icon}</span>
        <span className="custom-select-label">
          {value || (hasOptions ? label : 'No available times')}
        </span>
        <span className="custom-select-chevron" aria-hidden="true">⌃</span>
      </button>

      <div
        id={`${id || name}-options`}
        className="custom-select-menu"
        role="listbox"
        aria-label={label}
        aria-hidden={!isOpen}
      >
        {hasOptions ? options.map((option) => (
            <button
              key={option}
              type="button"
              className={`custom-select-option ${value === option ? 'is-selected' : ''}`}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={value === option}
              tabIndex={isOpen ? 0 : -1}
            >
              <span className="custom-select-option-marker" aria-hidden="true" />
              <span>{option}</span>
            </button>
          )) : (
            <p className="custom-select-empty" role="option" aria-selected="true">
              No available times
            </p>
          )}
      </div>

      <select
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        className="visually-hidden"
        aria-label={label}
        aria-hidden="true"
        tabIndex={-1}
        required
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function BookingForm({ availableTimes, availabilityError, submitForm, onDateChange }) {
  const [formData, setFormData] = useState(defaultForm);
  const [error, setError] = useState('');

  useEffect(() => {
    setFormData((previous) => ({
      ...previous,
      time: availableTimes.includes(previous.time) ? previous.time : '',
    }));
  }, [availableTimes]);

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
    if (!formData.occasion) return 'Please choose an occasion.';
    return '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextError = validate();

    if (nextError) {
      setError(nextError);
      return;
    }

    try {
      if (!submitForm(formData)) {
        setError('We could not complete your reservation. Please check your details and try again.');
      }
    } catch (submitError) {
      setError(submitError.message || 'The booking service is unavailable. Please try again later.');
    }
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

      <CustomSelect
        id="res-time"
        label="Choose time"
        name="time"
        value={formData.time}
        options={availableTimes}
        icon="◷"
        onChange={handleChange}
      />

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
        id="occasion"
        label="Occasion"
        name="occasion"
        value={formData.occasion}
        options={['Birthday', 'Engagement', 'Anniversary']}
        icon="🍷"
        onChange={handleChange}
      />

      {availabilityError || error ? (
        <p className="form-error" role="alert">{availabilityError || error}</p>
      ) : null}

      <button type="submit" className="primary-button full-width">Make Your Reservation</button>
    </form>
  );
}

export default BookingForm;
