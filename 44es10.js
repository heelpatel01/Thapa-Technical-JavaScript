//1.Array.prototype.{flat,flatMap}
//flat() is a new array instance method that can create a one-dimensional array from a multidimensional 
// array.

// const arr=[1,2,[3,4],[5,6]];
// console.log(arr.flat());  //it is just able to conver only 2d to 1d

//for converting more D to 1D we have to pass that number as an argument or pass "Infinity" as an argument

// const arr2=[1,2,[3,4,[5,6]],[7,8,[9,10],[11,12]]]
// console.log(arr2.flat(2))

// const arrIn=[1,2,[3,4,[5,6,[7,8,[9,10],[11,12]]]]]
// console.log(arrIn.flat(Infinity))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.Object.fromEntries()  (for converting that enries array to back to normal(object) means)
// Array => Object

const myInfo={mName:"Heel",age:18};
const eMyInfo=Object.entries(myInfo);      // [ [ 'mName', 'Heel' ], [ 'age', 18 ] ]
console.log(Object.fromEntries(eMyInfo)); //{mName:"Heel",age:18}
