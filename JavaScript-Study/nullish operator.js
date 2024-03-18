// Example 1
const a = null ?? 'default';
console.log(a); // Output: 'default'

// Example 2
const b = undefined ?? 'default';
console.log(b); // Output: 'default'

// Example 3
const c = 0 ?? 'default';
console.log(c); // Output: 0 (since 0 is not null or undefined)
