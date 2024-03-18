class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    // Helper function to swap elements at two indices in the heap
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    
    // Function to insert an element into the heap
    insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
    } // O(log n)
  
    // Function to heapify the array from bottom to top
    shiftUp(index) {
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (this.heap[parentIndex] > this.heap[index]) {
          this.swap(parentIndex, index);
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
    // Function to heapify the array from top to bottom
    shiftDown(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallestIndex = index;
  
      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = leftChildIndex;
      }
  
      if ( rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
        smallestIndex = rightChildIndex;
      }
  
      if (smallestIndex != index) {
        this.swap(index, smallestIndex);
        this.shiftDown(smallestIndex);
      }
    } // O(log n)


    // Function to remove the top element from the heap
    remove() {
      if (this.heap.length === 0) {
        return null;
      }
  
      const removedValue = this.heap[0];
      const lastValue = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = lastValue;
        this.shiftDown(0);
      }
  
      return removedValue;
    }
  
    // Function to build a heap from an array
    buildHeap(arr) {
      this.heap = [...arr];
  
      for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
        this.shiftDown(i);
      }
    }// O(log n)
  
  
    // Function to peek at the top element of the heap
    peek() {
      return this.heap[0];
    }
  
  
    // Function to get the index of the parent of a given index
    parent(index) {
      return Math.floor((index - 1) / 2);
    }
  
    // Function to get the index of the left child of a given index
    leftChild(index) {
      return 2 * index + 1;
    }
  
    // Function to get the index of the right child of a given index
    rightChild(index) {
      return 2 * index + 2;
    }
  
    // Function to display the current state of the heap
    display() {
      console.log(this.heap);
    }
  }
  
  // Example usage:
  const heap = new MinHeap();
//   heap.insert(15);
//   heap.insert(5);
//   heap.insert(20);
//   heap.insert(10);
//   heap.insert(25);
//   heap.remove();
const arr = [10,1,2,5,70,0,8,3]
heap.buildHeap(arr)
  heap.display();