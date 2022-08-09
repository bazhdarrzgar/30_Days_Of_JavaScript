
console.log("==========================")
console.log("constant number")
const gravity = 9.81 //we use const for non-changing values, gravitational constant in  m/s2
const PI = 3.14 // pi a geometrical constant
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37 // oC average human body temperature, which is a constant
console.log("garivity", gravity, "PI", PI, "boilingPoint", boilingPoint, "bodyTemp", bodyTemp)
/*
// if you try to change value of (const) it you will get this error
gravity = 10.9


===
gravity = 10.9
^

TypeError: Assignment to constant variable.
===

*/


console.log("==========================")
console.log("integer number")
let age = 35
let mass = 72 // mass in Kilogram

console.log("age", age, "mass", mass,)

console.log("==========================")
console.log("age", age, "gravity", gravity, "mass", mass, "PI", PI, "boilingPoint", boilingPoint, "bodyTemp", bodyTemp)

