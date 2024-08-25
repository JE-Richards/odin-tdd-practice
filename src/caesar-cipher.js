export function caesarCipher(str = '', shift = 0) {
  if (typeof str !== 'string') {
    throw new Error('Input Error: the first input must be a string');
  }

  if (typeof shift !== 'number') {
    throw new Error(
      'Input Error: the second input must be a number that is a positive integer'
    );
  }

  if (!Number.isInteger(shift) || shift < 0) {
    throw new Error('Input Error: the second input must be a positive integer');
  }

  const hasAlphaChar = /[a-zA-z]/.test(str);

  if (!hasAlphaChar) {
    return str;
  }

  const lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  let strSplit = str.split('');

  strSplit.forEach((char, index, arr) => {
    let isUpper = /[A-Z]/.test(char);
    let isLower = /[a-z]/.test(char);

    if (isUpper) {
      let charIndex = upper.indexOf(char);
      arr[index] = upper[(charIndex + shift) % upper.length];
    }

    if (isLower) {
      let charIndex = lower.indexOf(char);
      arr[index] = lower[(charIndex + shift) % lower.length];
    }
  });

  return strSplit.join('');
}
