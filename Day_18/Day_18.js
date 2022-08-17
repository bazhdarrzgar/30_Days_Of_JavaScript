// run all this example in console browser using balnk page ( about:blank )
console.log("\n")
console.log("======================== Promise ========================")
console.log("\n")

/*

## A Promise is in one of these states:

  * pending: initial state, neither fulfilled nor rejected.

  * fulfilled: meaning that the operation completed successfully.

  * rejected: meaning that the operation failed.

*/



console.log("\n")
console.log("======================== Callbacks ========================")
console.log("\n")

/*

// function
const function_name1 = (parameter, parameter, ...) => {
  setTimeout(()=> {
    ....code problem
  }, milisecond)
}

const parameter_name = (parameter, parameter, ...) = > {
  ...code problem 
}

// calling (function_name1)
function_name1(parameter_name)






// or you can say

// function
const function_name1 = (parameter, parameter, ...) => {
  setTimeout(()=> {
    ....code problem
  }, milisecond)
}

// this is how i can call the (function_name1)
function_name1 = (parameter, parameter, ...) = > {
  ...code problem 
}


*/







// // this is the function that handle the (callback) parameter
// const doSomething = (callback) => {
//   // remember (setTimeout) is keyword it can be used in function, in this case (setTimeout) function has ( (value) and (the time to execute this value) )
//   setTimeout(() => {
//     // the first value of the (setTimeout) function is (skills) array also this value that we put on the (callback) parameter
//     const skills = ['HTML', 'CSS', 'JS']
//     // if first value of (callback) parameter is true then return this value if not return second value
//     callback('It did not go well', skills)
//     // this value of the (setTimeout) function run in 1000 milisecond
//   }, 1000)
// }

// // this is the call back function that handle the decition of do one of the operation that inside my function (doSomething)

// // if first value of (callback) inside my function (doSomething) is true then do this operation if not go to the second value
// const callback = (err, result) => {
//   // if my first value of (callback) parameter is true inside my function (doSomething) then it is return that if not go to the else statement 
//   if (err) {
//     // error is return from my (callback) function to (doSomething)
//     return console.log(err)
//   } else {
//   // if second first value is not true in my (callback) parameter inside function (doSomething) then it will return secon vlue as true
//   return console.log(result)
//   }
// }

// doSomething(callback) // It did not go well








// const doSomething2 = (callback2) => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS']
//     // in this case the first condition is false then go to the second  condition
//     callback2( 8 > 9, skills)
//   }, 1000)
// }


// const callback2 = (err, result) => {
//   if (err) {
//     return console.log(err)
//   } else {
//   return console.log(result)
//   }
// }

// doSomething2(callback2) // [ 'HTML', 'CSS', 'JS' ]








// const doSomething1 = (callback) => {
//   // setTimeout is a keyword but it can work like a function
//   setTimeout(() => {
//     // my (skills) array
//     const skills = ['HTML', 'CSS', 'JS']
//     // also my callback parameter that come with 2 vlaue if first value is true then return that to my function (doSomething1) if not they return the second value for my function (doSomething1)
//     callback(false, skills)
//   }, 1000)
// }

// // calling (doSomething1) function and we take it two parameter that we use for if and else condition or for my conde problem
// doSomething1((err, result) => {
//   // if first value of (callback) parameter is true then 
//   if (err) {
//     // return first value
//     return console.log(err)
//   // if my if statement is not true then else is come in this case for 
//   } else {
//     // return second value
//     return console.log(result)
//   }
// })

// // [ 'HTML', 'CSS', 'JS' ]








// const doSomething3 = (callback) => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS']
//     // // not problem in both of the case both of the condition is true
//     // callback(9 > 8 ? console.log("9 > 8"): console.log(" 8 > 9"), skills)
//     callback(8 > 9 ? console.log("8 > 9"): console.log(" 9 > 8"), skills)
//   }, 1000)
// }

// // in this time the both value is true because we are used (ternary operator) because if my (ternary operator) is true or false in both of the case they go to there condition and done there job so this is mean we are don't get true or false actually from (ternary operator) then compiler don't get true or false then they go to the second value and done there job
// doSomething3((err, result) => {
//   if (err) {
//     return console.log(err)
//   } else {
//     return console.log(result)
//   }
// }) 

// /*

// 9 > 8
// [ 'HTML', 'CSS', 'JS' ]

// */






console.log("\n")
console.log("======================== Promise constructor ========================")
console.log("\n")


/*

// syntax
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})



// calling (promise) handler value of function (Promise)
doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))


// Note: resolve and reject and result and error just parameter name you can change it what you like

*/




// // create my (Promise) object function
// const doPromise = new Promise((resolve, reject) => {
//   // we also use keyword (setTimeout) like a function to done my operation (resolve and reject) in this case
//   setTimeout(() => {
//     // my array that i use for my (resolve) and my (reject)
//     const skills = ['HTML', 'CSS', 'JS']
//     // if length of the array is greater than 0 then do this
//     if (skills.length > 0) {
//       resolve(skills)
//     } 
//     // if not do this
//     else {
//       reject('Something wrong has happened')
//     }
//     // run this operation inside my setTimeout function in 1000 milisecond
//   }, 1000)
// })

// // calling (doPromise) handler value of function (Promise)
// doPromise
//   // if my promise is true then return the (result)
//   // (result) is handle value of (resolve)
//   // .then is take power to (result) parameter to handle just true value in that case if we have true result then it will be (resolve) parameter 
//   .then(result => {
//     console.log(result)
//   })
//   // if my promise is not true then have false condition the false condition for my function Promise is (reject) in this case means is handle the value of (reject) if get back false from it
//   // error is just a parameter name but catch take power of handling the false condition result
//   .catch(error => console.log(error))





