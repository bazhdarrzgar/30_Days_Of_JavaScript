console.log("\n")
console.log("======================== Closure ========================")
console.log("\n")

/*

JavaScript allows writing function inside an outer function. 
We can write as many inner functions as we want. 
If inner function access the variables of outer function then it is called closure.

*/



function outerFunction() {
    let count = 0;
    // function inside another function or just called (clusure)
    // this function can use other varible that is outside there function it self
    function innerFunction() {
        count++
        // this result will back to the function it self in this case is (innerFunction)
        return count
    }
    // return the value of (innerFunction) to the (outerFunction)
    return innerFunction
}

// calling outerFunction
// variable (innerFunc) is handling value of (outerFunction())
let innerFunc = outerFunction()

// because the function (outerFunction) is handle the (clusure) function we should use this bracket () if you call the the (function that is handle another function) this is true for calling function it self and for this variable that is handle value of outer function in this case is header of all function (outerFunction)
// if you don't do that you get back this result below

// without using this bracket  ()  for variable handler the value of outer function
console.log(innerFunc) // [Function: innerFunction]
// using this bracket  ()  for variable handler the value of outer function
console.log(innerFunc()) // 1
console.log(innerFunc()) // 2
console.log(innerFunc()) // 3







console.log("\n\n")
// without using inner function
function outerFunction1() {
  var count = 0;
  count++
  return count
}

let innerFunc1 = outerFunction1()

console.log(innerFunc1) // 1
console.log(innerFunc1) // 1
console.log(innerFunc1) // 1

// console.log(outerFunction1()) // 1
// console.log(outerFunction1()) // 1
// console.log(outerFunction1()) // 1

// // don't use this bracket   ()   with handler value of function 
// console.log(innerFunc1()) // error
// console.log(innerFunc1()) // error
// console.log(innerFunc1()) // error





console.log("\n\n")
// without using inner function

// if you want see the increment value one by one then,
// you should declare this variable outside the function, for this variable that is you are using for done operation increment inside your function

// this is because if you declared this variable inside the function then anytime you are call this function the function override the value of (n) again and again this is why you just see the increment from (0 to 1) always

// but if you declared outside the function before or after function then when you call the function the compiler just one time get the value form variable and done operation increment to the function it is mean the compiler one time just get the value from outside the function then don't look at this variable and say hey this is new value for you function let's done work again not just one time get the value from outside the function and anytime the function call from outside the function then the compiler just use previous value that done operation of increment previous inside the function 
var n = 0

function increment() {
  n++
  return n
}

console.log(increment()) // 1 
console.log(increment()) // 2 
console.log(increment()) // 3 


// // you can't use variable to handle value of the function that is use resourcess from outside it self
// const increment_func = increment();
// console.log(increment_func) // 4
// console.log(increment_func) // 4
// console.log(increment_func) // 4

// console.log(increment_func()) // error







console.log("\n\n")

function outerFunction2() {
  
  let count = 0;
  
  // inncer function for the increment value
  function plusOne() {
      count++
      return count
  }

  // inncer function for the decrement value
  function minusOne() {
      count--
      return count
  }

  // return plusOne

  // you can return more than one function using (return) keyword how ?
  // we can do that if you build (object) for the (return) keyword and take each inner function the key that handle the value of that inner function

  // but rememeber if you use this technique then when the key is get the value from the inner function one time after that how much the function is call then this key that handle the value of the inner function return this value that first time get from the inner function means they don't return changine value this is common if you want done operation increment or decrement

  // this is because key is don't change value by just put new value in front of object while the compiler running we can change the value of key using this technique that we do in the past for changing value of the key
  return {
      plusOne:plusOne(),
      minusOne:minusOne()
  }
}

/*

// if you call the function using variable handler of that function then use this rule for calling the function
// Syntax

const variable_name = function_name()

variable_name.return_key_name_for_the_function





// if you are use there function it self then use this rule for calling the function
// Syntax

function_name().return_key_name_for_the_function

*/

const innerFuncs = outerFunction2()

console.log(innerFuncs.plusOne) // 1
console.log(innerFuncs.plusOne) // 1
console.log(innerFuncs.plusOne) // 1

console.log(innerFuncs.minusOne) // 0
console.log(innerFuncs.minusOne) // 0
console.log(innerFuncs.minusOne) // 0



console.log(outerFunction2().plusOne) // 1
console.log(outerFunction2().plusOne) // 1
console.log(outerFunction2().plusOne) // 1

console.log(outerFunction2().minusOne) // 1
console.log(outerFunction2().minusOne) // 1
console.log(outerFunction2().minusOne) // 1


