// ======== object calculation =======
const obj={
    name:'adhil',
    place:'kappil',
    'work-status':true
}

obj.work="software devoloper"
delete obj.name
console.log(obj.place);
console.log(obj["work-status"]);



// ======== set calculation =======
const arr = [1,2,34,5,6,1,2,6]
const set = new Set(arr)
console.log(set);
set.add(4)
set.delete(34)
console.log(set.has(6));
console.log(set.size);
set.clear()

for(itmes of set){
    console.log(itmes);
}



// ========== Map calculation =========
const map = new Map([['name', 'adhil'], ['place', 'wandoor']]);

map.set('age',24)
console.log(map.size);
console.log(map.has('age'));
map.delete('name')
map.clear()

for (const [key, value] of map) {
    console.log(`${key}:${value}`);
}
