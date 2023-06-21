export default class Dog{//export default enables us to export the class to a new file
    constructor(name,age,breed){//the constructor creates and initializes an object
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    toString(){ //toStrong is a method used in JavaScript to describe an object and its attributes in string form
        return (`${this.name} is  ${this.age} and they are a ${this.breed} . `)
    }
    
    bark(){
        return(`${this.name} says Woof Woof!`)
    }

    wagTail(){
        return("Their tail goes swoosh swoosh!")
    }

    //get is used in "getter" functions to get the value of the object's attributes
    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

    get breed(){
        return this._breed;
    }

    //set is used in "setter" functions to change the value of a object's attribute.
    set name(newName) {
        this._name = newName;
    }

    set age(newAge) {
        this._age = newAge;
    }

    set breed(newBreed) {
        this._breed = newBreed;
    }
}