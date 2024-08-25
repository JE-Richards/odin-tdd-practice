export function capitalize(str = '') {
  // If input not a string, throw error
  if (typeof str !== 'string') {
    throw new Error('Invalid input: input must be a string');
  }

  // if string is empty, return an empty string
  if (str.length === 0) {
    return '';
  }

  // check that the input contains an alpha character via regex
  const hasAlphaChar = /[a-zA-z]/.test(str);

  if (hasAlphaChar) {
    // check if the first character is alpha, if it is capitalise and return
    if (/^[a-zA-z]/.test(str)) {
      let capString = str.slice(0, 1).toUpperCase().concat(str.slice(1));
      return capString;
    }

    // use regex to find the index of the first alpha character
    let firstAlphaIndex = str.search(/[a-zA-z]/);
    let capString = str.slice(0, firstAlphaIndex).concat(
      str
        .slice(firstAlphaIndex, firstAlphaIndex + 1)
        .toUpperCase()
        .concat(str.slice(firstAlphaIndex + 1))
    );
    return capString;
  }

  return str;
}
