// run all this example in console of the browser

console.log("\n")
console.log("======================== HTML5 Web Storage ========================")
console.log("\n")

/*

                     Cookies              Local Storage       Session Storage
Capacity             4kb                  10mb                5mb
Browsers             HTML4/HTML5          HTML5               HTML5
Accessible form      Any window           Any window          Same tab
Expires              Manually set         Never               On tab close
Storage Location     Browser and server   Browser Only        Browser only
Send with requests   Yes                  No                  No



## Local storage

There are five methods to work on local storage: setItem(), getItem(), removeItem(), clear(), key()



## Use case of Web Storages

* store data temporarily
* saving products that the user places in his shopping cart
* data can be made available between page requests, multiple browser tabs, and also between browser sessions using localStorage
* can be used offline completely using localStorage
* Web Storage can be a great performance win when some static data is stored on the client to minimize the number of subsequent requests. Even images can be stored in strings using Base64 encoding.
* can be used for user authentication method

*/





console.log("\n")
console.log("======================== HTML5 Web Storage Objects ========================")
console.log("\n")

/*

## Web Storage objects:

* localStorage - to display the localStorage object
* localStorage.clear() - to remove everything in the local storage
* localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
* localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
* localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
* localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.

*/








console.log("\n")
// TB: all this operation that we do is true for session storage also
console.log("======================== Setting item to the localStorage ========================")
console.log("\n")


/*

//syntax
localStorage.setItem('key', 'value')

*/



// setting value to the (localStorage)
// ( setItem(key, value) ) put value to the specific key in the (local storage)
// in this example we put (new key and new value) to the local storage
localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage)

/*

key              value
-------------------------
firstName       Asabeneh

*/








// setting value to the (localStorage)
// ( setItem(key, value) ) put value to the specific key in the (local storage)
localStorage.setItem('age', 200)
console.log(localStorage)

/*

key              value
-------------------------
age             200
firstName       Asabeneh

*/








// setting value to the (localStorage)
// ( setItem(key, value) ) put value to the specific key in the (local storage)
// in this example we put (new value with the same key before) the new value will (override) previous value 
localStorage.setItem('age', 350)
console.log(localStorage)

/*

key              value
-------------------------
age             350
firstName       Asabeneh

*/








// we can put value to the local storage using array
const skills = ['HTML', 'CSS', 'JS', 'React']
// Skills array has to be stringified first if you want see the array like array not like just value 

// looking to array like array in local storage (after stringified)
/*

📋 ["HTML", "CSS", "JS", "React"]
    0: "HTML"
    1: "CSS"
    2: "JS"
    3: "React"

*/


// without stringified
/*

HTML,CSS,JS,React

*/
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)

/*

key              value
-----------------------------------------------
skill            ["HTML", "CSS", "JS", "React"]



// if you click to the value you are see this below

📋 ["HTML", "CSS", "JS", "React"]
    0: "HTML"
    1: "CSS"
    2: "JS"
    3: "React"


*/






// we can put value to the local storage using array
const skills1 = ['HTML', 'CSS', 'JS', 'React']

localStorage.setItem('skills', skills1)
// setting item to the local storage using method ( setItem(key, value) )
console.log(localStorage)

/*

key              value
-----------------------------------
skill            HTML,CSS,JS,React


// if you click to the value you are see this below

HTML,CSS,JS,React

*/






// object
let skills2 = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 }
]

// to get the object like this array that we get it you should first (stringified) to get the object like object if not you get just this below
/*

key              value
----------------------------------------------
skill            [object Object],[object Ob...



// if you click to the value you get this

[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]

*/
let skillJSON = JSON.stringify(skills2)
// setting item to the local storage using method ( setItem(key, value) )
localStorage.setItem('skills', skillJSON)

