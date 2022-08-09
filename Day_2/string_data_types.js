// console.log("String\n")
// console.log("in string you can't use    firstName[1] = H    means we can't modify it \n")

// let space = ' ' // an empty space string
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'

// console.log(firstName, lastName, country, city, language, job, space)



// console.log("================================================================")
// console.log("\nString Length\n")

// let js = 'JavaScript'
// console.log("(JavaScript) Length is: ", js.length)         // 10
// let alexName = 'Asabeneh'
// console.log("(Asabeneh) Length is: ", alexName.length)  // 8





// console.log("================================================================")
// console.log("\nLet us access different characters in 'JavaScript' string\n")
// let string = 'JavaScript'

// let firstLetter = string[0]
// console.log(firstLetter)           // J

// let secondLetter = string[1]       // a
// let thirdLetter = string[2]
// let lastLetter = string[9]

// console.log(lastLetter)            // t

// // JavaScript = index 9 
// // string.length = 10 
// // NOTE: string.length is return the number of length not length of 9 the number of length is 10
// let lastIndex = string.length - 1

// console.log(lastIndex)  // 9
// console.log("change index to string by using this bracket (   [index_number or variable]   ) ", string[lastIndex])    // t






// console.log("================================================================")
// console.log("\n\n\nchange string to (Upper Case) using (   toUpperCase()   )\n")

// let string1 = 'JavaScript'
// console.log(string1.toUpperCase())     // JAVASCRIPT

// let firstName1 = 'Asabeneh'
// console.log(firstName1.toUpperCase())  // ASABENEH

// let country1 = 'Finland'
// console.log(country1.toUpperCase())    // FINLAND






// console.log("================================================================")
// console.log("\n\n\nchange string to (Lower Case) using (   toLowerCase()   )\n")
// let string2 = 'JavasCript'
// console.log(string2.toLowerCase())     // javascript

// let firstName2 = 'Asabeneh'
// console.log(firstName2.toLowerCase())  // asabeneh

// let country2 = 'Finland'
// console.log(country2.toLowerCase())   // finland






// console.log("================================================================")
// console.log("\n\n\nFinding (Sub String) using (   substr(number_start, number_end)   )\n")
// // substr(): It takes two arguments, the starting index and number of characters to slice.
// let string3 = 'JavaScript'
// console.log(string3.substr(4,6))    // Script

// let country3 = 'Finland'
// console.log(country3.substr(3, 4))   // land






// console.log("================================================================")
// console.log("\n\n\nFinding (Sub String) using (   substring(number_start, number_end)   )\n")
// // substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
// let string4 = 'JavaScript'

// console.log(string4.substring(0,4))     // Java
// console.log(string4.substring(4,10))    // Script
// console.log(string4.substring(4))       // Script

// let country4 = 'Finland'

// console.log(country4.substring(0, 3))   // Fin
// console.log(country4.substring(3, 7))   // land
// console.log(country4.substring(3))      // land






// console.log("================================================================")
// console.log("\n\n\nsplit the string using (   split(split_by_what)   )\n")
// // split(): The split method splits a string at a specified place.
// let string5 = '30 Days Of JavaScript'

// console.log("change to array: ", string5.split())     // Changes to an array -> ["30 Days Of JavaScript"]
// console.log("split by space: ", string5.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

// let firstName5 = 'Asabeneh'

// console.log("change to array: ", firstName5.split())    // Change to an array - > ["Asabeneh"]
// console.log("split by space: ", firstName5.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

// let countries5 = 'Finland, Sweden, Norway, Denmark, and Iceland'

// console.log("split by comma: ", countries5.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
// console.log("split by comma after that space: ", countries5.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]






// console.log("================================================================")
// console.log("\n\n\ntrim the string (   trim(trim_by_what)   )\n")
// // trim(): Removes trailing space in the beginning or the end of a string.
// let string6 = '   30 Days Of JavaScript   '

// console.log("before trim:", string6)
// console.log("after trim:", string6.trim(' '))

// let firstName6 = ' Asabeneh '

// console.log("before trim:", firstName6)
// console.log("after trim:", firstName6.trim())  // still removes spaces at the beginning and the end of the string






// console.log("================================================================")
// console.log("\n\n\nknowing if string contain this word or this subword that inside includes   (   includes()   )\n")
// // includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
// let string7 = '30 Days Of JavaScript'

// console.log(string7.includes('Days'))     // true
// console.log(string7.includes('days'))     // false - it is case sensitive!
// console.log(string7.includes('Script'))   // true
// console.log(string7.includes('script'))   // false
// console.log(string7.includes('java'))     // false
// console.log(string7.includes('Java'))     // true

// let country7 = 'Finland'

