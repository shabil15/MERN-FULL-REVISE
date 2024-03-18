const arr = [10,40,15,25,50,40,25];

console.log("sorted array :",arr.sort((a,b)=>a-b));

console.log('array doubling :',arr.map((x)=>x*2));

console.log("even numbers :",arr.filter((x)=>x %2==0));

console.log("unique array:",new Set(arr));

arr.push(100);

arr.shift();

console.log(arr);