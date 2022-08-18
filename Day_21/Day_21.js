console.log("\n")
console.log("======================== Getting Element ========================")
console.log("\n")

// run all this example in browser in html file
// also use this code with this example that you want run it java script code

/*

<!DOCTYPE html>
  <html lang="en">
    <head>
      <!-- title of the tab -->
      <title>Document Object Model</title>
    </head>
    <!-- conde should be inside the body it can be inside the head also but this is much cleaner and standard if we use body -->
    <body>

      <!-- my class name is title -->
      <!-- my id name is first-title for first line for second line is id is ... -->
     <h1 class='title' id='first-title'>First Title</h1>
     <h1 class='title' id='second-title'>Second Title</h1>
     <h1 class='title' id='third-title'>Third Title</h1>
     <script>
      // java script code goes here

     </script>
     <h1></h1>

    </body>
  </html>

*/









// getElementsByTagName()

/*

// Syntax
document.getElementsByTagName('tagname')

*/

const allTitles = document.getElementsByTagName('h1')

console.log(allTitles)

/*

// Output

|> HTMLCollection { 0: h1#first-title.title, 1: h1#second-title.title, 2: h1#third-title.title, 3: h1
, length: 4, … }
​
    |> 0: <h1 id="first-title" class="title">​
    |> 1: <h1 id="second-title" class="title">​
    |> 2: <h1 id="third-title" class="title">​
    |> 3: <h1>​
    "first-title": <h1 id="first-title" class="title">
    ​
    length: 4
​
    |> "second-title": <h1 id="second-title" class="title">​
    |> "third-title": <h1 id="third-title" class="title">

*/




const allTitles2 = document.getElementsByTagName('h1')

console.log(allTitles2) //HTMLCollections

/*

// Output

|> HTMLCollection { 0: h1#first-title.title, 1: h1#second-title.title, 2: h1#third-title.title, 3: h1
, length: 4, … }
​
    |> 0: <h1 id="first-title" class="title">​
    |> 1: <h1 id="second-title" class="title">​
    |> 2: <h1 id="third-title" class="title">​
    |> 3: <h1>​
    "first-title": <h1 id="first-title" class="title">
    ​
    length: 4
​
    |> "second-title": <h1 id="second-title" class="title">​
    |> "third-title": <h1 id="third-title" class="title">

*/


// get length of the all this element that use tag ('h1')
console.log(allTitles2.length) // 4




// loop throw all this alement that use tag ('h1')
for (let i = 0; i < allTitles2.length; i++) {
  // get each element base on this index number that it take for this element in the array 
  console.log(allTitles2[i]) // prints each elements in the HTMLCollection
}

/*

// Output

> HTMLCollection(4) [h1#first-title.title, h1#second-title.title, h1#third-title.title, h1, first-title: h1#first-title.title, second-title: h1#second-title.title, third-title: h1#third-title.title]

4

<h1 class="title" id="first-title">First Title</h1>

<h1 class="title" id="second-title">Second Title</h1>

<h1 class="title" id="third-title">Third Title</h1>

<h1></h1>

*/









// getElementsByClassName() 

/*

// Syntax
document.getElementsByClassName('classname')

*/

const allTitles1 = document.getElementsByClassName('title')



console.log(allTitles1) //HTMLCollections

/*

|> HTMLCollection { 0: h1#first-title.title, 1: h1#second-title.title, 2: h1#third-title.title
, length: 3, … }
​
    |> 0: <h1 id="first-title" class="title">​
    |> 1: <h1 id="second-title" class="title">​
    |> 2: <h1 id="third-title" class="title">​
    "first-title": <h1 id="first-title" class="title">
    ​
    length: 3
    ​
    |> "second-title": <h1 id="second-title" class="title">​
    |> "third-title": <h1 id="third-title" class="title">

*/





// get length of the all this element that use class ('title')
console.log(allTitles1.length) // 4





// loop throw all this alement that use class ('title')
for (let i = 0; i < allTitles1.length; i++) {
    // get each element base on this index number that it take for this element in the array 
  console.log(allTitles1[i]) // prints each elements in the HTMLCollection
}

