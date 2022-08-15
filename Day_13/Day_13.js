
console.log("\n")
console.log("======================== console.log() ========================")
console.log("\n")

// simple console.log() to send the result to the (console or prompt or termina)
console.log('30 Days of JavaScript')



console.log("\n")
console.log("======================== Substitution ========================")
console.log("\n")

/*

// link: https://stackoverflow.com/questions/42406146/javascript-s-or-d-represents-string

console.log() and console.debug() use printf-style formatting. Below are the officially supported formatters:

%s for a String

%d or %i for Number
%d Number (both integer and float).

%f for Floating points

%o for an Object
%o Pretty-print an Object all on a single line.

%j for an JSON
%j JSON. Replaced with the string '[Circular]' if the argument contains circular references.

%O Pretty-print an Object on multiple lines.

%% Single percent sign ('%'). This does not consume an argument.


*/

// console.log('of JavaScript', 30, 'Days') // of JavaScript 30 Days
// console.log('%d of JavaScript', 30, 'Days') // 30 of JavaScript Days
// console.log('%s of JavaScript', 30, 'Days') // 30 of JavaScript Days
// console.log('%s %d of JavaScript', 30, 'Days') // 30 NaN of JavaScript

// in this case (%d) help to move number to the first of the statement after that we have (%d) that help to move the string to the first of the statement 
// but before (%s) we have (%d) then number is come first after that we have string in the end we have this statement that we use both (%d and %s)
console.log('%d %s of JavaScript', 30, 'Days') // 30 Days of JavaScript



console.log("\n")
console.log("======================== CSS ========================")
console.log("\n")

/*

%c means using color by taking the color using css style

* if you use (%c) in front of ay statement then you are take color for the all statement but if you put word inside two (%c) then you are use color just for that word

* example
    - using color for all statement
    - Note: in any where in the statement if you want pass the color you just need to  
        console.log('%cIm live in new york', 'color: green; font-weight: bold')

        
    - using color for a word
    - NOTE: after each css color for a word you should have ('') empty quotes to understand the compiler that you don't take color for the space 
        
        console.log('Im %clive%c %cin%c %cnew%c %cyork%c', 'color: green; font-weight: bold','','color:red','','color:yellow','','color:brown','')
*/

// run both of the example in the console in the browser if color not work in your terminal
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green







console.log("\n\n")
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow',
  ''
) // log output green red and yellow text




console.log("\n")
console.log("======================== console.warn() ========================")
console.log("\n")

// run this example in console browser if you don't see the worning in your terminal

console.warn('This is a warning')
// ⚠️ This is a warning


console.warn('You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
)
// ⚠️ You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!


console.warn('Warning is different from error')
// ⚠️ Warning is different from error




console.log("\n")
console.log("======================== console.error() ========================")
console.log("\n")

console.error('This is an error message')
// ❌ This is an error message


console.error('We all make mistakes')
// ❌ We all make mistakes




console.log("\n")
console.log("======================== console.warn() ========================")
console.log("\n")

// array
const names = ['Asabeneh', 'Brook', 'David', 'John']
// the result will be nice table that represent the index number of that value and value it self
console.table(names)

/*

┌─────────┬────────────┐
│ (index) │   Values   │
├─────────┼────────────┤
│    0    │ 'Asabeneh' │
│    1    │  'Brook'   │
│    2    │  'David'   │
│    3    │   'John'   │
└─────────┴────────────┘

*/


// object
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
console.table(user)

/*

// this talbe containe the key nume instaid of index number for there value

┌─────────┬──────────────┐
│ (index) │    Values    │
├─────────┼──────────────┤
│  name   │  'Asabeneh'  │
│  title  │ 'Programmer' │
│ country │  'Finland'   │
│  city   │  'Helsinki'  │
│   age   │     250      │
└─────────┴──────────────┘

*/

// array using section for storing there value
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
console.table(countries)

/*

// t/his talbe containe the index number of both value in that section

┌─────────┬───────────┬─────────────┐
│ (index) │     0     │      1      │
├─────────┼───────────┼─────────────┤
│    0    │ 'Finland' │ 'Helsinki'  │
│    1    │ 'Sweden'  │ 'Stockholm' │
│    2    │ 'Norway'  │   'Oslo'    │
└─────────┴───────────┴─────────────┘

*/



// array object
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28,
    my_name: 'alex'
  },
  {
    hello: {
        alex: "manga",
        andra: "manga",
        age: "infinit"
    }
  }
]
console.table(users)

