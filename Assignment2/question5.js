function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function heapify(array, i, n) {
  if (i >= n) return;
  const left = 2 * i + 1;
  const right = 2 * (i + 1);
  let largest = i;
  if (left < n && array[largest] < array[left]) largest = left;
  if (right < n && array[largest] < array[right]) largest = right;
  if (largest != i) {
    swap(array, i, largest);
    heapify(array, largest, n);
  }
}

function makeHeap(array, n) {
  let i = n;
  while (i >= 0) {
    heapify(array, i, n);
    i--;
  }
}

function heapSort(array, n) {
  let temp = n;
  makeHeap(array, n);
  while (temp != 1) {
    temp--;
    swap(array, 0, temp);
    makeHeap(array, temp);
  }
}

function main() {
  const array = [5, 4, 3, 2, 1, 8, 6, 2, 1, 5, 15];
  heapSort(array, array.length);
  console.log(array);
}

main();
