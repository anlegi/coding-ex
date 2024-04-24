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
    if (index == plainText.length - 1) {
      cipherCharacter = plainText[(-1) + shiftFactor]
    } else {
      cipherCharacter = plainText[cipherIndex]
    }
    text += cipherCharacter
  }
  return text
}
