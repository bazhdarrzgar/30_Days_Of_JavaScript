console.log("\n")
console.log("======================== Classes ========================")
console.log("\n")


/*

// JavaScript is an object oriented programming language. Everything in JavScript is an object, with its properties and methods. We create class to create an object.


// syntax
class ClassName {
    //  code goes here
}

// calling class
const variable_name = new Class_Name()
console.log(variable_name)




// Example
class Person {
  // code goes here
}

const my_person = new Person()
console.log(my_person)

*/



console.log("\n")
console.log("======================== Class Instantiation ========================")
console.log("\n")

class Person {
  // code goes here
}

// create object to return the (Person) call object
const person = new Person()
// because my class not have any object inside, then the class will return empty object to object (person)
console.log(person)
// Person {}







console.log("\n")
console.log("======================== Class Constructor ========================")
console.log("\n")

// The constructor is a builtin function which allows as to create a blueprint for our object. 

class Person1 {
    // this is constructor function the creation of construcctor is the same like function
  constructor(firstName, lastName) {
    // Check the output from here means this output that come from firstName & lastName parameter above
    console.log(this) 
    // taking value to the key from this parameter that we have and in the end the key name with there value is return

    // this.key_name = parameter
    this.firstName = firstName
    this.lastName = lastName
  }
}

// create object to call object class value
const person1 = new Person1()
// first value come from ( console.log(this) ) it should be empty object
// second value will come from this value that parameter of (firstName and lastName) take to the (firstName & lastName) key
console.log(person1)

/*

Person1 {}
Person1 { firstName: undefined, lastName: undefined }

*/







console.log("\n\n")

class Person2 {
  // create constructor function
  constructor(firstName, lastName) {
    // using parameter to take value to the key the value is send from this object that we created outside this class for calling the class  
    
    // Note: this.key = parameter
    this.firstName = firstName
    this.lastName = lastName
  }
}
// inside this object we have value this value will send to the class this is first step
// second step the class send the returning value to the object and done
const person2 = new Person2('Asabeneh', 'Yetayeh')

console.log(person2)
// Person2 { firstName: 'Asabeneh', lastName: 'Yetayeh' }









console.log("\n\n")

