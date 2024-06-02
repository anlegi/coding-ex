function duplicateCount(text) {
  let newText = text.toLowerCase()
  let frequency = {}

  for (const char of newText) {
    if (frequency[char]) { // check whether char already exists as key in the frequency obj
        frequency[char]++ // if it does exist, increment count of char
    } else {
        frequency[char] = 1 // if it doesnt exist, initialize count to 1
    }
  }

  let count = 0;
  for (const key in frequency) {
    if (frequency[key] > 1) {
        count++;
    }
  }
  return count
}
