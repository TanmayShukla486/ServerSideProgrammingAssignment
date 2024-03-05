function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}

function pivot(array, start, end) {
  let pivot = start;
  let i = start,
    j = end;
  while (i < j) {
    while (i < end && array[i] <= array[pivot]) i++;
    while (j > start && array[j] > array[pivot]) j--;
    if (i < j) swap(array, i, j);
  }
  swap(array, pivot, j);
  return j;
}

function quickSort(array, start, end) {
  if (start < end) {
    let pivotIndex = pivot(array, start, end);
    quickSort(array, start, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, end);
  }
}

const ar = [10, 9, 7, 6, 5, 2, 1];
quickSort(ar, 0, ar.length - 1);
console.log(ar);
