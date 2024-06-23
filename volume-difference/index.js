function findDifference(a, b) {
  let aVolume = a[0] * a[1] * a[2]
  let bVolume = b[0] * b[1] * b[2]
  let diffVolume = aVolume - bVolume

  if (Math.sign(diffVolume) == -1) {
    return diffVolume * (-1)
  } else {
    return diffVolume
  }
}
