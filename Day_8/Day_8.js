console.log("\n")
console.log("======================== Scope ========================")
/*

// when you use global scope don't overwrite the function name because if you do that then the compilere confuise by global scope and return error to you
// when you done change to this variable inside the function you don't get this change in outside this function if you call this variable normally for example ( console.log(a, b)) if you do that you don't get change value
// if you do the change inside the if statement you if this if statement is true or not you don't get the change outside this if statement means if this value is change inside this if statement then outside this if statement you don't get changed value

// you can access variable that is outside the function because this variable that declare will be scope or variable that inside function but declare inside if statement for example this is also scope function it self can't access this variable just the if statement it self can access to it
// any variable outside function is global scope

// Variable is the fundamental part in programming. We declare variable to store different data types. 
// To declare a variable we use the key word var, let and const. 
// A variable can be declared at different scope. 

// var or let. Variables scopes can be:

* Global

* Local

*/
console.log("\n")
console.log("========================================================================================")
console.log("======================== Window Global Object ========================")
console.log("\n")

// by default it is a global scope means it will be found anywhere in this file
let a = 'JavaScript' 
let b = 10 

function letsLearnScope() {
  console.log(a, b) // JavaScript 10

  if (true) {
    // console.log(a, b) // JavaScript 10 // but you can't use this code here because if statement is return one value for the specific variable means it can't return multiple value for one variable if you try do it, you get error
    let a = 'Python'
    let b = 100
    // when you done change here you don't get this change in outside this function if you call normally this variable for example ( console.log(a, b)) if you do that you don't get change value
    console.log(a, b) // Python 100
  }
  
  console.log(a, b) // JavaScript 10
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible





console.log("\n")
console.log("========================================================================================")
console.log("======================== Global scope ========================")
console.log("\n")

// by default it is a global scope means it will be found anywhere in this file
let a1 = 'JavaScript' 
let b1 = 10 

// don't overwrite the function name because if you do that you get the error
function letsLearnScope1() {
  console.log(a1, b1) // JavaScript 10

  if (true) {
    let a1 = 'Python'
    let b1 = 100
    console.log(a1, b1) // Python 100
  }

  console.log(a1, b1)
}

letsLearnScope1()
console.log(a1, b1) // JavaScript 10


console.log("\n")
console.log("========================================================================================")
console.log("======================== Local Scope ========================")
console.log("\n")

// by default it is a global scope means it will be found anywhere in this file
let a2 = 'JavaScript' 
let b2 = 10 

// function scope
function letsLearnScope2() {

  console.log(a2, b2) // JavaScript 10
  let value = false

  // block scope
  if (true) {
    // TB: we can access from the function and outside the function but 
    // TB: variables declared inside the if will not be accessed outside the if block
    let a2 = 'Python'
    let b2 = 20
    let c = 30
    let d = 40
    // TB: accessing variable that outside the if statement or function it self
    value = !value
    console.log(a2, b2, c, value) // Python 20 30 true
  }

  // console.log(c, d) // if you try to acces variable that inside the if statement you get (error)
  
  // if you try to get the value of value variable then you get the changed value of if statement 
  // this is means if you declare the variable inside the function and this variable value is changed by if statement then you get the changed value outside the if statement or inside if statement
  
  // but this is not true if you declare the variable outside the function and this value of variable if changed by if statement then if you try to get the changed value by if statement then you don't get it
  // because this variable is (global scope) but variable inside the function is just (scop) 
  
  // we can't access c because c is scope and it can just access buy own if statement or some other action inside this if satement otherwise you can access outside if statement this is true for function it self or switch satement or ... 
  // 

  console.log(a2, b2, value) // JavaScript 10 true
}

letsLearnScope2()
console.log(a2, b2) // JavaScript 10









console.log("\n")

function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)

}
letsLearnScope()

// you can't access variable outside of function because of scope variable declaration problem 
// console.log(gravity) // Uncaught ReferenceError: gravity is not defined




