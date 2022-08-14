console.log("======================== Checking key in Map ========================")
console.log("\n")

/*

// Syntax

const array_name = [value, value, ...]
let [variable_name1, variable_name2, ...] = array_name

console.log(variable_name1, variable_name2, ...)





const array_name = {value, value, ...}
let [variable_name1, variable_name2, ...] = array_name

console.log(variable_name1, variable_name2, ...)





const array_name = [
  [value, value, ...],
  [value, value, ...],
  .....
]

let [variable_name1, variable_name2, ...] = array_name

console.log(variable_name1, variable_name2, ...)




const array_name = [
  key: value,
  key: value,
  key: value,
  .....
]

let [key: variable_name1, key: variable_name2, ...] = array_name

console.log(variable_name1, variable_name2, ...)

*/



const numbers = [1, 2, 3]
// putting value of array to this three variable but value of array is go to that position base on index
// means if we say (numOne) is first variable in this list then we put value (1) in the array to this variable because (numOne) is in (index 0) and (number 1) in arrray is in (index 0)
// using this bracket   []   means we are working with index means any value that we put in this list is work base on (index)
let [numOne, numTwo, numThree] = numbers
let [numOne1, numTwo1] = numbers

console.log(numOne, numTwo, numThree, "\n")
console.log(numOne1, numTwo1)








console.log("\n\n")

const names = ['Asabeneh', 'Brook', 'David', 'John']
// putting value of array to this variable base on index
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)








console.log("\n\n")

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
// putting value of array to this variable base on index
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e,pi,gravity, bodyTemp, boilingTemp)






/*

// array using none section
const name_array = [
    [value, value, ...],   // section 1
    [value, value, ...],   // section 2
    ... // section ....
]

*/

console.log("\n\n")

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
// because array use section part for managing there value then each section go to the specific variable 
const [frontEnd, backEnd] = fullStack

console.log(frontEnd, "\n")
console.log(backEnd)








console.log("\n\n")

const numbers2 = [1, 2, 3]
// if you don't type in place of one of the (index) then you will get nothing in output even undefined variable it is like you are passed this value or you are not call this index for any value
let [numOne2, , numThree2] = numbers2 //2 is omitted

console.log(numOne2, numThree2)







console.log("\n\n")

const names1 = ['Asabeneh', 'Brook', 'David', 'John']
// passing value for calling to the variable, this is just done by not pass this value for empty variable like this is below
let [, secondPerson1, , fourthPerson1] = names1 // first and third person is omitted

console.log(secondPerson1, fourthPerson1)







console.log("\n\n")

// if you want specific value in array is undefined you can use (undefined) name for this value without quotes 
const names2 = [undefined, 'Brook', 'David']
let [
  // you can override the value in array by just putting this value you want for this variable in that specific index like we done in below
  // this get index 0 value but we override the value then they will get this value instaid orginal value
  firstPerson2 = 'Asabeneh',
  // this get index 1 value
  secondPerson2,
  // this get index 2 value
  thirdPerson2,
  // this get index 3 value but we don't have index 3 in orginal array instaid they will add this value also one index is increase (by default they add in the end)
  fourthPerson2 = 'John'
] = names2

console.log(firstPerson2, secondPerson2, thirdPerson2, fourthPerson2)   // Asabeneh Brook David John







console.log("\n\n")

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// value of index (0 and 1 and 2) in the array, will add for index (0 and 1 and 2) in this variable that we have here
// rest of the value of array will add for variable (rest) this is mean one variable can handle more than one value for this value that we have in the array just by using (...) keyword in front of the variable
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3, "\n")  // 1 2 3
console.log(rest)

/*  

[
  4, 5,  6, 7,
  8, 9, 10
]

*/





console.log("\n")
console.log("========================================================================================")
console.log("======================== Destructuring during iteration ========================")
console.log("\n")


const fullStack1 = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

// putting this value for any section in the array that we have to the specific variable in right index
for(const [first, second, third] of fullStack1) {
  console.log(first, second, third)
}

/*

HTML CSS JS
Node Express MongoDB

*/






console.log("\n\n")
const fullStack2 = ['HTML', 'CSS', 'JS', 'React']

// if your array not use section part to store the value then in that case for loop see each value like section 
// then for loop see each of the value of the array like section means each value is section and take each character of the string own index number and put that character value to the specific variable in the right index number
for(const [first, second, third] of fullStack2) {
  console.log(first, second, third)
}


/*

H T M
C S S
J S undefined
R e a

*/






console.log("\n\n")
const fullStack3 = ['HTML', 'CSS', 'JS', 'React']

let [m1, m2, m3, m4] = fullStack3
console.log(m1, m2, m3, m4)  // HTML CSS JS React




