

if(true){
    let a = 10
    const b = 20
    var c = 30
}

console.log(c) //only var can be printed but let const cannot be printed since its outside the scope

function one (){
    const username = "Vishnu"

    function two(){
        const website = "Youtue"
        console.log(username);
    }
    console.log(username);
    // console.log(website);//Out of scope that is in callstack it is not there 
    two()
}
one()

//***** */
console.log(addone(6))
function addone(num){
    return num + 1 
}


// console.log(addTwo(8))
// const addTwo = function(nums){
//     return num +2
// }
