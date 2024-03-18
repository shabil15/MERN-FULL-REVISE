console.log("10" + 5); // Output: 105 (number to string)
console.log("true" == true); // Output: false (bolean to string)
console.log(!!0); // Output: false (double logical negation to boolean)
console.log(!0); // Output: true 
console.log('10' * 2); // Output: 20 (string to number)
console.log('10' - 2); // Output: 8 (string to number)
console.log('10' / 2); // Output: 5 (string to number)


console.log(undefined + null) // Nan
console.log(undefined + [] ) // undefined
console.log(undefined + [1] ) // undefined1
console.log(undefined + '1' ) // undefined1
console.log(null + [] ) // null
console.log(null + [2] ) // null2
console.log(null + '2' ) // null2
console.log({} + '1' )       // [object Object]1
console.log({} + undefined ) //[object Object]undefined
console.log(true + 1);       // Result: 2
console.log(false + 1);      // Result: 1
console.log(1 + '1');        // Result: "11"
console.log(2 * '3');        // Result: 6
console.log('2' - '1');      // Result: 1
console.log('2' + '1');      // Result: "21"
console.log('2' * '3');      // Result: 6
console.log('hello' - 'world');  // Result: NaN
console.log(+'1');           // Result: 1  string to number
console.log(+'hello');       // Result: NaN
console.log(undefined - null);  // Result: NaN
console.log(undefined * null);  // Result: NaN
console.log(null * 1);       // Result: 0
console.log(null / 1);       // Result: 0
console.log(null + 2);       // Result: 2
console.log(null - 1);       // Result: -1

console.log(Boolean('hello')); // true
console.log(Boolean('')); // false empty string 
console.log(Boolean(' ')); // spaces, also true (any non-empty string is true)