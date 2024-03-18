// find the most repeating element in a array 
let st = "uhdaoifsdahoggggggggggggggfdasjoisafd"
// output : g

const obj = {}
for(let val of st){
   obj[val] = (obj[val] ||0)+1
}

let maxCount = 0
let res 

for(let key in obj){
    if(maxCount < obj[key]){
        maxCount = obj[key]
        res = key
    }
}


console.log(res);