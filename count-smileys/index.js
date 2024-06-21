function countSmileys(arr) {
  const smileyPattern = /[:;][-~]?[)D]/

  return arr.filter(face => smileyPattern.test(face)).length
}