class Person3 {
  // create constructor function
  constructor(firstName, lastName, age, country, city) {
    // checking the value of (firstName, lastName, age, country, city) parameter if it have value then return this object value, if not return empty object
    console.log(this)
    // using  parameter to take value to the key the value is send from this object that we created outside this class for calling the class  
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

// sending this value to the specific parameter in the class, this is base on this order that we give to the parameter in the class
const person3 = new Person3('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
// first value is from (console.log(this)) this the empty object (before taking value)
// second value is this value that we take to the parameter and parameter take it to the key
console.log(person3)

/*

Person3 {}
Person3 {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki'
}

*/








console.log("\n\n")

class Person4 {
  constructor(firstName, lastName, age, country, city) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person4 = new Person4('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
console.log(person4)

/*

Person4 {}
Person4 {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki'
}

*/






console.log("\n")
console.log("======================== Class methods ========================")
console.log("\n")

class Person7 {
  // creating constructor function
  constructor(firstName, lastName, age, country, city) {
    // taking vlaue of (parameter) to the (key) 
    // the value of the parameter come from this object that we created outside this function to call the class
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  } // we don't need comma between this function this is true inside class
  // this function is created inside constructor function
  getFullName() {
    // we can use other (key) that used by other (function) or (constructor function) or create by this (function or constructor function)
    // in this function we have this two key that we work with it for the speific work
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

// create object to call the class
// put value to this object to send to the class (Person7)
const person5 = new Person7('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person6 = new Person7('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

// calling function (getFullName) inside the class (person5)
console.log(person5.getFullName()) // Asabeneh Yetayeh
console.log(person6.getFullName()) // Lidiya Tekle









console.log("\n")
console.log("======================== Properties with initial value ========================")
console.log("\n")


class Person6 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

// sending this value to the this parameter that we have in the class (Person6) in my function constructor
const person8 = new Person6('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person9 = new Person6('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

// calling (score) key value if exit in my class (Person6) base on this value that object (person8) send
console.log(person8.score) // 0
// calling (score) key value if exit in my class (Person6) base on this value that object (person9) send
console.log(person9.score) // 0

// calling (skills) key value  if exit in my class (Person6) base on this value that object (person8) send
console.log(person8.skills) // []
// calling (skills) key value  if exit in my class (Person6) base on this value that object (person9) send
console.log(person9.skills) // []






console.log("\n")
console.log("======================== getter ========================")
console.log("\n")


console.log("\n\n")

class Person5 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  // this is function
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  // this is getter function that return this value that take to (score) key value
  // the get function is get this value that this statement code inside my function need in this case is need (score) key value
  get getScore() {
    return this.score
  }
  // this is getter function that return this value that take to (skills) key value
  // the get function is get this value that this statement code inside my function need in this case is need (score) key value
  get getSkills() {
    return this.skills
  }
}

// sending this value to the this parameter that we have in the class (Person5) in my function constructor 
const person10 = new Person5('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person11 = new Person5('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')


// calling (getScore) function getter value if exit in my class (Person6) base on this value that object (person10) send
console.log(person10.getScore) // 0
// calling (getScore) function getter value if exit in my class (Person6) base on this value that object (person11) send
console.log(person11.getScore) // 0

// calling (getScore) function getter value if exit in my class (Person6) base on this value that object (person10) send
console.log(person10.getSkills) // []
// calling (getScore) function getter value if exit in my class (Person6) base on this value that object (person11) send
console.log(person11.getSkills) // []







console.log("\n")
console.log("======================== setter ========================")
console.log("\n")


class Person8 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    // this bracket [] means that this key contain array
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  // function getter will get value from class
  get getScore() {
    return this.score
  }
  // function getter will get value from class
  get getSkills() {
    return this.skills
  }
  // function setter to set new value, if it is creating new key or adding value to the the specific key
  set setScore(score) {
    // this will take value of my (score) parameter to my key (score)
    this.score += score
  }
  // function setter to set new value, if it is creating new key or adding value to the the specific key
  set setSkill(skill) {
    // this will push new value from parameter (skill) to my key (skills)
    this.skills.push(skill)
  }
}

// sending this value from this object to my class (Person8) to the right parameter in the function constructor in my class (Person8)
const person12 = new Person8('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person13 = new Person8('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

// taking value to my parameter for my function setter (setScore) 
person12.setScore = 1
// taking value to my parameter for my function setter (setSkill) 
person12.setSkill = 'HTML'
person12.setSkill = 'CSS'
person12.setSkill = 'JavaScript'

// taking value to my parameter for my function setter (setScore) 
// this will not increase the value from previous 1 to 2 we are using equal operator then we just override the value of parameter again
person13.setScore = 1
// taking value to my parameter for my function setter (setSkill) 
person13.setSkill = 'Planning'
person13.setSkill = 'Managing'
person13.setSkill = 'Organizing'

// calling (score) key from my object (person12)
console.log(person12.score) // 1
// calling (score) key from my object (person13)
console.log(person13.score) // 1

// calling (skills) key from my object (person12)
console.log(person12.skills) // [ 'HTML', 'CSS', 'JavaScript' ]
// calling (skills) key from my object (person13)
console.log(person13.skills) // [ 'Planning', 'Managing', 'Organizing' ]










class Person9 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  // function getter will get value from class
  get getScore() {
    return this.score
  }
  // function getter will get value from class
  get getSkills() {
    return this.skills
  }
  // function setter to set new value, if it is creating new key or adding value to the the specific key
  set setScore(score) {
    this.score += score
  }
  // function setter to set new value, if it is creating new key or adding value to the the specific key
  set setSkill(skill) {
    this.skills.push(skill)
  }
  // function
  getPersonInfo() {
    // to call returning value of function ( getFullName ) we should use (this) keyword 
    let fullName = this.getFullName()
    let skills =
      // calling value of (skills) that length is greater than 0
      this.skills.length > 0 &&
      // and calling value of (skills) from index (0 to length - 1) means not end value and join by this statement below
      this.skills.slice(0, this.skills.length - 1).join(', ') +
      // also calling end value of (skills)
        ` and ${this.skills[this.skills.length - 1]}`
        // if value of skills exit then return (He knows ${sills}) if not return ('')
    let formattedSkills = skills ? `He knows ${skills}` : ''
    // in the end calling this key and variable for my end action
    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const person14 = new Person9('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person15 = new Person9('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const person16 = new Person9('John', 'Doe', 50, 'Mars', 'Mars city')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

// calling this value that (getScore) parameter is return from object (person14)
console.log(person14.getScore) // 0
// calling this value that (getScore) parameter is return from object (person15)
console.log(person15.getScore) // 0

// calling this value that (getSkills) parameter is return from object (person14)
console.log(person14.getSkills) // []
// calling this value that (getSkills) parameter is return from object (person15)
console.log(person15.getSkills) // []
// calling this value that (getSkills) parameter is return from object (person16)
console.log(person16.getSkills) // []

// calling (getPersonInfo) function base on this value that send from object (person14)
console.log(person14.getPersonInfo()) // Asabeneh Yetayeh is 250. He lives Helsinki, Finland. 
// calling (getPersonInfo) function base on this value that send from object (person15)
console.log(person15.getPersonInfo()) // Lidiya Tekle is 28. He lives Espoo, Finland. 
// calling (getPersonInfo) function base on this value that send from object (person16)
console.log(person16.getPersonInfo()) // John Doe is 50. He lives Mars city, Mars. 







console.log("\n")
console.log("======================== Static method ========================")
console.log("\n")

// The static keyword defines a static method for a class. Static methods are not called on instances of the class. 
// Instead, they are called on the class itself. These are often utility functions, such as functions to create or clone objects. 
// An example of static method is Date.now(). The now method is called directly from the class.

class Person10 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  // normal function to do action
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  // get function to get something
  get getScore() {
    return this.score
  }
  // get function to get something
  get getSkills() {
    return this.skills
  }
  // set function to set new value or add new value to the key
  set setScore(score) {
    this.score += score
  }
  // set function to set new value or add new value to the key
  set setSkill(skill) {
    this.skills.push(skill)
  }
  // normal function to do action
  getPersonInfo() {
    // to call returning value of function ( getFullName ) we should use (this) keyword 
    let fullName = this.getFullName()
    let skills =
      // calling value of (skills) that length is greater than (0)
      this.skills.length > 0 &&
      // and calling value of (skills) from index (0 to length - 1) means not (end) value using (slice) keyword and join by this statement below
      this.skills.slice(0, this.skills.length - 1).join(', ') +
      // also calling end value of (skills)
        ` and ${this.skills[this.skills.length - 1]}`
    // if value of skills exit then return (He knows ${skills}) if not return ('')
    let formattedSkills = skills ? `He knows ${skills}` : ''
    // in the end calling this key and variable for my end action
    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    // return my info variable value
    return info
  }
  // my static function
  static favoriteSkill() {
    // creating skills array
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    // creating variable that handle (random) number and (Math.floor) method will put the random number to the nearest number if it have point number in after dot (.)
    // also all this multiplid by the length of array (skills)  
    
    // first number of (Math.random) will multiply by (skills.length) after that (Math.floor) will increase the value to the nearest number depended on this value that is after dot (.)  
    const index = Math.floor(Math.random() * skills.length)
    // returning one value of skills array and this value is specific by index and we get this index from (index) variable  
    return skills[index]
  }
  // my static function
  static showDateTime() {
    // creating Date object using ( new Date() )
    let now = new Date()
    // calling (year) using ( variable_date.getFullYear() )
    let year = now.getFullYear()
    // calling (Month) with increase by (1) using ( variable_date.getMonth() + 1 )
    let month = now.getMonth() + 1
    // calling (Date (day of the month)) using ( variable_date.getDate )
    let date = now.getDate()
    // calling (hour) using ( variable_date.getHours() )
    let hours = now.getHours()
    // calling (Minute) of the hour using ( variable_date.getMinutes )
    let minutes = now.getMinutes()
    // if my hour less than 10 then
    if (hours < 10) {
      // string (0) add to front of my hour result
      hours = '0' + hours
    }
    // if my minutes less than 10 then
    if (minutes < 10) {
      // string (0) add to front of my minutes result
      minutes = '0' + minutes
    }

    // organizing (date and month and year) in one line
    let dateMonthYear = date + '.' + month + '.' + year
    // organizing (hour and minutes) in one line
    let time = hours + ':' + minutes
    // combain both variable (dateMonthYear and time) with each other
    let fullTime = dateMonthYear + ' ' + time
    // calling value of (fullTime)
    return fullTime
  }
}

// in first we calling ( static function (fovoriteSkill) )
console.log(Person10.favoriteSkill()) // Node
// in second we calling ( static function (showDateTime) )
console.log(Person10.showDateTime()) // 16.8.2022 12:32







console.log("\n")
console.log("======================== Inheritance ========================")
console.log("\n")

/*

// (external) keyword will demage just 2 class with each other, it is demage class (first to the second) it is like my code problem in class first is exist in class second

// syntax

class ChildClassName extends SuperClass {
 ...code problem
}

*/


class Student extends Person10 {
  saySomething() {
    console.log('I am a child of the person class')
  }
}

// sending this value to the parameter 
// sending this value to the right paramter depended on the (order of the parameter)
const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
// this will call the (constructor function) in class (Person10) because class (Student) is not have any (constructor function) and class (Person10) is have, then call (constructor function) from that class, if my calss (Student) have (constructor function) then call this also 
console.log(s1)
/*
Student {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 'Finland',
  country: 250,
  city: 'Helsinki',
  score: 0,
  skills: []
}
*/

// calling function (saySomething()) from class (Student) if not exist in there then search for that function in class (Person10)
console.log(s1.saySomething()) // I am a child of the person class // undefined

// calling function (getFullName()) from class (Student) if not exist in there then search for that function in class (Person10)
console.log(s1.getFullName()) // Asabeneh Yetayeh

// calling function (getPersonInfo()) from class (Student) if not exist in there then search for that function in class (Person10)
console.log(s1.getPersonInfo()) // Asabeneh Yetayeh is Finland. He lives Helsinki, 250.








console.log("\n")
console.log("======================== Overriding methods ========================")
console.log("\n")


class Student1 extends Person10 {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city)
    this.gender = gender
  }

  // create function (saySomething) 
  saySomething() {
    console.log('I am a child of the person class')
  }
  // create function (getPersonInfo) 
  getPersonInfo() {
    // put value of function (getFullName()) using (this) keyword to call this value of that function
    // function (getFullName()) is not in class (Student1)
    let fullName = this.getFullName()
    let skills =
      // if (skills) array length is greater than 0 and
      this.skills.length > 0 &&
      // this will slice the value of (skills) array from (0 to length - 1) and join the value baseon this statement below
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        // also combain all statement above with this using (+) operator
        // calling end value of (skills) array using (length-1) remember if you want use [skills.length-1] before (skills) array you should have (this) keyword because if you are using variable inside this function then you don't need that keyword but if you want use (skills) from other source out of that function you should use (this) keyword
        ` and ${this.skills[this.skills.length - 1]}`

    // if (skills) array value exist then return that (`He knows ${skills}`) if not return that ('')
    let formattedSkills = skills ? `He knows ${skills}` : ''
    // also if we gender is 'Male' then return 'He' if not return 'She'
    let pronoun = this.gender == 'Male' ? 'He' : 'She'

    // in the end combine this (key and variable)
    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
    // return my info variable this is last operation
    return info
  }
}

// create object to call the class (Student1) alson,
// adding this value to the parameter class (Student1), sending value to the parameter depending to the (order of the parameter)
const s2 = new Student1(
  'Asabeneh',
  'Yetayeh',
  250,
  'Finland',
  'Helsinki',
  'Male'
)

// create object to call the class (Student1) alson,
// adding this value to the parameter class (Student1), sending value to the parameter depending to the (order of the parameter)
const s3 = new Student1('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
// add value for my function ( set setScore )
s2.setScore = 1
// add value for my function setter ( set setSkill )
s2.setSkill = 'HTML'
s2.setSkill = 'CSS'
s2.setSkill = 'JavaScript'

// add value for my function ( set setScore ) but this is not increase value from (1 to 2) because we are using equol operator here
s3.setScore = 1
// add value for my function setter ( set setSkill )
s3.setSkill = 'Planning'
s3.setSkill = 'Managing'
s3.setSkill = 'Organizing'

console.log(s2)
/*

Student1 {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  score: 1,
  skills: [ 'HTML', 'CSS', 'JavaScript' ],
  gender: 'Male'
}

*/

console.log(s2.saySomething()) // I am a child of the person class // undefined
console.log(s2.getFullName()) // Asabeneh Yetayeh
console.log(s2.getPersonInfo()) // Asabeneh Yetayeh is 250. He lives in Helsinki, Finland. He knows HTML, CSS and JavaScript

console.log(s3.saySomething()) // I am a child of the person class // undefined
console.log(s3.getFullName()) // Lidiya Tekle
console.log(s3.getPersonInfo()) // Lidiya Tekle is 28. She lives in Helsinki, Finland. He knows Planning, Managing and Organizing





console.log("\n")
console.log("======================== Exercises ========================")
console.log("\n")

const statistics = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

//#Source https://bit.ly/2neWfJ2 
const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range()) // 14
// console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ', median(statistics)) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]


