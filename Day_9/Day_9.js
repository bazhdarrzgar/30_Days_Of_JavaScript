console.log("======================== Higher Order Function ========================")


/*

// in this lesson we cover 3 type of function but remember any function you are use that use array or object it can use that function like the (function_object or function_child)
// function without this can be declared as the (function_object or function_child)

*/

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
// second and third and ... by default take value (0) 

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







console.log("\n")

var array = [36, 25, 6, 15];

const sum3 = array.reduce(function(accumulator, currentValue) {
  // you can use keyword (return) this is optional 
  return accumulator + currentValue;

  // you can use this style to put another value after the function or you can do that after end bracket ( } ) but remember you should use comma (,) in both of case
  // return accumulator + currentValue, 0;
}, 0); 

console.log(sum3)







console.log("\n")

// instaid  of (array name) you can acctually put orginal array in front of this method that use the array
const sum4 = [1,2,3,4,5].reduce((acc, current) =>
  acc + current, 0
)

console.log(sum4)






console.log("\n")
console.log("========================================================================================")
console.log("======================== every ========================")
console.log("\n")

/*

// every: Check if all the elements are similar in one (aspect). It returns boolean
// this (aspect) can be customized anyway you want
// Syntax

every((parameter_name1, parameter_name2, ....) =>
  typeof parameter_name1 === 'string'
  typeof parameter_name2 === 'number'
)


*/


const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// the (every) method loop throw all the element in the (names1) array and (take power of aspectation) for the parameter name 
const areAllStr = names1.every((name) => 
  // aspectation for all element of array (names1) if it is string
  // string should be write in lowercase ('string')

  // make sure you are using (typeof) in front of name to compare if 'string' = 'string'
  typeof name === 'string' // true
  // typeof name === 'number' // false
) // Are all strings?

console.log(areAllStr) // true








console.log("\n")

const names2 = [1, 2 , 3, 4]

const areAllStr1 = names2.every((name) => 
  // typeof name === 'string' // false
  typeof name === 'number' // true
) // Are all number ? 

console.log(areAllStr1) // true







console.log("\n")

const bools = [true, true, true, true]

const areAllTrue = bools.every((b) => 
  // compare if all value of b = true we don't compare the datatype we just compare the value this is why we don't use (typeof) keyword
  b === true // true
  // typeof b === true // false
) // Are all true ? 

console.log(areAllTrue) // true






console.log("\n")
console.log("========================================================================================")
console.log("======================== find ========================")
console.log("\n")

const ages = [24, 22, 25, 32, 35, 18]

// taking (power of finding) something for (age) parameter
// (find) method has power to loop throw all this value in the array & finding this value for (age) parameter that this element of age parameter ask for it 
// this element that age parameter have take by (find) method also (find) method take this element from (ages) array to (age) parameter
const age = ages.find((age) => 
  // find this age that less 20 
  age < 20
)

console.log(age)







console.log("\n")

const names3 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

const result = names3.find((name) => 
  // find this string that number of length is 7
  name.length > 7
)
console.log(result)








console.log("\n")

const scores1 = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const score = scores1.find((user) => 
  // find this value that (  score (value_name)  ) is greater than 80
  user.score > 80
)

// the output will be this (      { name: 'Asabeneh', score: 95 }       ) 

// this value that we get is not all the result that we want because we have ( 85, 100 ) 
// but this value is come after (score: 95) 
// this is why this function that we have just loop throw one time to the array when it is find take first result 
// back to the prompt not second and third and ... 
console.log(score)









console.log("\n")

const scores2 = [
  // { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const score1 = scores2.find((user) => 
  user.score > 80
)
console.log(score1) // { name: 'Martha', score: 85 }



console.log("\n")
console.log("========================================================================================")
console.log("======================== findIndex ========================")
console.log("\n")


const names4 = ['Elias', 'Mathias', 'Brook', 'Asabeneh']
const ages1 = [24, 22, 25, 32, 35, 18, 12]

// (findIndex) method will find index of this item that you want in the array
// (findIndex) will put all value in the array to this parameter for the function 
// (findIndex) take power of finding index to this parameter then we can use this parameter to find any index in the list of this array that we have in hand
const result1 = names4.findIndex((name) => 
  // find any value in the list that length is greater than 7  
  // if compiler not found this index for string by defualt return (-1) this is default value for any (variable and value) if compiler not found (-1 = false)

  // the loop is just do it one time for the list not 2 time or 3 or ..
  // means if we have more than one value of string is greater than 7 then compiler just look at first solution not other solution when it found it is return it for the target function
  name.length == 7
)

console.log(result1) // 1




const age2 = ages1.findIndex((age) => 
  // find any index position of this value that less than 20
  // the loop is just do it one time for the list not 2 time or 3 or ..
  // means if we have more than one value is less 20 then compiler just look at first first solution not other solution when it found it is return it for the target function
  age < 20
)
  
console.log(age2) // 5







console.log("\n")
console.log("========================================================================================")
console.log("======================== some ========================")
console.log("\n")

/*

some: Check if some of the elements are similar in one aspect. It returns boolean

the some is like (ever) method // every: Check if all the elements are similar in one aspect. It returns boolean

* the different between (ever) method and (some) method
  
  * (ever) is check for all the value in the array and check for this aspect that call it by the function
  * (some) just check for some value in the array if array match just one value or more then the matching is true
  
  * ever: ( typeof str = 'string' )if all the value is not string return false
  * ever: ( typeof num = 'number' )  if all value not number return false

  * some: (typeof str = 'string' ) if just one value is string return true not matter if rest of value is string in the array
  * some: (typeof num = 'number' ) if just one value is number return true not matter if rest of value is number in the array

*/

