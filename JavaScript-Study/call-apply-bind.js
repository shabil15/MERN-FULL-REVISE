const student = {
    firstName:'Adhil',
    lastName:'Ali'
}

const fullName = function(place,age){
    console.log(`${this.firstName} ${this.lastName} from ${place} ${age} years old`);
}

const student2 = {
    firstName:'Thahir',
    lastName:'Muhammed'
}

fullName.call(student,'Kappil',24)
fullName.apply(student2,['calicut',26])

const bindStudent = fullName.bind(student,'Kappil',24)
bindStudent()