/*

// Output

> HTMLCollection(3) [h1#first-title.title, h1#second-title.title, h1#third-title.title, first-title: h1#first-title.title, second-title: h1#second-title.title, third-title: h1#third-title.title]

3

<h1 class="title" id="first-title">First Title</h1>

<h1 class="title" id="second-title">Second Title</h1>

<h1 class="title" id="third-title">Third Title</h1>

<h1></h1>

*/








// getElementsById()

/*

// Syntax
document.getElementById('id')

*/

let firstTitle = document.getElementById('first-title')
console.log(firstTitle)  // <h1 class="title" id="first-title">First Title</h1>






/*

// querySelector
// Syntax

document.querySelector(tag_name)
document.querySelector(.class-name)
document.querySelector(#id_name)

*/

let firstTitle1 = document.querySelector('h1') // select the first available h1 element, you don't need    #    or dot    .    in front of this name if the name is name of the tag
console.log(firstTitle1) // <h1 class="title" id="first-title">First Title</h1>


let firstTitle2 = document.querySelector('#first-title') // select id with first-title, id can be define using   #    in front of the name of the id if you are want call it using querySelector
console.log(firstTitle2) // <h1 class="title" id="first-title">First Title</h1>


let firstTitle3 = document.querySelector('.title') // select the first available element with class title, class can be define using   .   in front of the class name if you are want call it using querySelector
console.log(firstTitle3) // <h1 class="title" id="first-title">First Title</h1> 







// I use firefox console for other example 

/*

// querySelectorAll
// Syntax

document.querySelectorAll(tag_name)
document.querySelectorAll(.class-name)
document.querySelectorAll(#id_name)

*/


const allTitles3 = document.querySelectorAll('h1') // selects all the available h1 elements in the page




console.log(allTitles3)

/*

|> NodeList(4) [ h1#first-title.title, h1#second-title.title, h1#third-title.title, h1 ]

    |> 0: <h1 id="first-title" class="title">​
    |> 1: <h1 id="second-title" class="title">​
    |> 2: <h1 id="third-title" class="title">​
    |> 3: <h1>
    ​
    length: 4

*/





for (let i = 0; i < allTitles3.length; i++) {
  // call each value of this element that we get from (querySelectorAll) base on this number that we get from this cicle that for loop cicle throw on the elements of (querySelectorAll)
  console.log(allTitles3[i])
}

/*

|> <h1 id="first-title" class="title">

|> <h1 id="second-title" class="title">

|> <h1 id="third-title" class="title">

|> <h1>

*/





// get back length of this element that get back from (querySelectorAll)
console.log(allTitles3.length) // 4





// using (forEach) instaid of standard (for each) to loop throw all element that we get from (querySelectorAll)
allTitles3.forEach(title => console.log(title))

/*

|> <h1 id="first-title" class="title">

|> <h1 id="second-title" class="title">

|> <h1 id="third-title" class="title">

|> <h1>

*/





// all this element that use this class using dot  .  for specify the class name
const allTitles4 = document.querySelectorAll('.title') // the same goes for selecting using class

/*

|> NodeList(3) [ h1#first-title.title, h1#second-title.title, h1#third-title.title ]
​
    |> 0: <h1 id="first-title" class="title">​
    |> 1: <h1 id="second-title" class="title">​
    |> 2: <h1 id="third-title" class="title">
    ​
    length: 3

*/






// all this element that use this id using dot  #  for specify the id name
const allTitles5 = document.querySelectorAll('#first-title') // the same goes for selecting using class

/*

|> NodeList [ h1#first-title.title ]
​
    |> 0: <h1 id="first-title" class="title">
    ​
    length: 1

*/






