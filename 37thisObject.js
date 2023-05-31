// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// this Keyword:- 
// In JavaScript, the this keyword refers to an current object...
// But if there is not Object so by Default it will refer to Global Window Object...
// this keyword doesnt works in Fatt Arrow Function

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(this)  //By default windows targeted

// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// -- ...By Default will call to Global windows objects Because it is not defined under object... -- // 

// function Myname(){
//     console.log(this);
// }
// Myname();


// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// ✅✅✅

// var myName = 'Heel';
// function myNames(){
//     console.log(this.myName);
// }

// myNames();

// //////////////////////////////////////////////////////////////////////////////////////////////////////////


// const myInfo={
//     name:'Heel',
//     thiss(){
//         console.log(this);
//     }
// }

// myInfo.thiss();


// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// 📍 in Fatt Arrow function it doesn't works

// const myInfo = {
//     name: 'Heel',
//     thiss: () => {
//       console.log(this);
//     }
//   }
  
//   myInfo.thiss();
  

// //////////////////////////////////////////////////////////////////////////////////////////////////////////


const myInfo={
  name:"Heel",
  moreInfo:{
    clgName: "Parul",
    degree: "B.tech"
  },
  getData:function myData(){
    console.log(`My Name Is ${this.name} and i am studying at ${this.moreInfo.clgName}`);
  },

  getdata2(){
    console.log(`and pursuing ${this.moreInfo.degree}.`)
  }
}

const techBurn1=myInfo.getData();
const techBurn2=myInfo.getdata2();