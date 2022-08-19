console.log("\n")
console.log("======================== DOM(Document Object Model)-Day 3 ========================")
console.log("\n")
console.log("======================== Event Listeners ========================")
console.log("\n")


// get back information about any tag you want using   document.querySelector('tag name')
const variable_name = document.querySelector('tag name   or   .class name   or   #id name')

// Common HTML events:onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload. 

// (selectedElement) variable  it can be handler for (button or any tag) that you want take it event to it
// (eventlistner) is name of the even it can be (click or onclick or ...)
// (function(e) or e or any variable)  is handler for this information that we get back from this tag
selectedElement.addEventListener('eventlistner', function(e) {
  // the activity you want to occur after the event will be in here
})
// or

selectedElement.addEventListener('eventlistner', e => {
  // the activity you want to occur after the event will be in here
})




console.log("\n")
console.log("======================== Click ========================")
console.log("\n")

// using   (click)   event

/*

<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <!-- my button -->
    <button>Click Me</button>

    <script>
      // get all info about this button that we click on using   document.querySelector('name the tag')
      const button = document.querySelector('button')
      // now we take event for this information that you get from   (querySelector)  for   <button>   tag

      // we have two parameter one is specify the listener even in this case we are using (click) listener 
      // second parameter is variable that handle this information that we get from   (querySelector)
      button.addEventListener('click', e => {
        // get back this message with full information that we get back from (querySelector)
        console.log('e gives the event listener object:', e)
        // get back this message with information about my target in this case is just my   <button>   tag
        console.log('e.target gives the selected element: ', e.target)
        // get back this message with information about all this content that inside my   <button>   tag
        console.log(
          'e.target.textContent gives content of selected element: ',
          e.target.textContent
        )
      })

      // Output

      // e gives the event listener object: |> click { target: button, buttons: 0, clientX: 55, clientY: 24, layerX: 55, layerY: 24 }
      // e.target gives the selected element:  |> <button>
      // e.target.textContent gives content of selected element:  Click Me
      
    </script>
  </body>
</html>

*/




console.log("\n")
console.log("======================== onclick ========================")
console.log("\n")

// using   (onclick) keyword with this tag that you want

/*

  // using (onclick) to take us pop up window when we click to this button  
  // Syntax onclick inside   <button>   tag
  // you can't put content inside this bracket if you are using single or double quotes i don't know why ???!!!

  onclick="name_onclick_event()"




  // inside   <script>   tag
  // creating function that handle the content of the pop up window for this button that we are used (onclick) event
  // Syntax

  // const name_onclick_event = (parameter, parameter, ....) => {
  //   alert('content....')
  // }

*/


/*

<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <!-- 

      // using (onclick) to take us pop up window when we click to this button 
      
      // Syntax onclick inside   <button>   tag

      onclick="name_onclick_event()"

     -->
    <button onclick="clickMe()">Click Me</button>
    <script>
      // creating function that handle the content of the pop up window for this button that we are used (onclick) event

      // Syntax

      // const name_onclick_event = (parameter, parameter, ....) => {
      //   alert('content....')
      // }

      const clickMe = () => {
        alert('We can attach event on HTML element')
      }
    </script>
  </body>
</html>

*/



console.log("\n")
console.log("======================== Double Click ========================")
console.log("\n")

// using   (dblclick)   event

/*

<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button>Click Me</button>
    <script>
      // get back info about my <button> tag using
        // document.querySelector('tag name')
      const button = document.querySelector('button')
      // in this time instaid of using   (click)   event we are using event   (dbclick)   
      // different between   (click)   event and   (dbclick)   event is that 
      // (dbclick)   event use (double click) to happen the action
      // (click)   event use (one click) to happen the action

      // variable_name is just handler info about tag 
      // parameter is handeler of that info that we get from the tag
      // to make this happen we are use   variable_name.addEventListener('event name', parameter)
      button.addEventListener('dblclick', e => {
        // print this info about this tag that we get from (querySelector)
        console.log('e gives the event listener object:', e)
        // print this info about just target tag in this case is  <button>  tag and no else info, using  (target) keyword with parameter
        console.log('e.target gives the selected element: ', e.target)
        // print the content about my target tag using   target.textContent  keyword with my parameter
        console.log(
          'e.target.textContent gives content of selected element: ',
          e.target.textContent
        )
      })

      // Output

      // e gives the event listener object: |> dblclick { target: button, buttons: 0, clientX: 28, clientY: 19, layerX: 28, layerY: 19 }
      // e.target gives the selected element:  |> <button>
      // e.target.textContent gives content of selected element:  Click Me

    </script>
  </body>
</html>

*/




