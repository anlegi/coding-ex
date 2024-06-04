function deleteNth(arr, N) {
  const count = {};   // Object to store the occurrence count of each number
  const result = [];  // Array to store the final numbers respecting the N limit

  for (let number of arr) {
      if (!count[number]) {
          count[number] = 0;  // Initialize count for the number if not already done
      }

      if (count[number] < N) {
          result.push(number);  // Append to result if under the limit
          count[number]++;      // Increment the count of this number
      }
  }

  return result;
}
