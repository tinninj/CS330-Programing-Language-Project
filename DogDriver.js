import Dog from './Dog.js'; //Must use this format to import from another file. Both files should be in the same folder.

const dog1 = new Dog("Tom", 4, "Aussie");
console.log(dog1.toString());
console.log(dog1.bark())
console.log(dog1.wagTail())

dog1.name = "Carl";
dog1.age = 2;
dog1.breed = "Cattle Dog";

console.log(dog1.toString());

console.log(dog1.bark())