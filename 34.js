// block scope  vs function scope 
// let and const are block scope 
// var is function scope 
// default parameter 

// {
//     let name="faiyaz ansari";     // this is a block 
// }

// {
//     const name="prince"
//     console.log(name)
// }
// {
// const name="faizy khan"
// console.log(name)
// }


// if(true){
//     let name ="faiyaz"
//     console.log("hlo how are u sir")
//     console.log(name)
// }

// function app(){
//     if(true){
//     var name="faiyaz ansari"
//     console.log(name)
//     }
//     if(true){
//         console.log(name)
//     }
//     if(true){
//         console.log(name)
//     }
// }
// app();

// function add(a,b){
//     if(typeof b==="undefined"){ // this statement is a NaN solution
//         b=0;
//     }
//     return a+b;
// }
// console.log(add(4,6))  // only a parameter define but b not define erroe of NaN 
// p=add(56,7)
// console.log(p)


// second methods of b value set 

// function add1(a,b=0){
//     return a+b;
// }
// const ans=add1(5)
// console.log(ans)




// rest parameters 

// function myfunc(a,b,...c){       // ... is a hole value include in c parameter in list                                                           
//     console.log(` a is a ${a}`)
//     console.log(` b is b ${b}`)
//     console.log(` c is a ${c}`)

// }
// myfunc(2,3,4,7,9,5,87,54,89);

//  this is a rest parameter 
// function addall(...numbers){
//     let total=0;
//     for(let number of numbers){
//         total=total+number;
//     }
//     return total;
// }
//  console.log(addall(1,2,3,4,5,6,7))
