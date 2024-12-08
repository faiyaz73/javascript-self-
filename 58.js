// new keyword 

function creatUser(firstname,age){
    this.firstname=firstname,
    this.age=age;
}
creatUser.prototype.about=function(){
    console.log(this.firstname,this.age);
}

// new keyword 
// 1 empty object this ={} 
// 2 return this                                                                           
// 3 Object.create(creatUser.prototype); 

const user1=new creatUser("faiyaz",23);
console.log(user1)
user1.about();
