import { initializeTimes, updateTimes } from './bookingUtils';

afterEach(() => {
  delete window.fetchAPI;
});

test('initializeTimes requests availability for today', () => {
  const availableTimes = ['17:00', '18:00'];
  window.fetchAPI = jest.fn(() => availableTimes);
  const before = new Date();

  expect(initializeTimes()).toBe(availableTimes);

  const [requestedDate] = window.fetchAPI.mock.calls[0];
  expect(requestedDate).toBeInstanceOf(Date);
  expect(requestedDate.toDateString()).toBe(before.toDateString());
});

test('updateTimes requests availability for the selected local calendar date', () => {
  const availableTimes = ['19:00'];
  window.fetchAPI = jest.fn(() => availableTimes);

  expect(updateTimes('2030-04-15')).toBe(availableTimes);
  expect(window.fetchAPI).toHaveBeenCalledWith(new Date(2030, 3, 15));
});

test('reports an unavailable booking API instead of supplying mock availability', () => {
  expect(() => initializeTimes()).toThrow('booking service is unavailable');
  expect(() => updateTimes('2030-04-15')).toThrow('booking service is unavailable');
});
