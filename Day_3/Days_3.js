// // Lesson 1 ( Boolean )

/*

// True

* All numbers(positive and negative) are true (except zero)
* All strings are true (except an empty string (''))

// False

0
null
undefined
NaN
'', "", ``, empty string

*/

let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

console.log(
            isLightOn,
            isRaining,
            isHungry,
            isMarried,
            truValue,
            falseValue
        )


console.log("========================================================================================")
// // Lesson 2 ( null vs undefiend )

// Undefined

let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet


// Null

let empty = null
console.log(empty) // -> null , means no value



console.log("========================================================================================")
// Lesson 3 ( Operators )


console.log("======================== Assignment Operators ========================")
// Assignment operators

/*

=       x = y     x = y         y result is stored in x
+=      x += y    x = x + y     x + y result is stord in x
-=      x -= y    x = x - y     x - y result is stord in x
/=      x /= y    x = x / y     x / y result is stord in x
%=      x %= y    x = x % y     x % y result is stord in x
**=     x **= y   x = x ** y    x ** y result is stored in x


Addition(+): a + b
Subtraction(-): a - b
Multiplication(*): a * b
Division(/): a / b
Modulus(%): a % b
Exponential(**): a ** b  = a^b

*/

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log("If      numOne = 4, numTwo = 3")
console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64


const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log("\nArea Of Circle ( PI = 3.14, radius = 100 ) ", areaOfCircle, "\n")  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log("\ncalculate weight of object ( gravity = 9.81, mass = 72 ) ", weight, "\n")        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.
  \nHuman body temperature is ${bodyTemp} oC.
  \nThe gravity of earth is ${gravity} m / s2.`
)


console.log("======================== Comparision Operator ========================")
// Comparision Operator

/*

==     Equal in value only: Equivalent  x == y

===    Equal in value & Data Type: Exactly equal x ===y

!=     Not equal in value               x != y

!==    compare both value and data type  x !== y

>      Greater than                     x > y

<      Less than                        x < y

>=     Greater than or equal to         x >= y

<=     Less than or equal to            x <= y

*/


console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
// important
console.log(3 == '3')           // true, compare only value
// important
console.log(3 === '3')          // false, compare both value and data type
// important
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
// important
console.log(0 == false)         // true, equivalent
// important
console.log(0 === false)        // false, not exactly the same
// important
console.log(0 == '')            // true, equivalent
// important
console.log(0 == ' ')           // true, equivalent
// important
console.log(0 === '')           // false, not exactly the same
// important
console.log(1 == true)          // true, equivalent
// important
console.log(1 === true)         // false, not exactly the same
// important
console.log(undefined == null)  // true
// important
console.log(undefined === null) // false
// important
console.log(NaN == NaN)         // false, not equal
// important
console.log(NaN === NaN)        // false
// important
console.log(NaN == null)         // false, not equal
// important
console.log(NaN === null)        // false
// important
console.log(NaN == undefined)         // false, not equal
// important
console.log(NaN === undefined)        // false
// important
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false


console.log("======================== Logical Operator ========================")
// Logical Operators

// && ampersand operator example

const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false
console.log(check1, check2, check3)
// || pipe or operator, example

const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false
console.log(check4, check5, check6)
//! Negation examples

let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  //  false
let isLightOn1 = true
let isLightOff = !isLightOn1           // false
let isMarried1 = !false                // true
console.log(check7, check8, isLightOn1, isLightOff, isMarried1)


console.log("======================== Increment Operator ========================")
// Increment Operator

console.log("Pre-increment ( ++count ) ")

let count1 = 0
console.log("real value ",count1)          // 1
console.log("process ", ++count1)        // 1
console.log("done ", count1)          // 1



console.log("Post-increment ( count++ ) ")

let count = 0
console.log("real value ", count)          // 1
console.log("process ", count++)        // 0
console.log("done ", count)          // 1



console.log("Pre-decrement ( --count ) ")

let count2 = 0
console.log("real value ", count2)  // -1
console.log("process ", --count2) // -1
console.log("done ", count2)  // -1



console.log("Post-decrement ( count-- )")

let count3 = 0
console.log("real value ", count3)   // -1
console.log("process ", count3--) // 0
console.log("done ", count3)   // -1



console.log("======================== Ternary Operators ========================")
// Ternary Operators
// variable ? if_true_do_this : if_no_do_this

let isRaining1 = true

isRaining1 ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

isRaining1 = false

isRaining1 ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')



let number = 5

number >= 0 ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)

number = -5

number >= 0 ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)



console.log("========================================================================================")
// // Lesson 4 (  Window Methods  )

/*

// this alert or prompt or confirm is run in just browser not in terminal

// alert(message)
alert('Welcome to 30DaysOfJavaScript')

// prompt ('header text', 'textfield text')
prompt('required text', 'optional text')

let number1 = prompt('Enter number', 'number goes here')
console.log(number1)

// confirm('message')
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box

*/


console.log("========================================================================================")
// // Lesson 5 ( Creating a time object )

/*

getFullYear()        get the year as a four digit number ( yyyy )       2020

getMonth()           get the month as a number between ( 0 - 11 )       7

getDate()            Get the day as a number ( 1 - 31 )                 8

getHours()           Get the hour ( 0 - 23 )                           18

getMinutes()         Get the minute ( 0 - 59 )                         30

getSeconds()         Get the second ( 0 - 59 )                         44

getMilliseconds()    Get the milisecond ( 0 - 999 )                    184
   
getTime()            Get the time ( milisecond since January 1, 1970 ) 1659972685697
   
getDay()             Get the weekday as a number ( 0 - 6 )             1

*/

const now1 = new Date()
console.log("Date(): ", now1) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)


const now2 = new Date()
console.log("getFullYear(): ", now2.getFullYear()) // 2020


const now3 = new Date()
console.log("getMonth(): ", now3.getMonth()) // 0, because the month is January,  month(0-11)


const now4 = new Date()
console.log("getDate(): ", now4.getDate()) // 4, because the day of the month is 4th,  day(1-31)


const now5 = new Date()
console.log("getDay(): ", now5.getDay()) // 6, because the day is Saturday which is the 7th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)


const now6 = new Date()
console.log("getHourse(): ", now6.getHours()) // 0, because the time is 00:56:41


const now7 = new Date()
console.log("getMinutes(): ", now7.getMinutes()) // 56, because the time is 00:56:41


const now8 = new Date()
console.log("getSeconds(): ", now8.getSeconds()) // 41, because the time is 00:56:41


const now9 = new Date() //
console.log("getTmie(): ", now9.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41


const allSeconds = Date.now() //
console.log("getTmie(): ", allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
// const allSeconds = new Date() //
// console.log(allSeconds.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true  // you get false if you run this in browser console to be true run both line together means this two line in above with this two line in the end you get the (true)


const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)
    
console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56