console.log("\n")

if (true){
  var gravity1 = 9.81
  console.log(gravity1) // 9.81
}

// you can access variable that is outside the function because this variable that declare will be scope or variable that inside function but declare inside if statement for example this is also scope function it self can't access this variable just the if statement it self can access to it
// any variable outside function is global scope
console.log("accessing variable that declared in outside function and outside if statement: ", gravity1)  // 9.81





console.log("\n")

for(var i = 0; i < 3; i++){
  console.log("value in for loop: ", i) // 0, 1, 2
}
console.log("accessing variable that declared in outside function and outside for loop: ", i) // 3

  





console.log("\n")

//scope.js
function letsLearnScope2() {
  // you can use let or const, but gravity is constant I prefer to use const
    //   var gravity2 = 9.81
    //   let gravity2 = 9.81
  const gravity2 = 9.81
//   let gravity2 = 9.81
//   var gravity2 = 9.81
  console.log(gravity2)

}

letsLearnScope2()
// // console.log(gravity), Uncaught ReferenceError: gravity is not defined





// you can change the variable from global scope to scope just by using const or let instaid of var
if (true){
  // if you use var instaid of const or let you don't error but if you use both of this think that i say to you you get this error if you try accessing the value of that if statement // Uncaught ReferenceError: gravity is not defined
  const gravity3 = 9.81
  console.log(gravity3) // 9.81
}
// console.log(gravity3) // Uncaught ReferenceError: gravity is not defined






// you can change the variable from global scope to scope just by using const or let instaid of var
// if you use var instaid of const or let you don't error but if you use both of this think that i say to you you get this error if you try accessing the value of that for loop // Uncaught ReferenceError: gravity is not defined
for(let i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
// console.log(i) // Uncaught ReferenceError: i is not defined





console.log("\n")
console.log("========================================================================================")
console.log("======================== Object ========================")
console.log("\n")

/*


// Syntax
let name_object = {
    name_value: value,
    name_value: value,

    name_value: [
        value,
        value,
        ....
    ]
    ....
}

console.log(name_object)
console.table(name_object)




const name_object = {
    name_value: value,
    name_value: value,

    name_value: [
        value,
        value,
        ....
    ]
    ....
}

console.log(name_object)
console.table(name_object)




var name_object = {
    name_value: value,
    name_value: value,

    name_value: [
        value,
        value,
        ....
    ]
    ....
}

console.log(name_object)
console.table(name_object)




*/


// // Creating an empty object
const person = {}
console.log(person)






console.log("\n")

// // Creating an objecting with values
const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle) // {length: 20, width: 20}





console.log("\n")

// // Creating an objecting with values
const person1 = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true
}
console.log(person1)







console.log("\n")
console.log("========================================================================================")
console.log("======================== Getting values from an object ========================")
console.log("\n")

/*

// let name_object = {
// var name_object = {
const name_object = {
    value_name: value,
    value_name: value,
    value_name: value,
    ....

    value_name: [
        value,
        value,
        value,
        value,
        .....
    ],
    .....

    value_name: function(parameter) {
        .... code problem
    },
    value_name: function(parameter) {
        .... code problem
    },
    value_name: value,
    value_name: value,
    value_name: value,
    ....
    ....
}




// call the object
console.log(  object_name.value_name  )

*/


const person2 = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  // creating function inside the object 
  // this is done for value_name of the object just after this dot (:) create your function without name
  getFullName122: function() {
    // using (this) keyword to access value of the object form function or outside function or outside the object
    return `${this.firstName} ${this.lastName}`
  },
  getFullName122: function(alex, andra) {
    // using (this) keyword to access value of the object form function or outside function or outside the object  
    return `${alex} ${andra}`
  },
  // this is another value inside my (getFullName) object variable
  // if you want call this, then this is call normally like you call normal object like this is below
        // person2['phone number'])
  // because you are using variable name anything have variable name it can call it like this value that we call it above
  'phone number': '+3584545454545'
}

