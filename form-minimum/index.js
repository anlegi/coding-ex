function minValue(values) {
  let newValues = []
  let sortedValues = values.sort((a, b) => a - b)
  for (let i = 0; i < values.length; i++) {
    if (!newValues.includes(values[i])) {
      newValues.push(values[i])
    }
  }
  let number = newValues.join("")
  return parseInt(number)
}