// console.log(country7.includes('fin'))     // false
// console.log(country7.includes('Fin'))     // true
// console.log(country7.includes('land'))    // true
// console.log(country7.includes('Land'))    // false





// console.log("================================================================")
// console.log("\n\n\nreplace the old string word or subword with news word or subword  (   replace(oldsubstring, newsubstring)   )\n")
// /*

// replace(): takes as a parameter the old substring and a new substring.
// string.replace(oldsubstring, newsubstring)

// */

// let string8 = '30 Days Of JavaScript'
// console.log(string8.replace('JavaScript', 'Python')) // 30 Days Of Python

// let country8 = 'Finland'
// console.log(country8.replace('Fin', 'Noman'))       // Nomanland






console.log("================================================================")
console.log("\n\n\nusing (   charAt(index or length)  ) to return the value of this character of that string by taking it index of this string\n")
// charAt(): Takes index or length and it returns (the value at that index)
// string.charAt(index or length)

let string9 = '30 Days Of JavaScript'
console.log(string9.charAt(0))        // 3

let lastIndex9 = string9.length - 1
console.log(string9.charAt(lastIndex9)) // t






// console.log("================================================================")
// console.log("\n\n\nreturn the charCode of the character value in that index (  charCodeAt(index)  ) \n")
// // charCodeAt(): Takes index and it returns char code in ASCII Number of the value at that index
// // string.charCodeAt(index)

// let string10 = '30 Days Of JavaScript'
// console.log(string10.charCodeAt(3))        // D ASCII number is 68

// let lastIndex10 = string10.length - 1
// console.log(string10.charCodeAt(lastIndex10)) // t ASCII is 116






// console.log("================================================================")
// console.log("\n\n\nTakes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1 (  indexOf(substring)  ) \n")
// // indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
// // string.indexOf(substring)
// let string11 = '30 Days Of JavaScript'

// console.log(string11.indexOf('D'))          // 3
// console.log(string11.indexOf('Days'))       // 3
// console.log(string11.indexOf('days'))       // -1
// console.log(string11.indexOf('a'))          // 4
// console.log(string11.indexOf('JavaScript')) // 11
// console.log(string11.indexOf('Script'))     //15
// console.log(string11.indexOf('script'))     // -1






// console.log("================================================================")
// console.log("\n\n\n return the last index of this word or subword the index is start in 0   (  lastIndexOf('word or subword')  ) \n")
// // astIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
// // string.lastIndexOf(substring)
// let string12 = 'I love JavaScript. If you do not love JavaScript what else can you love.'

// console.log(string12.lastIndexOf('love'))       // 67
// console.log(string12.lastIndexOf('you'))        // 63
// console.log(string12.lastIndexOf('JavaScript')) // 38





// console.log("================================================================")
// console.log("\n\n\n it takes many substrings and joins them    (    concat('word or subword', 'word or subword', ..)    ) \n")
// // concat(): it takes many substrings and joins them.
// // string.concat(substring, substring, substring)
// let string13 = '30'
// console.log(string13.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

// let country13 = 'Fin'
// console.log(country13.concat("land")) // Finland





// console.log("================================================================")
// console.log("\n\n\nendsWith: it takes a substring as an argument and it checks if the string start with that we use (  startsWith(substring)  ) for checking that\n")
// // startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// // //syntax
// // string.startsWith(substring)
// let string19 = 'Love is the best to in this world'
// console.log("\n", string19, "\n")

// console.log(string19.startsWith('Love'))   // true
// console.log(string19.startsWith('love'))   // false
// console.log(string19.startsWith('world'))  // false

// let country19 = 'Finland'
// console.log("\n", country19, "\n")

// console.log(country19.startsWith('Fin'))   // true
// console.log(country19.startsWith('fin'))   // false
// console.log(country19.startsWith('land'))  //  false







// console.log("================================================================")
// console.log("\n\n\nendsWith: it takes a substring as an argument and it checks if the string ends with that we use (  endsWith(substring)  ) for checking that\n")
// // endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
// // string.endsWith(substring)
// let string18 = 'Love is the most powerful feeling in the world'
// console.log("\n", string18, "\n")

// console.log(string18.endsWith('world'))         // true
// console.log(string18.endsWith('love'))          // false
// console.log(string18.endsWith('in the world')) // true

// let country18 = 'Finland'
// console.log("\n", country18, "\n")

// console.log(country18.endsWith('land'))         // true
// console.log(country18.endsWith('fin'))          // false
// console.log(country18.endsWith('Fin'))          //  false






// console.log("================================================================")
// console.log("\n\n\n Search in syntax of String using (   search(pattern or value)  ) \n") 
// // search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
// // string.search(substring)
// let string16 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// console.log(string16.search('love'))          // 2
// console.log(string16.search(/javascript/gi))  // 7







