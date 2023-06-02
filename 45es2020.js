// 1.BigInt   (normally js can handle maximum "9007199254740991" number after that if do any operation js will give wrong outputs...but  here is solution and that is bigint let see how if we want  )

// const biggestOldNum=Number.MAX_SAFE_INTEGER; //9007199254740991
// console.log(biggestOldNum)                  //9007199254740991
// console.log(biggestOldNum+8)               //9007199254741000  which is wrong
// console.log(9007199254740991+8)           //9007199254741000

//for fixing it we will used "n" after number and its data type will be BigInt
console.log(9007199254740991n+8n);  // 9007199254740999n now right ✅
const myNums=9007199254740991n+8n;
console.log(typeof(myNums));  //bigint