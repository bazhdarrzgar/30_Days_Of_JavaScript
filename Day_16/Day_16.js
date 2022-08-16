console.log("\n")
console.log("======================== JSON ========================")
console.log("\n")

// JSON stands for JavaScript Object Notation. The JSON syntax is derived from JavaScript object notation syntax, 
// but the JSON format is text or string only. 
// JSON is a light weight data format for storing and transporting. 
// JSON is mostly used when data is sent from a server to a client.


/*

// Example:

// object array ( object containing array)
{
// array object (array containing object)
"users":[
  // object
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}





// Example:


// object
{
    // object array (object that containing array)
    "Alex": {
        "email": "alex@alex.com",
        // array
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}

*/



console.log("\n")
console.log("======================== Converting JSON to JavaScript Object ========================")
console.log("\n")

/* 

JSON.parse(json[, reviver])
// json or text , the data
// reviver is an optional callback function

// JSON.parse(json, (key, value) => {

// })

*/




// When we want to change the JSON to an object we parse the JSON using JSON.parse(). 
// When we want to change the object to JSON we use JSON.stringify().

// string
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

// convert (string to json format) using (JSON.parse(string, value)) or just (JSON.parse(string))
// the value in this case is nothing and do any action
// const usersObj = JSON.parse(usersText, lastalex = 'me', 4)
// const usersObj = JSON.parse(usersText, undefined, undefined, undefined)

// remember this variable should be unique that you are used to convert json to string
const usersObj = JSON.parse(usersText)
console.log(usersObj)

/*

{
  users: [
    {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      age: 250,
      email: 'asab@asb.com'
    },
    {
      firstName: 'Alex',
      lastName: 'James',
      age: 25,
      email: 'alex@alex.com'
    },
    {
      firstName: 'Lidiya',
      lastName: 'Tekle',
      age: 28,
      email: 'lidiya@lidiya.com'
    }
  ]
}

*/








console.log("\n")
console.log("======================== Using a reviver function with JSON.parse() ========================")
console.log("\n")


const usersText1 = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

// in this example we do change on (key and value) this is why i take this name as the parameter
const usersObj1 = JSON.parse(usersText1, (key, value) => {
  let newValue =
    // if my typeof my value is string and my key isnot email then,
    // done this change to other (key and value),
    // first change other value to Upper Case and return it, if not then return the value it self
    
    // this code is just change value to Upper Case except this key that is (email) and value of that (email) key is (string)
    typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
  // in the end i return the variable (newValue)
  return newValue
})
// print the change from the variable (usersObj1)
console.log(usersObj1)

/*

{
  users: [
    {
      firstName: 'ASABENEH',
      lastName: 'YETAYEH',
      age: 250,
      email: 'asab@asb.com'
    },
    {
      firstName: 'ALEX',
      lastName: 'JAMES',
      age: 25,
      email: 'alex@alex.com'
    },
    {
      firstName: 'LIDIYA',
      lastName: 'TEKLE',
      age: 28,
      email: 'lidiya@lidiya.com'
    }
  ]
}

*/







console.log("\n")
console.log("======================== Converting Object to JSON ========================")
console.log("\n")

/*

// convert (json or object) to txt using ( JSON.stringify(json, replace, space) ) or just ( JSON.stringify(json) )

JSON.stringify(obj, replacer, space)
// json or text , the data
// reviver is an optional callback function

*/

// this is object format
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// to change json to string we use ( JSON.stringify(json, replace, space) ) or just ( JSON.stringify(json) )
// we are using (replace) to replace something but in this case we don't replace anything this is why i used (undefined) value
// we use (space) to define the number of space that we want take to the line
// const txt = JSON.stringify(users, undefined, 4)
const txt = JSON.stringify(users, undefined, 4)
console.log(txt) // text means JSON- because json is a string form of an object.

/*

{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}

*/





console.log("\n")
console.log("======================== Using a Filter Array with JSON.stringify ========================")
console.log("\n")

/*

// Syntax

const variable_name = JSON.stringify(json, [key, key, ...], space)
console.log(variable_name)

*/

const user1 = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  country: 'Finland',
  city: 'Helsinki',
  email: 'alex@alex.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
  age: 250,
  isLoggedIn: false,
  points: 30
}

// using (filter array) in place of (replace) this will just call this value that we want but remember that (key value) that you want it should be inside squar bracket []
const txt1 = JSON.stringify(user1, ['firstName', 'lastName', 'country', 'city', 'age', 'skills'], 4)
console.log(txt1)

/*

{
    "firstName": "Asabeneh",
    "lastName": "Yetayeh",
    "country": "Finland",
    "city": "Helsinki",
    "age": 250,
    "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Python"
    ]
}

*/










console.log("\n")
console.log("======================== Exercises ========================")
console.log("\n")


const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true

const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const obj_to_str = JSON.stringify(student, ['age', 'isMarried', 'skills'], 2)
console.log(obj_to_str)

/*

{
  "age": 250,
  "isMarried": true,
  "skills": [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Node",
    "Python"
  ]
}

*/


const txt2 = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`

// if you try filtering you don't success with parse also for space
// const str_to_json = JSON.parse(txt2, ['age'], 10)
const str_to_json = JSON.parse(txt2)
console.log(str_to_json)

/*


{
  Alex: {
    email: 'alex@alex.com',
    skills: [ 'HTML', 'CSS', 'JavaScript' ],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux' ],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'Python' ],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js' ],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'React' ],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

*/