/*

// table also can understand array object value to do that sperate the key and value of that key by taking subject to both cituation, but that table can't go more in more detaile means more sub object you do inside mother object the table can't understand what you are actually want do

┌─────────┬────────────┬──────────────┬───────────┬──────────────┬─────┬─────────┬───────────────────┐
│ (index) │    name    │    title     │  country  │     city     │ age │ my_name │       hello       │
├─────────┼────────────┼──────────────┼───────────┼──────────────┼─────┼─────────┼───────────────────┤
│    0    │ 'Asabeneh' │ 'Programmer' │ 'Finland' │  'Helsinki'  │ 250 │         │                   │
│    1    │   'Eyob'   │  'Teacher'   │ 'Sweden'  │   'London'   │ 25  │         │                   │
│    2    │   'Asab'   │ 'Instructor' │ 'Norway'  │    'Oslo'    │ 22  │         │                   │
│    3    │  'Matias'  │ 'Developer'  │ 'Denmark' │ 'Copenhagen' │ 28  │ 'alex'  │                   │
│    4    │            │              │           │              │     │         │ { alex: 'manga' } │
└─────────┴────────────┴──────────────┴───────────┴──────────────┴─────┴─────────┴───────────────────┘

*/



const users1 = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28,
    my_name: 'alex'
  },
  {
    hello: {
        alex: "manga",
        andra: "manga",
        age: "infinit"
    }
  }
]
console.table(users1)

/*

┌─────────┬────────────┬──────────────┬───────────┬──────────────┬─────┬─────────┬──────────┐
│ (index) │    name    │    title     │  country  │     city     │ age │ my_name │  hello   │
├─────────┼────────────┼──────────────┼───────────┼──────────────┼─────┼─────────┼──────────┤
│    0    │ 'Asabeneh' │ 'Programmer' │ 'Finland' │  'Helsinki'  │ 250 │         │          │
│    1    │   'Eyob'   │  'Teacher'   │ 'Sweden'  │   'London'   │ 25  │         │          │
│    2    │   'Asab'   │ 'Instructor' │ 'Norway'  │    'Oslo'    │ 22  │         │          │
│    3    │  'Matias'  │ 'Developer'  │ 'Denmark' │ 'Copenhagen' │ 28  │ 'alex'  │          │
│    4    │            │              │           │              │     │         │ [Object] │
└─────────┴────────────┴──────────────┴───────────┴──────────────┴─────┴─────────┴──────────┘

*/


const users2 = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28,
    my_name: 'alex'
  }
]
console.table(users2)

/*

┌─────────┬────────────┬──────────────┬───────────┬──────────────┬─────┬─────────┐
│ (index) │    name    │    title     │  country  │     city     │ age │ my_name │
├─────────┼────────────┼──────────────┼───────────┼──────────────┼─────┼─────────┤
│    0    │ 'Asabeneh' │ 'Programmer' │ 'Finland' │  'Helsinki'  │ 250 │         │
│    1    │   'Eyob'   │  'Teacher'   │ 'Sweden'  │   'London'   │ 25  │         │
│    2    │   'Asab'   │ 'Instructor' │ 'Norway'  │    'Oslo'    │ 22  │         │
│    3    │  'Matias'  │ 'Developer'  │ 'Denmark' │ 'Copenhagen' │ 28  │ 'alex'  │
└─────────┴────────────┴──────────────┴───────────┴──────────────┴─────┴─────────┘

*/




console.log("\n")
console.log("======================== console.time() ========================")
console.log("\n")

/*

console.time("my description")

...code problem

console.timeEnd("my description")


// the description in both of (time and timeEnd) with console should be the same

*/

// this array is using section to store value
// this section is 2d array
const countries1 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]

// anytime you are using this (time) keyword with console this will record the time to know how much time is take this program take to run
// this is true for that program that we type after  ( console.time('anything you are enturesting to type') ) in the end when you want stop the record use (timeEnd) keyword with (console)
console.time('Regular for loop')
// countries1.length = 3
for (let i = 0; i < countries1.length; i++) {
  // first value is indicate for the number of index section
  /*
         0      1
    0 [value, value],
    1 [value, value],
    2 [value, value]

  */

  // second value is indicate for that value that we have in index 0 & 1
  // we can sperate the index using comma ( , )

  /*
         0      1
    0 [value, value],
    1 [value, value],
    2 [value, value]
    
  */

  console.log(countries1[i][0], countries1[i][1])
}

console.timeEnd('Regular for loop')

/*

Finland Helsinki
Sweden Stockholm
Norway Oslo
Regular for loop: 0.394ms

*/







console.log('\n\n')

console.time('for of loop')

// another for loop but this time we don't use regular for loop we use for each to know if for loop is faster than for each or vice versa

// taking value of array (countries1) to this varible base on this index that value in, for that we use this bracket   []   for put the value of (countries1) array to this variable base on index
for (const [name, city] of countries1) {
  // calling both of variable   
  console.log(name, city)
}

