function isRegExp(value) {
  return value instanceof RegExp;
}

// Example usage:
const regex = /\d+/;
console.log(isRegExp(regex)); // Output: true

const notRegex = 'This is not a regex';
console.log(isRegExp(notRegex)); // Output: false
