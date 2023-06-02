//In js... Closure Created everytime when we create function
// It is same as Lexixal


//1️⃣

// let abs=(a)=>{
//     let b=10;
//     let sba=()=>{
//         console.log(a+b);
//     }
//     sba();
// }

// abs(5);  //output:- 15

////////////////////////////////////

// 2️⃣

// let abs=(a)=>{
//     let b=10;
//     let sba=()=>{
//         console.log(a+b);
//     }
//     return sba;
// }

// abs(5);                // output:- Nothing
// console.log(abs(5));  //output:- [Function: sba]


////////////////////////////////////////

//3️⃣

// let abs=(a)=>{
//         let b=10;
//         let sba=()=>{
//             console.log(a+b);
//         }
//         return sba();
//     }
// abs(5);   // output:- 15

////////////////////////////////////////

//4️⃣

// let abs=(a)=>{
//             let b=10;
//             let sba=()=>{
//                 console.log(a+b);
//             }
//             return sba;
//         }

// const checkClosure=abs(5);
// console.log(checkClosure);     //Output:- [Function: sba]

////////////////////////////////////////////

//5️⃣

// let abs=(a)=>{
//     let b=10;
//     let sba=()=>{
//         console.log(a+b);
//     }
//     return sba;
// }

// const checkClosure=abs(5);
// checkClosure(); //output:- 15


// // ...Inshort...Inner Function is able to access the propertey of parent function bcz of Closure where the all data going to store...
// // how we can see it?

// console.dir(checkClosure()); //Try it on Browser INSPECT...ctrl+shift+i