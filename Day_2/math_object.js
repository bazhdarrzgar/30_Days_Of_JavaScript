// Math Object

console.log(

" Math.round()   // take number point to nearest number in to it \n",
"Math.floor()   // take number point to nearest down number \n",
"Math.ceil()    // take number point to nearest up number \n",
"Math.min()     // find minimum number in range of number or array \n",
"Math.max()     // find maximum number in range of number or array \n",
"Math.random()  // generate random number by default it is between 0 to 0.999999.. but if you want manually take random number then multiply it by number \n",
"Math.log()     // find log of number for you \n",
"Math.abs()     // find Absolute value for the number means change negative to positive but not vise versa \n",
"Math.sqrt()    // find square root of number like 10000 = 100 and 100 = 10 and 2 = 1.4142135623730951 \n",
"Math.pow()     // take first number and power by second number like (3, 2) = 3^2 = 9 \n",
"Math.E         // find number of E = 2.718281828459045 \n",
"Math.log()     // find log of number \n",
"Math.LN2       //  logarithm of 2, the syntax is ( LN = log ) after that follow by number like ( LN10 )",           
"Math.sin()     // find sin of number \n",
"Math.cos()     // find cos of number \n",
)

console.log("===================")
console.log("PI")
const PI = Math.PI
console.log(PI) // 3.141592653589793




console.log("===================")
console.log("round")
console.log(Math.round(PI)) // 3; to round values to the nearest number
console.log(Math.round(9.81)) // 10




console.log("===================")
console.log("floor")
console.log(Math.floor(PI)) // 3; rounding down




console.log("===================")
console.log("eli")
console.log(Math.ceil(PI)) // 4; rounding up




console.log("===================")
console.log("min")
console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value



console.log("===================")
console.log("max")
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value





console.log("===================")
console.log("Random number")
const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)
const randNum10 = (Math.random()*11) // creates random number between 0 to 10.999999
console.log(randNum10)
// Let create random number between 0 to 10
const num = Math.floor(Math.random() * 11) // creates random number between 0 and 10
console.log(num)





console.log("===================")
console.log("Absolute value")
console.log(Math.abs(-10)) //10





console.log("===================")
console.log("Square root")
console.log(Math.sqrt(10000)) // 100
console.log(Math.sqrt(100)) // 10
console.log(Math.sqrt(2)) //1.4142135623730951





console.log("===================")
console.log("Power")
console.log(Math.pow(3, 2)) // 9
console.log(Math.E) // 2.718



console.log("===================")
console.log("Logarithm")
//Returns the natural logarithm of base E of x, Math.log(x)
console.log(Math.log(2)) // 0.6931471805599453
console.log(Math.log(10)) // 2.302585092994046


// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046



console.log("===================")
console.log("Trigonometry")
console.log(Math.sin(0))
console.log(Math.sin(60))
console.log(Math.cos(0))
console.log(Math.cos(60))

