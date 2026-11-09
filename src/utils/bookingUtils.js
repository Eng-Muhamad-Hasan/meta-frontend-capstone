const fallbackTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

export function initializeTimes() {
  if (typeof window !== 'undefined' && typeof window.fetchAPI === 'function') {
    const today = new Date().toISOString().slice(0, 10);
    return window.fetchAPI(today);
  }

  return fallbackTimes;
}

export function updateTimes(date) {
  if (typeof window !== 'undefined' && typeof window.fetchAPI === 'function') {
    return window.fetchAPI(date);
  }

  return fallbackTimes;
}

export function submitForm(formData) {
  if (typeof window !== 'undefined' && typeof window.submitAPI === 'function') {
    return window.submitAPI(formData);
  }

  return true;
}
