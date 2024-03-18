function outer(){
    let num1= 10
    return function inner(x){
        console.log(num1+x)
    }
}

outer()(10)
