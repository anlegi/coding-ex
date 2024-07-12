function count(string) {
  let charCount = {}
  if (string == "") {
    return {}
  }

  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    if (charCount[char]) {
      charCount[char]++
    } else {
      charCount[char] = 1
    }
  }
  return charCount
}
