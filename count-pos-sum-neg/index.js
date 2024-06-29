function countPositivesSumNegatives(input) {
  if (input == null) {
    return []
  } else if (input.length == 0) {
    return []
  }

  let count = 0
  let sum = 0
  for (let i = 0; i < input.length; i++) {
    if (Math.sign(input[i]) == 1 ) {
      count++
    } else {
    sum+= input[i]
    }
  }
  return [count, sum]
}
