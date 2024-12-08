// methods

// function inside object this called is method 

// const person={
//     name:"faiyaz",
//     age:3,
//     abourt: function(){
//         console.log("person name is ",this.name, "age is ",this.age);
//     }
// }
// person.abourt();


// function ko bahar use kaise krege and this ka uses 


function personifo(){
    console.log("person name is ",this.name,"age is person",this.age)
}


const person1={
    name:"ehsan",
    age:20,
    abourt:personifo
}
const person2={
    name:"amit kumar",
    age:30,
    abourt:personifo
}
const person3={
    name:"aakash yadav",
    age:25,
    abourt:personifo
}
const person4={
    name:"ratnesh tiwari",
    age:34,
    abourt:personifo
}

person1.abourt();
person2.abourt();
person3.abourt();
person4.abourt();

