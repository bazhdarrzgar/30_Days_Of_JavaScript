console.log("======================== Higher Order Function ========================")
console.log("======================== Callback ========================")
console.log("\n")

/*

// Syntax

const function_name1 = (parameter_name) => {
    .... code problem
}

...

const function_name2 = (function_name1, parameter_name, ....) {
    .... code problem
}

...

console.log(function_name2(function_name1, parameter_name, ...))





// calling both function
// you can call in sperate way but you can do that below it is pro way for you if you use parameter 
console.log(function_name2(function_name1, parameter_value))

*/



// this function we used for  ( Call Back )
const callback = (n) => {
  return n ** 2
}

// function that takes other function as a callback
function cube(callback, n) {
  // n = ( n ** 2 )       // n = 3
  // n = ( 3 ** 2 )       // ( 9 )
  // ( 3 ** 2 ) * 3       // ( 9 ) * 3    // 27 
  // because both function ( callback & cube ) has the same parameter_name you can just take this value that you want for this on of the parameter then it will be the value of this function too 
  return callback(n) * n
}

// 3 is number for ( n ) but because the ( n ) is parameter_name for callback function then it will be the value for that too
// this will call both function base on parameter_name
console.log(cube(callback, 3))





console.log("\n")
console.log("========================================================================================")
console.log("======================== Returning function ========================")
console.log("\n")

/*

// Syntax

const function_name1 = parameter_name1 => {
    const function_name2 = parameter_name2 => {
        const function_name3 = parameter_name3 => {
            .... {
                .... code problem
                return ( parameter_name1 + .. + parameter_name2 + .. + parameter_name3 )
             }
             return ...
        }
        return function_name3
    }
    return function_name2
}


// calling boss function
// eacch funcction should have own bracket means don't use big bracket for all of the function
console.log(function_name1(paramenter_name1)(paramenter_name2)(paramenter_name3) ...)

*/

// Higher order function returning an other function
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
//                      n  m   t
console.log(higherOrder(2)(3)(10)) // 23









console.log("\n")

// Let us see were we use call back functions. For instance the forEach method uses call back.

// creating array to calculate by callback function
const numbers = [1, 2, 3, 4, 5]

// function that containe another function that use it for callback
// we just create this function to return the sum of calculation of array
const sumArray = arr => {
  // we use this variable outside the function call 
  // because if we create this inside the function we can't access this variable outside the function call
  let sum = 0

  // creating callback function that containe element 
  // this element not containing number of array 
  // first the numbers of array go to ( arr ) of sum using ( sumArray(numbers) )
  // second the numbers of array go to the (element) of calback function because we use (arr.forEach(callback)) means take this value of (arr) variable for each element 
  // in the final of session we get the (value of array to the element one by one) using (forEach) then we can now calculate the sum of array
  const callback = function(element) {
    sum += element
    // sum = sum + element
  }

  // (arr variable) ( handle value of (numbers variable) array) and the take to callback function using (arr.callback) but we need do that one by one for that we use ( arr.forEach(element) )
  arr.forEach(callback)

  // after finishing the process we get the sum of array for the function of (sumArray) now the result output to the prompt using (   console.log(sumArray(numbers))   )
  return sum
}

console.log(sumArray(numbers))









console.log("\n")

// The above example can be simplified as follows:
const numbers1 = [1, 2, 3, 4]

const sumArray1 = arr => {
  // the sum is specify outside function call because if you use this inside the funciton call you can call this variable outside that function
  // because of (block function) or (scop variable)
  let sum = 0

  // we just create function like that
  // we compress (arr) parameter of orginal function 
  // using forEach to do that for element of function 
  // in that case we don't need specify the function name because java script know that we created this function just to taking value to using forEach to take it one by one
  /*

  // Syntax
  
  // (arr) variable hande the value of array in this case is numbers1 array
  // (forEach) is method work like (for each loop) 
  
  arr.forEach(function(parameter_name)){
    ... code problem
  })
  

  // calling that function
  // you can't call this function you can make variable outside that function and use this variable inside that callback function to store the result in that variable after that use this variable or return this variable for the orginal function
  */
  
  arr.forEach(function(element) {
    sum += element
    // sum = sum + element
  })
  return sum

}

