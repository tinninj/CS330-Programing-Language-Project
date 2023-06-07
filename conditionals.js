//if...else statements

let x = 5;
if (x > 4) {
    console.log("That number is greater than 5."); // will output
} else {
    console.log("That number is not greater than 5."); // will not output
}

let z = true; ///conditionals can test booleans
if (z === true){ //JavaScript requires the use of a double or  triple equal sign for comparisons
    console.log("True"); //output: True
}
else{
    console.log("False");
}

//else...if statements
let age = 17;
let permission = false;

if (age > 18) {
    console.log("You can go on the field trip."); // runs if the age is over 18
} else if (permission === true) { // runs if the first condition isn't met
    console.log("You can go on the field trip.");
} else { // runs if the first two conditions were not met
    console.log("You can not go on the field trip. Sorry.");
}

//ternary operators
const ageD = 16;
const drive = age >= 16 ? "You can drive." : "Ask you parents to take you"; //similar to an if else statement but one line
console.log(drive); //output: "You can drive"

//switch statement
const weather = "rainy";

switch(weather){//The switch function is followed by the condition in parentheses
    case "sunny"://each case is compared to the value inputted by the user
        console.log("Put on some sunscreen!"); //The value is only printed if the input matches the case
        break;//each case ends with a break so that the code stops running
    case "rainy":
        console.log("Make sure you wear your jacket and bring a umbrella!");
        break;
    case "windy":
        console.log("Make sure you wear your windbreaker!");
        break;
    case "snowy":
        console.log("Wear coat and scarf!");
        break;
    default:
        console.log("I guess you can wear whatever you want!");

}

//circuit logic using AND
let l = 5;
let m = -7;

if( l < 0 && m < 0){ //both numbers must be less than 0
    console.log("Both are negative numbers."); 
}else{
    console.log("At least one of these numbers is positive."); // Output: At least one of these numbers is positive.
}



let result = l < 0 &&  m < 0;
console.log(result); //output: false since the first condition is not met

//circuit logic using OR
let nextResult = l < 0 ||  m < 0;
console.log(nextResult); // output: true since only one condition has to be met


let cat = true;
let dog = true;

let pets = cat || dog;
console.log(pets); // output: true
