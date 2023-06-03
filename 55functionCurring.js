//Multiple Function With Diffrent Parameter
// Example:-1) Using Anynomys Function

// function sum(a){
//     return function(b){
//         return function(c){
//             console.log(a+b+c);
//         }
//     }
// }

// sum(10)(20)(30);

// Example:- 2) Using Fatt Arrow Function

const sum=(a)=>(b)=>(c)=>{console.log(a+b+c)}
sum(10)(20)(30);