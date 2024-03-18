// let weakSet = new WeakSet();

// let obj1 = { name: 'Object 1' };
// let obj2 = { name: 'Object 2' };

// weakSet.add(obj1);
// weakSet.add(obj2);

// console.log(weakSet.has(obj1)); // Output: true

// obj1 = null; // Remove the reference to obj1

// // At this point, obj1 is no longer referenced, so it may be garbage collected
// // If obj1 is garbage collected, it will also be automatically removed from the WeakSet

// console.log(weakSet.has(obj1)); // Output: false




// let weakMap = new WeakMap();

// let obj_1 = {};
// let obj_2 = {};

// weakMap.set(obj_1, 'Value 1');
// weakMap.set(obj_2, 'Value 2');

// console.log(weakMap.get(obj_1)); // Output: "Value 1"

// obj_1 = null; // Remove the reference to obj1

// // At this point, obj1 is no longer referenced, so it may be garbage collected
// // If obj1 is garbage collected, its entry in the WeakMap will also be automatically removed

// console.log(weakMap.get(obj_1)); // Output: undefined




// weeak ref

// Creating an object
let obj = { data: 'example' };

// Creating a weak reference to the object
const weakRef = new WeakRef(obj);

// Dereferencing the weak reference to get the object
console.log(weakRef.deref()); // { data: 'example' }


