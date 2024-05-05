function checkBlock() {
  const string = '{"name": "John",  : 30}';
  try {
    const parsedData = JSON.parse(string);
    console.log(parsedData);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log('Syntax Error');
    } else {
      console.log('Error occurred' + error.message);
    }
  }
}

checkBlock();