console.log("\n")
console.log("========================================================================================")
console.log("======================== Destructuring Object ========================")
console.log("\n")

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  area_of_dubay: undefined,
}

// putting each value of the key to the specific variable in the right index
// if object is not have value for that index number that should go to that variable then it return undefined in both case if that key is not have value or the key and value is not exist
let { width, height, area, area_of_dubay, area_of_london } = rectangle

console.log(width, height, area, area_of_dubay, area_of_london)   // 20 10 200 undefined undefined



console.log("\n")
console.log("========================================================================================")
console.log("======================== Renaming during structuring ========================")
console.log("\n")


const rectangle1 = {
  width: 20,
  height: 10,
  area: 200
}

// putting each value of the key to the specific variable of that key that call there own value in the object
// if you put the key of the value in the wrong place and you think if you do that i can change the position of the index for my new variable object (rectangle1) then it is wrong
// because the order position of the key and the value for each key is in the specific index in the (rectangle1) object so if you change the physical position of the key then it is not change the position of that index when you call it you see the result
let { width: w, area: a, perimeter: p, height: h } = rectangle1

console.log(w, h, a, p)   // 20 10 200 undefined





console.log("\n\n")

const rectangle2 = {
  width1: 20,
  height1: 10,
  area1: 200
}

// calling the value of the key just by using the own key it self means we don't need specific the variable to hande the value of the key
// you can also add the key and value of that key just by specify that value and put that value that it need for that we use equal operator  ( = ) it is mean that you can't use this symbol   ( : )   like you do inside the object it self
let { width1, height1, area1, perimeter1 = 60 } = rectangle2

console.log(width1, height1, area1, perimeter1) //20 10 200 60
//Let us modify the object:width to 30 and perimeter to 80





console.log("\n\n")

const rectangle3 = {
  width2: 30,
  height2: 10,
  area2: 200,
  perimeter2: 80
}

// calling the value form the object using the owner key
// if you want add one key with there  value then you can do that just by create the key and that value it have in that Destruction Array using equal operator    ( = )    not this symbol  ( : )
let { width2, height2, area2, perimeter2 = 60 } = rectangle3
console.log(width2, height2, area2, perimeter2) //30 10 200 80





console.log("\n")
console.log("========================================================================================")
console.log("======================== Object parameter without destructuring ========================")
console.log("\n")


// Without destructuring
const rect = {
  width: 20,
  height: 10
}

// create the variable function style 
const calculatePerimeter = rectangle => {
  // the (rectangle) parameter can put key of the object without specify the object variable 
  // you just use the (key) with the (rectangle) parameter using dot   (.)   like you do with keyword
  // 2 * ( 20 + 10 ) = 60
  return 2 * (rectangle.width + rectangle.height)
}

// we don't specify the name of the object in the variable function style
// but when you call that function you should use the name the object to return that value of the (key) to the specific place that we call the (key) with (rectangle) parameter in the function
console.log(calculatePerimeter(rect)) // 60
//with destructuring





console.log("\n\n")

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Let us create a function which give information about the person object without destructuring

const getPersonInfo = obj => {
	// calling all value of (key skills) you can do that like you do that with keyword with parameter of the function just use dot (.) for calling value of that (key)
  const skills = obj.skills

  /*
      [
        'HTML',       'CSS',
        'JavaScript', 'React',
        'Redux',      'Node',
        'MongoDB',    'Python',
        'D3.js'
      ]
  */

	// slice value from (index 0 to one index before final) means the end index is not in the list you can find the length of the end object using (length - 0)
	// in this example  we don't need use value of the end so we just use value from (0 to length -1) or (0 to -1)
	// all value will join using this style that mension below
  const formattedSkills = skills.slice(0, -1).join(', ')
  
	// const formattedSkills = skills.length - 0 // 9
  // const formattedSkills = skills.length - 1 // 8
  // const formattedSkills = skills.slice(0, skills.length - 0).join(', ')
  // const formattedSkills = skills.slice(0, 9).join(', ')

  /*
  
    HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python 

  */
  // calling vlaue of key (languages) from my object
  const languages = obj.languages

  /*
  
  	[ 'Amharic', 'English', 'Suomi(Finnish)' ]

  */
  // calling value from (languages variable) from index (0 to length - 1) or from ( 0 to -1 ) means we don't call end value because in my case i don't need call it if i call it i use (length - 0) instaid (length - 1)
  const formattedLanguages = languages.slice(0, -1).join(', ')

  /*
  
  	Amharic, English

  */

	// calling variable inside this quotes (``) we use       ${variable_name}      if we want call value of object by using there key then call it like this      ${parameter_name.key}    if you want call the length of the array use this     ${variable_name[index]}
  personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
    obj.age
  } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  // return skills
  // return formattedSkills
  // return languages
  return formattedLanguages
  // return personInfo
}

console.log(getPersonInfo(person))

