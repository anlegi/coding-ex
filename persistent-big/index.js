function persistence(num) {
  let count = 0
  while (num > 9) {
    let splitNumber = num.toString().split("").map(Number)
    let product = 1

    for (let i = 0; i < splitNumber.length; i++) {
      product *= splitNumber[i]
    }
    num = product
    count++
  }
  return count
}
