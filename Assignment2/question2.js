function linearSearch(array, element) {
  let i = 0;
  while (i < array.length) {
    if (array[i] == element) return i;
    i++;
  }
  return -1;
}

const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const element = 5;
console.log(linearSearch(ar, element));
