//Dates
let mydate = new Date("01-14-23")
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(mydate.getTime())


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(`${newDate.getMonth()}`)

newDate.toLocaleString('default',{
    weekday:"long",
})
