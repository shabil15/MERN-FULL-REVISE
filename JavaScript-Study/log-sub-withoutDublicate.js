// // longest substring without reapeting value
// let str = "farfahmfed";
// // //out : ahmfed

// let res = ''

// for(let i=0; i<str.length; i++){
//     let cur = ''
//     for(let j=i; j<str.length; j++){
//         if(cur.includes(str[j])){
//             break
//         }
//         cur += str[j]
//     }
//     if(res.length < cur.length){
//         res = cur
//     }
// }

// console.log(res)

let str = 'farfahmfed';

let res = ''
for(let i=0;i<str.length;i++){
    let cur = ''
    for(let j=i;j<str.length;j++){
        if(cur.includes(str[j])){
            break
        }
        cur+= str[j]
    }
    if(res.length<cur.length){
        res = cur
    }
   
}
console.log(res)


// longest substring reapeting value
// out dddd
// let str = 'abbbaagfheefaadddddiond';
// let longest = '';
// let current = '';

// for(let i = 0; i < str.length; i++) {
//     if(current.includes(str[i])) {
//         current += str[i];
//     } else {
//         if(current.length > longest.length) {
//             longest = current;
//         }
//         current = str[i];
//     }
// }

// console.log(longest);
