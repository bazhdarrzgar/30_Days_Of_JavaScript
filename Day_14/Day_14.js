console.log("\n")
// because we are in lesson (Error Handling) then we commenting all the example this example have error and sometimes not but some of the example is run in console browser be carefull about that 
console.log("======================== Error Handling ========================")
console.log("\n")

/*

* try: code that may throw an error in try block. The try statement allows us 
to define a block of code to be tested for errors while it is being executed.

catch: write code to do something in catch block when an error occurs. 
The catch block can have parameters that will give you error information. 
Catch block is used to log an error or display specific messages to the user.

finally: finally this block of code will always be executed regardless of 
the occurrence of an error. The finally block can be used to complete the 
remaining task or reset variables that might have changed before error occurred in try block.


// Note: if error occur in any of the case the any code after (catch) will run there is not problem with that

try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}

*/






// try {
//   let lastName = 'Yetayeh'
//   let fullName = fistName + ' ' + lastName
// } catch (err) {
//   console.log(err)
// }

// /*

// ReferenceError: fistName is not defined
//     at <anonymous>:4:20

// */





// try {
//   let lastName = 'Yetayeh'
//   let fullName = fistName + ' ' + lastName
// } catch (err) {
//     // if you type specific error then the actuall error is come to the console.and in buttom of the console after error message end you will see this message
//   console.log("define lastName variable")
// //   console.error()
// //   console.log()
// }

// /*

// ReferenceError: fistName is not defined
//     at <anonymous>:4:20
//     ....
//     ....
// define lastName variable

// */









// try {
//   let lastName = 'Yetayeh'
//   let fullName = fistName + ' ' + lastName
// } catch (err) {
//   console.error(err) // we can use console.log() or console.error()
// } finally {
//   // regarding of the true of try or catch this block of code will run because defined in ( finally ) error handler
//   console.log('In any case I will be executed')
// }
  
// /*

//   ReferenceError: fistName is not defined
//       at <anonymous>:4:20
//         ....
//         ....
//   In any case it  will be executed

// */






// try {
//   let fistName = 'alex'
//   let lastName = 'Yetayeh'
//   console.log(fistName + ' ' + lastName)
  
// } catch (err) {
//   console.error(err) // we can use console.log() or console.error()
// } finally {
//   // regarding of the true of try or catch this block of code will run because defined in ( finally ) error handler
//   console.log('In any case I will be executed')
// }
  
// /*

//   alex Yetayeh
//   In any case I will be executed

// */
  
  
  
  
  
  
  
  
// try {
//   let lastName = 'Yetayeh'
//   let fullName = fistName + ' ' + lastName
// } catch (err) {
//   // make error message more redable by using keyword (name) with (err) parameter to take us name the error
//   // using (message) keyword to get back actuall message error means not why & when & .. this error happen just simple message error  
//   console.log('Name of the error', err.name)
//   console.log('Error message', err.message)
// } finally {
//   console.log('In any case I will be executed')
// }
  
// /*

//     Name of the error ReferenceError
//     Error message fistName is not defined
//     In any case I will be executed
    
// */
  







// throw 'Error2' // generates an exception with a (string value)
// /*

// ❌ Uncaught Error2
// (anonymous) @ VM48:1

// */

// throw 42 // generates an exception with the (value 42)
// /*

// ❌ Uncaught 42
// (anonymous) @ VM29:1

// */

// throw true // generates an exception with the (value true)
// /*

// ❌ Uncaught true
// (anonymous) @ VM52:1

// */

// throw new Error('Required') // generates an (error object with the message of Required)
// /*

// ❌ Uncaught Error: Required
//     at <anonymous>:1:7
//   (anonymous)	@	VM56:1

// */



// // for this example use console of your browser because we have prompt to enter the number

// // function
// const throwErrorExampleFun = () => {
//   // this value that we take to the prompt it is go to the (x) variable
//   let x = prompt('Enter a number: ')
//   try {
//     // if we don't type anything in the prompt we get the (empty) message
//     if (x == '') throw 'empty'
//     // if we don't type number instaid typing string we get the (not a number) message
//     // (isNaN) means not a number
//     if (isNaN(x)) throw 'not a number'
//     // if (x) is a number then
//     x = Number(x)
//     // if x < 5 then we get this message (too low)
//     if (x < 5) throw 'too low'
//     // if x > 10 then we get this message (too high)
//     if (x > 10) throw 'too high'
//   } catch (err) {
//     // if we type number between (5 to 10) but not 5 and 10 it self then we get the name of the error and message error using (name and message) keyword with my parameter (err) 
//     // remember this code is not have (error name and error message) just return (undefined) value in that case 
//     console.log(err.name)
//     console.log(err.message)
//   }
// }

// throwErrorExampleFun()







// console.log("\n")
// console.log("======================== Error Types ========================")
// console.log("\n")

// // actuall error without taking to try and catch method

// let firstName = 'Asabeneh'
// let fullName = firstName + ' ' + lastName


// /*

// console.log(fullName)
// Uncaught ReferenceError: lastName is not defined
//     at <anonymous>:2:35

// */    








// // SyntaxError 

// // using (x) instaid of (*)
// let square = 2 x 2
// console.log(square)

// /*

//   let square = 2 x 2
//                ^
//   SyntaxError: Unexpected identifier

// */








// // we don't finish the string using (single quotes) we use (double quotes) instaid 
// console.log('Hello, world")


// /*

//   console.log('Hello, world")
//             ^^^^^^^^^^^^^^^

//   SyntaxError: Invalid or unexpected token

// */








// // Type error

// let num = 10
// console.log(num.toLowerCase())

// /*

// console.log(num.toLowerCase())
//                 ^
// TypeError: num.toLowerCase is not a function

// */





