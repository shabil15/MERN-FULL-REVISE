
// 9 * 3 , 9 * 4, 9 * 9, 4 * 4
const arr =[{af:9,l:3},{ad:9,l:4},{af:9,l:9},{ao:4,apo:4}];

// let result;
// for(let i=0;i<arr.length;i++){
//   result =1;
//   for(let j=0;j<Object.values(arr[i])[1];j++){
//     result *= Object.values(arr[i])[0];
//   }
//   console.log(result)
// }


// simple way
// for(let entry of arr){
//   let result = 1;
// here we can avoid the key and we can take the values only
//   let [val1, val2] = Object.values(entry)
//   for(let i=0; i<val2; i++){
//     result *= val1
//   }
//   console.log(result);
// }


// another way with entries here we will get the key and value

// for(let i = 0; i < arr.length; i++) {
//     let result = 1;
//     for(let [key,val] of Object.entries(arr[i])) {
//         result *= val;
//     }
//     console.log(result);
// }