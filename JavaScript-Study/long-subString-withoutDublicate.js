let str = 'today is a pleasent day wednesday'

let res = str.split(' ')
console.log(res);

let count = res.map((val)=>val.length)

let max = Math.max(...count.filter((val)=>val%2==0))
let ind  = count.indexOf(max)

console.log(res[ind]) 