console.log("\n")
console.log("======================== Closure ========================")
console.log("\n")

/*

## Coding conventions helps:

* to write clean code
* to improve code readability
* to improve code re-useability and maintainability

## Coding conventions includes

* Naming and declaration rules for variables
* Naming and declaration rules for functions
* Rules for the use of white space, indentation, and comments
* Programming practices and principles


## Conventions use in 30DaysOfJavaScript

* We used camelCase for variables and functions.
* All variable names start with a letter.
* We chose to use const for constants, arrays, objects and functions. In stead of double quote, we chose to use single quote or backtick. Single quote is becoming trendy.
* We also removed semicolons from our code but it is a matter of personal preference.
* Space around arithmetic operators, assignment operators and after comma
* Arrow function instead of function declaration
* Explicit return instead of implicit return if the function is one liner
* No trailing comma in the last value of an object
* We prefer this +=, -=, *= /=, **= instead of the longer version
* When we use console.log() it is good to print with a tag string to identify from where the console is coming

*/



console.log("\n")
console.log("======================== Variables ========================")
console.log("\n")

// 1. we have (space) between (name of the variable) and (value of the variable)
// 2. good name for the variable (simple and easy and not long)
// 3. when we see the variable name the reader of the code understand why we used this variable in that place it is mean we should write minimum comment as possible, code should more speak than comment
// 4. using single quotes instaid of double quotes
// 5. using (const or let or var) for right variable
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'

const PI = Math.PI
const gravity = 9.81





console.log("\n")
console.log("======================== Arrays ========================")
console.log("\n")

/*

* We chose to make array names plural

  - names
  - numbers
  - countries
  - languages
  - skills
  - fruits
  - vegetables

*/


// 1. using space after any (comma) we write in the array for more clearly look
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const languages = ['Amharic', 'Arabic', 'English', 'French', 'Spanish']
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python']
const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']







console.log("\n")
console.log("======================== Functions ========================")
console.log("\n")

/*

* we know function declaration, expression function, arrow function and anonymous function. 

* In this challenge we tend to use arrow function instead of other functions.

* Arrow function is not a replacement for other functions. In addition, arrow functions and function declarations are not exactly the same. So you should know when to use and when not.

*/


// function which return full name of a person
// parameter (firstName, lastName) point to this block of the code that we have in function (printFullName) means it can use parameter (firstName, lastName) inside this function
// also we are used parameter because when we call the function we take the value of (firstName, lastName) to the function (printFullName)
const printFullName = (firstName, lastName) => firstName + ' ' + lastName







// function which calculates a square of a number
// parameter (n) point to this block of the code that we have in function (square) means it can use parameter (n) inside this function
// also we are used parameter because when we call the function we take the value of (firstName, lastName) to the function (square)
const square = (n) => n * n







// a function which generate random hexa colors
// we don't have any parameter because when we call the function we don't take manual value for it
const hexaColor = () => {
  const str = '0123456789abcdef'
  let hexa = '#'
  // we declared this variable outside the for loop because we want clear the code and we don't want use (let or const and var) inside the for loop for clearing the code
  let index
  // the loop is continue just 6 cicle for other number after number 6 will not return
  for (let i = 0; i < 6; i++) {
    // (Math.floor) will take this number that it get to the nearest number base on this number that it get after dot (.)
    // Math.random() will generate random number from 0 to 9.9999
    // (str.length) will return the number of length of string (str) variable 
    index = Math.floor(Math.random() * str.length)
    // in the end hexa is equal to the one of the number that we get from index number 
    // this is continue for 6 cicle means for 6 step we get number forthe (hexa) variable

    // ## Example
    // str[index] = f
    // str[index] = 7
    // str[index] = a
    // str[index] = 5
    // str[index] = 5
    // str[index] = a
    // hexa = hexa + str[index]   =   #f7a55a
    hexa += str[index]
    // hexa = hexa + str[index]
  }
  // return this value that we get from (hexa) variable
  return hexa
}






// a function which shows date and time
const showDateTime = () => {
  // Date() method that return full time for the (hour and minute and ....)
  const now = new Date()
  // get year 
  const year = now.getFullYear()
  // get month 
  const month = now.getMonth() + 1
  // get Date (day of the month) 
  const date = now.getDate()
  // get hour 
  let hours = now.getHours()
  // get the minute
  let minutes = now.getMinutes()
  // if my (hour) is less that 10 then
  if (hours < 10) {
    // 0 will be add before the (hour) number
    hours = '0' + hours
  }
  // if my (minute) is less that 10 then
  if (minutes < 10) {
    // 0 will be add before the (minute) number
    minutes = '0' + minutes
  }

  // organize time for (date and month and year)
  const dateMonthYear = date + '.' + month + '.' + year
  // organize the time for (hour and minute)
  const time = hours + ':' + minutes
  // concate both of the variable
  const fullTime = dateMonthYear + ' ' + time
  // return my variable (fullTime)
  return fullTime
}


