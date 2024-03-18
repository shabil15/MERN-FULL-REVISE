class Node {
    constructor(value){
        this.value = value; 
        this.next = null;
    }
}
class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
    

    // adding valueas to start head will move with next node that means head will be the last added node -
    // that why the last added value is the first and tail will stay menas tail will be the first added node: head -> value 3 -> value 2 -> value 1 
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head;
            this.head = node
        }
        this.size++
    } // o(1)t


    // adding valueas to end head will stay and tail will move to the end : head -> value 1 -> value 2 -> value 3
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let pos = this.head
            while(pos.next){
                pos = pos.next
            }
            pos.next = node
        }
        this.size++
    } // o(n)t


    // inserting value at a selecte index
    insert(value , index){
        if(index < 0 || index > this.size){
            return console.log('Enter a valid indext position');
        }else if(index === 0){    // o(1)T
            this.prepend(value)
        }else{
            const node = new Node(value)
            let pos = this.head;
            for(let i=0; i<index-1; i++){
                pos = pos.next;
            }
            node.next = pos.next;
            pos.next = node
            this.size++;
        }
    }


    // removing values at a selected index
    removeIndex(index){
        if(index <0 || index >= this.size){
            return console.log('plaease enter a valid index');
        }
        let removeNode
        if(index === 0){                    // o(1)T
            removeNode = this.head;
            this.head = this.head.next;
        }else{
            let pos = this.head;            // o(n)T
            for(let i=0; i<index-1; i++){
                pos = pos.next;
            }
            removeNode = pos.next;
            pos.next = removeNode.next;
        }
        this.size --;
        return removeNode.value
    }


    // removing given value
    removeVlue(value){
        if(this.isEmpty()){
            return null
        }
        if(value === this.head.value){   //o(1)t
            this.head = this.head.next
            this.size--
            return value
        }else{
            let pos = this.head;
            while(pos.next && pos.next.value != value){   //o(n)t
                pos = pos.next
            }
            if(pos.next){
                const removeNode = pos.next
                pos.next = removeNode.next
                this.size --
                return value
            }
            return null
        }
    }


    // serching
    search(value){
        if(this.isEmpty()){
            return false
        }else{
            let curr = this.head;
            let i=0;
            while(curr){
                if(curr.value === value){
                    return i
                }
                curr = curr.next;
                i++;
            }
            return false
        }
    }


    // reverse
    reverse(){
        let prev = null;
        let curr = this.head
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev
    }
    

    // reversing using recursion
    reverseRecursively() {
        const reverseHelper = (current, prev) => {
            if (!current) {
                this.head = prev;
                return;
            }
            const nextNode = current.next;
            current.next = prev;
            reverseHelper(nextNode, current);
        };
  
        reverseHelper(this.head, null);
    }


    // calculating the all value sum
    sum(){
        if(this.isEmpty()){
            return null
        }
        let pos = this.head
        let sum = 0
        while(pos){
            sum += pos.value
            pos = pos.next
        }
        return sum
    }


    // finding the middle element 
    getMidd() {
        let slow = this.head;
        let fast = this.head;
    
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.value;
    }


    // printing the values
    print(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let curr = this.head
            let display = ''
            while(curr){
                display += `${curr.value} `
                curr = curr.next
            }
            console.log(display);
        }
    }
}
const list = new linkedList()
console.log('list is empty?',list.isEmpty());
console.log('list size',list.getSize());
list.print()
list.append(10)
list.print()

list.append(30)
list.append(50)
list.print()

list.insert(40,0);
list.print();
list.insert(20,0);
list.print();
list.insert(30,1);
list.print();
list.insert(50,3);
list.print();

list.reverse();
list.print();

list.removeIndex(2);
list.print()
list.removeVlue(30)
list.print()
