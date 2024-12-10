function myFunc(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b;
}

console.log(myFunc(null, 5)); // Output: null
console.log(myFunc(5, null)); // Output: null
console.log(myFunc(5, 5));   // Output: 10
console.log(myFunc(undefined,5)); //Output: NaN