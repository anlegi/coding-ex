function position(letter) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let arr = alphabet.split("")
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == letter) {
      return `Position of alphabet: ${arr.indexOf(arr[i]) + 1}`
    }
  }
}
