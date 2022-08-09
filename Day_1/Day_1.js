// // Lesson 1 (simple printing hello world to the terminal (log))
console.log('Hello, World!')
console.log("Hello, World!")
console.log(`Hello, World!`)

console.log('Hello', 'World', '!')
console.log('HAPPY', 'NEW', 'YEAR', 2020)
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')

console.log("================================")

// // Lesson 2 (Arithmatics)
console.log(2 + 3) 
console.log(3 - 2)
console.log(2 * 3) 
console.log(3 / 2) 
console.log(3 % 2) // Modulus - finding remainder
console.log(3 ** 2) // Exponentiation 3 ** 2 == 3 * 3

console.log("================================")

// // Lesson 2 (Adding JavaScript to a Web Page)

console.log("in this lesson use html file to run this script")

/*

JavaScript can be added to a web page in three different ways:

Inline script
Internal script
External script
Multiple External scripts

*/




/*

// Inline Script

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript:Inline Script</title>
  </head>
  <body>
    <!-- js script -->
    <!-- pop up window (alert) -->
    <button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button>
  </body>
</html>

*/




/*

// Internal Script

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript:Internal Script</title>
    <!-- js script -->
    <script>
      // print something to the log (CTRL + Shift + I) you can see it in inspector
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </head>
  <body></body>
</html>

*/




/*

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfJavaScript:External script</title>
    <!-- js script -->
    <script src="introduction.js"></script>
  </head>
  <body></body>
</html>

*/




/*

// External Scripts in the body

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfJavaScript:External script</title>
  </head>
  <body>
    <!-- JavaScript external link could be in the header or in the body --> 
    <!-- Before the closing tag of the body is the recommended place to put the external JavaScript script -->
    <!-- js script -->
    <script src="introduction.js"></script>
  </body>
</html>

*/





/*

// Multiple External Scripts

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Multiple External Scripts</title>
  </head>
  <body>
    <script src="./helloworld.js"></script>
    <script src="./introduction.js"></script>
  </body>
</html>

*/

console.log("================================")

// // Lesson 3 (Variable declaration)

// Simple declaration of variable
let firstName = 'Asabeneh' // String
let lastName = 'Yetayeh' // String
let country = 'Finland' // String
let city = 'Helsinki' // String
let age = 100 // Integer
let isMarried = true // Boolean

// Declaring variables with number values
// Means this value that is not change it static
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in oC
const PI = 3.14 // geometrical constant

// Variables can also be declaring in one line separated by comma
// Space automaticly between them
let name = 'Asabeneh', 
  job = 'teacher',
  live = 'Finland'

console.log(firstName, " ", lastName, " ", country, " ", city)
console.log(age)
console.log(isMarried)
console.log(gravity)
console.log(boilingPoint)
console.log(PI)
console.log(name)
console.log(job)
console.log(live)


let alexName
console.log(alexName) // undefined, because it is not assigned to a value yet

// Null
let emptyValue = null


console.log("================================")

// // Lesson 4 (Comments Again)

console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined

console.log("================================")

// // Lesson 5 (Commentng)

console.log("comming in java script")

/* 

Single line commenting

// commenting the code itself with a single comment
// let firstName = 'Asabeneh'; single line comment
// let lastName = 'Yetayeh'; single line comment

*/




// Multiline commenting:
 
/*
  let location = 'Helsinki';
  let age = 100;
  let isMarried = true;
  This is a Multiple line comment
*/
console.log("================================")

// // Lesson 6 (Boolean)

console.log("What is Boolean")

/*

true // if the light is on, the value is true
false // if the light is off, the value is false

*/

console.log("================================")

// // Lesson 7 (String)

console.log("What is String")

/*

'a'
'Asabeneh'
"Asabeneh"
'Finland'
'JavaScript is a beautiful programming language'
'I love teaching'
'I hope you are enjoying the first day'
`We can also create a string using a backtick`
'A string could be just as small as one character or as big as many pages'
'Any data type under a single quote, double quote or backtick is a string'

*/

console.log("================================")

// Lesson 8 (Error Syntax)

console.log("Error Syntax")

/*

console.log("Hello, World!')

=====
/home/soyansoon/Documents/Study/My_Course/30_Days_Of_JS/Day_1.js:256
console.log("Hello, World!')
            ^^^^^^^^^^^^^^^^

SyntaxError: Invalid or unexpected token
.
.
.
=====





console.log("Hello, World!)

=====
/home/soyansoon/Documents/Study/My_Course/30_Days_Of_JS/Day_1.js:271
console.log("Hello, World!)
            ^^^^^^^^^^^^^^^

SyntaxError: Invalid or unexpected token
.
.
.
=====





console.log("Hello, World!'
=====
/home/soyansoon/Documents/Study/My_Course/30_Days_Of_JS/Day_1.js:285
console.log("Hello, World!'
            ^^^^^^^^^^^^^^^

SyntaxError: Invalid or unexpected token
=====

*/

console.log("================================")

// Lesson 9 (Exercieses)

/*

## 💻 Day 1: Exercises
    
    1. Write a single line comment which says, comments can make code readable

    2. Write another single comment which says, Welcome to 30DaysOfJavaScript

    3. Write a multiline comment which says, comments can make code readable, easy to reuse and informative

    4. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

    5. Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

    6. Declare four variables without assigning values

    7. Declare four variables with assigned values

    8. Declare variables to store your first name, last name, marital status, country and age in multiple lines

    9. Declare variables to store your first name, last name, marital status, country and age in a single line

    10. Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

====
I am 25 years old.
You are 30 years old.
====


*/