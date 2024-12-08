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
        const user=Object.create(usermethods);
        user.firstName=firstName;
        user.lastname=lastname;
        user.gender=gender;
        user.age=age;
        user.Email=Email;
        user.address=address;
        return user;
    }

    const user1=creatUser("faiyaz","ansari","male",83,"faiyaz@87623","deoria");
    const user2=creatUser("firoj","ansari","male",53,"amit@4323","deoria");
    const user3=creatUser("mohit","yadav","male",30,"rakesh@987123","deoria");
    const user4=creatUser("aakash","yadav","male",23,"anil@166523","deoria");
    console.log(user1);
    console.log(user2);
    console.log(user3);
    console.log(user4);
    console.log(user1.abourt());
    console.log(user2.abourt());
    console.log(user3.abourt());
    console.log(user4.abourt());
    console.log(user4.sing());