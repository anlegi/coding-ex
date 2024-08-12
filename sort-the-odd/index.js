function sortArray(array) {
  let oddArr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArr.push(array[i])
    }
  }

  let sortedOddArr = oddArr.sort(function(a, b){return a - b})
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2  == 0) {
      sortedOddArr.splice(i, 0, array[i]);
    }
  }
  return sortedOddArr
}
