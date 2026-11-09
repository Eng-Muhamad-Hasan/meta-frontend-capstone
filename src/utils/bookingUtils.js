function getApiFunction(name) {
  const apiFunction = typeof window !== 'undefined' ? window[name] : undefined;

  if (typeof apiFunction !== 'function') {
    throw new Error(`The booking service is unavailable (${name}). Please try again later.`);
  }

  return apiFunction;
}

function toApiDate(date) {
  if (date instanceof Date) {
    return date;
  }

  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  if (!match) {
    throw new Error('Choose a valid reservation date.');
  }

  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
}

export function initializeTimes() {
  const times = getApiFunction('fetchAPI')(new Date());
  if (!Array.isArray(times)) {
    throw new Error('The booking service returned invalid availability data.');
  }
  return times;
}

export function updateTimes(date) {
  const times = getApiFunction('fetchAPI')(toApiDate(date));
  if (!Array.isArray(times)) {
    throw new Error('The booking service returned invalid availability data.');
  }
  return times;
}

export function submitForm(formData) {
  const result = getApiFunction('submitAPI')(formData);
  return result === true;
}
