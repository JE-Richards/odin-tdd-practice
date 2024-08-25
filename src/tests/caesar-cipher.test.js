import { caesarCipher } from '../caesar-cipher';

test("If the string input isn't a string an error is thrown", () => {
  expect(() => caesarCipher(123, 0)).toThrow(
    'Input Error: the first input must be a string'
  );
});

test("If the shift input isn't a number an error is thrown", () => {
  expect(() => caesarCipher('abc', 'str')).toThrow(
    'Input Error: the second input must be a number that is a positive integer'
  );
});

test('If the shift input is less than 0 then an error is thrown', () => {
  expect(() => caesarCipher('abc', -1)).toThrow(
    'Input Error: the second input must be a positive integer'
  );
});

test("If the shift input isn't a positive integer then an error is thrown", () => {
  expect(() => caesarCipher('abc', 1.5)).toThrow(
    'Input Error: the second input must be a positive integer'
  );
});

test('Cipher is correctly applied to a basic string', () => {
  expect(caesarCipher('abc', 2)).toBe('cde');
});

test('Cipher maintains uppercase characters after shift', () => {
  expect(caesarCipher('ABC', 2)).toBe('CDE');
});

test('Cipher maintains upper and lower case for characters in a string', () => {
  expect(caesarCipher('AbC', 2)).toBe('CdE');
});

test('Cipher correctly wraps from z-a, Z-A when a shift is applied', () => {
  expect(caesarCipher('Zz', 1)).toBe('Aa');
});

test("Cipher doesn't alter non-alpha characters", () => {
  expect(caesarCipher('123!', 5)).toBe('123!');
});

test('Cipher retains punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