/*

// if your function is handle the complex or none complex staf then try this function

const function_name = (parameter, parameter, ...) => {
  ...code problem
}



// or just but above example is more popular than this type of function
// this function below is more use for this keyword that use two parameter like (setTimeout) keyword that use (value or condition) and (time to excute this value or condition) the time is type after bracket   }

const function_name = ((parameter, parameter, ...) => {
  ...code problem
})






// using function with keyword like (setTimeout)

keyword_name(() => {
  ...code problem
})







// using function for promise that you work with (then and catch)

.then(paramter=> {
  ...code problem
})

// or just like that

.then(paramter => ...code problem)




.catch(paramter=> {
  ...code problem
})

// or just like that

.catch(paramter => ...code problem)





// create function for handler object function
// this is most common
const variable_name = new keyword_name((parameter, parameter, ..) => {
  .... code problem
})


*/








// const doPromise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS']
//     // this is false 
//     if (skills.includes('Node')) {
//       resolve('fullstack developer')
//     } 
//     // this will be excute like true and return to (promise) function object  
//     else {
//       reject('Something wrong has happened')
//     }
//   }, 1000)
// })

// doPromise1
//   // handler of true (resolve) result
//   .then(result => {
//     console.log(result)
//   })
//   // handler of false (reject) result
//   .catch(error => console.error(error))







console.log("\n")
console.log("======================== Fetch API ========================")
console.log("\n")

// run this example in console browser in blank page(about:blank) because you are using fetching api from the server



// my api
const url = 'https://restcountries.com/v2/all' // countries api
// fetching api from the server using (fetch) keyword for doing that
fetch(url)
  // we use ( .then ) function keyword to handle true result of the api means if api exist then we can access the result of the api using ( .then ) function keyword and (.then) function keyword they put the result to this parameter that they have  

  // if we get true result from the server means api exist then we change the data to json format using (json()) keyword because the data from the server is just string text
  .then(response => response.json()) // accessing the API data as JSON
  // after changing the data to json using (json) keyword we (console.log()) the result
  .then(data => {
    // getting the data
    console.log(data)
  })

  // if we get back false form the server then the error that we get from the server (.catch) function keyword can access the error and back to us, they back the result from the server and put to this parameter that we create inside the (.catch) function keyword.
  .catch(error => console.error(error)) // handling error if something wrong happens







// another example
const url1 = 'https://restcountries.com/v3.1/currency/dollar' // countries api
fetch(url1)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    console.log(data)
})
  .catch(error => console.error(error)) // handling error if something wrong happens
  





// simplfy the code
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))  
// we don't use (.catch) function keyword to access the log error, then we just get error (404) for this api if you get the error for some resone 






// another example of simplfy the code
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))  
// we don't use (.catch) function keyword to access the log error, then we just get error (404) for this api if you get the error for some resone 





console.log("\n")
console.log("======================== Async and Await ========================")
console.log("\n")

// Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.
// The word async in front of a function means that function will return a promise. The above square function instead of a value it returns a promise.

/*


// Syntax (async function)

const variable_name = async function(parameter, parameter, ....) {
  ....code problem
}

variable_name(value)







// Syntax ( (async function) with (await object) )
// await is just wait time from the server

const variable_name1 = async function(parameter, parameter, ...) {
  ....code problem
}

const variable_name2 = await variable_name1(value, ...)
console.log(variable_name2)


*/


// async function
const square = async function (n) {
  return n * n
}

// put value to async function
square(2)

// Note: we can see output to the console we can just see the result in the Promise, to see the output from console or access this value we use (await) object or (await) keyword







// How do we access the value from the promise ? To access the value from the promise, we will use the keyword await.

const square1 = async function (n) {
  return n * n
}

// put value to async function, also calling the value to the console, also access this value, by just using (await) object
const value = await square1(2)
console.log(value)
  
  




console.log("\n")
console.log("======================== promise ========================")
console.log("\n")


// using promise to featch the data
const url2 = 'https://restcountries.com/v3.1/region/europe'
// featching the api
fetch(url2)

  // if api is exist and data is exist then we done this operation using ( .this ) function keyowrd
  // change the data to json format
  .then(response => response.json())
  // console log the data
  .then(data => {
    console.log(data)
  })
  // console log this error that we get back from the server if api is not exist or we have some error when we try featching the api
  .catch(error => console.error(error))







// function hello() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve('I am adam.');
//     }, 2000);
//   });
// }
// async function async_msg() {
//   try {
//     let msg = await hello();
//     console.log(msg);
//   }
//   catch(e) {
//     console.log('Error!', e);
//   }
// }
// async_msg(); //output - I am adam.
  






const fetchData = async () => {
  try {
    // api url
    const url = 'https://restcountries.com/v3.1/region/europe'
    // fetching api from the server using (fetch) keyword but the result can be see in the console and be access using (await) keyword
    const response = await fetch(url)
    // changing the data to json format also the result can be see in the console and be access using (await) keyword
    const countries = await response.json()
    // in the end we console log the result after changing data to json format
    console.log(countries)
  } 
  // if api not work then console for what ever resone or we have problem with api then we use (catch) method to catch the error and console log the error
  catch (err) {
    console.error(err)
  }
}
// message
console.log('===== async and await')
// calling function ( fetchData() )
fetchData()







// Another Example
const fetchData1 = async () => {
  try {
    // api url
    const url = 'https://restcountries.com/v3.1/name/united'
    // featching data from api using fetch keyword 
    const response = await fetch(url)
    // change the data to json format
    const countries = await response.json()
    // console.log the result
    console.log(countries)
  } 
  // catching error
  catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
// calling the functin
fetchData1()






console.log("\n")
console.log("======================== Exercises ========================")
console.log("\n")

// use this two api to done some work with it
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

