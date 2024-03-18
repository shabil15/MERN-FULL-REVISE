// Counstructor function
function Student (name, age){
    this.name = name;
    this.age = age;
    
    this.print = function(name, age){
        console.log(`My name is ${name} i am ${age} years old`)
    }
}

// creating a instance for the constructor funvtion
const std = new Student()
std.print('Adhil',24)

// cheking the instance of
console.log(std instanceof Student)
console.log(std instanceof Object)