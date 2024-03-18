
// const arr = [3,4,[10]]

// const sha = [...arr]

// sha[2][0]=100

// console.log(sha)

// const copy =JSON.parse(JSON.stringify(arr));

// console.log(arr)


const obj = {
    name:'adhil',
    place:'kappil'
}

const newObj = {...obj}

newObj.name = 'dkjf'

console.log(obj);
console.log(newObj);