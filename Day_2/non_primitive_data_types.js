/*

    let variable = [String, Number, ....]     // one dimention array in js
    let variable = {
        name_key:'value_key',
        name_key:'value_key',
        name_key:'value_key'
        }

*/

console.log("=======================")
console.log("Array in js with changing value of index")

let num1 = [1, 2, 3]
num1[0] = 10
console.log(num1) // [10, 2, 3]
console.log(num1[0]) // 10




console.log("=======================")
console.log("Compare to array to each other")

let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers) // false





console.log("=======================")
console.log("Put value one variable to other variable")

let num2 = [1, 2, 3]
let num3 = num2
console.log(num2 == num3)  // true


let userThree = {
    name:'Asabeneh',
    role:'teaching',
    country:'Finland'
    }
let userFour = userThree
console.log(userThree == userFour)  // true






console.log("=======================")
console.log("Compare assossative array to each other")

let userOne = {
  // key: value
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
let userTwo = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
console.log(userOne == userTwo) // false
