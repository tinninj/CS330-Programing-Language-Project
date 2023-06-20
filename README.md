# CS330-Programing-Language-Project
Over the course of a semester, I will self learn JavaScript.

**The History of JavaScript**
====================================
JavaScript was created in 1995 by Brendan Eich. He is most famous as a co-founder of Mozilla, the company that created the popular Firefox web browser. When he worked for Netscape in 1995, they were looking to add interactivity to web pages for Netscape 2, a web browser, and that's when JavaScript was invented. JavaScript is a cross-platform, object-oriented programming language. It added many new features to web pages, such as buttons, animations, and fancy menus. While JavaScript is primarily used for web development, it can also be used for desktop applications, mobile applications, and server-side programming. Many browser-based games are also created with JavaScript. Some examples of projects that have been built using JavaScript include:


+ Google Chrome
+ Netflix
+ Twitter
+ Amazon
+ Uber


My primary resource to learn JavaScript will be the Mozilla Developer Network (MDN) documentation. It has many resources like articles and tutorials. W3schools is also a great reference with many examples. I will also reference books like "Eloquent JavaScript" by Marijn Haverbeke and "JavaScript: The Definitive Guide" by David Flanagan. 


**Getting Started in JavaScript**
====================================
Since JavaScript is the language of the web, you can actually open the developer tools in most web browsers to start programming in JavaScript. Additionally, you can create an HTML file that has a <script> tag containing JavaScript. If you open the HTML in a web browser, the JavaScript code can be interpreted and executed. You can also use Node.js, which is a JavaScript runtime that allows you to run JavaScript outside of a browser. After downloading Node.js, you can type commands into a terminal to run JavaScript code. There are also special web-based IDEs like CodePen that allow you to execute JavaScript code.
  
There is no one "recommended" programming environment for JavaScript since there are so many ways to run it. For this project, my focus will be on using the Visual Studio Code IDE to write the code and using Node.js and a web browser to run the code.

**Comments in JavaScript**
 ====================================
Comments are often used to add more information about the code and it is ignored by the interpretor. To write single line comments in JavaScript, you type to forward slashes followed by whatever you want in the comment. Here is an example of a comment:

  // This is a comment
  
 To write multi-line comments you would start the comment with /* and end with */. Here is an example of a multi-line comment:
  
  /* this is
  
  a multi-line comment */
  
 **What kind of Language is JavaScript?**
 ====================================
JavaScript is an object-oriented programming language. Due to its ability to perform type conversion, it is considered weakly typed. Additionally, JavaScript is regarded as dynamically typed. In JavaScript, variables are not directly associated with specific data types, allowing them to store various data types.
  
**Naming Conventions in JavaScript**
====================================
There are a few rules and naming conventions for JavaScript variables. First, there are reserved words that may not be used as variable names. One example of a reserved word is "break." It would not be allowed to use "break" as a variable name. Secondly, variable names cannot start with a number. For example, "31street" would not be a valid name in JavaScript, but "street31" would be. Finally, the only special characters allowed in variable names are the dollar sign ($) and underscores (_). While underscores can be used to separate words in the variable name, such as "big_green_frog," most JavaScript developers follow the convention of capitalizing every word in the variable name except for the first word and not including an underscore. This style is called camelCase, and it is also the standard in other programming languages. The variable "big_green_frog" would be written instead as "bigGreenFrog.

**Data Types**
====================================
Data types can usually fall into one of two categories: primitive and non-primitive. Primitive data types serve as the building blocks of programming languages and are typically immutable. On the other hand, non-primitive data types are more complex compared to primitive data types. They often encompass multiple values and are mutable.
  

Primitive Data Types
====================================
JavaScript has the following primitive data types:
  
+ Numbers: Represents numerical values. All numbers in JavaScript are stored as floating points. Numbers can be written both with and without decimals.
  
 ```
  let length = 5;
  let width = 6.5;

  let area = length * width;

  console.log(area); // this results in area being equal to 32.5. JavaScript would not use narrowing conversion for this. 
  ```
  
