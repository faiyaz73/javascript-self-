// new keyword 
// 1 empty object this ={} 
// 2 return this                                                                           
// 3 Object.create(creatUser.prototype);

function creatUser(firstName,lastname,gender,age,Email,address){
    this.firstName=firstName;
    this.lastname=lastname;
    this.gender=gender;
    this.age=age;
    this.Email=Email;
    this.address=address;
}
creatUser.prototype.abourt=function(){
return `${this.firstName} is ${this.age} yeal old`;
};
creatUser.prototype.is18=function(){
return this.age >=18;
};
creatUser.prototype.sing=function(){
return 'how are u sir';
}
const user1=new creatUser("faiyaz","ansari","male",83,"faiyaz@87623","deoria");
const user2=new creatUser("firoj","ansari","male",53,"amit@4323","deoria");
const user3=new creatUser("mohit","yadav","male",30,"rakesh@987123","deoria");
const user4=new creatUser("aakash","yadav","male",23,"anil@166523","deoria");


console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

console.log(user1.is18());


console.log(user1.abourt());
console.log(user2.abourt());
console.log(user3.abourt());
console.log(user4.abourt());
console.log(user4.sing());