console.log("firstname: ", person2.getFullName122())
console.log("firstname: ", person2.getFullName122("alex", "andra"))


// accessing values using (.)
// if you are not inside object it self then you can access value of object using (.) 
// don't use this keyword in this case because you are not inside object
console.log("firstname: ", person2.firstName)
console.log("lastname: ", person2.lastName)
console.log("age: ", person2.age)
// this location is not in the list of object person2 then you get undefined
console.log("location: ", person2.location) // undefined


// access value using this keyword outside object // you get undefined
console.log("firstname: ", this.firstName) // undefined
console.log("lastname: ", this.lastName) // undefined
console.log("age: ", this.age) // undefined
console.log("location: ", this.location) // undefined


// value can be accessed using square bracket [] and inside this bracket you take key name for getting value on object
// this is possible because also object work base on index like array
console.log("firstname: ", person2['firstName'])
console.log("lastname: ", person2['lastName'])
console.log("age: ", person2['age'])
console.log("age: ", person2['age'])
console.log("location: ", person2['location']) // undefined

// for instance to access the phone number we only use the square bracket method
console.log("phone number: ", person2['phone number'])





console.log("\n")
console.log("========================================================================================")
console.log("======================== Creating object methods ========================")
console.log("\n")

/*

// Syntax

const object_name = {
    value_name: value,
    value_name: value,
    value_name: value,
    .....

    value_name: [
        value,
        value,
        value,
        ...
    ],
    value_name: [
        value,
        value,
        value,
        ...
    ],
    ....

    value_name: function(parameter) {
        ...
    },
        value_name: function(parameter) {
        ...
    },
    value_name: value,
    value_name: value,
    value_name: value,
    ......

}

*/

const person4 = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  },
  phone_namber: '+18046101470 US'
}

console.log(person4.getFullName())
// Asabeneh Yetayeh




console.log("\n")
console.log("========================================================================================")
console.log("======================== Setting new key for an object ========================")
console.log("\n")

const person5 = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

// nationality is not part of object but you can add it like this (    object_name.name_value: value   )
person5.nationality = 'Ethiopian'
// add new value_name for the object
person5.title = 'teacher'

// you can change the value of object like this
person5.country = 'Island'

// you can also push value for this value_name in the object you want
person5.skills.push('Meteor')
person5.skills.push('SasS')

// you can't push value for this value_name in the object that not have this []
// person5.country.push('Brazel') // error

// add new value_name for the object
person5.isMarried = true


console.log(
            person5.nationality, " ", // Ethiopian
            person5.country, " ",     // Island
            person5.title, " ",       // teacher
            person5.isMarried           // true
)


console.log("\n")
// console.table(person5.skills)
console.log(person5.skills, " ")
/*

// output

[
  'HTML',       'CSS',
  'JavaScript', 'React',
  'Node',       'MongoDB',
  'Python',     'D3.js',
  'Meteor',     'SasS'
]

*/






console.log("\n")

// creating function for the value_name of the object
person5.getPersonInfo = function() {
  
  // using this to call the value_name
  // using splice to splice all the value from skills value_name when you splice the value the componenet come to you like this
  /*
    // orginal
    [ 'HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js' ]
    HTML, 
    CSS, 
    JavaScript, 
    React, 
    Node, 
    MongoDB, 
    Python, 
    D3.js, 
    Meteor
    
  */

  // after that you can join all this value using (join) function we do that base on (', ')

  // also the splice done for the value_name from index 0 to end index we call end index using ( length - 1 )
  let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length - 1).join(', ') 
  /*

  // orginal 
  [ 'HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js' ]

  // after splice and join 
  HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor

  */






  // splice the end index also we remove the square bracke form the value using [0]
  // without this [0] // output: [ 'SasS' ]
  // with this [0] // output: SasS

  // new value that we push before ( Meteor ,  SasS ) is not the list but if you just call the last index without calling index from ( 0, this.skills.length - 1 ) then you get the new pushing value
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  /*

  // output

  SasS

  */





  // calling the orginal skills value_name with this new value that we actually push to the value_name list
  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
   /*

   // output

   HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS

   */




  // calling function getFullName() form the object
  let fullName = this.getFullName()
  /*

  // output

  Asabeneh Yetayeh

  */





  // calling the (fullname) + (title) + (country) + (skills list from skills variable)
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  /*
  
  // output

  Asabeneh Yetayeh is a teacher.
  He lives in Island.
  He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.

  */



