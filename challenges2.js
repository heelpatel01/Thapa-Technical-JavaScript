//1.find the sqaure root of each elements
// let nums=[9,4,25,36,64]

// let nums=[9,4,25,36,64]
// let varName=(nums.map((elems)=>{
//     return Math.sqrt(elems);
// }))

// console.log(nums);



//2.multiply each element by2 and return only those elements which are greater than 10
//let arr=[2,3,4,6,8]

let arr=[2,3,4,6,8]
console.log(arr.map((currVal)=>currVal*2).filter((currVal)=>currVal>10));