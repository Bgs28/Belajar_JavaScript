/**Object Oriented Programming
 * Dapat dibuat dengan 2 cara: 
 */

// 1 ==> Constructor Function
/**
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.eat = function(){
    console.log(`${this.name} is eating`);
}

const person1 = new Person('John', 30);

console.log("Name: ", person1.name); 
console.log("Age: ", person1.age);
 */

// 2 ==> ES6 Class
/**
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }
}

const person1 = new Person('John', 30);
const person2 = new Person('Bob', 25);

console.log("Name: ", person1.name); 
console.log("Age: ", person1.age);
person1.eat();

console.log("Name: ", person2.name); 
console.log("Age: ", person2.age);
person2.eat();
 */

// tonggak OOP
// 1. Encapsulation
// 2. Inheritance
// 3. Polymorphism
// 4. Abstraction

