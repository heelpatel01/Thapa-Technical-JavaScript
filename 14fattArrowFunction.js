//this is normal function where we CAN USED(call) FUNCTION before initialization 

// sum();
// function sum(){
//     console.log("Earn Now");
// }

// ---------------------------------------------------------

//fattle arrow function
//Here we can't used or call it before initilizing

sum();  //ReferenceError: Cannot access 'sum' before initialization

const sum = () =>{
    let a=5 ;b=10;
    console.log(a+b);
}
