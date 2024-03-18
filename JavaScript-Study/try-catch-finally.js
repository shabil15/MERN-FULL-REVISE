function ErrorHandling(num1, num2){

    try{
        if(num2 === 0){
            throw Error ('Division by zero is not allowed')
        }
         return console.log(num1/num2);
        
    }catch(err){
        console.log('Erro: ',err.message)
    }finally{
        console.log('Division operation is completed')
    }

}

ErrorHandling(10,2)


// checking which error is comimg using instenceof
try{
  throw Error('new error fund')
}catch(err){
    if(err instanceof SyntaxError){
        console.log('this is a syntax error');
    }else if(err instanceof TypeError){
        console.log('this is a type error');
    }else{
        console.log('it is some other type error');
    }
}