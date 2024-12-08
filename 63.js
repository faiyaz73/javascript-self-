class animals{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} is is eatting`;
    }
    age12(){
        this.age<=1;
    }
    iscute(){
        return true;
    }

}
const animal=new animals("jaiki",70);
console.log(animal)
console.log(animal.eat());
console.log(animal.age12());
console.log(animal.iscute());