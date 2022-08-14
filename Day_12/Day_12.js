console.log("======================== Regular Expressions ========================")
console.log("\n")

/*

Pattern: A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an email could be a pattern we are interested to look for in an email or a phone number format number might be our interest to look for.

* Flags: Flags are optional parameters in a regular expression which determine the type of searching. Let us see some of the flags:

    g: a global flag which means looking for a pattern in whole text
    i: case insensitive flag(it searches for both lowercase and uppercase)
    m: multiline

// Syntax

let pattern = 'love'
let regEx = new RegExp(pattern)

*/


console.log("\n")

// pattern is (love) to find it in the text or ...
let pattern1 = 'love'
// flag i use with pattern is (gi)
// g: means looking for a pattern in whole text
// i: case insensitive
let flag1 = 'gi'
// regex object function create like that 
// ( let | const | var ) variable_name = new RegExp(pattern_variable, flag_variable)
// ( let | const | var ) variable_name = new RegExp(/pattern/flag)
let regEx1 = new RegExp(pattern1, flag1)

console.log(regEx1) // /love/gi







console.log("\n")

// you can type (pattern with depended flag) value inside bracket (RegExp) object function
// if you type the value of (pattern with depended flag) you type sprately insie single quotes ('pattern', 'flag')
// or you can type it with each other sprate by slash (/) like that (/pattern/flag)
let regEx2 = new RegExp('love','gi')
console.log(regEx2) // /love/gi







console.log("\n")

// you can type (pattern with depended flag) value inside bracket (RegExp) object function
// if you type the value of (pattern with depended flag) you type sprately insie single quotes ('pattern', 'flag')
// or you can type it with each other sprate by slash (/) like that (/pattern/flag)
// flag is not have end slash
let regEx5 = new RegExp(/love/gi)
console.log(regEx5) // /love/gi







console.log("\n")

// typing (pattern and regex) without object function
// but you should use slash for doing that, means if you use slash then compiler know what you are trying to do, use regex with that documentation or .... anythig you want 
let regEx3= /love/gi
console.log(regEx3) // /love/gi







console.log("\n")
console.log("======================== RegExpp Object Methods ========================")
console.log("\n")


/*

// Syntax (test) keyword

const variable_name = pattern_variable.test(string_variable)
console.log(variable_name)

*/

// this is the string
const str2 = 'I love JavaScript'
// value of pattern can be inside (quotes or slash)
const pattern2 = /love/
// test pattern if my pattern is match the string using ( test() ) keyword
const result2 = pattern2.test(str2)

console.log(result2) // true









console.log("\n\n")

// this is the string
const str3 = 'I love JavaScript'
// value of pattern can be inside (quotes or slash)
const pattern3 = /love/
// look for match value for my pattern using ( match() ) keyword, if it ( match() ) find the pattern then return the match value from the string 
const result3 = str3.match(pattern3)
// the ( match() ) keyword is return result with some basic information
console.log(result3) // [ 'love', index: 2, input: 'I love JavaScript', groups: undefined ]









console.log("\n\n")

// string value
const str4 = 'I love JavaScript'
// value of (pattern with depended flag) can be inside (quotes or slash) the flag is not have end slash
const pattern_flag = /love/g
// (  match()  ) keyword look for match value for my ( pattern with depended flag ) using ( match() ) keyword, if ( match() ) find the target for  (pattern with depended flag) then return the match value from the string 
const result4 = str4.match(pattern_flag)
// the ( match() ) keyword is return match value for the (pattern with depended flag)  with some basic information
console.log(result4)









console.log("\n\n")

const str5 = 'I love JavaScript'
// value of (pattern with depended flag) can be inside (quotes or slash) the flag is not have end slash
const pattern5 = /love/g
// (  search()  ) keyword look for match value for my ( pattern with depended flag ) using ( search() ) keyword, if ( search() ) find the target for  (pattern with depended flag) then return the searching result from the string 
const result5 = str5.search(pattern5)
// the ( search() ) keyword is return match value for the (pattern with depended flag)  without basic information
console.log(result5) // 2


/*

// Note

* different between ( search() ) keyword and ( match() ) keyword is about this result that back to the console
    * ( match() ) keyword is return the result with some basic infromation
    * ( serach() ) keyword is return the result without basic information just the  result it self

*/






/*

// Syntax replace keyword

( const | let | var ) variable_name = string_variable.replace(/pattern/flag, 'string value')

// the (replace) keyword will replace (pattern with depended flag) with that string or number that we take to the (replace) keyword

// but this is just done when it found first time not second and third  and ...

*/

