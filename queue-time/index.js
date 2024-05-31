function queueTime(customers, n) {
  let amountTime = 0
  let mostTime = 0
  if (customers.length == 0) {
    return 0
  }

  for (let i = 0; i < customers.length; i++) {
    amountTime += customers[i]
    if (customers[i] > mostTime ) {
      mostTime = customers[i]
    }
  }
  if (n == 1 && customers.length > 0) {
    return amountTime
  }
  if (n > customers.length) {
    return mostTime
  }
  if (customers.length > n) {
    return amountTime / n
  }
}


///UNFINISHED!!