// take function (sumArray1) the value from (array numbers1) using (   sumArray(numbers1)   )
console.log(sumArray1(numbers1))






console.log("\n")
console.log("========================================================================================")
console.log("======================== Setting time ========================")
console.log("\n")


/*

## Setting time

// In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

  * setInterval

  * setTimeout

*/


/*

// syntax

function callback() {
  // code goes here
}

setInterval(callback, duration)

*/


function sayHello() {
  console.log('Hello')
}

// this is how we can set ( setInterval ) 
// the timeout of this function is not end means this function will run inifinit time every 1 second in that case
// this time is out when you set ( setTimeout ) 

// setInterval(sayHello, 1000) // it prints hello in every 1000ms = 1 second







function sayHello() {
  console.log('Hello')
}

// after 2 second they print (Hello) and terminate the program
// setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.








console.log("\n")
console.log("========================================================================================")
console.log("======================== Functional Programming ========================")
console.log("\n")


/*

// Syntax

// forEach
// using forEach in that function to loop throw all the element of the arr and put it in arr paramenter in the function
// we used (element) and (index) because we just use this function for demo use 
// but if you want what usefull of index or element then we can say that ( element = this element that we have in array ) and ( index = index of that element )

(function (parameter_name1, parameter_name2, ...) {
  ....code problem
})

// Ex.
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})







// The above code can be written using arrow function
// you can just ignore the word function to create that function means we can not use that 
function

// the we just take it parameter and done
(parameter_name1,  parameter_name2, .....) => {
  ....code problem
})


// Ex.
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})








// The above code can be written using arrow function and explicit return
// also we can just ignore this bracket {} 
(parameter_name1,  parameter_name2, .....) => 
  ....code problem
)


// Ex.
arr.forEach((element, index, arr) => 
  console.log(index, element, arr)
)

*/


// this sum variable should be called in outside the function because we can call this variable in the outside of the function 
// if we created this sum variable inside the function we can call it normally like ( console.log(num) )
// but you can use standard calling functioin to do that
let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];

// using (forEach) method to loop throw all the element from array (numbers2) and take this number one by one to (num) parameter after that this num will print using  (   console.log(num)   ) 
numbers2.forEach(num => console.log(num))
console.log(sum)







console.log("\n")

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

// (forEach) method will loop throw each element of the array 
// and after that the function change element to (Upper Case) for each element

// (countries) is array
// method (forEach) will loop throw all element and put it in (element) variable one by one
// console.log(element.toUpperCase())  // change all element to upper case
countries.forEach((element) => console.log(element.toUpperCase()))




console.log("\n")
console.log("========================================================================================")
console.log("======================== map ========================")
console.log("\n")


/*

// putting styling forEach function into the variable

const variable_name = variable_handle_array_value.map(function (parameter_name1, parameter_name1, ...) {
  .... code problem
})


// function without word function
const variable_name = variable_handle_array_value.map((parameter_name1, parameter_name1, ...) => {
  .... code problem
})


// function without this bracket {}
const variable_name = variable_handle_array_value.map((parameter_name1, parameter_name1, ...) =>
  .... code problem
)



// EX.
const modifiedArray = arr.map(function (element, index, arr) {
  return element
})


const modifiedArray = arr.map((element, index, arr) => {
  return element
})


const modifiedArray = arr.map((element, index, arr) =>
  return element
)




*   Arrow function and explicit return

*   const modifiedArray = arr.map((element,index) => element);

*/





// Example
const numbers3 = [1, 2, 3, 4, 5]


// if you use this function you should have the (num variable) to be defined outside the function after that return this (num variable) to be print with  (  console.log(num)  ) also you should have forEach method instaid of map method in that case this is one of the problem that this style of function not alow map mehtod
// also this style of function not allow method map
const numbersSquare1 = numbers3.map(function (num) {  
  num * num 
})

console.log(numbersSquare1)     // [ undefined, undefined, undefined, undefined, undefined ]