/*

key              value
----------------------------------------------
skill            [{"tech":"HTML","level":10...



// if you click to the value you get this

📋 [{tech: "HTML", level: 10}, {tech: "CSS", level: 9}, {tech: "JS", level: 8}, {tech: "React", level: 9},…]
  📋 0: {tech: "HTML", level: 10}
      "tech": "HTML",
      "level": 10
  📋 1: {tech: "CSS", level: 9}
    "tech": "CSS",
    "level": 9
  📋 2: {tech: "JS", level: 8}
      "tech": "JS",
      "level": 8
  📋 3: {tech: "React", level: 9}
      "tech": "React",
      "level": 9
  📋 4: {tech: "Redux", level: 10}
      "tech": "Redux",
      "level": 10
  📋 5: {tech: "Node", level: 8}
      "tech": "Node",
      "level": 8
  📋 6: {tech: "MongoDB", level: 8}
      "tech": "MongoDB",
      "level": 8




// or just object

[
    {
        "tech": "HTML",
        "level": 10
    },
    {
        "tech": "CSS",
        "level": 9
    },
    {
        "tech": "JS",
        "level": 8
    },
    {
        "tech": "React",
        "level": 9
    },
    {
        "tech": "Redux",
        "level": 10
    },
    {
        "tech": "Node",
        "level": 8
    },
    {
        "tech": "MongoDB",
        "level": 8
    }
]

*/




// object array
const user = {
  firstName: 'Asabeneh',
  age: 250,
  skills: ['HTML', 'CSS', 'JS', 'React']
}

// also object array like object and array it should first (stringified) to get the object array like object array if not you get this 

/*

key              value
----------------------------------------------
skill            [object Object]



// if you click to the value you get this

[object Object]

*/
const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText)

/*

key              value
----------------------------------------------
skill            {"firstName": "Asabeneh",....



// if you click to the value you get this

📋 {firstName: "Asabeneh", age: 250, skills: ["HTML", "CSS", "JS", "React"]}
    age: 250
    firstName: "Asabeneh"
    📋 skills: ["HTML", "CSS", "JS", "React"]
      0: "HTML"
      1: "CSS"
      2: "JS"
      3: "React"



// or just this

{
    "firstName": "Asabeneh",
    "age": 250,
    "skills": [
        "HTML",
        "CSS",
        "JS",
        "React"
    ]
}

*/







console.log("\n")
console.log("======================== Getting item from localStorage ========================")
console.log("\n")

/*

//syntax
localStorage.getItem('key')

*/



let firstName3 = localStorage.getItem('firstName')
// Asabeneh
let age3 = localStorage.getItem('age')
// 350
let skills3 = localStorage.getItem('skills')
console.log(firstName3, age3, skills3)
/*

// it is true that you get the object like this but in Application menu you can look at the object like object and it have code highliting and toggle list for organize the value and more
// console get back the object like that for more effecent call the value and get to you

[{"tech":"HTML","level":10},{"tech":"CSS","level":9},{"tech":"JS","level":8},{"tech":"React","level":9},{"tech":"Redux","level":10},{"tech":"Node","level":8},{"tech":"MongoDB","level":8}]

*/





let skills4 = localStorage.getItem('user')
// remember if (value is not object or array) then you can't parse the value
let skillsObj4 = JSON.parse(skills, undefined, 4)
console.log(skillsObj4)

/*

📋 {firstName: 'Asabeneh', age: 250, skills: Array(4)}
    age: 250
    firstName: "Asabeneh"
    📋 skills: (4) ['HTML', 'CSS', 'JS', 'React']
        0: "HTML"
        1: "CSS"
        2: "JS"
        3: "React"
        length: 4

*/


// if value of user is not object or array for example like this
/*

[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]

*/
let skills5 = localStorage.getItem('user')
// remember if (value is not object or array) then you can't parse the value
let skillsObj5 = JSON.parse(skills, undefined, 4)
console.log(skillsObj5)

/*

// error

Uncaught SyntaxError: Unexpected token o in JSON at position 1
    at JSON.parse (<anonymous>)
    at <anonymous>:2:23

*/







// if value of skills is liek that
/*

HTML,CSS,JS,React

*/
let skills6 = localStorage.getItem('user')
// remember if (value is not object or array) then you can't parse the value
let skillsObj6 = JSON.parse(skills, undefined, 4)
console.log(skillsObj6)

/*

// error

Uncaught SyntaxError: Unexpected token o in JSON at position 1
    at JSON.parse (<anonymous>)
    at <anonymous>:3:23

*/






console.log("\n")
console.log("======================== Clearing the localStorage ========================")
console.log("\n")


// cleaning all the local storage
localStorage.clear()


