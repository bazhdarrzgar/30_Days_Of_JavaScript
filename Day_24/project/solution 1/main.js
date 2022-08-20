// calling all this element that have tag name of (options) using   document.getElementById("tag name   or  .class name   or   id name")
const option = document.getElementById("options");
// calling first result of this element that have class name of (flex) using   document.getElementById("tag name   or  .class name   or   id name")
const flex = document.querySelector(".flex");
// calling first result of this element that have class name of (planet) using   document.getElementById("tag name   or  .class name   or   id name")
const image = document.querySelector(".planet");
// calling first result of this element that have class name of (description) using   document.getElementById("tag name   or  .class name   or   id name")
const description = document.querySelector(".description");
// calling first result of this element that have tag name of (input) using   document.getElementById("tag name   or  .class name   or   id name")
const input = document.querySelector("input");
// create element using   document.createElement("tag name   or  .class name   or   id name")
let circle = document.createElement("div");
// calling this content that inside the   (div)   tag using (appendChild) keyword also use class description
description.appendChild(circle);
// calling first result of this element that have tag name of (p) using   document.getElementById("tag name   or  .class name   or   id name")
let p = document.querySelector("p");


function planet() {
  // put this content for my   <p>   tag
  // depending of this option that user choose, for each of this option that we take we put this text that it want for requist field to my   <p>   tag, and choosing option is base on index number each option has own index number, we call this value of requist field for the   <p>  tag base on this index that order the option
  // for choosing option we use   (option)   keyword ->   option.option 
  // for puting text of this option we use   (text)   keyword ->    option.optoin.text
  // also for selection method means for calling requist option we are using    (selectedIndex)   for ordering this option base on index number 
  
  // in the end we have     option.option[option.SelectIndex].text
  
  // this (option) that color is white is just variable handler for tag   <p>  content and this option that color is red this is keyword (option)
  p.textContent = `The weight of the object on ${
    option.options[option.selectedIndex].text
  } is`;
  // taking height style for my class ( planet )
  image.style.height = "18rem";
  // taking width style for my class ( planet )
  image.style.width = "20rem";
  // taking margin to the right using style for my class ( planet )
  image.style.marginRight = "5rem";
  // taking margin to the top using style this is for this child that inside my tag   <div>   in class description
  description.style.marginTop = "5rem";
  // taking padding to the top using style this is for this child that inside my tag   <div>   in class description
  description.style.paddingTop = "1rem";
  // taking height style this is for this child that inside my tag   <div>   in class description
  description.style.height = "10rem";
  // taking color to the background using style for my tag   <div>  
  circle.style.backgroundColor = "rgba(81, 81, 80, 0.7)";
  // taking border radius using style for my tag   <div> 
  circle.style.borderRadius = "50%";
  // // taking auto width using style for my tag   <div> 
  //   circle.style.width = "auto";
  circle.style.maxWidth = "15rem";
  // taking height style for my tag    <div> 
  circle.style.height = "2rem";
  // taking padding style for my tag    <div> 
  circle.style.padding = "2rem 1rem";
  // taking margin style for my tag    <div> 
  circle.style.margin = "1rem auto";
  // taking weight to my font using style for my tag   <div> 
  circle.style.fontWeight = "bold";
  // taking size to my font using style for my tag   <div>  
  circle.style.fontSize = "2rem";
  // taking align to my text using style for my tag   <div>  
  circle.style.textAlign = "center";

}




