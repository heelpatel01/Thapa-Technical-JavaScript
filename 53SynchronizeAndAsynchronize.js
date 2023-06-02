//Synchronize:-
//It Performs Task Sequence wise...means first come first serve ...Completion time doesnt matter
//Example:-
// p1 -->10 minutes
// p2 -->5  minutes
//it will complete firstly p1 task...after that p2...that's called synchronize

// const fun2=()=>{
//     console.log("Hello Dude!");
// }

// const fun1=()=>{
//     console.log("Jay Shree Ram");
//     fun2();
//     console.log("Jay Shree Krishna");
// }

// fun1();


// Asynchronize is good ... it perfoms task based on complition time...

// const fun2=()=>{
//     setTimeout(()=>{
//         console.log("Radhey Radhey😊")
//     },2000)    
// }

// const fun1=()=>{
//     console.log("Jay Shree Ram");
//     fun2();
//     console.log("Jay Shree Krishna");
// }

// fun1();