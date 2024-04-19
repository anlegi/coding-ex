function sumRange(n, sum = 0) {
  console.log(n, sum)
  if (n <= 0) {
    return sum
  }

  return sumRange(n - 1, sum + n)
}

// Recursion process
// sumRange(3, 0)
//   sumRange(2, 3)
//     sumRange(1, 5)
//       sumRange(0, 6)
//       return 6
//     return 6
//   return 6
// return 6

function secondSumRange(n) {
  if (n == 1) {
    return 1
  }
  return n + sumRange(n - 1)
}

// secondSumRange(3)
//  secondSumRange(2)
//    secondSumRange(1)
//    return 1
//  return 2 + 1
// return 3 + 3


function power(n, e) {
  if (e == 0) {
    return 1
  }
  return n * power(n, e-1)
}

// power(2, 3)
//  power(2, 2)
//    power(2, 1)
//      power(2, 0)
//      return (1)
//    return 2 * (1)
//  return 2 * (2 * 1)
// return 2 * (2 * 2 * 1)


function factorial(n) {
  if (n == 1 || n == 0 ) {
    return 1
  }
  return n * factorial(n-1)
}


function all(arr, fn) {
  console.log(arr)
  if (arr.length === 0) {
    return true
  }

  return fn(arr.shift()) && all(arr, fn)
}
