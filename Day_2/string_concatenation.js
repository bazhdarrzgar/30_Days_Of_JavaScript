console.log("first:   Declaring different variables of different data types\n")
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 10




console.log("\nsecond: Concatenating using (addition operator)\n")
let fullName = firstName + space + lastName // concatenation, merging two string together.
console.log("concatination using (+)", fullName)

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5
console.log("concatination using (+)", personInfoOne)




console.log("\nconctation using   ${variable}\n")

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`

let personInfoTwo_WithDoubleQuotes = "I am ${fullName}. I am ${age}. I live in ${country}." //ES6 - String interpolation method
let personInfoThree_WithSingleQuotes = 'I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.'

console.log('contactination using (` `)', personInfoTwo)
console.log('contactination using (" ")' ,personInfoTwo_WithDoubleQuotes)
console.log('contactination using (` `)',personInfoThree)
console.log("contactination using (' ')" ,personInfoThree_WithSingleQuotes)


console.log(`\n`)
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

console.log(`\n`)
let aa = 2
let bb = 3
console.log(`${aa} is greater than ${bb}: ${aa > bb}`)