// object inside array (in the array store object or in the object store of array)
// very usefull in real world applications

// const users=[
//     {
//         userId:1,firstName:"faiyza ansari",
//     gender:"male",
//     age:22

//     },
//     {userId:2,firstName:"firoj ansari",gender:"male",
//     age:44,

//     },
//     {
//         userId:3, firstName:"somya",gender:"female",
//         age:50
//     }
// ]
// console.log(users);

// loop use

// for(let user of users){
//     // console.log(users);
//     console.log(user.userId); //print only user id 
//     console.log(user.firstName); //print name first name 
// }

// nested destrurturing 

// const[user1,user2,user3]=users;  // user 1 ,user 2 user3 is a variable name
// console.log(user1);
// console.log(user2);
// console.log(user3);

// only print first name or gender  

// const[{firstName}, , {gender}]=users; // , , is a second object blanck 
// console.log(firstName);
// console.log(gender);