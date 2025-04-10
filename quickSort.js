function quicksort(array) {
  if (array.length < 2) {
    // base case: [], [n]
    return array;
  } else {
    // recursive case - optimized for n log n
    let mid = Math.round((array.length - 1) / 2);
    let pivot = array[mid];

    let lesserList = array.filter((item, index) => {
      if (index === mid) {
        return false; // handles duplicates
      } else {
        return item <= pivot;
      }
    });
    let greaterList = array.filter((item) => item > pivot);

    return [...quicksort(lesserList), pivot, ...quicksort(greaterList)];
  }
}

console.log(quicksort([10, 5, 5, 2, 3]));
