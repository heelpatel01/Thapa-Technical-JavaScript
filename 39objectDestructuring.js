// myInfo={
//     name:"Heel Patel",
//     idol:"Shlok Shrivastva",
//     clg:"Parul",
//     age:18
// }

// const name=myInfo.name;
// const idol=myInfo.idol;

// console.log(name);

//<><><><><><><>///// Insted Of It Used Destructuring Same As ArrayDestructuring /////<><><><><><><><>//////

myInfo={
    name:"Heel Patel",
    idol:"Shlok Shrivastva",
    clg:"Parul",
    age:18
}

const {name,idol,clg,age,skill="Backend Dev."}=myInfo;
console.log(age);
console.log(skill);