// // you can't return multiple value of variable in the same time
// // return should be just one

//   return skillsWithoutLastSkill
//   return lastSkill
//   return skills
//   return fullName
  return statement
}

// console.log("\n")

// // console.log(person5.skills)
console.log(person5.getPersonInfo())

  



console.log("\n")

person5.myskillsmybe = function() {
    
    // this is how you can call the new pushing value form the skills list
    let myskills = this.skills.splice(this.skills.length - 2)[0]
    /*

    // output

    Meteor
    
    */

    return myskills
}

// make sure when you call the function don't call it with function that use the same value_name from the object
console.log(person5.myskillsmybe())


console.log("\n")
console.log("========================================================================================")
console.log("======================== Object Methods ========================")
console.log("\n")


/*

// Syntax

const object_name = {
    value_name: value,
    value_name: value,
    value_name: value,
    ....

    value_name: [
        value,
        value,
        value,
        ...
    ],
    value_name: [
        value,
        value,
        value,
        ...
    ],
    .....

    value_name {
        value_name: value,
        value_name: value,
        value_name: value,
        ....
    }

    ....
}





// calling the object 1
// in this way you can assign the object anything that you want like normally you do with object it self


const variable_name = Object.assign({
                                        value_name: value, 
                                        value_name: value, 
                                        ..., 
                                        
                                        value_name: [value, value,...], 
                                        value_name: [value, value,...], 
                                        ...,

                                        value_name: {
                                            value_name: value,
                                            value_name: value,
                                            ....
                                        }, 
                                        ..., 

                                        value_name: function(parameter_name) {
                                                ... code problem
                                        }, 
                                        ...
                                    },

  name_object 
)

// let variable_name = Object.assign({...}, name_object)
// var variable_name = Object.assign({...}, name_object)
console.log(variable_name)



// calling the object 2
console.log(object_name)




// Property of the object
Object methods: Object.assign, Object.keys, Object.values, Object.entries

*/


const person6 = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',

  // you can now create value_name inside another value name not problem but instaid using this bracket [] use this {}
  // because this bracket [] handle just value for the orginal name_value
  // but this bracket {} handle sprate value_name and value for orginal value_name 
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

// Property of the object
//Object methods: Object.assign, Object.keys, Object.values, Object.entries

// calling object by assigning the value for it if you put empty value then nothing will be add for the object
// if you add value like this then the value add in the top lik this below

/*
// const copyPerson = Object.assign({value_value: 'value', girl: 'male'}, person6)

// {

//   output

//   value_value: 'value',
//   girl: 'male',
//   firstName: 'Asabeneh',
//   age: 250,
//   country: 'Finland',
//   city: 'Helsinki',
//   skills: [ 'HTML', 'CSS', 'JS' ],
//   title: 'teacher',
//   address: { street: 'Heitamienkatu 16', pobox: 2002, city: 'Helsinki' },
//   getPersonInfo: [Function: getPersonInfo]
// }

// */
const copyPerson = Object.assign({}, person6)

console.log(copyPerson)

/*

// output

{
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [ 'HTML', 'CSS', 'JS' ],
  title: 'teacher',
  address: { street: 'Heitamienkatu 16', pobox: 2002, city: 'Helsinki' },
  getPersonInfo: [Function: getPersonInfo]
}

*/

