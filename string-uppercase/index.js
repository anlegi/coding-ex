String.prototype.isUpperCase = function() {
  let arr = this.split("")
  let lowerCase = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i].toUpperCase()) {
      lowerCase.push(arr[i])
    }
  }
  return lowerCase.length === 0
}
