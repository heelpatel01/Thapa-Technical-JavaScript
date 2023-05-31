// /////////////////////////////////////////////////////////////
//OBJECT ...literals:-
//Combination of key and value ...it can be combination of variable and function also...

// let bioData={
//     name:"Shinchan",
//     age:5,
//     getData: function(){
//         console.log(`My Name Is ${bioData.name} and my age is ${bioData.age}`);
//     }
// }

// bioData.getData();

// /////////////////////////////////////////////////////////////
//IN ECMA SCRIPT 2015 update

// let bioData2={
//     name:"Heel Patel",
//     age:18,
//     getData(){
//         console.log(`My Name Is ${bioData2.name} and my age is ${bioData2.age}`);
//     }
// }

// bioData2.getData();

// /////////////////////////////////////////////////////////////
//OBJECT as a value

let bioData3={
    myName:{
        realName:"Heel Patel",
        nickName:"Heelu"
    },
    age:{
        realAge:18,
        endAge:80
    },
    HareKrishna: "HareKrishna"
}

console.log(bioData3.myName.nickName);