+ BigInt: Since numbers have their limitations, BigInts can be used to represent numbers lower than -2^53 - 1 and higher than 2^53 + 1.
  
    ```
  let regularNumber = 9007199254740991; // A regular number
  let bigIntNumber = BigInt("9007199254740991895"); // A BigInt number
  
  console.log(regularNumber); // Prints: 9007199254740991
  console.log(bigIntNumber); // Prints: 9007199254740991895n
   ```
  
+ Strings: Strings are used to represent text. Usually, strings consist of a sequence of characters, but they can also be empty or contain a single space.
  
  
   ```
  let firstName = "Jane";
  let lastName = "Doe";

  console.log(firstName);
  console.log(lastName);

  console.log(firstName + lastName); //you can concatenate strings in JavaScript with a plus sign(+)
  ```
  
  
+ Booleans: The Boolean data type accepts two values: true or false.
  
```
  let single = true;
  let married = false;

  console.log(single); // Prints: true
  console.log(married); // Prints: false
```
  
+ Undefined: Undefined means that a value has not yet been assigned to a variable.
  
 ```
  let childName;

  console.log(childName); //Prints: undefined 
```
  
+ Null: Null is generally used to point towards a nonexistent object. It is important to note that Null does not mean zero.
  
 ```
  let marriedName = null;
  
  console.log(marriedName); // Prints: Null
``` 
  
+ Symbol: Symbols are always unique and immutable. They are used to identify object properties, thus avoiding conflicts with other properties of the object.
  
```
  let aSymbol = ("mysymbol");

  console.log(aSymbol); // Prints: aSymbol 
 
``` 
  
Non-primitive Data types
===================
In JavaScript, some non-primitive data types are considered objects. Objects can have various properties and methods, and they are composed of key-value pairs.
  
Commons Non-primitive Data Types
==================
  
+ Arrays: Arrays are collections of different values stored under a single name. They are resizable. Each array consists of a key-value pair, with the name of the array being the key and the values being stored in the array.
  
  
  
  ```
  let exArray = [3, 6, 9];
  let anArray = ["cat", 5, 10, "dog"] //This array contains both numbers and strings but no error occurs.

  console.log(exArray);
  console.log(anArray);
  
  console.log(exArray.length); // Get array length.
  
  exArray.push(12); // Add element at the end of array
  
  exArray.pop(); // Remove element from the end of array
  
  console.log(exArray.join(", ")); // Convert array to a string with specified separator. 
  
  ``` 
  
  
  
+ Maps: Maps are similar to arrays, except that their key-value pairs are unique. A map can be an instance of an object.
  
  

  ```
  let aMap = new Map();

  aMap.set('u', '3'); //add items to maps
  aMap.set('x', '4');
  aMap.set('123','p');


  console.log(aMap.get('123')); //retrieve value based on key

  console.log(aMap.size) //get map size

  aMap.delete('x') //delete key and value pair
  
  ```

Conditional Statements
================== 
Conditional statements in programming languages exist to create more functional programs. In JavaScript, you can create conditional statements in the form of if...else and else if. Else...if statements are nested inside if...else statements. The following code is an example of an if...else conditional statement. 
  
     
      let x = 5;
        if (x > 4) {
        console.log("That number is greater than 5."); // will output
        } else {
        console.log("That number is not greater than 5."); // will not output
        }
     
The code will run if the given condition is true. If the condition is not true, the code following the else will run instead. 
  
You can also use Boolean values in conditional statements.
  
  
       let z = true; ///conditionals can test booleans
        if (z === true){ //JavaScript requires the use of a double or triple equal signs(== or ===) for comparisons
        console.log("True"); //output: True
        }else{
         console.log("False");
          }
  
 Since the code following the if statement is set to true, it should always run. In JavaScript, values are considered 'truthy' when encountered in a Boolean context. The opposite of this is 'falsy'
  
  An else if statement is added to if...else statements to include additional conditions in our program. The following code is an example of an else if statement.
  
  
      let age = 17;
      let permission = false;

      if (age > 18) {
        console.log("You can go on the field trip."); // runs if the age is over 18
        } else if (permission === true) { // runs if the first condition isn't met
        console.log("You can go on the field trip.");
      } else { // runs if the first two conditions were not met
        console.log("You can not go on the field trip. Sorry.");
        }
  
  
  
