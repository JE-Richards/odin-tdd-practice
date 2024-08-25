import { reverseString } from '../reverse-string';

test('Non-string input should throw an error', () => {
  expect(() => reverseString(123)).toThrow(
    'Invalid input: input must be a string'
  );
});

test('Empty string input should return an empty string', () => {
  expect(reverseString('')).toBe('');
});

test('String input returned in reverse order', () => {
  expect(reverseString('abc')).toBe('cba');
});

test('String input is reversed even when string contains non-alpha characters', () => {
  expect(reverseString('123!')).toBe('!321');
});
