function mergeSort(arr) {
  if (arr.length === 1) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid) // all elements until before middle (doesn't include middle element)
  const rightArr = arr.slice(mid) // mid until the end of the array
  return merge(mergeSort(leftArr), mergeSort(rightArr)) // parse into merge function
}

function merge(leftArr, rightArr) {
  const sortedArr = []
  while (leftArr.length && rightArr.length) { // while there is an element in the array
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift()) // .shift removes first element from array
    } else {
      sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr] // one of these arrays may still have elements left after the main loop exits. This situation occurs because the loop stops as soon as one array is empty, irrespective of whether there are remaining elements in the other array
} // spread operators (...) are used to concatenate sortedArr with any remaining elements in leftArr and rightArr
// any remaining elements in these arrays are already sorted and just need to be appended to the end of sortedArr


const arr = [8, 20, -2, 4, -6]
console.log(mergeSort(arr))
