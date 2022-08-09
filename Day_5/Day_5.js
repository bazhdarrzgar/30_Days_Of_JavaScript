console.log("========================================================================================")
console.log("======================== Syntax ========================")

/*

// Arrays syntax

const arr = Array(...)
// or
let arr = new Array(...)
// or
let arr = [...]

console.log(arr)




// syntax
// This the most recommended way to create an empty list
const arr = []
console.log(arr)

*/

const arr1 = Array(1, 5, 8, 10)
console.table(arr1)

const arr2 = new Array(1, 5, 8, 10)
console.table(arr2)

const arr3 = [1, 5, 8, 10]
console.table(arr3)

console.log("========================================================================================")
console.log("======================== How to create an array with values ========================")

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

// console.log('\n Numbers:', numbers)
console.table(numbers)
console.log('Number of numbers:', numbers.length)

// console.log('\n Fruits:', fruits)
console.table(fruits)
console.log('Number of fruits:', fruits.length)

// console.log('\n Vegetables:', vegetables)
console.table(vegetables)
console.log('Number of vegetables:', vegetables.length)

// console.log('\n Animal products:', animalProducts)
console.table(animalProducts)
console.log('Number of animal products:', animalProducts.length)

// console.log('\n Web technologies:', webTechs)
console.table(webTechs)
console.log('Number of web technologies:', webTechs.length)

// console.log('\n Countries:', countries)
console.table(countries)
console.log('Number of countries:', countries.length)




console.log("\n\n\n")

const arr = [
    'Asabeneh',
    250,
    true,
    { 
        country: 'Finland', 
        city: 'Helsinki' 
    },
    { 
        skills: [
                'HTML', 
                'CSS', 
                'JS', 
                'React', 
                'Python'
        ] 
    }
] // arr containing different data types

console.table(arr)




console.log("\n\n\n")

let js = 'JavaScript'
// split actually change it to array
const charsInJavaScript = js.split('')
console.table(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]


let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
/// change to array
const companies = companiesString.split(',')
console.table(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]


let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// change to array
const words = txt.split(' ')
console.table(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]


/*

// output

[
  'J', 'a', 'v', 'a',
  'S', 'c', 'r', 'i',
  'p', 't'
]
[
  'Facebook',
  ' Google',
  ' Microsoft',
  ' Apple',
  ' IBM',
  ' Oracle',
  ' Amazon'
]
[
  'I',          'love',
  'teaching',   'and',
  'empowering', 'people.',
  'I',          'teach',
  'HTML,',      'CSS,',
  'JS,',        'React,',
  'Python.'
]

*/




console.log("\n\n\n")

const fruits1 = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits1[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits1[1]
console.log(secondFruit) // orange

let lastFruit = fruits1[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex = fruits1.length - 1
lastFruit = fruits1[lastIndex]

console.log(lastFruit)  // lemon
// console.log(fruits1[lastIndex])  // lemon




console.log("\n\n\n")

const numbers1 = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers1

console.log(numbers1.length)  // => to know the size of the array, which is 6
console.table(numbers1)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers1[0])      //  -> 0
console.log(numbers1[5])      //  -> 100

let lastIndex1 = numbers1.length - 1;
console.log(numbers1[lastIndex1]) // -> 100




console.log("\n\n\n")

const webTechs1 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.table(webTechs1)        // all the array items
console.log(webTechs1.length) // => to know the size of the array, which is 7
console.log(webTechs1[0])     //  -> HTML
console.log(webTechs1[6])     //  -> MongoDB

let lastIndex2 = webTechs1.length - 1
console.log(webTechs1[lastIndex2]) // -> MongoDB




console.log("\n\n\n")

const countries1 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
] // List of countries

console.table(countries1)      // -> all countries in array
console.log(countries1[0])   //  -> Albania
console.log(countries1[10])  //  -> Kenya

let lastIndex3 = (countries1.length) - 1;
console.log(countries1[lastIndex3]) //  -> Kenya




console.log("\n\n\n")

const shoppingCart = [
  'Milk',
  'Mango',
  'Tomato',
  'Potato',
  'Avocado',
  'Meat',
  'Eggs',
  'Sugar'
] // List of food products

console.table(shoppingCart) // -> all shoppingCart in array
console.log(shoppingCart[0]) //  -> Milk
console.log(shoppingCart[7]) //  -> Sugar

let lastIndex4 = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex4]) //  -> Sugar




console.log("\n\n\n")

const numbers2 = [1, 2, 3, 4, 5]
numbers2[0] = 10      // changing 1 at index 0 to 10
numbers2[1] = 20      // changing  2 at index 1 to 20

console.table(numbers2) // [10, 20, 3, 4, 5]

const countries2 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

countries2[0] = 'Afghanistan'  // Replacing Albania by Afghanistan

let lastIndex5 = countries2.length - 1
countries2[lastIndex5] = 'Korea' // Replacing Kenya by Korea

console.table(countries2)




console.log("\n\n\n")

const arr4 = Array() // creates an an empty array
console.log(arr4)
console.table(arr4)

