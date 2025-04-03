// write nodejs to create class named person by assigning name and age in form of member
// create 2 objects and a method named elder which return elder person object.
// Details of elder person should be printed in console as well as in file
const fs = require("fs");
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  displayDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
  static elder(person1, person2) {
    return person1.age > person2.age ? person1 : person2;
  }
  writeDetails(person1, person2) {
    let person = Person.elder(person1, person2);
    console.log(person.displayDetails());
    fs.writeFile("nodejs/test.txt", person.displayDetails(), (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}
const person1 = new Person("Hitesh", 70);
const person2 = new Person("Het", 58);
console.log(person1.displayDetails());
console.log(person2.displayDetails());
person1.writeDetails(person1, person2);