console.log("\n\n")

// string value
const txt1 = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

// ( replace() ) keyword will replace (pattern with depended flag) with the given string, that we take to my replace keyword
// replace 'Python' or 'python'   to   'JavaScript'  in that case
// but this is just done when it found first time not second and third  and ...
matchReplaced = txt1.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)
// JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language









console.log("\n\n")

// string value
const txt2 = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

// replace 'Python' or 'python'   to   'JavaScript'
// after using (g) flag we can search for the entire documentation to replace my value
matchReplaced = txt2.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)
// JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language








console.log("\n\n")

const txt3 = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

// replace   'Python' to 'JavaScript'  
// using (g) flag to search to the entire document and replace it in the entire document
// using (i) flag to not care about case sensative of  'Python'  value
matchReplaced = txt3.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)
// JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language






/*

[]:   A set of characters
[a-c] means, a or b or c
[a-z] means, any letter a to z
[A-Z] means, any character A to Z
[0-3] means, 0 or 1 or 2 or 3
[0-9] means any number 0 to 9
[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9

\: uses to escape special characters

    \d mean: match where the string contains digits (numbers from 0-9)
    \D mean: match where the string does not contain digits

. : any character except new line character(\n)

^: starts with

    r'^substring' eg r'^love', a sentence which starts with a word love
    r'[^abc] mean not a, not b, not c.

$: ends with

    r'substring' eg r'love ′egr′love', sentence ends with a word love

*: zero or more times

    r'[a]*' means a optional or it can occur many times.

+: one or more times

    r'[a]+' means at least once or more times

?: zero or one times

    r'[a]?' means zero times or once

\b: word bounder, matches with the beginning or ending of a word
{3}: Exactly 3 characters
{3,}: At least 3 characters
{3,8}: 3 to 8 characters

|: Either or 

    r'apple|banana' mean either of an apple or a banana

(): Capture and group

*/





console.log("\n\n")

const txt4 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

// replace   '%'  with  ''  nothing it is mean we just remove this symbol   '%'
// using (g) flag to search to the entire document and replace it in the entire document
matches = txt4.replace(/%/g, '')
console.log(matches)  
// I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more interesting than any other jobs.Does this motivate you to be a teacher.






console.log("\n")
console.log("======================== Square Bracket ========================")
console.log("\n")


// [value1 or value2 or ...] means ( if value1 not found then value2 if not .... )
const pattern6 = '[Aa]pple' // this square bracket means either A or a
const txt6 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '

// searching for   'Apple'   or   'apple'   in my document
const matches6 = txt6.match(pattern6)

console.log(matches6)  

/*

[
  'Apple',
  index: 0,
  input: 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ',
  groups: undefined
]

*/







console.log("\n\n")

const pattern7 = /[Aa]pple/g // this square bracket means either A or a
const txt7 = 'Apple and banana are fruits. An old cliche says an apple or APPLE a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '

// in this case the search will be in the entire document
// the result should be  'Apple' or 'apple'
// match search in the document for the give n (pattern with depended flag) 
const matches7 = txt7.match(pattern7)
// (match) keyword return the result with some basic info if it is one result but if it is more than one result it is just return the result value like array
console.log(matches7)  // [ 'Apple', 'apple' ]







console.log("\n\n") 

// (|) means or but use in the outside square bracket 
// apple|banana    means apple or banana
// [Aa]pple|[Bb]anana   means apple or Apple or banana or Banana
const pattern8 = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const txt8 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'

const matches8 = txt8.match(pattern8)
// if result more than one then (match) keyword return the result like array
// if result is one then the (match) return that result with basic information
console.log(matches8)   // [ 'Apple', 'banana', 'apple', 'banana', 'Banana' ]







console.log("\n")
console.log("======================== Escape character(\) in RegExp ========================")
console.log("\n")

// \d means digit
// g flag means search in the entire document
const pattern9 = /\d/g  // d is a special character which means digits(number)
const txt9 = 'This regular expression example was made in January 12,  2020.'
const matches9 = txt9. match(pattern9)

console.log(matches9)  // ["1", "2", "2", "0", "2", "0"], this is not what we want





console.log("\n")
console.log("======================== One or more times(+) ========================")
console.log("\n")