// console.log("================================================================")
// console.log("match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. regular expression in JS It starts with / sign and ends with / sign")

// let string17 = 'love'

// let patternOne = /love/     // with out any flag
// let patternTwo = /love/gi   // {{{ g-means to search in the whole text }}}, {{{ i - case insensitive }}}
// console.log(string17.match(patternOne)) // [ 'love', index: 0, input: 'love', groups: undefined ]
// console.log(string17.match('love')) // [ 'love', index: 0, input: 'love', groups: undefined ]
// console.log(string17.match(patternTwo)) // [ 'love', index: 0, input: 'love', groups: undefined ]







// console.log("================================================================")
// console.log("\n\n\n Match syntax using (   match(pattern or value)  ) \n") 

// let string15 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// console.log(string15.match('love'))
// /*
// // output

// [
//     "love", 
//     index: 2, 
//     input: "I love JavaScript. If you do not love JavaScript what else can you love.", 
//     groups: undefined
// ]

// */
// let pattern = /love/gi  // g-means to search in the whole text, i - case insensitive
// console.log(string15.match(pattern))   // ["love", "love", "love"]







// console.log("================================================================")
// console.log("\n\n\n Let us extract numbers from text using a regular expression\n") 

// let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
// let regEx = /\d+/

// // d means digit
// // d+ means one or more digit numbers,

// console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
// /*
// // output

// [
//   '2019',
//   index: 3,
//   input: 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge',
//   groups: undefined
// ]
// */
// console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
// // (g) after (d+) means global, search everywhere anc concate every thing base on orginal text.
// // (g) is put in the regular experesion after finishing regular expression and symbol (/)






// console.log("================================================================")
// console.log(" \n\n\n it takes a number as argument and it returns the repeated version of the string (  repeat(number_of_repeatation)  ) \n")
// // repeat(): it takes a number as argument and it returns the repeated version of the string.
// // string.repeat(n)

// let string14 = 'love'
// console.log(string14.repeat(10)) // lovelovelovelovelovelovelovelovelovelove





// console.log("================================================================")
// console.log(" \n\n\n Checking Data Types and Casting for we use (  typeof value_or_variable  ) \n")
// // Checking Data Types
// // To check the data type of a certain variable we use the typeof method.

// // Example:

// // Different javascript data types
// // Let's declare different data types

// let firstNamee = 'Asabeneh'      // string
// let lastNamee = 'Yetayeh'        // string
// let countryy = 'Finland'         // string
// let cityy = 'Helsinki'           // string
// let agee = 250                   // number, it is not my real age, do not worry about it
// let jobb                         // undefined, because a value was not assigned

// console.log(typeof 'Asabeneh')  // string
// console.log(typeof firstNamee)   // string
// console.log(typeof 10)          // number
// console.log(typeof 3.14)        // number
// console.log(typeof true)        // boolean
// console.log(typeof false)       // boolean
// console.log(typeof NaN)         // number
// console.log(typeof jobb)         // undefined
// console.log(typeof undefined)   // undefined
// console.log(typeof null)        // object






// console.log("================================================================")
// console.log(" \n\n\n Changing Data Type (Casting) \n")
// console.log(" Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error\n")
// // Changing Data Type (Casting)
// // Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.

// console.log("================================================================")
// console.log(" \n\n\n We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. We can convert string to number using the following methods  (   parseInt()  Number()  Plus sign(+)  ) \n")

// // String to Int
// // We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. We can convert string to number using the following methods:
// // parseInt()
// // Number()
// // Plus sign(+)

// let num5 = '10'
// let numInt5 = parseInt(num5)
// console.log(numInt5) // 10


// let num6 = '10'
// let numInt6 = Number(num6)

// console.log(numInt6) // 10


// let num7 = '10'
// let numInt7 = +num7

// console.log(numInt7) // 10






// console.log("================================================================")
// console.log(" convert String to Float (   parseFloat()   Number()  Plus sign(+)   )\n")
// // String to Float
// // We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods:
// // Number()
// // Plus sign(+)

// let num1 = "9.81"
// let numFloat1 = parseFloat(num1)

// console.log(numFloat1) // 9.81


// let num2 = '9.81'
// let numFloat2 = Number(num2)

// console.log(numFloat2) // 9.81


// let num3 = `9.81`
// let numFloat3 = +num3

// console.log(numFloat3) // 9.81






// console.log("================================================================")
// console.log(" convert Float to Int (   parseInt()   )\n")

// // Float to Int
// // We can convert float numbers to integers. We use the following method to convert float to int:

// let num4 = 9.81
// let numInt4 = parseInt(num4)

// console.log(numInt4) // 9
