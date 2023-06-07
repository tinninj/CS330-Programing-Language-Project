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
        if (z === true){ //JavaScript requires the use of a double or  triple equal sign for comparisons
        console.log("True"); //output: True
        }else{
         console.log("False");
          }
  
  
**Resources**
------------
  + w3schools. JavaScript history. https://www.w3schools.com/js/js_history.asp 
  + w3schools. Javascript tutorial. https://www.w3schools.com/js/default.asp
  + The OpenJS Foundation. About Nodejs. https://nodejs.org/en](https://nodejs.org/en/about)
  + Mozilla. JavaScript Reference. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
  + Mozilla. Javascript Guide. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction
  + Haverbeke, M. (2019). Eloquent javascript: A modern introduction to programming. No Starch Press. 
  + FLANAGAN, D. (2020). JAVASCRIPT the definitive guide. O’REILLY MEDIA, INC, USA. 
  
