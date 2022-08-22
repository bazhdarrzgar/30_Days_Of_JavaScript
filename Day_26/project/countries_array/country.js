// featching first result of this element that class name is   (container_first)
const containerFirst = document.querySelector('.container_first')

// featching all this value that we put to the variable   (wordCountries)
const countriesList = [...worldCountries]

// ======== Generating default divs ========

// function that create some   <div>   and   <p>   tag also some class and id for this   <div>   tag base on the number of loop that for loop done throw all the country that we have in the   country_list.js   file
function generateDivs(worldCountries) {

    // override anything in the class   (container_first)   to this message below   ''   means empty message 
    containerFirst.innerHTML = ''
    // for loop that cicle throw this container that it have the number of cicle is base on how much country that   (worldCountries)   varible is containe or have
    for (let i = 0; i < worldCountries.length; i++) {
        // create element of   <div>   tag
        const div = document.createElement('div')
        // create element of   <p>   tag
        const p = document.createElement('p')
        // put all the data of   (worldCountries)   to the content of   <p>   tag means just the text base on this number that  (i)  variable put on   (worldCountries)    array that act like index number
        p.textContent = worldCountries[i]
        // creating class for this   <div>   tag that we have
        div.setAttribute('class', 'container_first_item')
        // creating id for this   <div>   tag that we have, the number of id is specified by   (i)   variable
        div.setAttribute('id', 'container_first_content--' + i)
        // <p>   tag is child for the   <div>   tag
        div.appendChild(p)
        // <div>   tag is child for class   (container_first) 
        containerFirst.appendChild(div)
    }
}
// calling functionn   (generateDivs)   and the value is send by variable (worldCountries)
generateDivs(worldCountries)


// ================ Printing the Number of countries ================
// featching first result of this element that class name is   (counlent)
const counlent = document.querySelector('.counlent')
// put this message to    (textContent)   class    (counlent)
counlent.textContent = `Total number of countries ${worldCountries.length}`
// taking fontSize style for class   (counlent)
counlent.style.fontSize = '3.7rem'










// function that search this input that user put on serach bar, this will featch all this data that we have in file   countries_list.js   and this also this word that containe this letter that user put on the serach bar 
const startWithletter = () => {
    // override anything in the class   (container_first)   to this message below   ''   means empty message 
    containerFirst.innerHTML = ''
    // featching first result that we get from class   (input_field)   but just the value of this element 
    let letters = document.querySelector('.input_field').value
    // function that filter throw of this data that we have in variable   (worldCountries)

    // putting all the data that we have in variable    (worldCountries)   to the parameter   (countries)   
    // changing all the data that we have to the lower case
    // also compare this data that we change to lower case    with    this value that we get from function   (startWith)   that work base on this letter that get from input user and change this input to lower case means change this letter to lower case and operation filter is come to us, this is all done using dot (.)
    const filteredCountry = worldCountries.filter(countries => countries.toLowerCase().startsWith(letters.toLowerCase()))
    // calling function    (generateDivs)    also send this data that we get from variable   (filteredCountry)
    generateDivs(filteredCountry)

    // ============= printing the length of the countries =============

    // featching first element result, that class name is   (firstLetter) 
    const firstLetter = document.querySelector('.firstLetter')
    // featching first element result, that class name is   (length) 
    const length = document.querySelector('.length')
    // featching first element result, that class name is   (start) 
    const start = document.querySelector('.start')
    // taking color to font using style for my class  (firstLetter)
    firstLetter.style.color = 'red'
    // taking weight to font using style for my class  (firstLetter)
    firstLetter.style.fontWeight = 'bold'
    // taking size to font using style for my class  (firstLetter)
    firstLetter.style.fontSize = '30px'
    // taking color to font using style for my class  (length)
    length.style.color = 'blue'
    // taking weight to font using style for my class  (length)
    length.style.fontWeight = 'bold'
    // taking size to font using style for my class  (length)
    length.style.fontSize = '3.7rem'
    // taking this message to text content inside my class   (start)
    start.textContent = 'Countries Starting with'
    // taking this message to text content inside my class   (firstLetter)   the message will be this letter that user is typing in the serch bar 
    firstLetter.textContent = `${letters}`
    // taking this message to text content inside my class   (length)   the message will be the length of this result that we get from variable   (filteredCountry)   i use this for number of this result that we get from this input that put on search bar
    length.textContent = `${filteredCountry.length}`

    // in the end we return value of   (filteredCountry)   in this function
    return filteredCountry
}