console.log("\n")
console.log("======================== Mouse enter ========================")
console.log("\n")

// using   (mouseenter)   event

/*

<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model</title>
  </head>

  <body>
    <button>Click Me</button>
    <script>
      const button = document.querySelector('button')

      // Syntax
      // variable_name is handler of this information that get back from (  document.querySelector('tag name')  )

      // variable_name.addEventListener('mouseenter', paramemter, parameter, ...) => { ...code problem }

      // using (mouseenter) event to make action to my button
      // we are using (mouseenter) event to make action to the button this is happen when we just hover to the button and click will be happen

      // this info that get back to us is the same info when back to us in   (click and dbclick)   event just name of the object is different means instaid of (click or dbclick) we get (mouseenter)
      button.addEventListener('mouseenter', e => {
        console.log('e gives the event listener object:', e)
        console.log('e.target gives the selected element: ', e.target)
        console.log(
          'e.target.textContent gives content of selected element: ',
          e.target.textContent
        )
      })

      // Output

      // e gives the event listener object: |> mouseenter { target: button, buttons: 0, clientX: 70, clientY: 16, layerX: 70, layerY: 16 }
      // e.target gives the selected element:  |> <button>
      // e.target.textContent gives content of selected element:  Click Me
      
    </script>
  </body>
</html>

*/


/*

## List of events:

* click - when the element clicked
* dblclick - when the element double clicked
* mouseenter - when the mouse point enter to the element
* mouseleave - when the mouse pointer leave the element
* mousemove - when the mouse pointer move on the element
* mouseover - when the mouse pointer move on the element
* mouseout -when the mouse pointer out from the element
* input -when value enter to input field
* change -when value change on input field
* blur -when the element is not focused
* keydown - when a key is down
* keyup - when a key is up
* keypress - when we press any key
* onload - when the browser has finished loading a page

*/




console.log("\n")
console.log("======================== Getting value from an input element ========================")
console.log("\n")
console.log("======================== input value ========================")
console.log("\n")

// using   (click)   event 
// using (value) keyword for get back this value that outside my function
// using (toFixed(number after dot(.))) keyword for get back the number of poin that you want back after the dot (.)

/*

<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <h1>Body Mass Index Calculator</h1>

    <!-- type: specify the type of the input -->
    <!-- id: id name -->
    <!-- placeholder: name of the place holder -->
    <input type="text" id="mass" placeholder="Mass in Kilogram" />
    <input type="text" id="height" placeholder="Height in meters" />
    <!-- my button -->
    <button>Calculate BMI</button>

    <script>
      // get value of this input that id name is   mass
      const mass = document.querySelector('#mass')
      // get value of this input that id name is   height
      const height = document.querySelector('#height')
      // get information about my button for making action to the button
      const button = document.querySelector('button')

      let bmi
      // create function
      // specify the event action for my button in this case i use normal  (click)  event 
      // i don't need to get back information for any parameter about my button
      button.addEventListener('click', () => {
        // calculate the bmi base on this 2 value that we get from this two text filed input for both this two variable ( (mass) and (height) )
        // we can access variable that is outside the function using (value) keyword with this variable that you want
        bmi = mass.value / height.value ** 2
        // get back result for the user using (alert) pop up window
        //  we are using keyword    toFixed(number of this point after dot (.))    to specify the number of this point that we get back after dot (.) this is for more clear result to the user
        alert(`your bmi is ${bmi.toFixed(2)}`)
        // also send result to console log 
        console.log(bmi)
      })
    </script>
  </body>
</html>

*/




console.log("\n")
console.log("======================== input event and change ========================")
console.log("\n")

// using   (input)   event 
// using (value) keyword for get back this value that outside my function

