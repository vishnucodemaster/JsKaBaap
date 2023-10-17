const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map() //Only unique value stored in map and It will be in same order as how we insert
map.set('IN',"India")
map.set('USA',"America")
map.set('FR',"France")
console.log(map);

for (const [key,value] of map) {
    console.log(key, value);
}