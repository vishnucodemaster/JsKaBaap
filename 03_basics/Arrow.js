const user = {
    username:"Vinu",
    price:2000,

    welcomeMessage:function(){
    console.log(`${this.username},welcome to website`);
    // console.log(this);
    }
    
}
user.welcomeMessage()
user.username="Chinaa"
user.welcomeMessage()
// console.log(this); //here it is empty but in browser we get window object
// chai()

// function chai(){
//     let username = "akil"
//     console.log(this.username);//inside the function this don't work
// }
const chai = () =>{
    let username = "akil"
    console.log(this);//inside the function this don't work
}
chai()
// const addTwos = (num1,num2)=>{
//     return num1 + num2 
// }

const addTwos = (num1,num2)=> (num1 + num2) //if u don't write flower bracket then no need of return statement
const addTwosss = (num1,num2)=> ({username:"Vishnu"})
console.log(addTwos(3,4))
console.log(addTwosss(3,4))