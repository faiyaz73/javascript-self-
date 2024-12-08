// getter and setters uses 
class person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    get fullname(){
        return `firstname ${this.firstname} is a lastname ${this.lastname} is a age ${this.age}`;
    }
    setName(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=30;
    }

}
const person1=new person("faiyaz","ansari",23);
// console.log(person1)
console.log(person1.firstname)
console.log(person1.lastname)
console.log(person1.age)

// console.log(person1.fullname()); // es ke jgha pr full name ke ke methods me get ka use krte h

// console.log(person1.fullname)

// object bnane ke bad person ka first name and last name change krne ke liye set methods use krte history

// person1.setName("firoj","khan","30");

// es trh se v add kr sakte h 

person1.firstname="firoj";
person1.lastname="khan";
person1.age=40;
// console.log(person1.firstname);
// console.log(person1.lastname);
// console.log(person1.age);
