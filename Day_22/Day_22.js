console.log("\n")
console.log("======================== DOM(Document Object Model)-Day 2 ========================")
console.log("\n")
console.log("======================== Creating an Element ========================")
console.log("\n")



// syntax
document.createElement('tagname')


/*

<!DOCTYPE html>
<html>

<head>
  <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>

  <script>
    // crete tag element using    document.createElement('tag name') 
    let title = document.createElement('h1')
    // taking this element the specific class name using    array_name.className = 'name class'
    title.className = 'title'
    // taking style to this element that we create it using    
      // array_name.style.fontSize = 'font size using pexel or ..'
      // array_name.style.color = 'color to the text'
      // array_name.style.backgroundColor = 'background color'
      // ...
    title.style.fontSize = '24px'
    // putting the content to this element that we create it using   array_name.textContent = '....any thing'
    title.textContent = 'Creating HTML element DOM Day 2'

    // console log the change that we made to (title) array
    console.log(title) 


    // Output

    // // you can't see this content that we put inside the <h1> tag but if you open then info in outerHTML you can see the content like this below we done

    // |> <h1 class="title" style="font-size: 24px;">
    //     ...
    //     ...
    //     outerHTML: "<h1 class=\"title\" style=\"font-size: 24px;\">Creating HTML element DOM Day 2</h1>"
    //     ...
    //     ...


        </script>
        </body>
        
        </html>

*/





console.log("\n")
console.log("======================== Creating elements ========================")
console.log("\n")

/*

const array_name = document.createElement('tag name')
*/


/*

<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>

    <script>
        let title
        // this cicle continue around 3 cicle from  0 to 2  or we can say  (0 1 2)
        for (let i = 0; i < 3; i++) {
            // create element using    documents.createElement('tag name')
            title = document.createElement('h1')
            // create class for that element that we create using   array_name.className = 'class name'
            title.className = 'title'
            // create style for that element that we create using   
            // array_name.style.fontSize = 'size of the font using pexel'
            // array_name.style.color = 'color for text'
            // array_name.style.backgroundColor = 'color for background'
            // ...
            title.style.fontSize = '24px'
            // take this content that you want for this element that we create it
            title.textContent = i

            // console log the change
            console.log(title)
        }
        // you can't see the content for this element that we create it but if you are open the info for this output that we get then you can see in outerHTML that content is visible
        // Output

        // |> <h1 class="title" style="font-size: 24px;">
              // ...
              // ...
              // outerHTML: "<h1 class=\"title\" style=\"font-size: 24px;\">0</h1>"
              // ...
              // ...
        // |> <h1 class="title" style="font-size: 24px;">
              // ...
              // ...
              // outerHTML: "<h1 class=\"title\" style=\"font-size: 24px;\">1</h1>"
              // ...
              // ...
        // |> <h1 class="title" style="font-size: 24px;">
              // ...
              // ...
              // outerHTML: "<h1 class=\"title\" style=\"font-size: 24px;\">2</h1>"
              // ...
              // ...

    </script>
</body>

</html>

*/





console.log("\n")
console.log("======================== Appending child to a parent element ========================")
console.log("\n")

/*

// Syntax

document.body.appendChild(array_name)

*/

/*

<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>

    <script>
        // creating multiple elements and appending to parent element
        let title
        for (let i = 0; i < 3; i++) {
            title = document.createElement('h1')
            title.className = 'title'
            title.style.fontSize = '24px'
            title.textContent = i
            console.log(title)
            // we can put all this action that we made for the array (title) to the (body) tag in my html code using    document.body.appendChild(array_name)
            document.body.appendChild(title)
        }
    </script>
</body>
</html>

*/


console.log("\n")
console.log("======================== Removing a child element from a parent node ========================")
console.log("\n")


/*

// Syntax

// this is just remove the first result that it get from parent tag but if you are used for loop and loop throw all the child tag then you can removed all

parent_tag_array_name.removeChild(child_tag_array_name)

*/

/*

<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Removing child Node</h1>
    <h2>Asabeneh Yetayeh challenges in 2020</h1>
    <ul>
        <li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Done</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>
    </ul>

    <script>
        // featching all this element that use tag    <ul>   using    document.querySelectorAll('tag name')
        const ul = document.querySelector('ul')
        // featching all this element that use tag    <li>   using    document.querySelectorAll('tag name')
        const lists = document.querySelectorAll('li')

        // loop throw all this element that we get from array (lists) and put all this element one by one to variable  (list)
        for (const list of lists) {
            // removing all child element on by one (because we are in forloop) that is inside   <ul>  tag using    
              // parent_tag_array_name.removeChild(child_tag_array_name)

            // the tag of  <ul>  is still exist but the child element of this tag will be removed
            ul.removeChild(list)

        }
    </script>
</body>

</html>










<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Removing child Node</h1>
    <h2>Asabeneh Yetayeh challenges in 2020</h1>
    <ul>
        <li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Done</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>
    </ul>

    <script>
        // featching first result that we get using    document.querySelector('tag name')
        const ul = document.querySelector('ul')
        // replace this content that inside this tag   <ul>   with this   ''   means empty string or nothing the   <ul>  tag still exist but the content inside this tag will replaced by   ''   empty string this is all done using
          // array_name.innerHTML = 'content.....'
        ul.innerHTML = ''
    </script>
</body>

</html>

*/

