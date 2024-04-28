function analyzeArray(array) {
  if (array.length === 0) {
    throw new Error("Array cannot be empty")
  }

  let sum = 0
  let min = array[0]
  let max = array[0]

  array.forEach(item => {
    sum += item;
    if (item < min) {
      min = item;
    }
    if (item > max) {
      max = item;
    }
  })

  let average = sum / array.length;
  let length = array.length;

  return {
    average: average,
    min: min,
    max: max,
    length: length
  }
}
 // sth
module.exports = analyzeArray;

console.log(analyzeArray([0, 8, 3, 4, 2, 6]));
