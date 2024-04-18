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
