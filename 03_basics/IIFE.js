//Immediately Invoked Function Expressions
//To eliminate the globale scope pollution elimination we use IIFE

(function chai(){
    //This is named IIFE
    console.log(`Db Connected`)
}) ();   //first ()is used to define the functiona and make a seperate block and second () is used for execution

( (name)=>{
    console.log(`Db Connectedsss ${name}`)
}) ('Vishnu')