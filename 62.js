// class 
// class is a fake keyword
// without new function not work class 


class createUser{
    constructor(firstName,lastname,gender,age,Email,address){
        console.log("class called");
        console.log("class called");
        console.log("class called");
        this.firstName=firstName;
    this.lastname=lastname;
    this.gender=gender;
    this.age=age;
    this.Email=Email;
    this.address=address;
    }
    abourt(){
        return `${this.firstName} is ${this.age} yeal old`;
    }
    is18(){
        return this.age >=18;
    }
    sing(){
        return 'how are u sir';
    }
    nice(a){
        console.log(a);
    }
}
const user1=new createUser("faiyaz","ansari","male",23,"faiyaz@123","deoria");
const user2=new createUser("prince","ansari","male",20,"aiyaz@123","deoria");
console.log(user2)
console.log(user1.firstName)
console.log(user1.sing());
console.log(user1.is18());
console.log(Object.getPrototypeOf(user1))

user1.nice("arman");