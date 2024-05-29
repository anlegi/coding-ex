function rot13(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const ALPHABET = alphabet.toUpperCase()
  let newArr = []

  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    let index = alphabet.indexOf(char);

    if (index !== -1) { // -1 checking if char exists
        // Wrapping around using modulo
        newArr.push(alphabet[(index + 13) % 26]);
    } else { // Check if it's uppercase
        index = ALPHABET.indexOf(char);
        if (index !== -1) {
            newArr.push(ALPHABET[(index + 13) % 26]);
        } else {
            // Non-alphabet character, add as is
            newArr.push(char);
        }
    }
  }
  return newArr.join("")
}
