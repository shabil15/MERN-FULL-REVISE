
// Bubble Sor
function bubbleSorting(arr){

    let swaped
    do{
        swaped = false
        for(let i=0; i<arr.length; i++){
            if(arr[i]>arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                swaped = true;
            }
        }
    }
    while(swaped)
} //O(n^2)

const arr = [-4,7,1,-2,7,0]
bubbleSorting(arr)
console.log(arr);


// insertion sorting 
function insertiionSorting(arr){
    let insert
    for(let i=1; i<arr.length; i++){
        insert = arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>insert){
            arr[j+1] = arr[j];
            j--
        }
        arr[j+1] = insert
    }
}  // O(n^2)

// const arr = [-4,7,1,-2,7,0]
// insertiionSorting(arr)
// console.log(arr);


// quick sort 
function quickSort(arr){
    if(arr.length<2){
        return arr;
    }
    let pivot = arr[0];
    let lef =[];
    let rig = [];
    for(let i=1; i<arr.length; i++){
        if(arr[i]<pivot ){
            lef.push(arr[i])
        }else{
            rig.push(arr[i])
        }
    }
    return [...quickSort(lef), pivot ,...quickSort(rig)]
}

// const arr = [4,6,1,0,10,-1,7,-4]
// console.log(quickSort(arr));

// worst case O(n^2) if it is a sorted array
// avg case O(n log n)


// merge sort
function mergeSort (arr){
    if(arr.length<2){
        return arr
    }
    const midd = Math.floor(arr.length/2);
    const lef = arr.slice(0,midd);
    const rig = arr.slice(midd);
    return merge(mergeSort(lef), mergeSort(rig))
}

function merge(lef,rig){
    const sortArry = []
    while(lef.length && rig.length){
        if(lef[0]<=rig[0]){
            sortArry.push(lef.shift())
        }else{
            sortArry.push(rig.shift())
        }
    }
    return [...sortArry,...lef,...rig]
}

//  const arr = [-4,7,1,-2,10,0]
// console.log(mergeSort(arr));
// O(n log n)  best time coplexity sorting

// selection sor
function selectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
        let min = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[min]>arr[j]){
                min = j
            }
        }
       if(min != i){
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp
       }
    }
    return arr
}

//  const arr = [-4,7,1,-2,10,0]
// console.log(selectionSort(arr));
// O(n^2)  