// (+) sign means one or more in this case 
// this (+) sign help us to group this number that wich other in the document means not have space between each other 
// if we have a number that is in different place with other group number then this group will be with other different from previous group
const pattern10 = /\d+/g  // d is a special character which means digits
const txt10 = 'This regular expression example was made in January 12,  2020.'
const matches10 = txt10. match(pattern10)

console.log(matches10)  // ["12", "2020"], this is not what we want



console.log("\n")
console.log("======================== Period(.) ========================")
console.log("\n")

// (.) means any character except new line
const pattern11 = /[a]./g  // this square bracket means a and after that dot (.) means any character except new line
// const pattern11 = /a./g  // you can do that also 
const txt11 = 'Apple and banana are fruits'
const matches11 = txt11.match(pattern11)

// in this document any word that we have there are letter (a) any thing after leter (a) that they return to us with a it self
console.log(matches11)  // ["an", "an", "an", "a ", "ar"]









console.log("\n\n")

// a means letter a
// . means any character except new line
// + means one or more in this case will back this word that have letter (a) inside,
// if we don't have any character after (a) we don't have any problem it accept this word because nothing it self is accept by dot (.) 
// this is means dot (.) any character also nothing 
const pattern12 = /[a].+/g  // dot (.) means any character, + any character one or more times 
// const pattern12 = /a.+/g  // you can do that also
const txt12 = 'Apple and banana are fruits lla'
const matches12 = txt12.match(pattern12)

console.log(matches12)  // ['and banana are fruits lla']







console.log("\n")
console.log("======================== Zero or more times(*) ========================")
console.log("\n")


// a means letter a
// . means any character except new line
// * means one or more in this case will back anything that come after regex   [a].   no matter we have after that
// const pattern13 = /[a].*/g  //. any character, + any character one or more times 
// if you don't use dot (.) then you don't get anything after letter (a), means you don't get any character after letter (a) you just get empty field when the array come back to you
const pattern13 = /a.*/g  // you can also do that
const txt13 = 'Apple and banana are fruits about world'
const matches13 = txt13.match(pattern13)

console.log(matches13)  // ['and banana are fruits about world']






// const pattern14 = /[a]*/g  //. any character, + any character one or more times 
// const txt14 = 'Apple and banana are fruits about world'
// const matches14 = txt14.match(pattern14)

// console.log(matches14) 


/*

[
  '', '',  '', '',  '', '',  'a', '',  '',  '',
  '', 'a', '', 'a', '', 'a', '',  'a', '',  '',
  '', '',  '', '',  '', '',  '',  '',  'a', '',
  '', '',  '', '',  '', '',  '',  '',  '',  ''
]

*/







console.log("\n")
console.log("======================== Zero or one times(?) ========================")
console.log("\n")


const txt14 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail we-mail wE-mail.'

// [Ee]  means (E or e)
// if (E or e) not come to the first of the word or first of the statement we don't have problem we just need (E or e) in the word or the statement 
// (?) means it is option if this letter that before this symbol  (?)  that we have is come or not in this case is this  (-)
const pattern14 = /[Ee]-?mail/g  // ? means optional ( zero or one ) means (come or not)
matches14 = txt14.match(pattern14)

console.log(matches14)  // ["e-mail", "email", "Email", "E-mail"]








console.log("\n")
console.log("======================== Quantifier in RegExp ========================")
console.log("\n")


const txt15 = 'This regular expression example was made in December 6,  2019.'
// \w menas word
// {n,m} means character should not be lower than (n) and not more than (m)
// {,m} means character should be not more than (m)
// {n,} means character should be not lower than (n)
// {n} means exactly (n) character
// \b word bounder, matches with the beginning or ending of a word, this is mean if we have word this word should have have this if not have not accept 
    // in this case we have this regex   \w{4}   and we have   \b   before and after   \w{4}  this is mean the word should be 4 character in the beganning and end the end then this word should be 4 character exactly 
    
// \g apply the condition regex in the entire document
// Note: word  can be (number or string)
const pattern15 = /\b\w{4}\b/g  //  exactly four character words
const matches15 = txt15.match(pattern15)
console.log(matches15)  //['This', 'made', '2019']







console.log("\n\n")

const txt16 = 'This regular expression example was made in December 6,  2019.'

// \b word bounder, matches with the beginning or ending of a word
// [a-zA-Z]  means character from (a to z small) and (A to Z capital)
// {4} exactly 4 character

// \g apply the condition regex in the entire document
const pattern16 = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
const matches16 = txt16.match(pattern16)
console.log(matches16)  //['This', 'made']







console.log("\n\n")
// without word boundery (\b)
const txt17 = 'This regular expression example was made in December 6,  2019. 20889'

