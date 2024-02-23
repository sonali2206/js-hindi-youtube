// Immediately Invoked Function Expressions IIFE

(function chai(){
    console.log("DB connected");
})();

// ()();
//first parantheses is decelaration & second one is execution 
// the secret sauce for encapsulating code and maintaining a clean global scope
//global scope pplution cretaes problem, to clean/ clear global scope variables & declarations 
( (name) => console.log(`DB CONNECTED TWO ${name}`))('sonali')

// - Two iife - semicolon 
// - Named iife - (function  name(){…})()
// - Arrow - (()=>{})()
// - Param - ( (name) => {console.log(`DB CONNECTED TWO ${name}`)} )('sonali')