import { capitalize } from '../capitalize';

test('Input "test" to capitalize the first letter', () => {
  expect(capitalize('test')).toBe('Test');
});

test('Blank input should return an empty string', () => {
  expect(capitalize('')).toBe('');
});

test('No input provided should return an empty string', () => {
  expect(capitalize()).toBe('');
});

// wrap the function inside an arrow function to ensure the thrown error is picked up in execution by jest
test('Numeric input returns an error message', () => {
  expect(() => capitalize(123)).toThrow(
    'Invalid input: input must be a string'
  );
});

test('String input containing only numerics is returned unchanged', () => {
  expect(capitalize('123')).toBe('123');
});

test('String beginning with a number but containing characters should capitalize the first character', () => {
  expect(capitalize('12ab3')).toBe('12Ab3');
});
