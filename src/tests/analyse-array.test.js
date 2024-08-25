import { analyzeArray } from '../analyse-array';

test('An error should be thrown if the input is not an array', () => {
  expect(() => analyzeArray('string')).toThrow(
    'Input Error: input should be an array'
  );
});

test('An error should be thrown if the array contains non-number values', () => {
  expect(() => analyzeArray([1, 'a', 2])).toThrow(
    'Input Error: input array must only contain numbers'
  );
});

test('The function should return an object', () => {
  expect(typeof analyzeArray([1, 2, 3, 4, 5])).toBe('object');
});

test('Output object should contain the expected keys', () => {
  const expectedKeys = ['average', 'min', 'max', 'length'];

  expectedKeys.forEach((key) => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toHaveProperty(key);
  });
});

test('Function calculates the correct average', () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).average).toBe(3);
});

test('Function finds the correct minimum value', () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).min).toBe(1);
});

test('Function finds the correct maximum value', () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).max).toBe(5);
});

test('Function returns the correct length', () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).length).toBe(5);
});