function answer() {
  // taking display felx for my class   flex   using style
  flex.style.display = "flex";
  // taking Content justify for my class   flex   using style
  flex.style.justifyContent = "spaceBetween";
  // taking color to the background for this child that inside tag   <div>   in class description using style
  description.style.backgroundColor = "rgba(81, 81, 80, 0.6)";
  // taking width for this child that inside tag   <div>   in class description  using style
  description.style.width = "25rem";
  // taking height for this child that inside tag   <div>   in class description  using style
  description.style.height = "3rem";
  // taking align to my text for this child that inside tag   <div>   in class description  using style
  description.style.textAlign = "center";
  
  
  // we can call any value outside function using (value) keyword 

  // check for empty field for this input that we are using for field mass
  // if we don't put any value to the text field for entering number of mass, means we left the field empty then 
  if (input.value === "") {
    // taking this text to the content of this child that is inside my tag   <div>   for class (description) using style 
    description.textContent = "Mass is required";
    // taking margin for this child that is inside my tag   <div>   for class (description) using style 
    description.style.margin = "2rem auto";
    // taking padding for this child that is inside my tag   <div>   for class (description) using style 
    description.style.padding = "1rem";
    // taking height for this child that is inside my tag   <div>   for class (description) using style 
    description.style.height = "1rem";
    // taking size to the font for this child that is inside my tag   <div>   for class (description) using style 
    description.style.fontSize = "1.2rem";

    // featching all this element that use class (planet) and put the source of this element empty picture using (src) keyword
    document.querySelector(".planet").src = "";
  } 
  // if not then check if you choose empty option
  else if (option.value === "none") {
    // taking this text to the content of this child that is inside my tag   <div>   for class (description) using style 
    description.textContent = "You did not choose a planet yet";
    // taking this margin to the content of this child that is inside my tag   <div>   for class (description) using style 
    description.style.margin = "2rem auto";
    // taking this padding to the content of this child that is inside my tag   <div>   for class (description) using style 
    description.style.padding = "1rem";
    // taking this height to the content of this child that is inside my tag   <div>   for class (description) using style 
    description.style.height = "auto";
    // taking this size to the font to the content of this child that is inside my tag   <div>   for class (description) using style 
    description.style.fontSize = "1.2rem";
    // featching all this element that use class (planet) and put the source of this element empty picture using (src) keyword
    document.querySelector(".planet").src = "";
  } 
  
  // if my option is   (earth)   then  
  else if (option.value === "earth") {
    // first calling my function    planet()    
    planet();
    // featching all this element that use class (planet) and put the source of this element this picture using (src) keyword
    document.querySelector(".planet").src = "img/earth.png";
    // taking this calculation mathmatical math to the content of the tag   <div>   for class  (description)  using style 
    circle.textContent = `${input.value * 9.8} N`;
  } 
  // if my option is   (jupiter)   then  
  else if (option.value === "jupiter") {
    // first calling my function    planet()    
    planet();
    // featching all this element that use class (planet) and put the source of this element this picture using (src) keyword
    document.querySelector(".planet").src = "img/jupiter.png";
    // taking this calculation mathmatical math to the content of the tag   <div>   for class  (description)  using style 
    circle.textContent = `${input.value * 26.0} N`;
  } 
  // if my option is   (mars)   then  
  else if (option.value === "mars") {
    // first calling my function    planet()    
    planet();
    // featching all this element that use class (planet) and put the source of this element this picture using (src) keyword
    document.querySelector(".planet").src = "img/mars.png";
    // taking this calculation mathmatical math to the content of the tag   <div>   for class  (description)  using style 
    circle.textContent = `${input.value * 3.75} N`;
  } 
  // if my option is   (mercury)   then  
  else if (option.value === "mercury") {
    // first calling my function    planet()    
    planet();
    // featching all this element that use class (planet) and put the source of this element this picture using (src) keyword
    document.querySelector(".planet").src = "img/mercury.png";
    // taking this calculation mathmatical math to the content of the tag   <div>   for class  (description)  using style 
    circle.textContent = `${input.value * 3.61} N`;
  }
  // if my option is   (moon)   then  
  else if (option.value === "moon") {
    // first calling my function    planet() 
    planet();
    // featching all this element that use class (planet) and put the source of this element this picture using (src) keyword
    document.querySelector(".planet").src = "img/moon.png";
    // taking this calculation mathmatical math to the content of the tag   <div>   for class  (description)  using style 
    circle.textContent = `${input.value * 1.625} N`;
  } 
  // if my option is   (neptune)   then  
  else if (option.value === "neptune") {
    // first calling my function    planet() 
    planet();
    // featching all this element that use class (planet) and put the source of this element this picture using (src) keyword
    document.querySelector(".planet").src = "img/neptune.png";
    // taking this calculation mathmatical math to the content of the tag   <div>   for class  (description)  using style 
    circle.textContent = `${input.value * 13.3} N`;
  } 
  // if my option is   (pluto)   then  
  else if (option.value === "pluto") {
    // first calling my function    planet() 
    planet();
    // featching all this element that use class (planet) and put the source of this element this picture using (src) keyword
    document.querySelector(".planet").src = "img/pluto.png";
    // taking this calculation mathmatical math to the content of the tag   <div>   for class  (description)  using style 
    circle.textContent = `${input.value * 0.61} N`;
  } 
  // if my option is   (saturn)   then  
  else if (option.value === "saturn") {
    // first calling my function    planet() 
    planet();
    // featching all this element that use class (planet) and put the source of this element this picture using (src) keyword
    document.querySelector(".planet").src = "img/saturn.png";
    // taking this calculation mathmatical math to the content of the tag   <div>   for class  (description)  using style 
    circle.textContent = `${input.value * 11.2} N`;
  } 
  // if my option is   (uranus)   then  
  else if (option.value === "uranus") {
    // first calling my function    planet() 
    planet();
    // featching all this element that use class (planet) and put the source of this element this picture using (src) keyword
    document.querySelector(".planet").src = "img/uranus.png";
    // taking this calculation mathmatical math to the content of the tag   <div>   for class  (description)  using style 
    circle.textContent = `${input.value * 10.5} N`;
  } 
  // else it should be end option it is   (venus)
  else {
    // first calling my function    planet() 
    planet();
    // featching all this element that use class (planet) and put the source of this element this picture using (src) keyword
    document.querySelector(".planet").src = "img/venus.png";
    // taking this calculation mathmatical math to the content of the tag   <div>   for class  (description)  using style 
    circle.textContent = `${input.value * 8.83} N`;
  }


}
