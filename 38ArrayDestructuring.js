// Array Destructuring
// ////////////////////////////// NOT NEED TO DO THIS //////////////////////////////
// const myInfo=["Patel","Heel",18];
// const myFName=myInfo[0];
// const mySName=myInfo[1];
// const myAge=myInfo[2];
// console.log(myAge);
// ////////////////////////////// INSTED OF THIS USED DESTRUCTURING ////////////////
// const myInfo=["Patel","Heel",18];
// const [myFName,mySName,myAge]=myInfo;
// console.log(myAge);
// ////////////////////////////// WE CAN ADD VALUE TOO /////////////////////////////
const myInfo=["Patel","Heel",18];
const [myFName,mySName,myAge,myDegree="B.tech"]=myInfo;
console.log(myDegree);
