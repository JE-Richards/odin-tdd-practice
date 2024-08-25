export function reverseString(str = '') {
  if (typeof str !== 'string') {
    throw new Error('Invalid input: input must be a string');
  }

  if (str.length === 0) {
    return '';
  }

  // split string into an array, reverse the array, join it back into a string
  return str.split('').reverse().join('');
}
