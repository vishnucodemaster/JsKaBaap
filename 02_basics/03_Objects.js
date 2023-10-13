// singleton 
//object create

//object literals


const mySym = Symbol("key1")
const JsUser = {
   name:"Vishnu",
   age:22,
   "full name":"VishnuKanth",
   [mySym]:"myKey1",//this is the syntax to be used
   location:"Mangalore",
   email:"vishnu@gmail.com",
   isLoggedIn:false,
   lastLogindays:["Monday","Saturday"]
}
console.log(JsUser.email)//Using dot we cannot access full name
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser[mySym])

// Object.freeze(JsUser)//It will not allow to change 
// JsUser.email = "bosss@gmail.com"
// console.log(JsUser["email"])
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js User,${this.name}`);
}
console.log(JsUser.greeting)//This is output [Function (anonymous)]
console.log(JsUser.greeting())
console.log(JsUser.greeting2())