// ======= Factorial ========
function factorial (n){
    let fac =1
    for(let i=n; i>0; i--){
       fac *= i
    }
    return fac
}


// ======= Prime ========
function prime (n){

    if(n<2)return false

    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i==0)return false
    }
    return true
}  // big o = o(n)


// ======= power of two ========
function powerOf2 (n){

    if(n<1){
        return false
    }
   
   // comparing with bitwise operation
   return (n & (n-1)) === 0
}


// ======= fibinachi ========
function fibinachi(n){
    
    let feb = [0,1];

    for(let i=2; i<n; i++){
        feb[i] =feb[i-1] + feb[i-2];
    }
    return feb
} 


// recursive fibinachi
function recFibinachi(n){
    if(n<=2){
        return [0,1]
    }else{
        let fib = recFibinachi(n-1)
        fib.push(fib[fib.length-1]+fib[fib.length-2]);
        return fib
    }
}


// ======= Factorial using recuation ======== 
function recfactorial(n){  

    if(n===0){
        return 1
    }

    return n*recfactorial(n-1)

} 


// ======= linear search ========
function linearSearch(arr,n){  
    let r = -1

      arr.forEach((v,i)=>{
        if(v===n){
            r = i
        }
    })
    
    return r

} 


// ======= binary search ========
function BinarySearch(arr,n){  

    let right = arr.length-1;
    let left = 0
    let midd 

    while(left<=right){
       midd = Math.floor((right+left)/2);
       if(n===arr[midd]){
        return midd
       }else if(n<arr[midd]){
         right = midd-1
       }else{
         left = midd+1
       }
    }
    return false

} 


// binary search using recursion
function recSearch(arr,v){
    return search(arr,v,0,arr.length-1)
}

// function search(arr,v,lef,rig){
//     if(lef>rig){
//         return false
//     }
//     let midd = Math.floor((rig+lef)/2)
//     if(arr[midd] === v){
//         return midd
//     }
//     if(arr[midd]>v){
//         return search(arr,v,lef,midd-1)
//     }else{
//         return search(arr,v,midd+1,rig)
//     }
// }


function binSearch(arr,v){
    return(arr,v,0,arr.length-1)
}

function search(arr,v,lef,right){'}

// string reversing using recursion
const str = 'Adhil'
let j = str.length-1

function revers(str,j){
    if(j < 0){
        return ''
    }
    return str[j] + revers(str,j-1)
}

console.log(revers(str,j));



// function cheking is palindrom using Recursion
function isPalindrom(str,i,j){
    
    if(i>=j){
        return true
    }
    if(str[i] != str[j]){
        return false
    }
    
    return isPalindrom(str,i+1, j-1)
    
}

// const str = '12321'
console.log(isPalindrom(str, 0, str.length-1))