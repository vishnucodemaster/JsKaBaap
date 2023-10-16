//falsy values
// false,0,-0,0n(BigInt),null,undefined,NaN

//Truthy values
//"0" 'false'," ",[],{},function(){}
//empty array is true empty object is true
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
// console.log("Object is empty")
// }

//Nullish Coalescing operator(??):null undefined

let val1;
val1 = 5 ?? 10
valu1 = null ?? 10
console.log(valu1);
valu2 = null ?? 10 ?? 20 //here first value is assigned
console.log(valu2);
