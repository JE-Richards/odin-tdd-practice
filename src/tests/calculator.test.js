import { calculator } from '../calculator';

test('Calculator should contain functions for addition, subtraction, division, and multiplication', () => {
  const expectedFuncs = ['add', 'subtract', 'divide', 'multiply'];

  expectedFuncs.forEach((key) => {
    expect(calculator).toHaveProperty(key);
    expect(typeof calculator[key]).toBe('function');
  });
});

test('Functions should throw an error if inputs are not a number', () => {
  const expectedFuncs = ['add', 'subtract', 'divide', 'multiply'];

  expectedFuncs.forEach((key) => {
    expect(() => calculator[key]('a', 1)).toThrow(
      'Input Error: inputs must be valid numbers'
    );
  });
});

test('Addition function should add two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Addition should correctly handle negative numbers', () => {
  expect(calculator.add(1, -2)).toBe(-1);
});

test('Subtract should subtract two numbers', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('Subtract should correctly subtract negative numbers', () => {
  expect(calculator.subtract(1, -2)).toBe(3);
});

test('Multiply should multiply two numbers', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('Multiply should correctly multiply negative numbers', () => {
  expect(calculator.multiply(-2, -3)).toBe(6);
});

test('Divide should divide two numbers', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('Divide should correctly handle negative numbers', () => {
  expect(calculator.divide(4, -2)).toBe(-2);
});
