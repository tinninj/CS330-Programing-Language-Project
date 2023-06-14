//for loop
let i = 0;

for(i; i < 5; i++){//condition: as long as i is less than 5, the loop will print i
    console.log(i);//output: 0 1 2 3 4
}

//while loop
let j = 5;

while(j < 10){//condition: as long as j is less than 10, the loop will print j
    console.log(j);//output: 5 6 7 8 9
    j++;
}


//do..while loop

let k = 10;

do{
    console.log(k);//output: 10 11 12 13 14
    k++;
}
while(k < 15);

//for..of loop

const myMap = new Map(); // created a Map which is an object
myMap.set("student name", "Joe");//added elements to the map
myMap.set("age", 21);
myMap.set("course", "Intro to CS");


for (let [key, value] of myMap){//loop iterates through the map and prints the key and the value
    console.log(key + " : " + value)
}

//for..in loop

const obj = {//creates a JavaScript object
    name: "Jack",
    age: 20,
    course: "Computer Architecture"
}


for (let key in obj){//loop iterated through elements in object and prints them out
    console.log(key + " : " + obj[key])//this syntax is required to print out the values assigned to each key
}

//function

function addNum(num){//single parameter is passed into the function
    return num + num;
}

//call functions with the function name and by entering a parameter/argument in the parenthesis 
output = addNum(2);
console.log(output);//output: 4

//function with multiple parameters

function multipleNum(x, y){
    return x * y;
}

result = multipleNum(2,4)
console.log(result);//output: 8

//function that splits string, returns both strings

function splitString(str){
    let strLength = str.length; //get length of the string
    let middle = Math.floor(strLength/2);  //Math is a method in JavaScript. Math.floor allows 
    
    let firstHalf = str.slice(0, middle);
    let secondHalf = str.slice(middle);

    return [firstHalf, secondHalf];
    
}

stringOutput = splitString("What's up?"); 
console.log(stringOutput); // Output: ['What', 's up?']

//recursive function

function factorial(z){
    if (z === 0 || z ===1){ //this statement is the base case
        return 1;
    }
    return z * factorial(z -1); // this is the recursive case
}

let recurNum = 7;
let recurResult = factorial(recurNum);
console.log(recurResult); // Output: 5040



//demonstration of pass by value

function passValue(value){
    value = 32; //value = 32 within the function
}

let newValue = 23;
passValue(newValue);
console.log(newValue);//output: 23


//Arrow function

let sum = (a,b) => a + b; //a function that adds two values is created 

let t = 6;
let u = 7;

sumResult = sum(6,7);
console.log(sumResult);//output: 13
