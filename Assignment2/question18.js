function convertCase(lowercase, uppercase) {
  const convertedLower = lowercase.toUpperCase();
  const convertedUpper = uppercase.toLowerCase();
  console.log('Converted lowercase: ' + convertedLower);
  console.log('Converted uppercase: ' + convertedUpper);
}

const main = () => {
  convertCase('abc', 'DEF');
};

main();