const names5 = ['Asabeneh', 'Mathias', 'Elias', 'Brook', 1, 2]
const bools1 = ['alex', true, true, true, true, 20, 'Bob']


const areWeHaveSomeTrue = bools1.some((b) =>  
  b === true
) // Are some of value is true ?

console.log(areWeHaveSomeTrue) //true




const areWeHaveSomeStr2 = names5.some((name) => 
  typeof name === 'number'
) // Are some of value is strings ?

console.log(areWeHaveSomeStr2) // false






console.log("\n")
console.log("========================================================================================")
console.log("======================== sort & reverse ========================")
console.log("\n")


const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
const numbers8 = [8, 2, 10, 30]

console.log("\n")

// using sort method will provide wrong number like this two example below using array above
console.log("Before sort customization: ", products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
console.log("Before sort customization: ", numbers8.sort()) // [ 10, 2, 30, 8 ]




console.log("\n")

console.log("Before reverse customization: ", products.reverse()) // [ 'Sugar', 'Milk', 'Honey', 'Coffee', 'Carrot', 'Apple' ]
console.log("Before reverse customization: ", numbers8.reverse()) // [ 8, 30, 2, 10 ]




products.sort(function (a, b) {
  // using (length) method for for sorting this is means sort using standard length from less length to big length
  return a.length - b.length
})

numbers8.sort(function (a, b) {
  // using just minize inidcation to minimize this number that pointer it is in to that number that is in to the next position
  // you can use plus sign to do the reverse way

  // this is sort the number from less number to big number
  return a - b
})

console.log("\n")

// when we call the array you don't need use (sort) method with the array because we are already change array sorting way using that function with (sort) method with that function
console.log("After sort customization: ", products) // [ 'Milk', 'Apple', 'Honey', 'Sugar', 'Carrot', 'Coffee' ]
console.log("After sort customization: ", numbers8) // [ 2, 8, 10, 30 ]




console.log("\n")

// this is sort the number from less number to big number

// because we changed sorting way for the array using (sort) method from (less to big number) 
// you can also reverse this sorting way without do sperate function for this work just by using (reverse) method with this array when you call the array
// because the sorting way of array is changed then we can reverse this sorting way just by using (reverse) method
console.log("After Reverse customization: ", products.reverse()) // [ 'Coffee', 'Carrot', 'Sugar', 'Honey', 'Apple', 'Milk' ]
console.log("After Reverse customization: ", numbers8.reverse()) // [ 30, 10, 8, 2 ]



console.log("\n")
console.log("========================================================================================")
console.log("======================== Sorting Numeric values ========================")
console.log("\n")


const numbers7 = [9.81, 3.14, 100, 37]

// Using sort method to sort number items provide a wrong result. see below
console.log("Before sorting customization: ", numbers7.sort()) //[100, 3.14, 37, 9.81]


/*

// Syntax

array_variable_name.sort(function (parameter_1, parameter2) {
  return parameter_1 - parameter_2
})

console.log(array_variable_name) // [ less number to big number ]






array_variable_name.sort(function (parameter_1, parameter2) {
  // reverse position of returning the value
  return parameter_2 - parameter_1
})

console.log(array_variable_name) // [ big number to less number ]

*/




console.log("\n")

numbers7.sort(function (a, b) {
  // this is compare (less number to big number)
  // (sort) method will sort the value form (less to big) this is done for all element in the array after done of this work they put comparession result in a & b
  // (a holding first number) and (b second number) the first number will compre to second number (if it is big go to the right hand side if it is less go to the left hand side)
  // when you return the number is where the magic happen means if you say (return a - b) means return from (less to big) if you say (return b - a) means return from (big to less)
  // this is happen because compression for (return b - a) will reverse big number compare to less number if true go to left side if not go to the right this is done for all element in the array
  /*
 
   9.81 > 3.14 | 100 | 37
   3.14 > 100  | 37  | 9.81
   3.14 > 100  | 37  | 9.81
   37   > 9.18 | 3.14| 100

   less ---to--- big
  */
  return a - b
})

console.log("After sorting customization: ", numbers7) // [3.14, 9.81, 37, 100]





console.log("\n")

numbers7.sort(function (a, b) {
  // just by reversing the position of a and b we can change the sorting way
  // means sort method will sort for both of value from (less to big) way
  /*

   9.81 > 3.14 | 100 | 37
   3.14 > 100  | 37  | 9.81
   3.14 > 100  | 37  | 9.81
   37   > 9.18 | 3.14| 100

   big ---to--- less

  */
  return b - a
})

console.log("After sorting customization: ", numbers7) //[100, 37, 9.81, 3.14]








console.log("\n")
console.log("========================================================================================")
console.log("======================== Sorting Object Arrays ========================")
console.log("\n")


// objArr.sort(function (a, b) {
//   if (a.key < b.key) return -1
//   if (a.key > b.key) return 1
//   return 0
// })


// console.log(users) // sorted ascending


// // or

objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1
  if (a['key'] > b['key']) return 1
  return 0
})

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) // sorted ascending
// [{…}, {…}, {…}, {…}]