In JavaScript, there is a shorthand way to write conditionals. If you have three different choices in your program, you can use a conditional with ternary operators.
  
      const ageD = 16;
      const drive = age >= 16 ? "You can drive." : "Ask you parents to take you"; //similar to an if else statement but one line
      console.log(drive); //output: "You can drive"
  
The code checks if the person is at least 16 and then determines whether they can drive themselves or need their parents to take them. The code should print out “You can drive.” since the condition is met.  These conditional are always in the following order: 
+ the condition you’re testing
+ a question mark
+ code that runs if the condition is met and a colon
+ code that runs if the condition is not met
  

Conditionals are great when you have several choices to choose from. However, they can become quite cumbersome if you are only testing a single variable. One way to write code more easily when testing a single variable is to use a switch statement.
  
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


As seen in the code above, the switch statement takes the value of the variable and determines which code to execute based on that value. Each of the different values for the variable is referred to as a case. These cases are followed by the code that executes if the entered value matches the case. Every case is concluded with a break statement. This informs the program to stop executing further code once the preceding case is matched and executed. Without the break statement, the program may continue running, leading to incorrect results. Additionally, there is an optional default case that executes when the variable's value does not match any of the cases.
  
Another way to evaluate a condition is by using short-circuit logic. Short-circuit logic is employed to avoid unnecessary evaluations in programs. Once the program has determined the output, it ceases execution.
  
  
          let l = 5;
          let m = -7;

          if( l < 0 && m < 0){ //both numbers must be less than 0
              console.log("Both are negative numbers."); 
          }else{
              console.log("At least one of these numbers is positive."); // Output: At least one of these numbers is positive.
              }
  
          let nextResult = l < 0 ||  m < 0;
            console.log(nextResult); // output: true since only one condition has to be met
  
  
Issues with Conditional Statements
==================
While conditional statements can be useful and generally straightforward, it can sometimes be challenging to discern where one conditional statement ends and another begins. This ambiguity can result in incorrect outputs. In certain languages, issues may arise if there are indentation errors or missing parentheses. In JavaScript, curly braces are used to distinguish each conditional statement. By enclosing the conditional statements within curly braces, there is no confusion about which else belongs to which if statement, or which if statement belongs to which else. This practice ensures that the correct code is executed.

Loops
==================
Loops are a common feature in most programming languages that enable programmers to create repeatable code. They allow them to automate some tasks in their programs. JavaScript has the following kinds of loops:
    
+ For loops
  
  
  A for loop is used to iterate over a range of values. The syntax for a for loop is as follows:
      
  
      for (initialization; condition; increment) {
        statement
        }

  
The initialization statement is executed before the loop starts. The condition is checked before each iteration of the loop. If the condition is true, the code inside the loop is executed and continues until the condition becomes false. The increment statement is executed after each iteration of the loop. Here is an example of a for loop:
  
      let i = 0;

      for(i; i < 5; i++){//condition: as long as i is less than 5, the loop will print i
       console.log(i);//output: 0 1 2 3 4
        }

  
+ While loops
                   
                   
  A while loop runs as long as a condition is true. The syntax for a while loop is as follows:

  
      while (condition) {
      statement(s)
      }

 The condition is checked before each iteration of the loop. If the condition is true, the code inside the loop is executed. The loop will continue to iterate as long as the condition is true. Here is an example of a while loop:
                   
       let j = 5;

        while(j < 10){//condition: as long as j is less than 10, the loop will print j
        console.log(j);//output: 5 6 7 8 9
         j++;
          }            

  
+ Do...while loops
  
  
A do-while loop is similar to a while loop, but the condition is checked at the end of the loop instead of the beginning. The code inside the loop is guaranteed to run at least once, even if the condition is false. The syntax for a do-while loop is as follows:
  
      do {
      statement(s)
      } while (condition);
  
Here is an example of a Do...while loop:
  
  
      let k = 10;

      do{
      console.log(k);//output: 10 11 12 13 14
      k++;
      }
      while(k < 15);
                    
                    
  
+ For...of loops
                    
                    
A for...of loop is a type of loop in JavaScript that iterates over an iterable object, like an array or a map. The syntax for a for...of loop is as follows:
  
      for (element of object) {
      statement(s)
      }
  