// calling this function above
startWithletter()











// ========= Listener for startwith ===============
let flag
// we use this function to search with this letter that user put on the serach bar but for the first letter of this character that my data have
// and also if click to this button and the result is not match with this expression that we talk about in the function then return invalid input

// button   STARTING WORD
function callToStart() {
    // featching all this element that use this class   (btn_btin--startWith)
    let startnwith = document.querySelector('.btn_btn--startwith')
    // add event listener for this button that we use for search with this word that have this character in the first of there data, the event will be click
    startnwith.addEventListener('click', function() {
        flag = 1
        // featching all this element that use class   (input_field)   but just value of this element this is for data of search bar to use for my search
        let m = document.querySelector('.input_field').value
        // expression that we use for limitation of this character and symbol that user want to type on the search bar
        let char = /^[a-zA-Z]+$/;
        // if my string input from search bar is match the expression then 
        if (String(m).search(char)) {
            // override this message to text content of class   (container_first)
            containerFirst.textContent = 'Please Enter a valid Input';
            // in the end return true
            return true;
        } 
        // else return false
        else {
            false
        }
        // calling function    (startWithLetter)   by putting this value of serach bar that user put on 
        startWithletter(m)
    })
}
// call the function   (callToStart)
callToStart()









//========= search with any letter ===============
// function that search this input that user put on serach bar, this will featch all this data that we have in file   countries_list.js   and this also this word that containe this letter that user put on the serach bar 
const countriesInclude = () => {
    
    // put empty message to the class   (container_first)
    containerFirst.innerHTML = ''
        
    // featching first element result that containe class    (input_field)   but just the value of this element
    letters = document.querySelector('.input_field').value
    // also filtering of this letter that user put on the search bar by changing all the data that we have from file   country_list.js   to lower case and change this letter that user put on the search bar to lower case, but index of this letter that user type on this search bar it should be greater than -1 means unless it should type one character
    const filteredCountry = worldCountries.filter(countries => countries.toLowerCase().indexOf(letters.toLowerCase()) > -1)
    // calling function   (generateDivs) 
    generateDivs(filteredCountry) //===================calling the default function

    // ============= printing the length of the countries =============
    // featching first result of the element that have class   (firstLetter)
    const firstLetter = document.querySelector('.firstLetter')
    // featching first result of the element that have class   (length)
    const length = document.querySelector('.length')
    // featching first result of the element that have id   (include)
    const include = document.querySelector('#include')
    // taking color for the font using style for the class   (firstLetter)
    firstLetter.style.color = 'red'
    // taking weight for the font using style for the class   (firstLetter)
    firstLetter.style.fontWeight = 'bold'
    // taking size for the font using style for the class   (firstLetter)
    firstLetter.style.fontSize = '30px'
    // taking color for the font using style for the class   (length)
    length.style.color = 'blue'
    // taking weight for the font using style for the class   (length)
    length.style.fontWeight = 'bold'
    // taking size for the font using style for the class   (length)
    length.style.fontSize = '30px'
    // taking this message to the class   (firstLetter)  the message containe this letter that they type on the search bar
    firstLetter.textContent = `${letters}`
    // taking this message to the id   (include)   
    include.textContent = 'Countries That Include'
    // taking this message to the class   (length)   the message containe the number of this result that user want from there input 
    length.textContent = `${filteredCountry.length}`

    // return value of   (filteredCountry)
    return filteredCountry
}
// call the function   (countriesInclude)
countriesInclude()









// ========= Listener for include ===============
// function that will search for exactly word means country that match your input exactly

// button   SEARCH WITH ANY WORD
function callToInclude() {
    // featching first result of element that have class   (btn_btn--include)
    let includeAny = document.querySelector('.btn_btn--include')
    // add event listener for my button   (includeAny)
    // the event will be   (click)
    includeAny.addEventListener('click', function() {
        flag = 2
        // featching first result of element that have class   (input_field)   but just value of this class
        let m = document.querySelector('.input_field').value
        // my pattern or regular expression
        let char = /^[a-zA-Z]+$/;
        // if my input   (m)   is match the my regular expression  (char)  then        
        if (String(m).search(char)) {
            // put this message to class   (container_first)
            containerFirst.textContent = 'Please Enter a valid input';
            return true;
        } 
        // The isNaN() function determines whether a value is number or not.
        else if (isNaN(m)) {
            // put this message to class   (container_first)
            containerFirst.textContent = 'Enter number greater than 5!';
        } 
        // else return the false for my function callToInclude
        else {
            false
        }
        // calling function   (countriesInclude)   with 
        countriesInclude(m)
    })
}

