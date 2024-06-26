function caeserCipher(string, shiftFactor) {
  // create plainText alphabet
  const plainText = "abcdefghijklmnopqrstuvwxyz".split('')

  // go through string
  let text = ""
  for (let i = 0; i < string.length; i++) {
    // make cipher text alex
    const index = plainText.indexOf(string[i])
    // console.log(index)
    const cipherIndex = index + shiftFactor
    let cipherCharacter = ""
    if (cipherIndex > plainText.length - 1) {
      cipherCharacter = plainText[cipherIndex - (plainText.length)]
    } else {
      cipherCharacter = plainText[cipherIndex]
    }
    text += cipherCharacter
  }
  return text
}


module.exports = caeserCipher;