console.log("\n")
console.log(person6)

/*

// output

{
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [ 'HTML', 'CSS', 'JS' ],
  title: 'teacher',
  address: { street: 'Heitamienkatu 16', pobox: 2002, city: 'Helsinki' },
  getPersonInfo: [Function: getPersonInfo]
}

*/







console.log("\n")
console.log("========================================================================================")
console.log("======================== Getting object keys using Object.keys() ========================")
console.log("\n")


/*

// value

{
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [ 'HTML', 'CSS', 'JS' ],
  title: 'teacher',
  address: { street: 'Heitamienkatu 16', pobox: 2002, city: 'Helsinki' },
  getPersonInfo: [Function: getPersonInfo]
}

*/

// (keys) property just (call value_name)

// (keys) property can remove the value of child key you can see that in the output that i mension
// (keys) property will remove child function
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']

/*

// output

[
  'firstName',
  'age',
  'country',
  'city',
  'skills',
  'title',
  'address',
  'getPersonInfo'
]

// child key
[ 'street', 'pobox', 'city' ]

*/

// if you use (keys) property make sure that this (value_name or object) you are using have another (value_name)
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']

/*

// output

[ 'street', 'pobox', 'city' ]

*/






console.log("\n")
console.log("========================================================================================")
console.log("======================== Getting object values using Object.values() ========================")
console.log("\n")


/*

// value

{
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [ 'HTML', 'CSS', 'JS' ],
  title: 'teacher',
  address: { street: 'Heitamienkatu 16', pobox: 2002, city: 'Helsinki' },
  getPersonInfo: [Function: getPersonInfo]
}

*/


// calling just a value of value_name 
// it is like we have (keys = value_name)
// and we have (values = value)

// (values property) can't remove the key of child key and child function you can see that in the output that i mension
const values = Object.values(copyPerson)
console.log(values)

/*

// output

[
  'Asabeneh',
  250,
  'Finland',
  'Helsinki',
  [ 'HTML', 'CSS', 'JS' ],
  'teacher',

  // child key
  { street: 'Heitamienkatu 16', pobox: 2002, city: 'Helsinki' },

  // child function
  [Function: getPersonInfo]
]


*/





console.log("\n")
console.log("========================================================================================")
console.log("======================== Getting object keys and values using Object.entries() ========================")
console.log("\n")


// (entries property) will change the object to the value no matter if it is keys or values both keys and values change to array
// (entries property) can't do that for (child key) or (child function)
const entries = Object.entries(copyPerson)
console.log(entries)

/*

[
  [ 'firstName', 'Asabeneh' ],
  [ 'age', 250 ],
  [ 'country', 'Finland' ],
  [ 'city', 'Helsinki' ],
  [ 'skills', [ 'HTML', 'CSS', 'JS' ] ],
  [ 'title', 'teacher' ],
  [
    'address',
    { street: 'Heitamienkatu 16', pobox: 2002, city: 'Helsinki' }
  ],
  [ 'getPersonInfo', [Function: getPersonInfo] ]
]

*/

console.log("\n")
console.log(copyPerson)




console.log("\n")
console.log("========================================================================================")
console.log("======================== Checking properties using hasOwnProperty() ========================")
console.log("\n")

/*

// output

{
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [ 'HTML', 'CSS', 'JS' ],
    title: 'teacher',
    address: { street: 'Heitamienkatu 16', pobox: 2002, city: 'Helsinki' },
    getPersonInfo: [Function: getPersonInfo]
}

*/


// hasOwnProperty: To check if a specific (key) or (child key) or (key of function) exist in an object or not
console.log(copyPerson.hasOwnProperty('name'))     // false
console.log(copyPerson.hasOwnProperty('score'))    // false
console.log(copyPerson.hasOwnProperty('age'))      // true
console.log(copyPerson.hasOwnProperty('country'))  // true