/*

// Note

const allTags = document.getElementByTagName('h1') // selects all the available h1 elements in the page

console.log(allTags)

// (getElementByTagName) return the result will some other output that is the same as output but with specify the id for this element
// Output:


|> HTMLCollection { 0: h1#first-title.title, 1: h1#second-title.title, 2: h1#third-title.title, 3: h1
, length: 4, … }
​
    |> 0: <h1 id="first-title" class="title">​
    |> 1: <h1 id="second-title" class="title">​
    |> 2: <h1 id="third-title" class="title">​
    |> 3: <h1>​
    "first-title": <h1 id="first-title" class="title">
    ​
    length: 4
​
    |> "second-title": <h1 id="second-title" class="title">​
    |> "third-title": <h1 id="third-title" class="title">







const allTags = document.querySelectorAll('h1') // selects all the available h1 elements in the page

console.log(allTags)

// (querySelectorAll) return the result much more cleaner
// Output:

|> NodeList(4) [ h1#first-title.title, h1#second-title.title, h1#third-title.title, h1 ]
​
    |> 0: <h1 id="first-title" class="title">​
    |> 1: <h1 id="second-title" class="title">​
    |> 2: <h1 id="third-title" class="title">​
    |> 3: <h1>
​
    length: 4

*/





console.log("\n")
console.log("======================== Adding attribute ========================")
console.log("\n")


/*

// Syntax

array_name[index].className = 'class name'
array_name[index].id = 'id name'

*/
const titles = document.querySelectorAll('h1')
// add class to index 3 using keyword (className)
titles[3].className = 'title'
// add id to index 3 using keyword (className)
titles[3].id = 'fourth-title'

/*

|> NodeList(4) [ h1#first-title.title, h1#second-title.title, h1#third-title.title, h1#fourth-title.titl

// this (class) with this (id) will taked   <h1>   to it by default
console.log(title) ]
​
    |> 0: <h1 id="first-title" class="title">​
    |> 1: <h1 id="second-title" class="title">​
    |> 2: <h1 id="third-title" class="title">​
    |> 3: <h1 id="fourth-title" class="title">
    
    length: 4

*/








// Adding attribute using setAttribute
// setAttribute()

/*

// Syntax

array_name[index].setAttribute('class  or  id')

*/
const titles = document.querySelectorAll('h1')
// add the class using (setAttribute) keyword by taking the (class key name) for the (class name)
titles[3].setAttribute('class', 'title')
// add the id using (setAttribute) keyword by taking the (id key name) for the (id name)
titles[3].setAttribute('id', 'fourth-title')

/*

|> NodeList(4) [ h1#first-title.title, h1#second-title.title, h1#third-title.title, h1#fourth-title.title ]
​
    |> 0: <h1 id="first-title" class="title">​
    |> 1: <h1 id="second-title" class="title">​
    |> 2: <h1 id="third-title" class="title">​
    |> 3: <h1 id="fourth-title" class="title">
    ​
    length: 4

*/









/*

// Syntax

array_name[index].className = 'class name'
array_name[index].id = 'class name'

*/

// add class using (className) keyword, to this (index) number that you want in your array
titles[3].className = 'title'
// add id using (className) keyword, to this (index) number that you want in your array
titles[3].id = 'fourth-title'










/*

// Syntax

array_name[index].classList.add('class name', 'class name', 'class name', ....)

// we are using (add) keyword also with classList because we are add more than on value in the list of keyword (classList) this keyword should be use with (classList) keyword
*/

// Adding class using classList, this is common if you want use more than on class name in one class
titles[3].classList.add('title', 'header-title')


/*

|> NodeList(4) [ h1#first-title.title, h1#second-title.title, h1#third-title.title, h1.title.header-title ]
​
    |> 0: <h1 id="first-title" class="title">​
    |> 1: <h1 id="second-title" class="title">​
    |> 2: <h1 id="third-title" class="title">​
    |> 3: <h1 class="title header-title">
    ​
    length: 4

*/


// or you can just use (className) keyword but using space between your class
titles[3].className = 'title header-title'

/*

|> NodeList(4) [ h1#first-title.title, h1#second-title.title, h1#third-title.title, h1.title.header-title ]
​
    |> 0: <h1 id="first-title" class="title">​
    |> 1: <h1 id="second-title" class="title">​
    |> 2: <h1 id="third-title" class="title">​
    |> 3: <h1 class="title header-title">
    ​
    length: 4

*/









// Removing class using (remove) keyword with (classList) keyword

