function myFunction(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error: Inputs must be numbers";
  }
  return a - b;
}

console.log(myFunction(5, 10)); // Output: -5
console.log(myFunction(10, 5)); // Output: 5
console.log(myFunction("5", 10)); // Output: Error: Inputs must be numbers
console.log(myFunction(10, "5")); // Output: Error: Inputs must be numbers