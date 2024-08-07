const binaryArrayToNumber = arr => {
  let sum = 0
  let k = 0
  for (let i = arr.length - 1; i >= 0; i--) {
    let number = arr[k] * Math.pow(2, i)
    sum += number
    k++
    console.log(number)
  }
  return sum
}
