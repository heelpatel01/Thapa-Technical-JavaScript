//var ==> can used in funtion anywhere
//let,const ==> in only any particular block of code

//example of var:-

function varr(){
    var fName="Heel";
    console.log("Outer "+fName);

    if(true){
        var lName="Patel";
        console.log("inner "+lName);
    }
    
    console.log("outerInner "+fName+lName);  //here we used Variable which is declared in if's block it is 
    // possible bcz of VAR keyword...for variable declaration we can used it any where outer side of block... 
    //it is aaplicable for only if,loop...blocks...
}
varr();


//BUT IN CONST AND LET WE CAN USED IN PARTICULAR DECLARED BLOCK  ONLY...