const eightEmptyValues = Array(8) // it creates eight empty values
console.log(eightEmptyValues) // [empty x 8]
console.table(eightEmptyValues) // [empty x 8]




console.log("\n\n\n")

const arr5 = Array() // creates an an empty array
console.log(arr5)
console.table(arr5)

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']
console.table(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]
console.table(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]
console.table(four4values) // [4, 4, 4, 4]




console.log("\n\n\n")

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.table(thirdList) // [1, 2, 3, 4, 5, 6]




console.log("\n\n\n")

const fruits2 = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
const vegetables2 = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
const fruitsAndVegetables = fruits2.concat(vegetables2)                 // concatenate the two arrays

console.table(fruitsAndVegetables)




console.log("\n\n\n")

const numbers3 = [1, 2, 3, 4, 5]
console.log(numbers3.length) // -> 5 is the size of the array




console.log("\n\n\n")

const numbers4 = [1, 2, 3, 4, 5]

console.log(numbers4.indexOf(5)) // -> 4
console.log(numbers4.indexOf(0)) // -> -1
console.log(numbers4.indexOf(1)) // -> 0
console.log(numbers4.indexOf(6)) // -> -1







console.log("\n\n\n")

// let us check if a banana exist in the array

const fruits3 = ['banana', 'orange', 'mango', 'lemon']
let index = fruits3.indexOf('banana')  // 0

console.log("index number is: ", index)



if(index === -1){
   console.log(`This fruit ${fruits3[index]} does not exist in the array`)  
} else {
    console.log(`This fruit ${fruits3[index]} exist in the array`)
}
// This fruit exist in the array



// we can use also ternary here
index === -1 ? console.log(`This fruit ${fruits3[index]} does not exist in the array`) 
: console.log(`This fruit ${fruits3[index]} exist in the array`)



// let us check if an avocado exist in the array
let indexOfAvocado = fruits3.indexOf('avocado')  // -1, if the element not found index is -1
if(indexOfAvocado === -1){
   console.log(`This fruit ${fruits3[indexOfAvocado]} does not exist in the array`)  
} else {
    console.log(`This fruit ${fruits3[indexOfAvocado]} exist in the array`)
}
// This fruit does not exist in the array







console.log("\n\n\n")

const numbers5 = [1, 2, 3, 4, 5, 3, 1, 2]
//                0  1  2  3  4  5  6  7

// lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.
console.log(numbers5.lastIndexOf(2)) // 7
console.log(numbers5.lastIndexOf(0)) // -1
console.log(numbers5.lastIndexOf(1)) //  6
console.log(numbers5.lastIndexOf(4)) //  3
console.log(numbers5.lastIndexOf(6)) // -1





console.log("\n\n\n")

const numbers6 = [1, 2, 3, 4, 5]

console.log(numbers6.includes(5)) // true
console.log(numbers6.includes(0)) // false
console.log(numbers6.includes(1)) // true
console.log(numbers6.includes(6)) // false

const webTechs2 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs2.includes('Node'))  // true
console.log(webTechs2.includes('C'))     // false





console.log("\n\n\n")
// Array.isArray(variable)  // check if the variable is actually array or not

const numbers7 = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers7)) // true

const numbers8 = 100
console.log(Array.isArray(numbers8)) // false





console.log("\n\n\n")
// variable_array.toString()  // convert all value of array to a single word of string 

const numbers9 = [1, 2, 3, 4, 5]
console.log(numbers9.toString()) // 1,2,3,4,5
// console.log(numbers9) // [ 1, 2, 3, 4, 5 ]

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook
// console.log(names) // [ 'Asabeneh', 'Mathias', 'Elias', 'Brook' ]





console.log("\n\n\n")

const numbers10 = [1, 2, 3, 4, 5]

console.log(numbers10.join(','), "\n") // 1,2,3,4,5 // join base on (comma)
console.log(numbers10.join(), "\n") // 1,2,3,4,5 // join all value base on (empty by default it will be comma (,))


const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names1.join(), "\n") // Asabeneh,Mathias,Elias,Brook
console.log(names1.join(''), "\n") //AsabenehMathiasEliasBrook     // join base on (nothing means no anything)
console.log(names1.join(' '), "\n") //Asabeneh Mathias Elias Brook  // join base on (space)
console.log(names1.join(', '), "\n") //Asabeneh, Mathias, Elias, Brook // join base on (comma + space)
console.log(names1.join(' # '), "\n") //Asabeneh # Mathias # Elias # Brook // join base on (space + # + space)

const webTechs3 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] // List of web technologies

console.log(webTechs3.join(), "\n")       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
console.log(webTechs3.join(' # '), "\n")  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"


// TB: ('')  !=  ()
// TB: nothing  !=  empty




console.log("\n\n\n")

const numbers11 = [1,2,3,4,5]

