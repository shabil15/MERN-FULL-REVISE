const str = 'Adhil Ali CT'
const stack = []
let result = ''

for(let val of str){
    if(val === ' '){
        while(stack.length>0){
            result+= stack.pop()
        }
        result+= ' '
    }
  stack.push(val)

}

while(stack.length>0){
    result+= stack.pop()
}

console.log(result);