/*

// Syntax

array_name[index].classList.remove('class name', 'class name', 'class name', ....)

*/
titles[3].classList.add('title', 'child-classs', 'header-title')
titles[3].classList.remove('title', 'header-title')

// the element will be still in there but without this class that we removed
console.log(titles)

/*

|> NodeList(4) [ h1#first-title.title, h1#second-title.title, h1#third-title.title, h1.child-classs ]
​
    |> 0: <h1 id="first-title" class="title">​
    |> 1: <h1 id="second-title" class="title">​
    |> 2: <h1 id="third-title" class="title">​
    |> 3: <h1 class="child-classs">
    ​
    length: 4

*/



// Removing class using (remove) keyword with (classList) keyword
titles[3].classList.add('title', 'header-title')
titles[3].classList.remove('title', 'header-title')

// the element will be still in there but without class name
console.log(titles)

/*

|> NodeList(4) [ h1#first-title.title, h1#second-title.title, h1#third-title.title, h1.child-classs ]
​
    |> 0: <h1 id="first-title" class="title">​
    |> 1: <h1 id="second-title" class="title">​
    |> 2: <h1 id="third-title" class="title">​
    |> 3: <h1 class="">
    ​
    length: 4

*/






console.log("\n")
console.log("======================== Adding Text to HTML element ========================")
console.log("\n")

/*

// Syntax

array_name[index].textContent = 'text...'

*/


// featching all this element that have tag   <h1>    using keyword(querySelectorAll)
const titles = document.querySelectorAll('h1')
// adding this text to the specific index using keyword (textContent)
titles[3].textContent = 'Fourth Title'



// Adding Text Content using innerHTML


/*

// innerHTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul></ul>
    </div>
    <script>

      // Syntax
      
      // const variable_name1 = 'content....'
      // const variable_name2 = document.querySelector(' tag  or  .class  or  #id ')
      // // innerHTML add the string or content to the inside of the HTML tag or ...
      // variable_name2.innerHTML = variable_name1

      const lists = `
      <li>30DaysOfPython Challenge Done</li>
              <li>30DaysOfJavaScript Challenge Ongoing</li>
              <li>30DaysOfReact Challenge Coming</li>
              <li>30DaysOfFullStack Challenge Coming</li>
              <li>30DaysOfDataAnalysis Challenge Coming</li>
              <li>30DaysOfReactNative Challenge Coming</li>
              <li>30DaysOfMachineLearning Challenge Coming</li>`
    // featchig all this element that content   <ul>   tag
    const ul = document.querySelector('ul')
    // override all this value that inside (list) to the all this tag that contain (ul)
    ul.innerHTML = lists
      </script>
  </body>
</html>






<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul>
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>
        </ul>
    </div>
    <script>
  // featchig all this element that content   <ul>   tag
  const ul = document.querySelector('ul')
  // override all this value of (ul) tag to this value that inside this quotes   ''
  ul.innerHTML = ''
    </script>
  </body>
</html>

*/








console.log("\n")
console.log("======================== Adding style ========================")
console.log("\n")

// Adding Style Color

/*

// styling size of the pexel
parameter.style.fontSize = 'number of pexel'

// styling size of the color of the text
parameter.style.color = 'color name'

// styling size of the background color
parameter.style.backgroundColor = 'color name'

*/


const titles = document.querySelectorAll('h1')
// get all element of tag  <h1>  one by one from (title) array using (forEach)
// (forEach) put all this value to the ( title   and   i ) parameter
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all value of (titles) array will have 24px font size
  // first value of (i) is (0) then 0 % 2 = 0  then  0 === 0 true
  // second value of (i) is (1) then 1 % 2 = 1  then  1 === 0 false
  // ...

  // this is how the (i) get value form (forEach) each time, it is mean all this value that (i) get from (forEach) is not get it in one time instaid it is get one by one, this is how the (forEach) is work to put value from array to the parameter step by step  
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})








// Adding Style Background Color

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = 'green'
  } else {
    title.style.backgroundColor = 'red'
  }
})








// Adding Style Font Size

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.fontSize = '20px'
  } else {
    title.style.fontSize = '30px'
  }
})





