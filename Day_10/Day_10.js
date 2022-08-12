console.log("======================== Set ========================")
console.log("\n")




console.log("\n")
console.log("========================================================================================")
console.log("======================== Creating set from array ========================")
console.log("\n")

/*

// Syntax

const variable_name = new Set(name_array)
console.log(variable_name)




// wrong practic
const variable_name = name_array.Set()
console.log(variable_name)



// 


*/

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

console.log("Using Set object Method\n")
// (Set) object Method will remove duplicate value 
// also return the length of this output that come back for us
const setOfLanguages = new Set(languages)
console.log(setOfLanguages)  // Set(4) { 'English', 'Finnish', 'French', 'Spanish' }




console.log("\n\n")

const languages1 = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]


const setOfLanguages1 = new Set(languages1)

console.log("Using for loop to call the filterd value from Set object Method\n")
// you can use for loop to call this value that filterd by (Set) object Method without modify the data means without filtering on the data the data will filtered
for (const simple_data of setOfLanguages1) {
  console.log(simple_data)
}





console.log("\n\n")

console.log("Using for loop to call the filterd value from Set object Method\n")
// you can use variable (languages1) that use by array not problem because we override the data into it
// means we put new data on this variable, means we can declare this variable in (if or for loop) but not outside them
for (const languages1 of setOfLanguages1) {
    console.log(languages1)
}




console.log("\n")
console.log("========================================================================================")
console.log("======================== Adding an element to a set ========================")
console.log("\n")

/*


// Syntax

// 1- declare the variable for the ( Set() ) method object
variable_name = new Set()

// 2- adding value using (add) method
variable_name.add





// Some Trick

// calling array size using (size) keyword
variable_name.size
array_name.size

*/

// there is not specific array inside the (Set) object method then any value add to this set method object or remove will affect to the declration variable for this set method object
// it is just like we have (Set()) method object is filter by this (variable array) that we take to this method object after that this Set() object return this filtered value to the (variable declaration) of the method object
// in that moment we don't have any value to filtered by (Set()) method object then we just put the value into the (declaration variable)
// but when the value is add then (Set()) method object will filter on that value one by one
const companies = new Set() // creating an empty set
console.log("array value:        ", companies) // Set(0) {}
console.log("size of the array:  ", companies.size) // 0

// add element to the set
companies.add('Google') 
companies.add('Google') 
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Oracle')
companies.add('Microsoft')

console.log("\narray value after adding value:        ", companies)   // Set(5) { 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft' }
console.log("size of the array after adding value:  ", companies.size) // 5

// add method will item for this (variable that handle ( Set() ) method object) or function





