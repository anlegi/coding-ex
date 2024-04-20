function fibs(n) {
  let arr = [0, 1]
  for (let i = 2; i < n; i++) {
    arr.push(arr[i-1] + arr[i-2])
  }
  return arr
}

// function fibsRec(n) {
//   if (n === 0) {
//     return [0];
//   } else if (n === 1) {
//     return [1];
//   }
//   return arr.push((fibsRec(n-1) + fibsRec(n-2)))
// }

function fibsRec(num) {
  if (num == 1) {
      return [0];
  }
  if (num == 2) {
      return [0,1]
  } else {
      return [...fibsRec(num-1), fibsRec(num-1)[num - 2] + fibsRec(num-1)[num - 3]];
  }
}
