const add=(a,b)=>{
    return a+b;
}
const sub=(a,b)=>{
    return a-b;
}
const div=()=>{
    return a/b;
}


//Above all are CBF     (Call Back Function)  bcz it get passed in other function as an argument
//Below Function is HOF (Higher Order Function) bcz it is accepting

const calculator=(num1,num2,operation)=>{
    return operation(num1,num2);
}

console.log(calculator(5,10,add))