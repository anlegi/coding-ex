function sumRange(n, sum = 0) {
  console.log(n, sum)
  if (n <= 0) {
    return sum
  }

  return sumRange(n - 1, sum + n)
}

// Recursion process
// sumRange(3, 0)
//   sumRange(2, 3)
//     sumRange(1, 5)
//       sumRange(0, 6)
//       return 6
//     return 6
//   return 6
// return 6

function secondSumRange(n) {
  if (n == 1) {
    return 1
  }
  return n + sumRange(n - 1)
}

// secondSumRange(3)
//  secondSumRange(2)
//    secondSumRange(1)
//    return 1
//  return 2 + 1
// return 3 + 3


function power(n, e) {
  if (e == 0) {
    return 1
  }
  return n * power(n, e-1)
}

// power(2, 3)
//  power(2, 2)
//    power(2, 1)
//      power(2, 0)
//      return (1)
//    return 2 * (1)
//  return 2 * (2 * 1)
// return 2 * (2 * 2 * 1)


function factorial(n) {
  if (n == 1 || n == 0 ) {
    return 1
  }
  return n * factorial(n-1)
}


function all(arr, fn) {
  if (arr.length === 0) {
    return true
  }
  return fn(arr.shift()) && all(arr, fn)
}


function productOfArray(arr) {
  if (arr.length === 0) {
    return 1
  }
  return arr.shift() * productOfArray(arr)
}


// solution to problem #6 in recursive exercises
function contains(object, searchValue) {
  // base case
  if (typeof object !== "object" || object === null) { // condition checks if the current object is not actually an object (could be a number, string, boolean, etc.)
    return object === searchValue; // if the base case condition is true, it returns true if the object itself is equal to searchValue, otherwise it returns false
  }
  // recursive case
  for (const value of Object.values(object)) { // function retrieves all the values from the object (ignoring the keys), and these values are iterated over in the for loop
    if (contains(value, searchValue)) { // function calls itself with a value from the object. This value could be a primitive, another object, or an array, thereby allowing the function to traverse through all nested structures within the main object
      return true;
    }
  }
  return false; // if the loop completes without ever returning true (i.e., if searchValue was not found in any nested or non-nested part of the object), the function returns false.
}
