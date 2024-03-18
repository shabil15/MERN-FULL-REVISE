
  // Two functions to compose
function addOne(x) {
  return x + 1;
}

function double(x) {
  return x * 2;
}

// Function composition
function composedFunction(x) {
  return addOne(double(x));
}

console.log(composedFunction(3)); // Output: (3 * 2) + 1 = 7