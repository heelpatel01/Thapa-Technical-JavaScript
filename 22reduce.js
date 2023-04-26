// multiply each element by2 and return only those elements which are greater than 10 and do addition of them
//let arr=[2,3,4,6,8]

let arr=[2,3,4,6,8];
var sum=(arr.map((curVal)=>curVal*2).filter((curVal)=>curVal>10).reduce((accumlator,curVal)=>{
    debugger;
    return accumlator+=curVal
}));
console.log(sum);

