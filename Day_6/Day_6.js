console.log("========================================================================================")
console.log("======================== For Loop ========================")

/*
// Syntax

// For loop structure
for(initialization, condition, increment/decrement){
    // code goes here
}

*/


console.log("\n\n\n")

// for(let i = 0; i <= 5; i++){
for(let i = 0; i <= 5; ++i){
    console.log(i)
} 
// 0 1 2 3 4 5


console.log("\n")

// for(let i = 5; i >= 0; --i){
for(let i = 5; i >= 0; i--){
  console.log(i)
}
// 5 4 3 2 1 0


console.log("\n")

for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}






console.log("\n")

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []

// create for loop for loop throw all the length number of countries array
// we don't use length - 1 because the i is start in 0 and when the countries.length reach to 5 it is stop because 4 < 5
for(let i = 0; i < countries.length; i++){
  // pushing item to my new array and change all new item string to upper case
  newArr.push(countries[i].toUpperCase())
}

console.log(newArr)
// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]






console.log("\n")

const numbers = [1, 2, 3, 4, 5]
let sum = 0

// create array to loop throw all the array
// we don't need use ( numbers.length -1 ) because the i = 0 and when the length reach the 5 then it is stop becuase 4 < 5
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]
  console.log(`process: ${sum} = ${sum} + ${numbers[i]}`)  
}
console.log("sum = ", sum)  // 15






console.log("\n")

const numbers1 = [1, 2, 3, 4, 5]
const newArr1 = []
let sum1 = 0

// create for loop to loop throw all the item in the numbers1 array
for(let i = 0; i < numbers1.length; i++){

  console.log(`${numbers1[i]} ^ 2 = `, numbers1[i] ** 2) 

  newArr1.push(numbers1[i] ** 2)

}

console.log("pushing all to the new array: ", newArr1)  // [1, 4, 9, 16, 25]






console.log("\n")

const countries1 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr2 = []

// create for loop to loop throw all the item in the countries1 array
for(let i = 0; i < countries1.length; i++){

    console.log(`${countries1[i]} ----Upper Case ---- >`, countries1[i].toUpperCase()) 

    newArr2.push(countries1[i].toUpperCase())

}

console.log("pushing all to the new array: ", newArr2)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]







console.log("========================================================================================")
console.log("======================== While Loop ========================")

console.log("\n")

let i = 0

// 6 <= 5     false
while (i <= 5) {
    // 5 <= 5
    console.log(i) // 5
    i++ // 6
}
// 0 1 2 3 4 5



console.log("\n")

let ii = 0

// 6 <= 5     false
while (ii <= 5) {
    // 5 <= 5
    ii++  // 6
    console.log(ii)  // 6
}
// 1 2 3 4 5 6


console.log("========================================================================================")
console.log("======================== Do While Loop ========================")

console.log("\n")

let a = 0
do {
  console.log(a)
  a++
} while (a <= 5)
// 0 1 2 3 4 5



// (do while loop throw the target just one after that start look at the condition because condition come second and target come first) this is why this happen (js is compile from up to down & for syntax is from left to right)
console.log("\n")

let aa = 0
do {
  console.log(aa)
  aa++
} while (aa <= -1)
// 0






console.log("========================================================================================")
console.log("======================== For Each Loop ========================")

/*
// syntax

for (const element of arr) {
    // code goes here
}

*/




console.log("\n")

const numbers2 = [1, 2, 3, 4, 5]

// this will be put (numbers2) item array to (num) variable
// after that for each take care to for loop to all the item
for (const num of numbers2) {
  console.log(num)
}

// console.log(num) // 5
// 1 2 3 4 5





console.log("\n")

// in for each you can (overwrite the variable of previous variable that use by another for each)
// this is not affect to output that you get by this variable it is lik you have new variable
// this is happen for const variable or none const variable
for (const num of numbers2) {
  // multiply the num with it self 
  console.log(`${num} * ${num} = `, num * num)
}

// 1 4 9 16 25






console.log("\n")

// we do addition for all the (numbers2) in the array
let sum2 = 0

for (const num of numbers2) {
  sum2 = sum2 + num  
  // sum2 += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum2) // 15






console.log("\n")

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  // JS is compile from left to right for syntax
  console.log(`${tech} ---------------------> (Up C) ---------------> `, tech.toUpperCase())
}






console.log("\n")

// HTML CSS JAVASCRIPT REACT NODE MONGODB

// you can see in this for each (because we used string) then the (value tech for all data should be change) 
// means it is hande previous change of data that happen to (tech variable)
// this is true for string but not for number
for (const tech of webTechs) {
  // we need just index 0 from all the data of (webTechs) array
  console.log(tech[0]) // get only the first letter of each element,  H C J R N M
}






console.log("\n")

const countries2 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr3 = []

for(const country of countries2){
    // newArr3.push(`${country}`, country.toUpperCase())
    newArr3.push(country.toUpperCase())
}
console.log(newArr3)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]




console.log("========================================================================================")
console.log("======================== Break & Continue ========================")

for(let i = 0; i <= 5; i++){
    if(i == 3){
    // kill 3 and anything that come after 3
      break
    }
    console.log(i)
    // 0 1 2
}

// it is true that for (if statement) the value is break in 3 but not for my for loop
console.log("finish loop at: ", i) // 6
// 0 1 2 3 4 5 6 (in 6 number value will be false but when it is come out in for loop the value is actually 6 not 5 because we have i++ in the end this is hande final part it will be 6)



console.log("\n")

// you can use previous variable of for loop without affect you value of this variable 
// this is happen because in this case (i) variable is declaring again with number 0 
// this is means our change is change it again
for(let i = 0; i <= 5; i++){
    if(i == 3){
    // kill 3 and continue after that
      continue
    }
    console.log(i)
    // 0 1 2 4 5
}

// it is true that for (if statement) the value is continue in 3 and 3 will be vanish but not for my for loop
console.log("finish loop at: ", i) // 6
// 0 1 2 3 4 5 6 (in 6 number value will be false but when it is come out in for loop the value is actually 6 not 5 because we have i++ in the end this is hande final part it will be 6)


