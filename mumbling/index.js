function accum(s) {
  let arr = s.split("")
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      newArr.push(arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i))
    } else {
      newArr.push(arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i) + "-")
    }
  }
  return newArr.join("")
}
