class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    intro(){
        console.log(`hi,my name is ${this.name},my age:${this.age}`);
    }
}

module.exports = Person