// calling function   (callToInlcude)
callToInclude()







// =========== sorting the function in reverse =====================

// featching first result of this element that have class   (btn_btn--sort)
const sort = document.querySelector('.btn_btn--sort')
// add event listener for my button  (sort)
// the event will be   (click)
sort.addEventListener('click', function() {
    // reverse order of this data that we have in variable   (wordlCountries)
    worldCountries.reverse()
    // if my flag is 1 from function   (callToStart)  then
    if (flag === 1) {
        // reverse order of this data that we have in function   (startWithletter)
        startWithletter().reverse()
    } 
    // else then
    else {
        // reverse order of this data that we have in function   (countriesInclude)
        countriesInclude().reverse()
    }
})







// =========== Listener for keydown ===============================

// featching first result of this element that have class   (input_field)
let input = document.querySelector('.input_field')
// add event listener for my button   (input)
// the event will be   (keyup)
input.addEventListener("keyup", function() {
    // calling both this function when user press the keyboard
    startWithletter()
    countriesInclude()
});

// featching first result of this element that have class   (input_field)
// also when they click the keyword in first click this function will happen 
/// this function will return both of matching result of both of this button
document.querySelector('.input_field').onkeydown = function(event) {
    // when we click to the enter
    if (event.keyCode == 13) {
        // featching first result of element of this two button when click is happen from mouse for both of this button then
        // the matching result for the specific button will be return
        document.querySelector('.btn_btn--startwith').click()
        document.querySelector('.btn_btn--include').click()
    }
};








// ================================== Toggle buttons ==================================

let descending = 'a'
// function for manage the image of sort
function toggleSort() {
    // featching first result of element class   (button_img--size) 
    let image = document.querySelector('.button_img--size');
    // if result is from    a to z   then 
    if (descending == 'a') {
        // the image is chage to this usng   (src)   keyword
        image.src = './image/za.png'
        // after that the button is ready to be order from   z to a
        descending = 'z'
    } 
    // if the result is not from a to z then this is happen
    else {
        image.src = './image/az.png'
        // after that the button is ready to be order from   a to z
        descending = 'a'
    }
}

// calling function   (toggleSort)
toggleSort()

// featching first element of class   (btn_btn--sort)
let btndown = document.querySelector('.btn_btn--sort')
// take event listener for this   (btndown)  variable by this function that we create to reverse ordering the data
btndown.addEventListener('click', toggleSort)






/* CSS styles */

// ==================================== Transition ====================================
// we don't use this function in this file we are calling this in html file

// function to take style to this parameter
function focusFunction(trans) {
    // animation style
    trans.style.transition = "all 7s"; // Standard syntax
}







// === Adding active class to the current button =====

// featching first element that have class   (button)
let btnContainer = document.querySelector('.button');
// featching first element that have id   (btn)
let btns = btnContainer.querySelectorAll('#btn');

// for loop all this result that we get from both of button  (STARTING WORD) and (SEARCH WITH ANY WORD)  and also the button reverse ordering 
// base on number of this result we loop throw this content that we have inside this for loop
// this for loop basicly 
for (let i = 0; i < btns.length; i++) {
    // put event lestener for this three of button that we have   (reverse ordering) and (STARTING WORD) and (SEARCH WITH ANY WORD)
    // the event will be   (click)
    btns[i].addEventListener('click', function() {
        // get all this element that have class name of   (active)
        let current = document.getElementsByClassName('active');
        // if my length of this class   (active)   is greater than  0  then 
        if (current.length > 0) {
            // calling value of index 0 class  (active)  and equal to this content
            // the content will be calling value of index 0 of class   (active)   and replace it by nothing means class   (active)   will be empty class for this index
            current[0].className = current[0].className.replace(' active', '');
        }
        // if not then calculate the active class value in this case to know how much of this class we have
        this.className += ' active';
    });
}