console.log("\n")

// also this style of funcction not allow (map) method
const numbersSquare2 = numbers3.map((num) => { 
  num * num 
})

console.log(numbersSquare2)  // [ undefined, undefined, undefined, undefined, undefined ]







console.log("\n")

// this style of function is allow using (map) method
// all element of (numbers3) will map to (num) variable one by one
const numbersSquare3 = numbers3.map((num) => num * num)

console.log(numbersSquare3)







console.log("\n")

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// all element of array (names) will map to (name) variable
const namesToUpperCase = names.map((name) => name.toUpperCase())

// we just call the variable of ( namesToUpperCase ) to print the function without declaring another variable outside the funciton to store the function value and use this value of that variable to print it outside the function like that
// the (map) method is solve that problem 
// by just put that variable that you want equal to that funciton just like that this variable will store all the value 
// this is very good if you want to not deal with variable that should declare in outside the function and use this variable to use it in the function to handle the result of process function and in the end call that function
// now you just declare variable to handle the hall function in the end you just call the variable that handle hall function
// now 1 step is less in this case
console.log(namesToUpperCase) // [ 'ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK' ]
// console.table(namesToUpperCase) 







console.log("\n")

const countries1 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

// (map) all the value of (countries1) array to (country) parameter 
// after that the function change each value to upper case
const countriesToUpperCase = countries1.map((country) => country.toUpperCase())

// calling just the variable handler of function
console.log(countriesToUpperCase)
// console.table(countriesToUpperCase)


/*

// Arrow function
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
})



//Explicit return arrow function
const countriesToUpperCase = countries.map(country => country.toUpperCase());

*/






console.log("\n")

const countriesFirstThreeLetters = countries1.map((country) =>
  // we use splice to slice from length ( 0 to 3 ) it is like you are say from ( 1 to 3) but in splice you should start in 0 to the target length
  // remember that in (slice) you are using (length not index)
  country.toUpperCase().slice(0, 3)
)

console.log(countriesFirstThreeLetters)  // ['ALB', 'BOL', 'CAN', 'DEN', 'ETH', 'FIN', 'GER', 'HUN', 'IRE', 'JAP', 'KEN']






console.log("\n")
console.log("========================================================================================")
console.log("======================== filter ========================")
console.log("\n")

/*

// when you use filter the filter is take the power of filter for this parameter that you want


// Syntax

variable_that_handle_value.filter((parameter_name) => 
  ....code problem 
  parameter_name.method_to_do_something_to_sring(substring)
)

*/


console.log("\n")

const countries2 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

// filter method just take that (countries) value that containing land
// if you don't use (filter) method this is not workd for (includes)
// means (filter) method is have power to (remove substring and value) from the array 
// remember when you use the (filter) method you should use (include or endWith or startWith or ...) method in your code problem to show power of (filter) 
const countriesContainingLand = countries2.filter((country) =>
   // calling this value that (include) the (land) substring in the value of countries2
  country.includes('land')
)
console.log(countriesContainingLand)  // ['Finland', 'Ireland']








console.log("\n")

const countries3 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

// calling value or all value of (countries3) variable using (filter) method 
// the (filter) method when it get this value then put all this in (country) parameter and take power of (removing substring or value) form array (countries3)
const countriesEndsByia = countries3.filter((country) => 
  // parameter_name.endsWith(substring) // just containe this value that containe this substring 
  country.endsWith('ia')
)
console.log(countriesEndsByia)  // ['Albania', 'Bolivia','Ethiopia']








console.log("\n")

// using (filter) method to put all value of array (countries3) to (country) parameter 
// after that take power of filtering to (country) variable
const countriesHaveFiveLetters = countries3.filter((country) => 
  // call this value that length = 5 using (length) method
  country.length === 5
)
console.log(countriesHaveFiveLetters)  // ['Japan', 'Kenya']






/*

// array can container sub array like the object

const variable_name = [
  { value_name: value, value_name: value },
  { value_name: value, value_name: value },
  { value_name: value, value_name: value },
  ......,
  ......,

  value,
  value,
  .....,
  .....,

  value_name: value,
  value_name: value,
  .....,
  .....,

  value_name: function_name function(parameter_name, ...) {
    .... code problem
  },
  .....,
  .....
]

*/

