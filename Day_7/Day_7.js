// Functions

/*

// remember no number will be vanish in function this is why function is not forgive any number to run
// in a function the compiler look for calling function after that look for function it self means when it see this is the function then search for calling function to get key to open the door of function to compile it
// function variable can be overwrite but the last component of the last function will be output not previous function
// overwriting name of (variable function) is not normal  
  
  // this is the (variable function)
  // // const name_function = parameter_name => {
  const name_function = (parameter_name) => {
    ....
  }
  name_function(value_parameter)

  
// function is a keyword for creating function

// undefined output in this lesson is confuess you but just remember this line below when you start this journey
// this undefined happen if you are using (console.log) if you don't use it then this is not happen means normal calling of function without (console.log)
// undefined happen when two function is hande the same name but one of the function use return key and other not

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
console.log("\n")

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
console.log("\n")


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
console.log("\n")

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
console.log("\n")
  
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
console.log("\n")

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



console.log("\n")
console.log("========================================================================================")
console.log("======================== Function with unlimited number of parameters ========================")
console.log("\n")




// Let us access the arguments object

// (arguments) is a keyword when compiler see arguments keyword it see like array but in fancy way any 
// you don't need to specify (arguments keyword) like a parameter
// when you specify the value of argument when you calling the function the argument take this value like array for example in this case take it like this:     '0': 1, '1': 2, '2': 3, '3': 4
function sumAllNums() {
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4)

// output
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]






console.log("\n")

// function declaration

function sumAllNums1() {
  let sum = 0

  // we can use any keyword that we used previously with normal array because argument is array but empty when we take it value in that case this value go to inside the argument
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
    // sum = sum + arguments[i]
  }
  return sum
}

console.log(sumAllNums1(1, 2, 3, 4)) // 10
console.log(sumAllNums1(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums1(15, 20, 30, 25, 10, 33, 40))  // 173






console.log("\n")
console.log("========================================================================================")
console.log("======================== Unlimited number of parameters in arrow function ========================")
console.log("\n")




// Let us access the arguments object

// (...) is operator that for the variable function take value of calling function 
// and after that this is put into this (args) variable in this case but it be any variable name instaid of args this is optional
// this is also work like arguments or array but in output it is like array not arguments output
// (...) is sperate to all the value for the variable and put it into the variable 
const sumAllNums2 = (...args) => {
 // console.log(arguments), arguments object not found in arrow function
 // instead we use a parameter followed by spread operator (...)
 console.log(args)
}

sumAllNums2(1, 2, 3, 4)
// [1, 2, 3, 4]






console.log("\n")

// change args to another name not problem
const sumAllNums3 = (...arrayname) => {
  console.log(arrayname)
}
 
sumAllNums3(1, 2, 3, 4)
// [1, 2, 3, 4]




console.log("\n")

// function declaration

// in this example instaid of using array or arguments we use (...)
// you can overwrite the name of parameter it will not affect the value of this args this variable take new value from that function this is why it is normal to overwrited
const sumAllNums4 = (...args) => {
  let sum = 0
  // for each
  for (const element of args) {
    sum += element
    // sum = sum + element
  }
  return sum
}

console.log(sumAllNums4(1, 2, 3, 4)) // 10
console.log(sumAllNums4(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums4(15, 20, 30, 25, 10, 33, 40))  // 173




console.log("\n")
console.log("========================================================================================")
console.log("======================== Anonymous Function ========================")
console.log("\n")

/*

// Anonymouse Function
// Syntax

cost any_name = function(parameter_name) {
  ....
}

// calling anonymouse function is like normal calling function
name_function()

*/


console.log("\n")

const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}

anonymousFun()



const anonymousFun1 = function(num) {
  console.log(
    `${num} is my favore anonymouse number`
  )
}

anonymousFun1(2)



console.log("\n")
console.log("========================================================================================")
console.log("======================== Expression Function ========================")
console.log("\n")

/*

// Expression Function
// Syntax

cost any_name = function(parameter_name) {
  ....
}

// calling Expression function is like normal calling function
name_function()

*/

// Function expression
const square11 = function(n) {
  return n * n
}

console.log(square11(2)) // -> 4





console.log("\n")
console.log("========================================================================================")
console.log("======================== Self Invoking Functions ========================")
console.log("\n")



/*

// Self Invoking Function
// this function is not need to call it like regular function it is run inside it self 
// you use variable to equal to this function then you can call the variable then this variable is handle the value of that function but remember you should use return keyword for handling this value
// Syntax

(function(parameter_name) {
  ....
}) (value_of_parameter)



// using normal variable to hande value of function but remember you should use return keyword for handling this value
let variable_name = (function(parameter_name) {
  return n * n
})(10)

console.log(variable_name)





// this function just run in the browser

(function(n) {
  console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

*/


let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)





console.log("\n")
console.log("========================================================================================")
console.log("======================== Arrow Function ========================")
console.log("\n")


/*

// Syntax

function function_name(parameter_name) {
  return parameter_name * parameter_name
}

console.log(function_name(parameter_value)) // 4






const function_name = parameter_name => {
  return parameter_name * parameter_name
}

console.log(function_name(2))  // -> 4





const function_name = parameter_name => parameter_name * parameter_name  
console.log(function_name(parameter_value)) // -> 4

*/

// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
  return n * n
}

console.log(square(2)) // 4





console.log("\n")

// const squaree = (n) => {
const squaree = n => {
  return n * n
}

console.log(squaree(2))  // -> 4





