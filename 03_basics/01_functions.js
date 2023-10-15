function sayMyName(){
    console.log("Vishnu")
}
function addNum(num1,num2){
    return num1 + num2
    console.log("Vishnu")
}

sayMyName//this is just a reference 
sayMyName()

const res = addNum(3,6)
console.log(res)

function calculateCartPrice(val1,...num1){//here in parameter we have spread operator so any number of parameter can be taken 
  return num1
}

console.log(calculateCartPrice(200,30,299))

const user = {
    username:"Vishnu",
    prices:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user)
handleObject({
    username:"Dog",
    price:10000000000000000
})