/*

Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish).

*/

console.log("\n")
console.log("========================================================================================")
console.log("======================== Object parameter with destructuring ========================")
console.log("\n")



// create a function that container this key, this key we create with (person) object that we create above now we just type the key and the value will come to that key.
// all this key will point to the content of the function because we are use this key in the content of the function 
const getPersonInfo1 = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages
}) => {
  // calling key of (skills) value 
  // we slice value from index (0 to (length - 1)) but we don't need end value if you want end value use (length - 0) instaid (length - 1)
  const formattedSkills = skills.slice(0, -1).join(', ') // HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python

  // calling key of (languages) value 
  // we slice value from index (0 to (length - 1)) but we don't need end value if you want end value use (length - 0) instaid (length - 1)
  const formattedLanguages = languages.slice(0, -1).join(', ') // Amharic, English

  // using    ${key_name}   if you want value of that key 
  // using    ${key_name[index]}   if you want specific value for that key
  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
  // return formattedSkills
  // return formattedLanguages
}

// calling (person) object to use with my function (getPersonInfo1) also when you are calling the key of that object you should use (person) object name with function (getPersonInfo1)
console.log(getPersonInfo1(person))

/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/




console.log("\n")
console.log("========================================================================================")
console.log("======================== Destructuring object during iteration ========================")
console.log("\n")


const todoList = [
{
  task:'Prepare JS Test',
  time:'4/1/2020 8:30',
  completed:true
},
{
  task:'Give JS Test',
  time:'4/1/2020 10:00',
  completed:false
},
{
  task:'Assess Test Result',
  time:'4/1/2020 1:00',
  completed:false
}
]

// calling all value of each section of the (object array) to this three variable in my (for loop)
/* 

for (const {variable1, variable2, variable3, ...} of object_array) {
  console.log(variable1, variable2, variable3, ...)
} 

*/
// in the (for loop) value of each section (object array) go to this three varialbe that we have here
// value in the section go this three variable that we have here
// the section it self not go to the one variable remember that we put the value of the section 
for (const {task, time, completed} of todoList){
  console.log(task, time, completed)
}

/*

Prepare JS Test 4/1/2020 8:30 true
Give JS Test 4/1/2020 10:00 false
Assess Test Result 4/1/2020 1:00 false

*/




console.log("\n")
console.log("========================================================================================")
console.log("======================== Spread or Rest Operator ========================")
console.log("\n\n")

console.log("======================== Spread operator to get the rest of array elements ========================")
console.log("\n")

const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// putting index 0 and index 1 and index 2 value from (nums1) array to this three variable [n1, n2, n3] depended on the position to put value of that array
// [n1, n2, n3]= [n1[index 0], n2[index 1], n3[index 2]]

// after that rest of the value from array (nums1) will go to the (rest_n) you can do that using (...) keyword in front of (rest_n) variable all value go to this variable except value of (index 0, 1, 2) 
let [n1, n2, n3, ...rest_n] = nums1

console.log(n1, n2, n3, "\n") // 1 2 3
console.log(rest_n)

/*

[
  4, 5,  6, 7,
  8, 9, 10
]

*/






console.log("\n\n")

const countries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]

// putting index 0 and index 1 value from (countries) array to this two variable [gem, fra] depended on the position to put value of that array
// [gem, fra]= [gem[index 0], fra[index 1]]

// rest of the value go to the (nordiCountries) variable except value of (index 0, index 1) that we put to the variable (gem, fra) using (...) keyword
let [gem, fra, , ...nordicCountries] = countries

console.log(gem) // Germany
console.log(fra) // France
console.log(nordicCountries) // [ 'Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland' ]




console.log("\n")
console.log("========================================================================================")
console.log("======================== Spread operator to copy array ========================")
console.log("\n")


const evens = [0, 2, 4, 6, 8, 10]
// putting all value of array (evens) to my new array (evenNumbers) using (...) keyword in front of (evens) array
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
// putting all value of array (odds) to my new array (oddNumbers) using (...) keyword in front of (odds) array
const oddNumbers = [...odds]

// putting all value of array (evens, odds) to my new array (wholeNumbers) using (...) keyword in front of (evens, odds) array and join together using comma (,) between this two array inside array bracket  []
const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers) // [ 0, 2, 4, 6, 8, 10 ]
console.log(oddNumbers) // [ 1, 3, 5, 7, 9 ]
console.log(wholeNumbers) // 

/*

[
   0, 2, 4, 6, 8,
  10, 1, 3, 5, 7,
   9
]

*/




const frontEnd1 = ['HTML', 'CSS', 'JS', 'React']
const backEnd1 = ['Node', 'Express', 'MongoDB']
// putting all value of array (frontEnd1, backEnd1) to my new array (fullStack4) using (...) keyword in front of (frontEnd1, backEnd1) array and join together using comma (,) between this two array inside array bracket  []
const fullStack4 = [...frontEnd, ...backEnd]

