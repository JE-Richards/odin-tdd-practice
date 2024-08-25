export const calculator = {
  add: (i, j) => {
    if (typeof i !== 'number' || typeof j !== 'number') {
      throw new Error('Input Error: inputs must be valid numbers');
    }
    return i + j;
  },

  subtract: (i, j) => {
    if (typeof i !== 'number' || typeof j !== 'number') {
      throw new Error('Input Error: inputs must be valid numbers');
    }
    return i - j;
  },

  divide: (i, j) => {
    if (typeof i !== 'number' || typeof j !== 'number') {
      throw new Error('Input Error: inputs must be valid numbers');
    }
    return i / j;
  },

  multiply: (i, j) => {
    if (typeof i !== 'number' || typeof j !== 'number') {
      throw new Error('Input Error: inputs must be valid numbers');
    }
    return i * j;
  },
};
