// Scope chaining:- Means By just noticing varibale name we can guess what data will be there...
// exmaple PI=3.142

//Lexical Scope
//:- Means inner function can used Parent functions properties(Variable) but Vice Versa doesn't works.

// Example:-

let a="Hare Krishna, ";
let parent=()=>{
    let b="Radhey Radhey, ";
    let child=()=>{
        let c="Jay Shree Ram...";
        console.log(a+b+c);
    }
    child();
    // console.log(a+b+c); //can't use bcz "C"
    //We Can't Access here variable "c" bcz its defined under child function...and we are now at parent function
}
parent();