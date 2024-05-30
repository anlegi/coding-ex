function duplicateEncode(word) {
  let normalWord = word.toLowerCase()
  let charCount = {} //object to store character count

  for (let char of normalWord) {
    if (charCount[char]) {
      charCount[char] += 1 //increment count if char already seen
    } else {
      charCount[char] = 1
    }
  }

  let encodedString = ""
  for (let char of normalWord) {
    if (charCount[char] > 1) {
      encodedString += ")" //more than one occurence
    } else {
      encodedString += "("
    }
  }
  return encodedString
}
