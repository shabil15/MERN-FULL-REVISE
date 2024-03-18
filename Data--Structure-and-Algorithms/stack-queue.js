// // queue data stracture in object                                                    
// class Queue{
//     constructor(){
//         this.items={}
//         this.fontIndex=0
//         this.backIndex=0
//     }
//     enqueue(item){
//         this.items[this.backIndex]=item
//         this.backIndex++
//         return item+ "inserted"
//     }
//     deqeueue(){
//        const item= this.items[this.fontIndex]
//         delete this.items[this.fontIndex]
//         this.fontIndex++
//         return item
//     }
//     peek(){
//         return this.items[this.fontIndex]
//     }
//     print(){
//     return this.items
//     }
    
// }
// let queue= new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log('this peek  ',queue.peek());
// console.log(queue.print());


// queue in array
class Queue{
    constructor(){
        this.itmes = []
    }
    enqueue(element){
        this.itmes.push(element)
    }
    dequeue(){
        if(this.itmes.length === 0){
            return 'underflow'
        }
        this.itmes.shift();
    }
    isEmpty(){
       return this.itmes.length === 0
    }
    print(){
        console.log(this.itmes);
    }
    peek(){
        console.log(this.itmes[0]);
    }
}

const queue = new Queue ()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)

// queue.print()
// queue.peek()
// queue.dequeue()
// queue.print()
// console.log(queue.isEmpty());


// stack data stracture
class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.items.length === 0){
            return 'underflow'
        }
        return this.items.pop();
    }
    isEmpty(){
        return this.items.length === 0;
    }
    peek(){
        return this.items[this.items.length-1]
    }
    print(){
       console.log(this.items);
    }

     // Valid paranthesis
     isValidParanthesis(str, obj){
        
        for(let par of str){
            if(par in obj){
                this.items.push(par)
            }else{
                let val = this.items.pop()
                if(obj[val] != par){
                    return false
                }
            }
        }
        return this.items.length === 0
    }
 }

 const stack = new Stack()

//  stack.push(10)
//  stack.push(20)
//  stack.push(30);
//  stack.print()

//  stack.pop()
//  stack.print()
//  console.log(stack.peek());
//  console.log(stack.isEmpty());

obj = {
    '(':')',
    '[':']',
    '{':'}'
}

const string = '([{}])'
console.log(stack.isValidParanthesis(string, obj));



