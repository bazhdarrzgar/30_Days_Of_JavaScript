// Functions

/*

// remember no number will be vanish in function this is why function is not forgive any number to run
// in a function the compiler look for calling function after that look for function it self means when it see this is the function then search for calling function to get key to open the door of function to compile it
// function variable can be overwrite but the last component of the last function will be output not previous function


// // A function can be declared or created in couple of ways:

* Declaration function
* Expression function
* Anonymous function
* Arrow function



// // Function not a fancy or complex code it is simple and easy to use or write 
// // We use function because

* clean and easy to read
* reusable
* easy to test




// // Syntax

// create function
function name_function() {
    .....
}

// call function
name_function()

*/


console.log("========================================================================================")
console.log("======================== Function without a parameter and return ========================")

// function without parameter
// a function which make a number square
function square() {
  let num = 2
  let sq = num * num
  console.log(sq)
}

// calling function
square() // 4
// console.log(sq) // error // you can use variable of function because of global and non_global problem, you can create other variable with that name in outside function but not outputing data for that variable function


console.log("\n")

sq = 22 
console.log(sq) // 22





console.log("\n")

// function without parameter
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}

addTwoNumbers() // a function has to be called by its name to be executed 








function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      console.log(fullName)
      console.log(firstName + lastName)
}

printFullName() // calling a function







console.log("\n")
console.log("========================================================================================")
console.log("======================== Function returning value ========================")


// function printFullName (){
//     let firstName = 'Asabeneh'
//     let lastName = 'Yetayeh'
//     let space = ' '
//     let fullName = firstName + space + lastName
//     return fullName
// }
// // if you use the same variable name for the previous function then Compiler will print the last component of the last function will be output not previous function
// console.log(printFullName()) 




function printFullName1 (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    // you can use return keyword to return value of this variable or anything you want return it the value just use return keyword
    return fullName
}

// now you can use console.log() to print the return value
console.log(printFullName1())

// // you are still can't use the variable of that function
// console.log(fullName) // error




console.log("\n")

function addTwoNumbers1() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    // return the value of total variable
    return total
}

console.log(addTwoNumbers1())




console.log("\n")
console.log("========================================================================================")
console.log("======================== Function with one parameter ========================")

/*

// you can add how much paremeter you want the function is not limited by parameter

// function with one parameter
function functionName(parm1) {
  //code goes her
}
functionName(parm1) // during calling or invoking one argument needed

*/

// we use this parameter to use by this code that is inside the function 
// when we call the function we take this value to this parameter that it need to complete there work
function areaOfCircle(r) {
  // Math.PI = 3.14
  let area = Math.PI * r * r
  // you can use normal ( console.log() ) or ( return ) keyword not problem 
  return area
}
// take this value to the parameter inside the bracket ( areaOfCircle(value) )
console.log("Area of circle = ", areaOfCircle(10)) // should be called with one argument



function square1(number) {
  return number * number
}

console.log("Square = ", square1(10))




  

console.log("\n")
console.log("========================================================================================")
console.log("======================== Function with two parameter ========================")
  
/*

// again the function is not limited with number of parameter that should be handled it is just example

// function with two parameters
function functionName(parm1, parm2) {
  //code goes her
}

functionName(parm1, parm2) // during calling or invoking two arguments needed
// Function without parameter doesn't take input, so lets make a function with parameters

*/





// this two parameter will use in the code 
// because when i call the function i use this two parameter to take function this value that it need
function sumTwoNumbers1(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}
// If a function doesn't return it doesn't store data, so it should return and return can be done by ( return ) keyword or ( console.log() )
sumTwoNumbers1(10, 20) // calling functions





console.log("\n")

function sumTwoNumbers2(numOne, numTwo) {
  let sum = numOne + numTwo
  // return value using ( return ) keyword in this time but you can use ( console.log() ) if you want not problem with either way
  return sum
}
// using ( console.log() ) to print this value that return by function
console.log(sumTwoNumbers2(10, 20))





