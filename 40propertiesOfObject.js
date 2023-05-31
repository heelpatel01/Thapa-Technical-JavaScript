// ////////////////////// 📍 Properties of Objects 📍 ///////////////////////

// .......Dynamic Propertey.......(We Can Used Key As A Data Using Square Brackets...)//

// let myName="Heel Patel";
// const myInfo={
//     [myName]:"Hare Krishna",
//     age:18
// }

// console.log(myInfo);

//////////////////////////////////////////////////////////////////////////////////////////////////
//........no need to write key and value both if both are the same................

// const mName="heel",age=18;


// const myInfo={
//     mName:mName,
//     age:age
// }
// console.log(myInfo);

//insted of it you can also write simple only keys

const mName="heel",age=18;

const myInfo={mName,age}
console.log(myInfo);