console.log(numbers11.slice()) // -> it copies all  item
console.log(numbers11.slice(0)) // -> it copies all  item
console.log(numbers11.slice(0, numbers11.length)) // it copies all  item
console.log(numbers11.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position and start position
console.log(numbers11.slice(0,4)) // -> [1,2,3,4] // it doesn't include the ending position






console.log("\n\n\n")

const numbers12 = [1, 2, 3, 4, 5]
numbers12.splice()
console.log("splice(): ", numbers12)                // nothing remove because not anything is specify


const numbers15 = [1, 2, 3, 4, 5]
numbers15.splice(0)
console.log("splice(0): ", numbers15)                // remove everything

const numbers16 = [1, 2, 3, 4, 5]
numbers16.splice(2)
console.log("splice(2): ", numbers16)                // remove everything but not from 0 to 2 the index of 2 not include


const numbers18 = [1, 2, 3, 4, 5]
numbers18.splice(4)
console.log("splice(4): ", numbers18)                // remove everything but not from 0 to 4 the index of 4 not include


//                 -5 -4 -3 -2 -1
const numbers17 = [1, 2, 3, 4, 5]
numbers17.splice(-2)
console.log("splice(-2): ", numbers17)                // remove everything but not ( -5 -4 -3 -2 ) the index of -1 not include in this case


const numbers13 = [1, 2, 3, 4, 5]
numbers13.splice(0,1)
console.log("splice(0,1): ", numbers13)            // remove from 0 to 1 but not include 1


const numbers19 = [1, 2, 3, 4, 5, 6]
console.log("splice(3, 3, 7, 8, 9): ", numbers19.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

const numbers14 = [1, 2, 3, 4, 5, 6]
console.log("splice(3, 3, 7, 8, 9): ", numbers14.splice(3, 3, 7, 8, 9))







console.log("\n\n\n")

// syntax
const arr6  = ['item1', 'item2','item3']
console.log("orginal array")
console.log(arr6)


console.log("\npush('new item')")
arr6.push('new item') // by default pushing will add in the end but remember you can't push number to the specific place
console.log(arr6, "\n")



// ['item1', 'item2','item3','new item']
const numbers20 = [1, 2, 3, 4, 5]
console.log("orginal array")
console.log(numbers20)


console.log("\npush(6)")
numbers20.push(6)
console.log(numbers20, "\n") // -> [1,2,3,4,5,6]


console.log("\npop()") // pop number from end by default you can pop specific number
numbers20.pop() // -> remove one item from the end 
console.log(numbers20, "\n") // -> [1,2,3,4,5]



let fruits4 = ['banana', 'orange', 'mango', 'lemon']
console.log("orginal array")
console.log(fruits4)


console.log("\npush('apple')")
fruits4.push('apple')
console.log("\n", fruits4)    // ['banana', 'orange', 'mango', 'lemon', 'apple']



console.log("\npush('lime")
fruits4.push('lime')
console.log("\n", fruits4)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']







console.log("\n\n\n")

const numbers21 = [1, 2, 3, 4, 5]
console.log("orginal array")
console.log(numbers21)

numbers21.pop() // -> remove one item from the end
console.log("\npop()")
console.log(numbers21) // -> [1,2,3,4]





console.log("\n\n\n")

const numbers22 = [1, 2, 3, 4, 5]
console.log("orginal array")
console.log(numbers22)

console.log("\nshift()") // shift will reverse work of pop() instaid removing in the end it will remove to the beganning
numbers22.shift() // -> remove one item from the beginning
console.log(numbers22) // -> [2,3,4,5]





console.log("\n\n\n")

const numbers23 = [1, 2, 3, 4, 5]
console.log("orginal array")
console.log(numbers23)

console.log("\nunshift()") // unshift will reverse work of push() instaid adding item in the end it will add item to the beganning
numbers23.unshift(0) // -> add one item from the beginning
console.log(numbers23) // -> [0,1,2,3,4,5]





console.log("\n\n\n")

const numbers24 = [1, 2, 3, 4, 5]
console.log("orginal array")
console.log(numbers24)

console.log("\nreverse()") 
numbers24.reverse() // -> reverse array order
console.log(numbers24) // [5, 4, 3, 2, 1]

console.log("\nreverse()") 
numbers24.reverse() // because we are reverse the order of array we can reverse() again to reverse() the order of array
console.log(numbers24) // [1, 2, 3, 4, 5]






console.log("\n\n\n")

const webTechs4 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

console.log("before sort")
console.log(webTechs4)

console.log("\nsort()")
webTechs4.sort() // sort in string base on number of character the sort will start from ( less character   to   more character)
console.log(webTechs4) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

console.log("\nreverse()")
webTechs4.reverse() // after sorting we can reverse it
console.log(webTechs4) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]






console.log("\n\n\n")

// normal array
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]


//                         0          1
const arrayOfArray =  [[1, 2, 3], [4, 5, 6]]
console.log("orginal array")
console.log(arrayOfArray)

console.log("\nindex 0")
console.log(arrayOfArray[0]) // [1, 2, 3]

console.log("\nindex 1")
console.log(arrayOfArray[1]) // [4, 5, 6]


 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']

 // concatenation of two array to make it Array of Array
 const fullStack = [frontEnd, backEnd]
 console.log("\nArray of Array")
 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 
 console.log("\nLength")
 console.log(fullStack.length)  // 2
 
 console.log("\nindex 0")
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]

 console.log("\nindex 1")
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]






