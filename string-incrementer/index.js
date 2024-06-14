function incrementString (strng) {
  let arr = strng.split("")
  let numberArr = []
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == number) {
      numberArr.push(arr[i])
    }
  }
  let lastNumber = numberArr.join("")

  if ((typeof parseInt(arr[arr.length - 1])) == "number") {
    let lastElement = arr.pop()
    arr.push(parseInt(lastElement) + 1)
  } else {
    arr.push(1)
  }
  return arr.join("")
}

//Unfinished
