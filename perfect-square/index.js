function findNextSquare(sq) {
  let newNumber
  if (Math.sqrt(sq) % 1 !== 0 ) {
    return -1
  } else {
    newNumber = Math.sqrt(sq) + 1
  }

  return Math.pow(newNumber, 2)
}