/*

* The new Dat().toLocaleString() can also be used to display current date time. The toLocaleString() methods takes different arguments. You may learn more about date and time from this link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString.

*/





console.log("\n")
console.log("======================== Loops ========================")
console.log("\n")


n = 10

for (let i = 0; i < n; i++){
    console.log(i)
}





// declaring an array variable i use for some for loop below
const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']




// iterating an array using regular for loop

// return the length of my array
let len = names1.length;
// along of my array my for loop cicle will be continues
for(let i = 0; i < len; i++){
  // calling each value of array depending of the index after that change each value to upper case
  console.log(names1[i].toUpperCase())
}




// put each value of array to name variable
for( const name of names1) {
  // after that change each value of array to upper case
  console.log(name.toUpperCase())
}




// we use (forEach) keyword to create function
// using (forEach) keyword to loop all this value for my array and put each value to this parameter tht we declared inside (forEach) keyword
// also change each of this value to upper case inside my function (forEach)
let hi = names1.forEach((name) => name.toUpperCase())



const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
  isMarried: true
}

// using for each to loop throw all the key of the object (person) and put all this key that it get one by one to variable (key)
for(const key in person) {
    console.log(key)
}







console.log("\n")
console.log("======================== Objects ========================")
console.log("\n")

// declaring object literal
const person1 = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML','CSS','JavaScript','TypeScript', 'React','Node','MongoDB','Python','D3.js'],
  isMarried: true
}

// using for each to loop throw all the key of the object (person1) and put all this key that it get one by one to variable (key)
for(const key in person1) {
  // print the key name
  // print the value of that key using ( person1[key] ) means depending of the key that ( person1 ) object get from my for each they return this value also for my for each
    console.log(key, person1[key])
}








console.log("\n")
console.log("======================== Conditional ========================")
console.log("\n")

/*

// ## if and else and if else statement

// syntax
if (condition) {
 // this part of code run for truthy condition
} else {
 // this part of code run for false condition
}

*/



let num = 3

// if number greater than 0
if (num > 0) {
  // get back the (number it self) and (this message) using 
  // ${num}    get back the orginal number
  // this quotes `` allow us use this   ${}  inside it
  console.log(`${num} is a positive number`)
} 
// else do that
else {
  // get back the (number it self) and (this message) using 
  // ${num}    get back the orginal number
  // this quotes `` allow us use this   ${}  inside it
  console.log(`${num} is a negative number`)
}
//  3 is a positive number





// if else if else if else

let a = 0

if (a > 0) {
  // ${a}    get back the orginal number 
  // this quotes `` allow us use this   ${}  inside it
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  // ${a}    get back the orginal number
  // this quotes `` allow us use this   ${}  inside it
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  // ${a}    get back the orginal number
  // this quotes `` allow us use this   ${}  inside it
  console.log(`${a} is zero`)
} else {
  // ${a}    get back the orginal number
  // this quotes `` allow us use this   ${}  inside it
  console.log(`${a} is not a number`)
}






// run this example in cosole browser

// input manually using (prompt)
let dayUserInput = prompt('What day is today ?')
// using this value that user manually set to the prompt to change it to lower case
let day = dayUserInput.toLowerCase()

// using this value that we get after we change it to lower case and compare to my cases
switch (day) {
 case 'monday':
   console.log('Today is Monday')
   break
 case 'tuesday':
   console.log('Today is Tuesday')
   break
 case 'wednesday':
   console.log('Today is Wednesday')
   break
 case 'thursday':
   console.log('Today is Thursday')
   break
 case 'friday':
   console.log('Today is Friday')
   break
 case 'saturday':
   console.log('Today is Saturday')
   break
 case 'sunday':
   console.log('Today is Sunday')
   break
 default:
   console.log('It is not a week day.')
}



let isRaining = true
// if (isRaining) is true or false do that
isRaining
  // if true print this message
 ? console.log('You need a rain coat.')
 // if not print this message
 : console.log('No need for a rain coat.')





 console.log("\n")
 console.log("======================== Classes ========================")
 console.log("\n")
 
 /*
 
 // Syntax
 class ClassName {
     // code goes here
 }
 
 */
 
 
class Person {
  // my constructor function that handle this two parameter
  constructor(firstName, lastName) {
    // if my (firstName and lastName) parameter has value then print there value if not then back empty object to my class (Person)
    console.log(this) // Check the output from here
    // taking value of (firstName) parameter for key (firstName)
    this.firstName = firstName
    // taking value of (lastName) parameter for key (lastName)
    this.lastName = lastName
  }
}
 
 