function greetPerson(name,age){
    return {
        name,
        age,
        greet:function(){
            console.log(name,age)
        }
    }
}

let p1= greetPerson('adhil',34)
p1.greet()
