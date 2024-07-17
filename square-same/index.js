function comp(array1, array2) {
  let trueArr = []
  if (!array1 || !array2) {
    return false
  }
  if (array1.length === 0 && array2.length === 0) {
    return false
  }
  if (array1.length !== array2.length) {
    return false
  }

  for (let i = 0; i < array2.length; i++) {
    if (array1.includes(Math.sqrt(array2[i]))) {
      trueArr.push(true)
    } else {
      trueArr.push(false)
    }
  }
  if (trueArr.includes(false)) {
    return false
  } else {
    return true
  }
} //UNFINISHED
