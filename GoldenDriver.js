import Golden from './Golden.js';

const golden1 = new Golden("Buddy", 5, "Golden Retriever", "Tennis ball");

console.log(golden1.toString());

console.log(golden1.rollOver());

golden1.favoriteToy = "Rope";
console.log(golden1.toString());

golden1.name = "John";
golden1.age = 4;
console.log(golden1.toString());
