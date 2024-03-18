
function fibonacci(n, memo={}){

    if(n in memo){
      return memo[n]
    }
  
    if(n<=2){
      return 1
    }
  
    const res = fibonacci(n-1, memo) + fibonacci(n-2, memo)
    memo[n]=res
    return res
  
  }
  
  console.log(fibonacci(7));