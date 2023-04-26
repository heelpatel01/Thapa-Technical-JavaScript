// it returns new array without mutating orignal array
//it traverse full array...means looping by default

// const arr=[90,80,40,70,30,60,50];

// let usedOfMap=(arr.map((elem,index,arri)=>{
//     return elem>30;
// }))

// console.log(usedOfMap);



// const arr=[90,80,40,70,30,60,50];

// let mapMethod=(arr.map((nums,index,arri)=>{
//     return `number ${nums} is at ${index} which is belong to ${arri}`
// }))

// console.log(mapMethod);

const arr=[90,80,40,70,30,60,50];

let mapMethod=(arr.map((nums,index,arri)=>{
    console.log(`number ${nums} is at ${index} which is belong to ${arri}`);
}))