The for...of loop will iterate over each element of the iterable object, and the code inside the loop will be executed for each element. They are an efficient way to iterate over an array, rather than using a traditional for loop. Here is an example of a for...of loop:
                    
          const myMap = new Map(); // created a Map which is an object
          myMap.set("student name", "Joe");//added elements to the map
          myMap.set("age", 21);
          myMap.set("course", "Intro to CS");


          for (let [key, value] of myMap){//loop iterates through the map and prints the key and the value
          console.log(key + " : " + value)
          }


+ For...in loops
  A for...in loop is used to iterate over the properties of an object. They syntax of a for..in loop is as follows:
  
        for (variable property in object) {
        statement(s)
        }
  
  Here is an example of a for...in loop:
                    
       const obj = {//creates a JavaScript object
       name: "Jack",
       age: 20,
       course: "Computer Architecture"
        }

       for (let key in obj){//loop iterated through elements in object and prints them out
       console.log(key + " : " + obj[key])//this syntax is required to print out the values assigned to each key
        }
  
                    
                    
Functions
==================
Functions are blocks of code that make code reusable. They can be called multiple times. Here is the syntax of a function:
      
                    
      def function_name(parameters){
      statement(s)
      }
                    

To create a function, you use the function keyword followed by the name of the function and a pair of parentheses. Inside the parentheses, you specify the arguments or parameters that the function will take. Functions can take no parameters, a single parameter, or multiple parameters. The body of the function is enclosed in curly braces. As a dynamically typed language, JavaScript allows for the usage of different data types as parameters in the same function. Here are two different examples of a function. One takes a single parameter and the other takes two. 
                    
      function addNum(num){//single parameter is passed into the function
      return num + num;
      }

      //call functions with the function name and by entering a parameter/argument in the parenthesis 
      output = addNum(2);
      console.log(output);//output: 4
                    
                    
      function multipleNum(x, y){
      return x * y;
      }

      result = multipleNum(2,4)
      console.log(result);//output: 8
                    
                    

                    
The body of the function is the code that will be executed when the function is called. In JavaScript, functions are "hoisted" to the top. Functions can be placed anywhere inside the program, and they should be executable. It is important to note that "hoisting" does not apply to function expressions, only function declarations. To call a function, you use the name of the function followed by a pair of parentheses. You can pass arguments to the function inside the parentheses.

Since parameters are passed to functions by value in JavaScript, any changes made to the parameter inside the function do not affect the original value of the parameter when the code is called. Here is an example to illustrate this:

        function passValue(value){
        value = 32; //value = 32 within the function
        }

        let newValue = 23;
        passValue(newValue);
        console.log(newValue);//output: 23
                    
Recursive Functions                    
==================
Most programming languages support recursive functions. A recursive function is a function that calls itself. An example of a recursive function is a function that implements a factorial. Here is an example of a factorial function implemented recursively:
                    
      function factorial(z){
      if (z === 0 || z ===1){ //this statement is the base case
      return 1;
       }
      return z * factorial(z -1); // this is the recursive case
        }

      let recurNum = 7;
      let recurResult = factorial(recurNum);
      console.log(recurResult); // Output: 5040
 
This function works by calling itself with the value of z - 1 until it reaches the base case, where z is equal to 0 or 1. At 0 or 1, the function returns 1. Otherwise, the function returns the product of z and the result of calling itself with z - 1. Every recursive function should have a base case, which is used to stop the function from calling itself. In the example above, the base case occurs when z is equal to 0 or 1. They also need a recursive case, which outlines the steps taken to perform each recursive step. The goal of the recursive case is to move towards the base case, so the function eventually stops.

                    
 Arrow Functions
 ==================
 JavaScript has a spcial kind of function called arrow functions. They are a more concise way to write a function. Here is an example of an arrow function:
                    
                    
      let sum = (a,b) => a + b; //a function that adds two values is created 

      let t = 6;
      let u = 7;

      sumResult = sum(6,7);
      console.log(sumResult);//output: 13
  
