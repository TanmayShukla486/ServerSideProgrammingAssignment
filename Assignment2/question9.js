function checkSorted(array) {
  let i = 0;
  while (i < array.length - 1) {
    if (array[i] > array[i + 1]) return false;
    i++;
  }
  return true;
}