console.log("\n")

// if we have only one line in the code block, it can be written as follows, explicit return
// you can use this bracket { } or you can not use it is option but when you are not use it make sure that you used like this
// means when someone not use this bracket { } for (variable function) then it is use less code for use it with this function
// in this case on function you don't need return keyword to return the value of function the function is actually return the value
const square2 = n => n * n  // -> 4
console.log(square2(2))





console.log("\n")

const changeToUpperCase = (arr) => {
  // declaring emplty array
  const newArr = []
  // create array to loop throw all this value of ( arr ) variable parameter 
  for (const element of arr) {
    // the element variable just handel 1 value but array cand handle unlimited value (independ) on some cituation
    // after putting all value one by one to (element) variable we use this variable value to puting the value of this variable into my empty array
    newArr.push(element.toUpperCase())
  }
  return newArr
}

// this array that containe some value
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// putting all value to my function and my function take this value to my (arr) parameter
console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]






console.log("\n")

// more than one parameter for (variable function) for doing that sperate it by comma (,)

// for one parameter you can use this () or you can not use it this is option
// but when the parameter is getting more than one this bracket is should be have
// const printFullName5 = firstName, lastName => {

const printFullName5 = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

console.log(printFullName5('Asabeneh', 'Yetayeh'))





console.log("\n")

// using more than on parameter for this fancy function
const printFullName3 = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName3('Asabeneh', 'Yetayeh'))






console.log("\n")
console.log("========================================================================================")
console.log("======================== Function with default parameters ========================")
console.log("\n")


/*


// syntax for normal funcction

// putting the value of parameter inside function it self
function functionName(param = value) {
  //codes
}




// Calling function

functionName()
functionName(arg)






// syntax for (variable function) is just like function
// both of (function) and (variable function) not have different for the practic or theory 
// but in overwriting name of function the (variable function) has problem with it

const functionName = (param = value) => {
  //codes
}

// Calling function
functionName()
functionName(arg)
  
*/


function greetings(name = 'Peter') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())

// you can change the value of parameter by just sending this value that you want to the function
console.log(greetings('Asabeneh'))






console.log("\n")

function greetings(name = 'Peter') {
  // if you use this style of coding means not use return keyword then the undefined not happen means it is not problem
  // but undefined happen for this function that hande the same name of this function 
  // this undefined happen if you are using (console.log) if you don't use it then this is not happen means normal calling of function without (console.log)
  /*

  Peter, welcome to 30 Days Of JavaScript!
  undefined
  Asabeneh, welcome to 30 Days Of JavaScript!
  undefined

  */

  // the undefined value not happen if you use unique function name for your function
  // (recommended) to use return keyword for both of cituation
  console.log( `${name}, welcome to 30 Days Of JavaScript!`)
}

greetings()

// you can change the value of parameter by just sending this value that you want to the function
greetings('Asabeneh')






console.log("\n")

function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
  let space = ' '
  let fullName = firstName + space + lastName

  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))






console.log("\n")

function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
  let space = ' '
  console.log(firstName + space + lastName)
}

generateFullName()
generateFullName('David', 'Smith')






console.log("\n")

function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear
  return age
}

console.log('Age: ', calculateAge(1819))






console.log("\n")

function calculateAge(birthYear, currentYear = 2019) {
  // undefined happen when you have two function and one of the function is use return key but other function not use it like this example
  // in that cituation the age for other function will undefined like this
  /*
  
  200
  Age:  undefined

  */
  let Age = currentYear - birthYear
  console.log(Age)
}

// console.log('Age: ', calculateAge(1819))
calculateAge(1819) // 200 





console.log("\n")

function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + ' N' // the value has to be changed to string first
  return weight
}

// this value (100) is for mass variable because it is not have any value
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
// first value is for mass variable because not have any value 
// and this parameter is start first this is why we use none declarate parameter to a value in the first row 
// by default this value is go to first
// if we have second value after this value then this second value go to next position
// second value is for gravity but gravity is have value so to not loss this we just ignore the orginal value and put this new value for gravity variable
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon







  
console.log("\n")

const greetings1 = (name = 'Peter') => {
  let message = name + ', welcome to 30 Days Of JavaScript!'
  return message
}

console.log(greetings1())
// putting new value for name parameter
console.log(greetings1('Asabeneh'))







console.log("\n")

const generateFullName1 = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName1())
// change both of parameter value for new value
console.log(generateFullName1('David', 'Smith'))






console.log("\n")

const calculateAge1 = (birthYear, currentYear = 2019) => currentYear - birthYear
// change the value of parameter birthYear because the second parameter has value not have problem with it 
// and this parameter is start first this is why we use none declarate parameter to a value in the first row 
// by default this value is go to first
// if we have second value after this value then this second value go to next position
console.log('Age: ', calculateAge1(1819))





console.log("\n")

const calculateAge2 = (birthYear  = 2001, currentYear) => currentYear - birthYear
// change the value of parameter birthYear because the second parameter has value not have problem with it 
// and this parameter is start first this is why we use none declarate parameter to a value in the first row 
// by default this value is go to first
// if we have second value after this value then this second value go to next position
console.log('Age: ', calculateAge2(2019)) // Age:  NaN





console.log("\n")

const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'

// change the value of parameter mass because the second parameter has value not have problem with it 
// and this parameter is start first this is why we use none declarate parameter to a value in the first row 
// by default this value is go to first
// if we have second value after this value then this second value go to next position
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon


