// Maps 
// map is a iterable
// store data in ordered  fashion 
// store key value pair (like object) 
// dublicate keys are  not allowed like objects 

// different between maps and objects 
//  objects can only have string or symbol 
//  as key 
//  in maps you can use anything as key 
//  like array, number and string 
// object->literal 
// key-> string 
// key-> symbol


// const person={
//     firstName:"firo ansari",
//     gender:"male",
//     1:"one"
// }
// console.log(person.firstName)
// console.log(person.gender)
// console.log(person["firstName"]);
// console.log(person["gender"]);
// console.log(person["1"])
// for(let key in person){
//     console.log(typeof key);
// }


// maps 

// key value pair

// const person=new Map();

// person.set("name","faiyaz");
// person.set("age",23);
// person.set("Gender","male");
// console.log(person);
// console.log(person.get("name")) // only name value come in
// console.log(person.get("age")) 
// console.log(person.get("Gender"))

// console.log(person.keys()) // only keys come in keys function 
// console.log(person.values())  // only values come in values function 

// loop 

// for(let mm of person.keys()){
//     console.log(mm,typeof mm);
    
// }
// for(let nn of person.values()){
//     console.log(nn)
// }

// const  person1={
//     Id:1,
//     Name:"faiya"
//     }

//     const extra=new Map()

// extra.set(person1,{gender:"male",age:23})

// console.log(extra)
//     console.log(person1.Id)
//     console.log(extra.get(person1).gender)