console.log("\n")

function printFullName2(firstName, lastName) {
  return `${firstName} ${lastName}`
}

// using ( console.log() ) to print this value that return by function
console.log(printFullName2('Asabeneh', 'Yetayeh'))





console.log("\n")
console.log("========================================================================================")
console.log("======================== Function with many parameter ========================")

/*

// function with multiple parameters
function functionName(parm1, parm2, parm3,...) {
  //code goes here
}
functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed

*/



// // you can also put ( take value of array ) to the ( parameter )
// // this function takes array as a parameter and sum up the numbers in the array
// function sumArrayValues(arr) {

//   // we do operation (for loop) to (get the sum of array)
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   // return keyword should be outside (for loop) because i want just total 
//   // if you want see every process of getting sum of array then don't use (return) keyword because (return) keyword just return one value
//   // for solving that use normal (console.log())
//   return sum;
// }


// const numbers = [1, 2, 3, 4, 5];
// //calling a function
// console.log(sumArrayValues(numbers));





console.log("\n")

function sumArrayValues1(arr) {

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
      console.log(sum)
  }

  //   return sum // without return keyword you get undefined output after sum of number (15)
  
  // output:

  // 1
  // 3
  // 6
  // 10
  // 15
  // undefined


  // return sum // with return keyword you get this 
  // it is mean when the we finish in for loop compilere don't understand when put final value that is not equal to for loop 
  // then for solving that this value return like undefined value to my function and function return undifiend to calling function
  // now when we use return keyword this underfind number will be actuall value (15)
  // remember no number will be vanish in function this is why function is not forgive any number to run
    
  // output:

  // 1
  // 3
  // 6
  // 10
  // 15
  // 15
}

const numbers1 = [1, 2, 3, 4, 5];
console.log(sumArrayValues1(numbers1));
// 1
// 3
// 6
// 10
// 15
// undefined






console.log("\n")

/*

// you can use (const or let or var or ...) like a function 
// for doing that just use pointer ( => ) to point to there function ( {....} )
// also you should use this bracket () if you use parameter or not but this is done by equal operator (=)    ( = () )
// syntax

const name_variable = () => {
    // .....
    // return ...
}

name_variable()
console.log(name_variable())




// if you use parameter use it like this

const name_variable = (parameter) => {
    // .....
    // return ...
}

name_variable()
console.log(name_variable())

*/




// let areaOfCircle11 = (radius) => {
// var areaOfCircle11 = (radius) => {
const areaOfCircle11 = (radius) => {
  let area = Math.PI * radius * radius;
  return area;
}
console.log(areaOfCircle11(10))
// 314.1592653589793




console.log("\n")

let areaOfCircle111 = (radius) => {
  let area = Math.PI * radius * radius;
  console.log(area);
//   return area // without return keyword you get undefined number after this number that print by console.log
// this is happen when you are using (parameter) 
// it is (recommended) to use (return keyword ) when your function is use parameter
}
console.log(areaOfCircle111(10))
// 314.1592653589793
// undefined




console.log("\n")

const areaOfCircle1111 = () => {
  let area = Math.PI * 10 * 10;
  return area;
}
console.log(areaOfCircle1111(10))



// console.log("\n")







// console.log("\n")
// console.log("========================================================================================")
// console.log("======================== Function with default parameters ========================")
// console.log("\n")


// /*


// // syntax
// // Declaring a function
// function functionName(param = value) {
//   //codes
// }

// // Calling function
// functionName()
// functionName(arg)

// */


// function greetings(name = 'Peter') {
//   let message = `${name}, welcome to 30 Days Of JavaScript!`
//   return message
// }

// console.log(greetings())
// console.log(greetings('Asabeneh'))
// function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
//   let space = ' '
//   let fullName = firstName + space + lastName
//   return fullName
// }