console.timeEnd('for of loop')

/*

Finland Helsinki
Sweden Stockholm
Norway Oslo
for of loop: 0.076ms

*/





console.log('\n\n')

console.time('forEach loop')

// in this time we use standard function to loop throw the value of array to know if standard for loop is faster or for each or this function
countries1.forEach(([name, city]) => {
  console.log(name, city)
})

console.timeEnd('forEach loop')

/*

Finland Helsinki
Sweden Stockholm
Norway Oslo
forEach loop: 0.124ms

*/


// Result: in the end for each is actually faster than standard for loop and function





console.log("\n")
console.log("======================== console.info() ========================")
console.log("\n")

// (  console.info()  )  It displays information message on browser console.
// (  console.log()   ) = (  console.info()  )

// run this code with console in browser

console.info('30 Days Of JavaScript challenge is trending on Github') // 30 Days Of JavaScript challenge is trending on Github

console.info('30 Days Of fullStack challenge might be released') // 30 Days Of fullStack challenge might be released

console.info('30 Days Of HTML and CSS challenge might be released') // 30 Days Of HTML and CSS challenge might be released





console.log("\n")
console.log("======================== console.assert() ========================")
console.log("\n")

/*

// Syntax

console.log(if_true, if_false)

// if_true return no result
// if_false return the false result with error message (Assertion failed: message....)

*/

console.assert(4 > 3, '4 is greater than 3') // no result

console.assert(3 > 4, '3 is not greater than 4') 
// ❌ Assertion failed: 3 is not greater than 4


for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  // if ( i % 2 === 0 ) means if value is even then return nothing
  // if value is odd number will return error message in style of object

  // (errorMessage) is variable name can be used inside the object like a (value not key)

  // the object containe the value of (i) in that stuation and (errorMessage) variable value
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
  /*

    ssertion failed: 3 is not greater than 4
    the # is 0
    the # is 1
    Assertion failed: [object Object]
    the # is 2
    the # is 3
    Assertion failed: [object Object]
    the # is 4
    the # is 5
    Assertion failed: [object Object]
    the # is 6
    the # is 7
    Assertion failed: [object Object]
    the # is 8
    the # is 9
    Assertion failed: [object Object]
    the # is 10

  */
}



console.log("\n")
console.log("======================== console.count() ========================")
console.log("\n")

// if you are use (count) keyword with console then how much this value that inside the console be call then the (count) keyword will count the number of that output with the output it self just by adding symbol ((:) and number after that)

// if value change the count start new counting
// if value not change the count continue counting

const func = () => {
  console.count('Function has been called')
}
func()
// Function has been called: 1
func()
// Function has been called: 2
func()
// Function has been called: 3

console.count('Function has been called1') // 1
console.count('Function has been called2') // 1
console.count('Function has been called3') // 1
console.count('Function has been called4') // 1

console.count('Function has been called not change') // 1
console.count('Function has been called not change') // 2
console.count('Function has been called not change') // 3
console.count('Function has been called not change') // 4







console.log("\n")
console.log("======================== console.group() ========================")
console.log("\n")

/*

// console.group()  take title for your output the output can be array or array object or object array or object it self

// Syntax

console.group("My group name")

....Code problem

console.groupEnd("My group name")


// (groupEnd) keyword not need any vlaue if you try to taked value then it not print to the console

*/

const names1 = ['Asabeneh', 'Brook', 'David', 'John']

console.group('Names')
// console.log(names1)
console.table(names1)
console.groupEnd("hi")

/*

Names
  ┌─────────┬────────────┐
  │ (index) │   Values   │
  ├─────────┼────────────┤
  │    0    │ 'Asabeneh' │
  │    1    │  'Brook'   │
  │    2    │  'David'   │
  │    3    │   'John'   │
  └─────────┴────────────┘

*/







const countries2 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]

console.log("\n\n")

console.group('Countries')
// console.log(countries2)
console.table(countries2)
console.groupEnd()

/*

Countries
  ┌─────────┬───────────┬─────────────┐
  │ (index) │     0     │      1      │
  ├─────────┼───────────┼─────────────┤
  │    0    │ 'Finland' │ 'Helsinki'  │
  │    1    │ 'Sweden'  │ 'Stockholm' │
  │    2    │ 'Norway'  │   'Oslo'    │
  └─────────┴───────────┴─────────────┘

*/







const user1 = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}

const users3 = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]



console.log("\n\n")

//  taking one name for this two table
console.group('Users')
// console.log(user1)
// console.log(users3)
console.table(user1)
console.table(users3)
console.groupEnd()




/*

Users
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]

*/