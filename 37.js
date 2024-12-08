// important array methods 

// foreach 
// Map
// filter 
// reduce 


// const numbers=[5,7,6,9,10];
// function multipyby2(number,index){
    // console.log(`index is ${index} number is ${number}`)
    // console.log(`${number}*2=${number*2}`)
// }
// multipyby2(numbers[0],0)
// multipyby2(numbers[1],1)
// multipyby2(numbers[2],2)
// multipyby2(numbers[3],3)
// multipyby2(numbers[4],4)

// for(let i=0; i <numbers.length;i++){
// // console.log(i)
// multipyby2(numbers[i],i)
// }

// foreach work 

// numbers.forEach(multipyby2);


// numbers.forEach(function(number){
//     console.log(number*2);
// })

// realistic example 


// const users=[
//     {firstname:"faiyaz ansari", age:22,gender:"male"},
//     {firstname:"firoj ansari", age:25,gender:"male"},
//     {firstname:"prince ansari", age:27,gender:"male"},
//     {firstname:"meraj ansari", age:20,gender:"male"},
//     {firstname:"arman  ansari", age:30,gender:"male"},
// ]

// users.forEach(function(user){
//     console.log(user.firstname)
//     console.log(user.age)
// }
// );

// arrow function 

// users.forEach((user,index,gender)=>{
// console.log(user.firstname,index,gender)
// })



// for(let user of users){
//     console.log(user.firstname,user.age,user.gender)
// }

    
// map methods 

// const numbers =[3,4,5,6,7,8]
// const square=function(number,index){
//     // return number*number;
//     // or
//     return  `index:${index},${number*number}`;

// }

// const arrowsqare=(number)=>{
//     return number*number;    arrow function create
// }




// const squarenumber=numbers.map(square)
// // const squarenumber=numbers.map(arrowsqare)  arrow function
// console.log(squarenumber)


// realistic example 

// const users=[
//         {firstname:"faiyaz ansari", age:22,gender:"male"},
//         {firstname:"firoj ansari", age:25,gender:"male"},
//         {firstname:"prince ansari", age:27,gender:"male"},
//         {firstname:"meraj ansari", age:20,gender:"male"},
//         {firstname:"arman  ansari", age:30,gender:"male"},
//     ]

// const username =users.map((user)=>{
//     return user.firstname;
   

// })
// console.log(username)


// filter method 

// const numbers=[14,50,7,10,65,34];

// const iseven=function(number){
//     return number%2===0;
// }
// const even=numbers.filter(iseven)
// console.log(even)


