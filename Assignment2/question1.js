function findIndices(string, word) {
  const answer = [];
  let currPosition = -1;
  do {
    currPosition = string.indexOf(word, currPosition + 1);
    if (currPosition >= 0) {
      answer.push(currPosition);
    }
  } while (currPosition != -1);
  return answer;
}

const string =
  'Today is a good day to go out and play cricket and I would also say it is a good day to go for a picnic';
const word = 'is';
console.log(findIndices(string, word));
