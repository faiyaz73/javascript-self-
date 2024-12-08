// function hellow(){
//     console.log(" my name is faiyaz ansari");

// }
// hellow();
// hellow.call();  // aap call function ka v use kr sakte h 

// call, apply, and  bind  use


// const user1={
//     name:"faiyaz ansari",
//     age:23,
//     abourt:function(){
//         console.log(this.name,this.age);
//     }
// }
// const user2={
//     name:"firoj ansari",
//     age:30,
// }

// user1.abourt.call(user2);


// ab dekhate h function ke andar parameter kaise pass krege 



// const user1={
//         name:"faiyaz ansari",
//         age:23,
//         abourt:function(hobby,fevgame){
//             console.log(this.name,this.age,hobby,fevgame);
//         }
//     }
//     const user2={
//         name:"firoj ansari",
//         age:30,
//     }

//     user1.abourt.call(user1,"study","football");


// function  ko bahar kaise pass krege 

// function hellow(hobby,fevgame){
//     console .log(this.name,this.age,hobby,fevgame);
// }


//  const user1={
//     name:"faiyaz ansari",
//     age:23,
// }
// const user2={
//     name:"firoj ansari",
//     age:30,}

//     // call use 

// hellow.call(user1,"video additing","cricket")

// // apply ka use array ke andar element ka use krte  h 

// hellow.apply(user2,["guiter","kabddi"]);

// // bind  only function return krega 

// const func=hellow.bind(user1,"writting","mobile game");
// func();







// arrow function me this use  nhi hota 

// const user={

//     name:"faiyaz",
//     rate:32,
//     abourt:()=>{
//         console.log(this.name,this.rate);
//     }

// }
// user.abourt();












