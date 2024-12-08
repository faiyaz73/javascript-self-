//  agr hme key sirf  print krani h to 



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

// key sirf print krani h 


// for(let hh in user1){
//     console.log(hh)

// }


// methods ke bad wali key print nhi krani h 

for(let key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    };
}






