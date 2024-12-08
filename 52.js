// const user={
//     first:"faiyaz",
//     lastname:"ansari",
//     age:23,
//     gender:"male",
//     id:234,
//     address:"Dogari rajmal matiyara jagdish deoria",
//     abourt:function(){
//      return `${this.first} is ${this.age} year old`;
//     },
//     is18:function(){
//         return this.age >= 18;
//     }
// }
// const abourtuser=user.abourt();
// console.log(abourtuser)



// agr user1 ,user2 ... ... .. aishe bhut sare bnane pdege hr ek user Ka 
// details bhut tedish ho jaega  
// es ke liye ek better aprose krege us ke liye hum function bnaege 

// function  bnaege or function as a input lega  or return krega ek object


// 1 function (that function create object)
// 2 add key value pair 
// 3 object ko return krega 




function creatUser(firstName,lastname,gender,age,Email,address){
    const user={};
    user.firstName=firstName;
    user.lastname=lastname;
    user.gender=gender;
    user.age=30;
    user.Email=Email;
    user.address=address;
    user.abourt=function(){
        return `${this.firstName} is ${this.age} yeal old`;
    },
    user.is18= function(){
         return this.age >=18;
    }
    return user;
    }
    const user1=creatUser("faiyaz","ansari","male",23,"faiyaz@123","deoria");
    console.log(user1)
    const is1822=user1.is18();
    console.log(is1822)
    const abourt=user1.abourt();
    console.log(abourt);
