const str = 'My name is Adhil'
// reverse all words (Adhil is name My)
console.log(str.split(' ').reverse().join(' '));

// reverse all single character in a word(yM eman si lihdA)
console.log(str.split(' ').map((val)=>val.split('').reverse().join('')).join(' '));

// string or array removing all dublicate
const res = str.split('').filter((val)=> str.indexOf(val) === str.lastIndexOf(val)).join('')
