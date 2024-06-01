function XO(str) {
  let arr = str.toLowerCase().split("")
  let xArr = []
  let oArr = []
  if (!arr.includes("o") && !arr.includes("x") ) {
    return true
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "o") {
      oArr.push(arr[i])
    } else if (arr[i] == "x") {
      xArr.push(arr[i])
    }
  }
  if (oArr.length == xArr.length) {
    return true
  } else {
    return false
  }
}