console.log("\n\n")
const companies1 = ['Google', 'Google', 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft', 'Microsoft', 'Microsoft']

// creating variable without (const or var or let) to handle value of (  Set()  ) method object
// javascript will the type of this variable if take it two or more value it change to array for example
// the type of variable can be change not matter what variable you are using
setOfCompanies = new Set()
// putting value of array of ( companies1 ) to the new variable ( company )
// this value from (companies1) to (company) take it one by one
for (const company of companies1) {
   // we just add new value from company variable to my (setOfCompanies) variable that we declared for the (  Set()  ) method object
   // now value will add one by one to the (company) variable from array of (companies1) and this (company) variable will add this value to the variable (setOfCompanies) that we are declared for the ( Set() ) method object
   // remember the ( Set() ) will filter on the array, this value that is duplicate is removed when try to add to the variable (setOfCompanies)  
   console.log(setOfCompanies.add(company))
}

console.log("Final Part:   ", setOfCompanies)

/*

    Set(1) { 'Google' }
    Set(1) { 'Google' }
    Set(1) { 'Google' }
    Set(2) { 'Google', 'Facebook' }
    Set(3) { 'Google', 'Facebook', 'Amazon' }
    Set(4) { 'Google', 'Facebook', 'Amazon', 'Oracle' }
    Set(5) { 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft' }
    Set(5) { 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft' }
    Set(5) { 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft' }
    Final Part:    Set(5) { 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft' }

*/




console.log("\n")
console.log("========================================================================================")
console.log("======================== Deleting an element a set ========================")
console.log("\n")

// (delete) method will remove the specific item in the list (by default) if you don't take anything then it is (not remove anything) this is just for function or that (variable that handle ( Set() ) method object)


const companies2 = ['Google', 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft', 'Microsoft', 'Microsoft']
const companies_function = new Set(companies2) 

// (delete) method will remove the specific item in the list (by default) if you don't take anything then it is (not remove anything)
console.log("before removing item: ", companies_function)
console.log("size of the array:    ", companies_function.size) // 4 elements left in the set

console.log("\ndeleting item:      ", companies_function.delete('Google'))
console.log("size of the array:  ", companies_function.size) // 4 elements left in the set

console.log("\nfinal array result: ", companies_function)
/*

// you can directory use the function to do that because (delete) method is not work with array is work just with function like (add) method
// if you try to do that with array

console.log(companies2.delete('Google')) // error // console.log(companies2.delete('Google')) TypeError: companies2.delete is not a function
                             ^

*/



console.log("\n")
console.log("========================================================================================")
console.log("======================== Checking an element in the set ========================")
console.log("\n")

// check if specific item is in the list using ( has() ) method


const companies3 = ['Google', 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft', 'Microsoft', 'Microsoft']
const companies_function1 = new Set(companies3) 

console.log("Array Item:   ", companies_function1)

// check if specific item is in the list using ( has() ) method for the (function) or that (variable that handle ( Set() ) method object)
console.log("\nApple:    ", companies_function1.has('Apple')) // false
console.log("Facebook: ", companies_function1.has('Facebook')) // true





console.log("\n")
console.log("========================================================================================")
console.log("======================== Clearing the set ========================")
console.log("\n")

// clearing all item ( deleting all item in the array ) using ( clear() ) method


const companies4 = ['Google', 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft', 'Microsoft', 'Microsoft']
const companies_function2 = new Set(companies4) 

// you can't use clear for the specific item because ( clear() ) method is design to clear entire value of that (variable that handle ( Set() ) method object) or function
companies_function2.clear('Google')
console.log(companies_function2)

// clearing all item ( deleting all item in the array ) using ( clear() ) method
companies_function2.clear()
console.log(companies_function2)






console.log("\n")

const languages2 = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
const langSet = new Set(languages2)

console.log("Item:              ", langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log("Size of the Array: ", langSet.size, "\n") // 4


// create to array // we use that to store all the value
const counts = []
// create object // we use that for storing value inside the array of (counts)
// if don't create that you don't have any problem by default insie the array will be create that object for any variable_name
const count = {}

// putting all filtered value of (langSet) to the (l) variable the the (langSet) filtered by ( Set() ) method
// the value go to the (l) variable one by one
for (const l of langSet) {
    // take power of (filter) for (lng) parameter
    const filteredLang = languages2.filter((lng) => 
        // filter throw this value that is have the same name for that we use ( === ) operator
        lng === l
    )
  /*

    // output // in this output you can see that we put the same value with each other, we do that for this value that is the same

    // console.log(filteredLang) 

    [ 'English', 'English', 'English' ]
    [ 'Finnish' ]
    [ 'French', 'French' ]
    [ 'Spanish' ]

  */

  // all value that we get from (for loop) for variable (l) we push that to the array (counts) also we do that in front of variable_name (lang)
  // and we count number of duplicate value we store that in object (count)
  counts.push({ lang: l, count: filteredLang.length })
  /*

        [
            { lang: 'English', count: 3 },
            { lang: 'Finnish', count: 1 },
            { lang: 'French', count: 2 },
            { lang: 'Spanish', count: 1 }
        ]

  */
}

console.log(counts)






console.log('\n\n')

const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
// simple ( Set() ) object using for the array of (numbers)
// filtering to remove duplicate value
// knowing the length of the array after filtering of removing duplicate value
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers) // Set(5) { 5, 3, 2, 9, 4 }






console.log("\n")
console.log("========================================================================================")
console.log("======================== Union of sets ========================")
console.log("\n")


let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b] // [ 1, 2, 3, 4, 5, 3, 4, 5, 6 ]

// storing result of ( Set() ) method object of the (a) variable to the (A) variable 
let A = new Set(a)
// storing result of ( Set() ) method object of the (b) variable to the (B) variable 
let B = new Set(b)
// storing result of ( Set() ) method object of the (c) variable to the (C) variable 
let C = new Set(c)

console.log(A) // Set(5) { 1, 2, 3, 4, 5 }
console.log(B) // Set(4) { 3, 4, 5, 6 }
console.log(C) // Set(6) { 1, 2, 3, 4, 5, 6 }






console.log("\n")
console.log("========================================================================================")
console.log("======================== Intersection of sets ========================")
console.log("\n")


let a1 = [1, 2, 3, 4, 5, 'alex', 'andra']
let b1 = [3, 4, 5, 6, 'alex']

// storing result of ( Set() ) method object of the (a1) variable to the (A1) variable 
let A1 = new Set(a1)
// storing result of ( Set() ) method object of the (b1) variable to the (B1) variable 
let B1 = new Set(b1)

console.log("After Set() to (a1):                  ", a1)
console.log("After Set() to (B1):                  ", B1)
// take power of (filter) to the (num) parameter base on (a1) value
/*

// output

// you can't use A1 variable because it is function 
// we are already want create a function not use another function to create another function this is logicaly not true and not use
let c1 = A1.filter((num) => 

// error
let c1 = A1.filter((num) => // TypeError: A1.filter is not a function
            ^

*/

let c1 = a1.filter((num) => 
  // checking if (B1) value is the same as this value that we have in (a1) array
  // (has) method work like this operator (===) if (B1 === a1) in value then it is return the function 
  // (has) method not have problem with (number or string) 

  // using (has) method for finding this value that in (a1) that equal to (B2) in type and value 
  // but not finding this value in (B1) array that is equal to (a1) array in type and value
  B1.has(num)
)

// storing result of ( Set() ) method object of the (c1) variable to the (C1) variable 
let C1 = new Set(c1)

console.log("After filter() and Set() to (c1):     ", C1)






console.log("\n")
console.log("========================================================================================")
console.log("======================== Difference of sets ========================")
console.log("\n")


let a2 = [1, 2, 3, 4, 5, 'kameron fous', 'andra']
let b2 = [3, 4, 5, 6, 'andra']

// storing result of ( Set() ) method object of the (a2) variable to the (A2) variable 
let A2 = new Set(a2)
// storing result of ( Set() ) method object of the (b2) variable to the (B2) variable 
let B2 = new Set(b2)
console.log("After Set() to (a2):                  ", a2)
console.log("After Set() to (B2):                  ", B2)

let c2 = a2.filter((num) => 
  // using (has) method for finding this value that in (a2) that not equal to (B2) vice versa is not true
  // this is because we take power of (filtering) to (num) parameter to do that in (a1) parameter not to (B2) array value
  !B2.has(num)
)
let C2 = new Set(c2)

console.log("After filter() and Set() to (c1):     ", C2)







console.log("\n")
console.log("========================================================================================")
console.log("======================== Map ========================")
console.log("\n")

/*

// Syntax

const map = new Map(mapp)
console.log(map)

*/

// Creating an Map from array



countries = [
  ['Finland', 'Helsinki', 'fake place'],
  ['Sweden', 'Stockholm', 'fake value', 'fake value again'],
  ['Norway', 'Oslo']
]

// using Map method object to map( first value in left) to the (second value in the array that is in right)
// this is just done for 2 value in the array for each section if you add third and fourd and ...  value for that section then the (Map) method object will ignore this value    
const map1 = new Map(countries)
// when we map to the array each section of the array will contain 1 size 
// means not matter how much value inside this bracket [] the (size) keyword take it for one section of the value
console.log("Size of the array: ", map1.size, "\n") // 3
console.log(map1)

/*

Map(3) {
  'Finland' => 'Helsinki',
  'Sweden' => 'Stockholm',
  'Norway' => 'Oslo'
}

*/







console.log("\n")
console.log("========================================================================================")
console.log("======================== Adding values to the Map ========================")
console.log("\n")


const countriesMap = new Map()
console.log("size of the array before adding value:           ", countriesMap.size) // 0

// add value to the variable (countriesMap) that handle method object of the ( Map() ) 
// the value is added by ( set ) keyword 
// when you add the value you should set 2 value because ( Map() ) method object used pointer from (first value to second value) 
// ( Map() ) method object allow added more than 2 but not 1, 
// if you are using more than 2 they ignore other value, 
// if you are using 1 they point to the (undefiined) value
countriesMap.set('Finland', 'Helsinki', 20, 'alex')
countriesMap.set('Sweden')
countriesMap.set('Norway', 'Oslo')
console.log("size of the array using ( Map() ) method object: ", countriesMap.size, "\n")
console.log(countriesMap)

/*

Map(3) {
  'Finland' => 'Helsinki',
  'Sweden' => undefined,
  'Norway' => 'Oslo'
}

*/





console.log("\n")
console.log("========================================================================================")
console.log("======================== Getting a value from Map ========================")
console.log("\n")

// (get) method will look at this array that done  process ( Map() ) on and return this value that source value point to it in the array process 
// if not find it they return undefined value

// (Finland) in the map array they point to the (Helsinki) but (Helsinki) not point to other vlaue because (Helsinki) is (destination value)
console.log(countriesMap.get('Finland')) // Helsinki 
// (Oslo) not point to other value because (Oslo) is destination value
console.log(countriesMap.get('Oslo')) // undefined 
// andra is ignored value it is like not in the list
console.log(countriesMap.get('andra')) // undefined
// ther is not value in the section that is 20 the (Map()) method object convert all section to 2 value style of array they remove other value
console.log(countriesMap.get(20))  // undefined 
// (Sweden) point to undefined value because not hae any value to point to it
console.log(countriesMap.get('Sweden'))  // undefined 






console.log("\n")
console.log("========================================================================================")
console.log("======================== Checking key in Map ========================")
console.log("\n")

// 'Finland' === 'Finland' // about (type and value) is true
// (has) method work like ( === ) this operator
console.log(countriesMap.has('Finland'))

// puting value of (countriesMap) variable that handle process of ( Map() ) method object for this value that we add to the variable (countriesMap) to the variable ( country )
// the value is added like this value that output to us normaly in this bracket   []   and in this quotes   ''   if it have means if it is string
for (const country of countriesMap) {
  console.log(country)
}


console.log("\n")

// puting both of value for each section to the variable ( country and city ) first value go tothe (country) second value go to the (city)
// if you do that you should use this bracket   []   to understand compiler what you are trying to do
// the output value will come to us without this bracket   []   and this quotes   '' 
for (const [country, city] of countriesMap){
 // calling both of the variable
 console.log(country, city)
}