// \d means just digit
// {4} means exactly 4 character

// \g apply the condition regex in the entire document
const pattern17 = /\d{4}/g  // a number and exactly four digits
const matches17 = txt17.match(pattern17)
console.log(matches17)  // ['2019', '20889']






// with word boundery in the end
console.log("\n\n")

const txt18 = 'This regular expression example was made in December 6,  2019. 20889'

// \d means just digit
// {4} means exactly 4 character

// \g apply the condition regex in the entire document
const pattern18 = /\d{4}\b/g  // a number and exactly four digits
const matches18 = txt18.match(pattern18)
console.log(matches18)  // ['2019', '0889']







// with word boundery in the start
console.log("\n\n")

const txt19 = 'This regular expression example was made in December 6,  2019. 20889'

// \d means just digit
// {4} means exactly 4 character

// \g apply the condition regex in the entire document
const pattern19 = /\b\d{4}/g  // a number and exactly four digits
const matches19 = txt19.match(pattern19)
console.log(matches19)  // ['2019', '2088']





// with word boundery in the start and end
console.log("\n\n")

const txt20 = 'This regular expression example was made in December 6,  2019. 20889'

// \d means just digit
// {4} means exactly 4 character

// \g apply the condition regex in the entire document
const pattern20 = /\b\d{4}\b/g  // a number and exactly four digits
const matches20 = txt20.match(pattern20)
console.log(matches20)  // ['2019']




console.log("\n\n")

const txt21 = 'This regular expression example was made in December 6,  2019.'

// \d means just digit
// {1, 4} (not less than 1) and (no more than 4)

// \g apply the condition regex in the entire document
const pattern21 = /\d{1,4}/g   // 1 to 4
const matches21 = txt21.match(pattern21)
console.log(matches21)  // ['6', '2019']







console.log("\n")
console.log("======================== Cart ^ ========================")
console.log("\n")


// Starts with

const txt22 = 'This regular expression example was made in December 6,  2019.'

// ^ means in the start of the statement or the word we should have this
const pattern22 = /^This/ // ^ means starts with
const matches22 = txt22.match(pattern22)

console.log(matches22) 
/*

[
  'This',
  index: 0,
  input: 'This regular expression example was made in December 6,  2019.',
  groups: undefined
]

*/





console.log("\n\n")

const txt23 = 'my regular This expression example was made in December 6,  2019.'

// ^ means in the start of the (statement or word) we should have this, in this case is start of any word or statement
const pattern23 = /^This/ // ^ means starts with
const matches23 = txt23.match(pattern23)

console.log(matches23) // null







// Negation
console.log("\n\n")

const txt24 = 'This regular expression example was made in December 6,  2019.'

// ^ inside this bracket [] means Negation means the start of the (statement or word) we should not have this in this case is start of any (word and statement)
// [A-Za-z,.] means not (A to Z capital) and not (a to z) small and not comma (,) and not dot (.) means we just need (digit) and other symbol except (comma and dot)
// + means one or more, this is help us to group this digit that it found that don't have space between each other or in different place in the statement

// \g apply the condition regex in the entire document
const pattern24 = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches24 = txt24.match(pattern24)
console.log(matches24)  // ["6", "2019"]





console.log("\n")
console.log("======================== Exact match ========================")
console.log("\n")


// string
let name = 'Asabeneh';
let name1 = 'AaAeneh';
let name2 = 'aaaseneh';
let name3 = 'AAaaa';
let name4 = 'Asaaaaaa';
let name5 = 'AAAAAAAAAAA';
// Exact match
// It should have ^ starting and $ which is an end.

// ^ means in the start of the (word or statement)
// [A-Z] means from (A to Z capital) character
// [a-z] means from (a to z small) character
// {3, 12} means (not less than 3) and (not more than 12) 
// $ means in the end of the (statement or word)
// [A-Z][a-z] means the first character of the word should be capital and second and third and .. character of that word should be small

// this smicolon is not flag it is optional if you type in end of the statement java script or not
let pattern = /^[A-Z][a-z]{3,12}$/;
let result = pattern.test(name) // true
// let result = pattern.test(name1) // false // because the rest of the value should be small after first value of capital
// let result = pattern.test(name2) // false // because first character is not capital
// let result = pattern.test(name3) // false // because first and second character is capital
// let result = pattern.test(name4) // true
// let result = pattern.test(name5) // false // because chracter is capital

console.log(result) // true



