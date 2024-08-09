function duplicateCount(text) {
  const counts = {};
  let duplicates = 0;
  const normalizedText = text.toLowerCase();

  for (let char of normalizedText) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }


  for (let char in counts) {
    if (counts[char] > 1) {
      duplicates++
    }
  }

  return duplicates
}
