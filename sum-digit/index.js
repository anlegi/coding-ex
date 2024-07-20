function sumDigits(number) {
  let splitNumber = Math.abs(number).toString().split("")
  let sum = 0
  for (let i = 0; i < splitNumber.length; i++) {
    if (typeof parseInt(splitNumber[i]) == "number") {
      sum += parseInt(splitNumber[i])
      console.log(sum)
    }
  }
  return sum
}