console.log(fullStack4)


console.log("\n")
console.log("========================================================================================")
console.log("======================== Spread operator to copy object ========================")
console.log("\n")


const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

// putting all value of object (user) to my new object (copiedUser) using (...) keyword in front of (user) array
const copiedUser = {...user}
console.log(copiedUser)

/*

{
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki'
}

*/







console.log("\n\n")

const user1 = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

// putting all value of object (user1) to my new object (copiedUser1) using (...) keyword in front of (user1) array
// also you can add your new (key) with there value using symbol    (:)    between (key and value ) you can do that inside this bracket    {}    means you can't do this in this bracket    []    or this bracket    ()    this is true for the (array object not array)
const copiedUser1 = {...user1, title:'instructor'}
console.log(copiedUser1)
/*

{
  name: 'Asabeneh',
  title: 'instructor',
  country: 'Finland',
  city: 'Helsinki'
}

*/



/*

// if you use equol (=) operator instaid of this symbol (:) of the object you get error 
// equol (=) use with (array) not (object array)
const copiedUser2 = {...user1, title = 'instructor'}


*/




console.log("\n\n")

// putting all this value that we take to function (sumAllNums) to my (args) parameter using (...) keyword 
// if you use this keyword (...) with that parameter in first of any parameter then you can't use other parameter with that function because (...) will take all value that we take to function (sumAllNums) the if you try to do that then you get the error means if you use other parameter after parameter (args)
const sumAllNums = (...args) => {
  console.log(args)
}

sumAllNums(1, 2, 3, 4, 5) // [ 1, 2, 3, 4, 5 ]







console.log("\n\n")

// putting all this value that we take to function (sumAllNums) to my (args) parameter using (...) keyword 
// if you use this keyword (...) with that parameter in first of any parameter then you can't use other parameter with that function because (...) will take all value that we take to function (sumAllNums) the if you try to do that then you get the error means if you use other parameter after parameter (args)
const sumAllNums1 = (...args) => {
  let sum = 0
  // putting all value of (args) parameter to (num) variable 
  for (const num of args){
    sum += num
    // sum = sum + num
  }
  return sum
  
}

console.log(sumAllNums1(1, 2, 3, 4, 5)) // 15





console.log("\n")
console.log("========================================================================================")
console.log("======================== Exercises ========================")
console.log("\n")


// array
const constants = [2.72, 3.14, 9.81, 37, 100]

console.log(constants)

/*
  [ 2.72, 3.14, 9.81, 37, 100 ]
*/






// array
console.log("\n\n")
const countries1 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

console.log(countries1)

/*
  [ 'Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway' ]
*/





// object
console.log("\n\n")
const rectangle5 = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

console.log(rectangle5)

/*
  { width: 20, height: 10, area: 200, perimeter: 60 }
*/






console.log("\n\n")
// array object 
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

console.log(users)
/*

[
  {
    name: 'Brook',
    scores: 75,
    skills: [ 'HTM', 'CSS', 'JS' ],
    age: 16
  },
  { name: 'Alex', scores: 80, skills: [ 'HTM', 'CSS', 'JS' ], age: 18 },
  { name: 'David', scores: 75, skills: [ 'HTM', 'CSS' ], age: 22 },
  { name: 'John', scores: 85, skills: [ 'HTML' ], age: 25 },
  { name: 'Sara', scores: 95, skills: [ 'HTM', 'CSS', 'JS' ], age: 26 },
  {
    name: 'Martha',
    scores: 80,
    skills: [ 'HTM', 'CSS', 'JS' ],
    age: 18
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: [ 'HTM', 'CSS', 'JS' ],
    age: 20
  }
]

*/


console.log("\n\n")

// array in place of value inside array 
const student1 = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
console.log(student1) // [ 'David', [ 'HTM', 'CSS', 'JS', 'React' ], [ 98, 85, 90, 95 ] ]






console.log("\n\n")

// array in place of value inside array 
// also using section inside this array 
const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

console.log(students)

/*

[
  [ 'David', [ 'HTM', 'CSS', 'JS', 'React' ], [ 98, 85, 90, 95 ] ],
  [ 'John', [ 'HTM', 'CSS', 'JS', 'React' ], [ 85, 80, 85, 80 ] ]
]

*/







console.log("\n\n")

// object array
const student = {
  name: 'David',
  age: 25,
  // object take the array
  skills: {
    // array take the object
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

console.log(student)

/*

{
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [ [Object], [Object], [Object], [Object] ],
    backEnd: [ [Object], [Object] ],
    dataBase: [ [Object] ],
    dataScience: [ 'Python', 'R', 'D3.js' ]
  }
}

*/


