const coding = ["js","ruby","java","python"]
// coding.forEach( function name (item) {
// console.log(item);
// })
// coding.forEach(  (item) =>{
//     console.log(item);
//     })

function pint(item){
    console.log(item);
}

coding.forEach(pint)

coding.forEach((item,index,arr) =>{
    console.log(item,index,arr);
})


const myCoding = [{
    lang:"Javascript",
    langfile:"JS"
},
{
    lang:"Java",
    langfile:"java"
},
{
    lang:"Python",
    langfile:"py"
}]

// myCoding.forEach((item)=>{
//     console.log(item.lang);
// })

// const values = coding.forEach((item)=>{
//     return item
// })
// console.log(values) // this will return undefined because foreach loop will not return

const myNums = [1,2,3,4,5,6]

const newNums= myNums.filter((num)=> num>4) //without scope operator that is flower bracket you don't need to return
console.log(newNums);

const newNumss= myNums.filter((num)=> {
  return num>4

}) 
console.log(newNumss);

// const number = myNums.map((num) => { return num+10})
// console.log(number);

const numbers = myNums.map((num) =>num*10).map((num) =>num+1) //this is chaining
console.log(numbers);