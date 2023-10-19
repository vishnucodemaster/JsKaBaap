const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(acc);
//     return acc + currval
// },0)
const myTotal = myNums.reduce( (acc,currval)=>{
    console.log(acc);
    return acc + currval
},0)
console.log(myTotal);

const numbers = [15.5, 2.3, 1.1, 4.7];
document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);
}