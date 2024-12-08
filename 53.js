// function creatUser(firstName,lastname,gender,age,Email,address){
//     const user={};
//     user.firstName=firstName;
//     user.lastname=lastname;
//     user.gender=gender;
//     user.age=30;
//     user.Email=Email;
//     user.address=address;
//     user.abourt=function(){
//         return `${this.firstName} is ${this.age} yeal old`;
//     },
//     user.is18= function(){
//          return this.age >=18;
//     }
//     return user;
//     }
//     const user1=creatUser("faiyaz","ansari","male",23,"faiyaz@123","deoria");
//     const user2=creatUser("firoj","ansari","male",23,"faiyaz@123","deoria");
//     const user3=creatUser("mohit","yadav","male",30,"faiyaz@123","deoria");
//     const user4=creatUser("aakash","yadav","male",23,"faiyaz@123","deoria");
//     console.log(user1)
//     console.log(user2)
//     console.log(user3)


    // hr ek users ka do do method bnana hoga es se hmara code bhut
    // bda ho jaega ex user1 ke do method user2  do methods es trh se bhut 
    // long code ho jaega   es ke liye method ko upar bnaege 





    
const usermethods={
    abourt:function(){
        return `${this.firstName} is ${this.age} yeal old`;
    },
    is18:function(){
         return this.age >=18;
    },
    sing: function(){
        return 'how are u sir'
    }
}

    function creatUser(firstName,lastname,gender,age,Email,address){
        const user={};
        user.firstName=firstName;
        user.lastname=lastname;
        user.gender=gender;
        user.age=age;
        user.Email=Email;
        user.address=address;
        user.abourt=usermethods.abourt;
        user.is18=usermethods.is18;
        user.sing=usermethods.sing;
        return user;
    }

    const user1=creatUser("faiyaz","ansari","male",83,"faiyaz@123","deoria");
    const user2=creatUser("firoj","ansari","male",53,"faiyaz@123","deoria");
    const user3=creatUser("mohit","yadav","male",30,"faiyaz@123","deoria");
    const user4=creatUser("aakash","yadav","male",23,"faiyaz@123","deoria");
    console.log(user1.abourt());
    console.log(user2.abourt());
    console.log(user3.abourt());
    console.log(user4.abourt());
    console.log(user4.sing());
