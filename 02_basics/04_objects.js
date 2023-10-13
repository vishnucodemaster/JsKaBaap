// const tinderUser = new Object() //This is a singleton object
const tinderUser = {} //This is not a singleton object

tinderUser.id ="123Test"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Vishnu"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
// const obj3 = {obj1 ,obj2}//here target is obj1 and source is obj2
const obj3 = Object.assign({},obj1,obj2)//here target is {} and source is obj1 , obj2 this much better syntax

const obj4 = {...obj1,...obj2}
console.log(obj3) 
console.log(obj4) 

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename:"Js in English",
    price:"999",
    courseInstructor:"Vishnu"
}

// course.courseInstructor

// const {courseInstructor} =course
const {courseInstructor:instructor} =course //you can destructure and give any name u want
console.log(instructor)