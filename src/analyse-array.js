export function analyzeArray(arr = []) {
  if (!Array.isArray(arr)) {
    throw new Error('Input Error: input should be an array');
  }

  if (!arr.every((item) => typeof item === 'number')) {
    throw new Error('Input Error: input array must only contain numbers');
  }

  const output = {};

  function arrAvg(array) {
    let sum = 0;
    array.forEach((item) => (sum += item));
    return sum / array.length;
  }

  function arrMin(array) {
    let min = array[0];
    array.forEach((item) => {
      if (min > item) {
        min = item;
      }
    });
    return min;
  }

  function arrMax(array) {
    let max = array[0];
    array.forEach((item) => {
      if (max < item) {
        max = item;
      }
    });
    return max;
  }

  const avg = arrAvg(arr);
  const min = arrMin(arr);
  const max = arrMax(arr);
  const length = arr.length;

  output.average = avg;
  output.min = min;
  output.max = max;
  output.length = length;

  return output;
}
