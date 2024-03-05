function merge(array, low, mid, high) {
  const first = [],
    second = [];
  let i = low,
    j = mid + 1;
  while (i <= mid) first.push(array[i++]);
  while (j <= high) second.push(array[j++]);
  (i = 0), (j = 0);
  //   console.log(first, second);
  let k = low;
  while (i < first.length && j < second.length) {
    if (first[i] < second[j]) array[low++] = first[i++];
    else array[low++] = second[j++];
  }
  while (i < first.length) array[low++] = first[i++];
  while (j < second.length) array[low++] = second[j++];
}

function mergeSort(array, low, high) {
  console.log(high);
  if (low >= high) return;
  const mid = parseInt((low + high) / 2);
  mergeSort(array, low, mid);
  mergeSort(array, mid + 1, high);
  merge(array, low, mid, high);
}

const array = [10, 9, 6, 8, 1, 2];
mergeSort(array, 0, array.length - 1);
console.log(array);