As seen above, arrow functions work similarly to regular functions, but they have a more compact syntax. The arrow in the function is used to indicate the value that should be returned. Arrow functions are unique to JavaScript, but similar concepts exist in other languages.


Classes and Objects
 ==================
 
JavaScript is an object-oriented language, which means that it allows you to create objects that have properties and methods. Objects group data together and add meaning in the form of properties. You could create a Dog class and add properties like name, age, and breed. Methods created for the Dog class define the actions an object from the Dog class can perform or have performed on them. Here is an example of a class:

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

Every class in JavaScript must contain a constructor, which is used to create and initialize the class. The constructor contains the attributes that each member of the class should have. The code above for the class also includes functions called "getters" and "setters". These functions are standard in most programming languages. JavaScript identifies these special functions with the "get" and "set" keywords. Getters are used to retrieve the value of an attribute, and setters are used to set the value of the attribute. Another method to note is the toString method. This method represents the data stored in the attributes as a string data type. While not all programming languages will use the same name, it is common to have a method that performs the actions of the toString method.

Here is an example of an object of the Dog class:

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

It's important to note the first line of the code. In order to use the Dog class, it had to be imported into the same files as the dog1 object. Use the extends keyword if you want to import a class into a different file.


Inheritance
=================
Inheritance in JavaScript allows you to create new objects that inherit the properties and methods from existing objects. This is useful for creating new objects that are similar to existing objects but with some additional properties or methods. In JavaScript, you use the "extends" keyword for inheritance. For example, if there is a Dog class, you can create a Golden class that inherits from the Dog class using the "extends" keyword. Here is an example of that:

        import Dog from './Dog.js'; //import Dog class

        export default class Golden extends Dog{ //export Golden class
        constructor(name,age,breed,favoriteToy){//added an additional attribute called favoriteToy
        super(name,age,breed); //imports the three attributes from the Dog class
        this.favoriteToy = favoriteToy;
        }

        toString() {
        return `${super.toString()}They love to play with ${this.favoriteToy}.`; //imports the describe function from the Dog class
        }

        rollOver(){
        return (`${this.name} rollovered when I asked him to.`)
        }

        get favoriteToy(){
        return this._favoriteToy;
        }

        set favoriteToy(newFavoriteToy){
        this._favoriteToy = newFavoriteToy
        }
        }


The above code is for the Golden class. The keyword extends lets us know that the Golden class is inheriting from the Dog class. Extends is a keyword that can be used to not only import a class to a driver program but also to another class for inheritance. The Golden class is able to use the attributes and methods of the Dog class by including those methods and attributes with a preceeding super. The super method lets the program know that those methose and attributes are inherited. The Golden class also has it's own uniqe attributes and methods that can't be found in the Dog class. Even though there can be multiple classes the inherit from a class, they can all have their own unique attributes and methods. 


Key Points for Objects and Classes
==================


Naming Conventions for Classes, Objects and Methods
==================
Like many languages, JavaScript has common naming conventions for the different parts of the code. In JavaScript, objects are usually named with PascalCase, where the first letter in each word is capitalized. For example, a dog object would be named "Dog." Instance variables, on the other hand, are typically named with camelCase, where the first word is in all lowercase letters and the following words start with an uppercase letter. So an instance variable would be named "greenCat" instead of "greencat". Functions are also normally written in camelCase. For instance, a function could be named "eatFood" instead of "eatfood". It is important to remember these naming conventions as they make the code more readable and help avoid confusion, especially when working in a team.


**Resources**
------------
  + w3schools. JavaScript history. https://www.w3schools.com/js/js_history.asp 
  + w3schools. Javascript tutorial. https://www.w3schools.com/js/default.asp
  + The OpenJS Foundation. About Nodejs. https://nodejs.org/en](https://nodejs.org/en/about)
  + Mozilla. JavaScript Reference. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
  + Mozilla. Javascript Guide. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction
  + Haverbeke, M. (2019). Eloquent javascript: A modern introduction to programming. No Starch Press. 
  + FLANAGAN, D. (2020). JAVASCRIPT the definitive guide. O’REILLY MEDIA, INC, USA.
  + Google, Google JavaScript Style Guide, https://google.github.io/styleguide/jsguide.html#naming.
  
