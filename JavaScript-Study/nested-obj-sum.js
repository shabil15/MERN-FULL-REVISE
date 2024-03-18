const arr = [{a:'adhi'},{b:10},{c:[1,3,4]},{d:[5,6,7]}]

// let res = 0
// for(let ar of arr){
//     for(let val of Object.values(ar)){
//         if(Array.isArray(val)){
//             let sum = val.reduce((sum, cur)=> sum+cur)
//             res+= sum
//         }
//     }
// }

// console.log(res);

let res = 0
for(let ar of arr){
    for(let val of Object.values(ar)){
        if(Array.isArray(val)){
            let sum = val.reduce((sum,cur)=>sum+cur)
            res+=sum
        }
    }
}
 console.log(res);
