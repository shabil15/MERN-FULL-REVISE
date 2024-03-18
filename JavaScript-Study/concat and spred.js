// Concat 
const arr1 = [1,2,3,4,5]
const arr2 = [5,6,7,8,9]
const arr = arr1.concat(arr2)
console.log(arr);


// Spred operator
const array1 = [10,20,30]
const array2 = [60,70,80]
console.log(...array1, ...array2);

const array = [1,2,3,...array1,40,50,...array2,100]
console.log(array);