console.log("\n")

const scores = [
  { name: 'Asabeneh', score_rank: 95 },
  { name: 'Lidiya', score_rank: 98 },
  { name: 'Mathias', score_rank: 80 },
  { name: 'Elias', score_rank: 50 },
  { name: 'Martha', score_rank: 85 },
  { name: 'John', score_rank: 100 },
]

const scoresGreaterEighty = scores.filter((score) => 
  // call this value of score that greater tha 80     ( score.score_rank > 80 ) 
  // (score_rank) is not the method is just the (value_name) for the array
  // when you call the (score_rank)
  score.score_rank > 80
)

console.log(scoresGreaterEighty) 

/* 

// output

[
  { name: 'Asabeneh', score_rank: 95 },
  { name: 'Lidiya', score_rank: 98 },
  { name: 'Martha', score_rank: 85 },
  { name: 'John', score_rank: 100 }
]

*/

console.log("\n")
console.log("========================================================================================")
console.log("======================== reduce ========================")
console.log("\n")


/*

// reduce: Reduce takes a callback function. 
// The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. 
// It is a good practice to define an initial value for the accumulator value. 
// If we do not specify this parameter, by default accumulator will get array first value. 
// If our array is an empty array, then Javascript will throw an error.


arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
 return 
}, initialValue)

*/



// declaring this variable outside the function to store the result of function
const numbers4 = [1, 2, 3, 4, 5]

// how much parameter you have no matter for reduce the value of the array is go to the first array not second or third or ..

// the (reduce) method will return the value without (return) keyword
// (reduce) method will return this value that done by (calculation between this parameter) that we initilized
// the (reduce) method will return other calculation with this (parameter) that we initlized for parameter but this calculatin will done with parameter we do that by just using comma (,)
const sum1 = numbers4.reduce((acc, cur) => 
  acc + cur, 20 + 20
)

console.log(sum1) // 55







console.log("\n")
// declaring this variable outside the function to store the result of function
const numbers5 = [1, 2, 3, 4, 5]

const sum2 = numbers5.reduce((acc, cur) => 
  acc + cur, 0
  // 20 + 20 // error
  
  /*

  acc + cur, 0
  ^ 
  SyntaxError: missing ) after argument list

  */
)

console.log(sum2) // 15





// console.log("\n")
// console.log("========================================================================================")
// console.log("======================== Checking properties using hasOwnProperty() ========================")
// console.log("\n")



// console.log("\n")
// console.log("========================================================================================")
// console.log("======================== Checking properties using hasOwnProperty() ========================")
// console.log("\n")



// console.log("\n")
// console.log("========================================================================================")
// console.log("======================== Checking properties using hasOwnProperty() ========================")
// console.log("\n")



// console.log("\n")
// console.log("========================================================================================")
// console.log("======================== Checking properties using hasOwnProperty() ========================")
// console.log("\n")



// console.log("\n")
// console.log("========================================================================================")
// console.log("======================== Checking properties using hasOwnProperty() ========================")
// console.log("\n")



// console.log("\n")
// console.log("========================================================================================")
// console.log("======================== Checking properties using hasOwnProperty() ========================")
// console.log("\n")




// console.log("\n")
// console.log("========================================================================================")
// console.log("======================== Checking properties using hasOwnProperty() ========================")
// console.log("\n")



// console.log("\n")
// console.log("========================================================================================")
// console.log("======================== Checking properties using hasOwnProperty() ========================")
// console.log("\n")



// console.log("\n")
// console.log("========================================================================================")
// console.log("======================== Checking properties using hasOwnProperty() ========================")
// console.log("\n")



// console.log("\n")
// console.log("========================================================================================")
// console.log("======================== Checking properties using hasOwnProperty() ========================")
// console.log("\n")



// console.log("\n")
// console.log("========================================================================================")
// console.log("======================== Checking properties using hasOwnProperty() ========================")
// console.log("\n")