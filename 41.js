// every method 

// const numbers=[2,4,6,8,10];

// function everynum(number){
//     return number %2===0;    // call back function 
// }


//  const check =numbers.every((number)=>number%2===0);
//  console.log(check)   // boolons value returns. every element check

// const val=numbers.every(everynum)   // call back function 
// console.log(val)


// const auto=[
//     {Idnumber:1,product:"mobile",price:1200},
//     {Idnumber:2,product:"tv",price:1300},
//     {Idnumber:3,product:"laptop",price:1400},
//     {Idnumber:4,product:"desktop",price:1500},
//     {Idnumber:5,product:"pen",price:1600},
// ]

// const ans=auto.every((priceam)=>priceam.price<30000)
// console.log(ans)


// some methods .. any element even return true:


// const number=[3,5,7,11,1,13];
//  const value=number.some((num)=>num%2===0)  // any number even true return
//  console.log(value)  // whole element even is return true


const usercard=[
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"tv",price:1200},
    {productId:3,productName:"desktop",price:13000},
    {productId:4,productName:"laptop",price:14000},
    {productId:5,productName:"moniter",price:15000},
    {productId:6,productName:"cpu",price:16000},
]

const ans=usercard.some((user)=>user.price >100000)  // check 10000 less all value return false
console.log(ans)