/*

<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <h1>Data Binding using input or change event</h1>

    <input type="text" placeholder="say something" />
    <p>aaa</p>

    <script>
      // getting back this input value that we put info this textfield   <input>   tag using  document.querySelector('tag name   or   .class name   or   #id name')
      const input = document.querySelector('input')
      // get back this content from this tag  <p>  using   document.querySelector('tag name   or   .class name   or   #id name')
      const p = document.querySelector('p')

      // add event for my input tag and name of the event is   (input)   that allow us to send this input that we get from other place in this case is my (input) tag and i just send it to my browser page
      // also i send this value to my   (e)   parameter
      input.addEventListener('input', e => {
        // we can access value from outside this function using   (value)   keyword
        // also i just need info about   (target)   for this info that get back from tag   <input>   and no more than info
        // (targe)  info means just this content that we put to the   <input>   tag in this case
        
        // any content that get back from  <input>  tag i can send it to my tag   <p>   using equal (=) operator  
        // also for my    <p>    i want send this content inside    <p>    tag this is why i used   (textContent)   keyword 
        
        // in the end it is means value of tag     <input>     is send inside   <p>   tag but vice versa is not true
          p.textContent = e.target.value


          // this is not what we want because i don't need value of content   <input>   tag is equal to the value of   <p>  tag
          // if you do that just activate the textfield by any key in the keyboard, and value of content   <p>   will send to textfield   <input>   tag
          
          // e.target.value = p.textContent
      })
    </script>
  </body>
</html>

*/




console.log("\n")
console.log("======================== blur event ========================")
console.log("\n")

// using   (blur)   event 

/*

<!DOCTYPE html>
<html>

<head>
  <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
  <h1>Giving feedback using blur event</h1>

  <!-- type: type of the input is (text) -->
  <!-- id: name  of the id is (mass) -->
  <!-- placeholder: is just name  of the placeholder to show in the textfiled -->
  <input type="text" id="mass" placeholder="say something" />
  <p></p>

  <script>
      // get back all this information that we put inside my   <input>   tag with some other information about this   <input>   tag, this is all done by using    document.querySelector('tag name   or   .class name   or   #id name')
      const input = document.querySelector('input')
      // get back all this information about my   <p>   tag, this is all done by using    document.querySelector('tag name   or   .class name   or   #id name')
      const p = document.querySelector('p')

      // we are using event   (blur)   for this information that back to us from tag   <input>  
      // (bluer) event will make action when we left something after entried on for example in this case when we put something inside this textfield or just click inside the text field when you are lefted then   (blur)   make action

      // also we put all this information that we get from (querySelector) for tag   <input>   to my parameter  (e)
      // this is all done using    variable_name.addEventListener('event name', (parameter), (parameter), ...) => { ...code problem }
      input.addEventListener('blur', (e) => {
          // put this text inside my tag   <p>   using keyword   (textContent)   with my variable (p) that handle value of   <p>  tag
          p.textContent = 'Field is required'
          // take style for this content that inside   <p>   tag using this keyword below with my variable (p) that handle value of   <p>  tag
            // style.color = 'color for text'
            // style.fontSize = 'size in pexel'
            // style.backgroundColor = 'color of the background'
            // ....
          p.style.color = 'red'
      })
  </script>
</body>

</html>

*/





console.log("\n")
console.log("======================== keypress, keydow and keyup ========================")
console.log("\n")

// using   (keypress)   event 
// using (keyCode) for get back this key code that user press inside body of the browser

/*

<!DOCTYPE html>
<html>
  <head>
    <title>Document Object Model:30 Days Of JavaScript</title>
  </head>

  <body>
    <h1>Key events: Press any key</h1>

    <script>
      // recording this key code in the keyboard that user press on using event   (keypress)   this is done using    document.body.addEventListener('name the event', parameter, parameter, ...) => { ...code problem }
      // we use   (body)   keyword with my event listener because any key we press is inside the body of the browser
      document.body.addEventListener('keypress', e => {
        // in the end console log this key code that user pressed this is done using keyword   (keyCode)   with my parameter   (e)
        console.log(e.keyCode)

        // or you can send this key code like pop up window for the user using   (alert)
        // alert(e.keyCode)
      })
    </script>
  </body>
</html>

*/
