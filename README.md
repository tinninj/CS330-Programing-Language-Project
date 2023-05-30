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
JavaScript is an Object-Oriented programming language. Since JavaScript allows type conversion it is considered weakly typed. It is also considered dynamically typed. JavaScript’s variables are not directly associated with certain data types and as such, they can store all the different data types.
  
**Naming Conventions in JavaScript**
====================================
There are a few rules and naming conventions for JavaScript variables.First, there are reserved words that may not be used as variable names. One example of a reserved word is break. I would not be able to call a variable break. Secondly,  The names os variables can not start with a number. A variable called 31street would not be a valid name in JavaScript but street31 would be. Finally, The only special characters allowed in variable names are dollar sign ($) and underscores (_).  While underscores can be used to separate works in the variable such as big_green_frog, most JavaScript developers would capitalize every word in the variable name except for the first and would not include an underscore. This style is called camelCase and it is also the standard for other programing languages. The variable big_green_frog would be written instead as bigGreenFrog.

**Data Types**
====================================
Data types can usually fall into one of two categories: primitive and non-primitive. Primitive data types are the building blocks of programming langauges and are usually immutable. Non-primitive data types are more complex than primitive data types. They often hold many values and are mutable. 
  

Primitive Data Types
====================================
JavaScript has the following primitive data types:
  
  + Google Chrome
+ Netflix
+ Twitter
+ Amazon
+ Uber
  
  
  +Numbers: Numbers in JavaScript are straight forward. They can be whole numbers or contain decimal points. Unlike other programing languages, JavaScript does not differentiate between types of numbers like integers or floats.There are limitiation to numbers in JavaScript. They  can represent numbers up to 2^53 and as low as -2^53. An number bigger or lower than those would not be represented by a number in JavaScript

  +BigInt: Since numbers have their limitations, BigInts can be used to represent numbers lower than -2^53 and higher than 2^53. 
  
  +Strings: Strings are used to represent text. Strings usually have a sequence of characters but they can also contain a single, empty space.
  
  +Booleans: Boolean data types accepts two values: true or false.
  
  +Undefined: Undefined means that a value has yet to be assigned to a variable.
+Null: Null is generally use to point toward a nonexistent object. It is important to note that Null does not mean zero.
  
 +Symbol: Symbols are always unique and immutable. They are used to identify object properties to avoid conflicts with other properties of the object. 
  
Non-primitive Data types
===================
In JavaScript some non-primitive data types are considered objects. Objects can have different properties and methods. They have key-value pairs. 
  
Commons Non-primitive Data Types
  -Arrays: Arrays are a collection of different values stored under a single name. They are resizable. The key value pair consists of the name of the array and each value stored in the array. 
  
  -Maps: Maps are similar to arrays except their key value pairs are unique. A map can be an instance of an object.
  

**Resources**
------------
  + w3schools. JavaScript history. https://www.w3schools.com/js/js_history.asp 
  + w3schools. Javascript tutorial. https://www.w3schools.com/js/default.asp
  + The OpenJS Foundation. About Nodejs. https://nodejs.org/en](https://nodejs.org/en/about)
  + Mozilla. JavaScript Reference. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
  + Mozilla. Javascript Guide. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction
  + Haverbeke, M. (2019). Eloquent javascript: A modern introduction to programming. No Starch Press. 
  + FLANAGAN, D. (2020). JAVASCRIPT the definitive guide. O’REILLY MEDIA, INC, USA. 
  
