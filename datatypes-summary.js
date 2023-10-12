//Primitive 
//7 types:String,Number,Boolean,null,undefined,Symbol,BigInt
const score = 10
const sc=10.02

const id=Symbol('123')
console.log(id);

const bigNumber = 34448484848484n




//Reference (Non Primitive)

//Array,Objects,Functions

const heroes = ["shakti","bamier"]
let my={
    name:"Vishnu",
    age:22,
}

const y=function(){
console.log("hi")
}

//Stack memory is used in primitive datatype
//Heap used in non primitive datatype
let myYoutubename = "Visnu"

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo =userOne
userTwo.email="ma@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)