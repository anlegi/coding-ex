function alphabetPosition(text) {
  let textArr = text.toLowerCase().split("")
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let numberArr = []
  for (let i = 0; i < textArr.length; i++) {
    let charIndex = alphabet.indexOf(textArr[i])
    if (alphabet.includes(textArr[i])) {
      if (charIndex !== -1) {
      numberArr.push(charIndex + 1);
      }
    }
  }
  return numberArr.join(" ")
}
