
/*

// sudo code

1. 
    // Every my Data object has
    const countries = [
        {
            name: 'name of country',
            capital: 'capital of this country',
            languages: ['language 1', 'language 2', 'language 3', ...],
            population: number of population it is like ranke,
            flag: 'link to svg flag image',
            currency: 'name of currency'
        }


2. 
        function sortByPopulation(property) {

            return function (a, b) {

                if (a[property] > b[property])  return false(-1);

                else if (a[property] < b[property]) return true(1);

            return excute program (0);

            }
        }


3.
        function dataVisualization(country, width, data) {
            row_population_&_language = document.createElement("div")
            taking style for this row
            col_population_&_language = document.createElement("div")
            taking style for this column
            put this data to country parameter

           row & column for population

           China 
           India
           United States of America
           Indonesia
           Brazil
           Pakistan
           Nigeria
           Bangladesh
           Russian Federation
           Japan


          row & column for language

           French
           Arabic
           Spanish
           Portuguese
           Russian
           Dutch
           German
           Chinese
           Serbian

            column_progress = document.createElement("div")
            taking style for this column
            color_progress_white_from_right = document.createElement("div")
            taking style for this progress
            color_bar_warning_from_left = document.createElement("div")
            taking style for this progress
            taking style of bar visiblity to width using bar.style = width


                                          column for progress and bar

           China                      --------------------------><---------
           India                      ----------------><-------------------
           United States of America   ---------------><--------------------
           Indonesia                  --------------><---------------------
           Brazil                     ----------><-------------------------
           Pakistan                   -------><----------------------------
           Nigeria                    ----><-------------------------------
           Bangladesh                 --><---------------------------------
           Russian Federation         --><---------------------------------
           Japan                      -><----------------------------------


          row & column for language

           French                    --------------------------><---------
           Arabic                    ----------------><-------------------
           Spanish                   ---------------><--------------------
           Portuguese                --------------><---------------------
           Russian                   ----------><-------------------------
           Dutch                     ----><-------------------------------
           German                    --><---------------------------------
           Chinese                   --><---------------------------------
           Serbian                   -><----------------------------------

           
           column_data = document.createElement("div")
           taking style for this data
           put this data to data parameter


                                                                        column data

           China                      --------------------------><---------  50
           India                      ----------------><-------------------  40
           United States of America   ---------------><--------------------  38
           Indonesia                  --------------><---------------------  33
           Brazil                     ----------><-------------------------  32
           Pakistan                   -------><----------------------------  23
           Nigeria                    ----><-------------------------------  20
           Bangladesh                 --><---------------------------------  19
           Russian Federation         --><---------------------------------  15
           Japan                      -><----------------------------------  10


                                                                        column data

           French                    --------------------------><---------  80
           Arabic                    ----------------><-------------------  70
           Spanish                   ---------------><--------------------  60
           Portuguese                --------------><---------------------  50
           Russian                   ----------><-------------------------  40
           Dutch                     ----><-------------------------------  30
           German                    --><---------------------------------  20
           Chinese                   --><---------------------------------  10
           Serbian                   -><----------------------------------  5

            
           column_progress_&_language is part of the row
           bar is part of the progress
           progress is part of the column_progress_&_bar
           column_progress_ is part of the row
           column_data is part of the row
           row is part of the section
           

        }


4. 
        function widthCal(value_language, max_language_in_the_list) {
            data = (value_language  / max_language_in_the_list) * 100
        }

6. 
object_languages = [{}]

// 1. we have forEach that put each value of countries to parameter data we don't use index parameter
// 2. we have object_langauge that we are using to put language 
// 3. each value of object_langauge map to the langs parameter
// 4. each language that we get from file   data.js   will map to the countryLangs parameter
// 5. we are put the language from countrylangs parameter to langs parameter and all this value will store in object_language if this value is in parameter langs or object_language is not problem
// 6. if language is undefined means we don't find the same language of specific language then we take it 1 by default
// 7. if we find language that have is the same of this language then we calculate this language to find how much we get of this language this is true of all of the language

        countries.forEach(function (data, index) {
            object_languages.map(function (langs)) {
                data["langauges"].map(function (countryLangs) {
                    if(langs[countryLangs] == undefined) { langs[countryLangs] = 1}
                    else if(type of langs[countryLangs] == "number") { langs[countryLangs] += 1}
                })
            })
        })

// sending population data of file   data.js   to variable countries with sorting mechanism
var population = countries.sort(sortByPopulation("population"))

9. 

    var language = feating index 0 for function Object using    Object.keys(languages[0])    also sorting this data of languages using      sort(function (a, b) { return languages[0][b] - languages[0][a] })     in the end we have this    Object.keys(languages[0]).sort(function (a, b) { return languages[0][b] - languages[0][a] })

    var section = get all element of id (sectionGraph) using    document.getElementById("sectionGraph")
    
    var populationBtn = get all element of id (population) using    document.getElementById("population")
    
    var txt = get all element of id (info-text) using    document.getElementById("info-text")
    
    var languageBtn = get all element of id (languages) using    document.getElementById("languages")


10.

        population_button.addEventListener("click", function() {
                section.innerHTML = ""
                txt.innerHTML = amount + " Most populated countries in the world"

                for (let i = 0; i < amount; i++) {
                    // calling the name of population  and   the value for width like graph for population   and   actuall value of this population 
                    dataVisualization(population[i]["name"], widthCal(population[i]["population"], population[0]["population"]), population[i]["population"])
                }
        })

11. 

        language_button.addEventListener("click", function () {
            section.innerHTML = ""
            txt.innerHTML = amount + " Most spoken languages in the world"

                for (let i = 0; i < amount; i++) {
                    // calling the name of language  and   the value for width like graph for language   and   actuall value of this language 
                    dataVisualization(language[i], widthCal(languages[0][language[i]], languages[0][language[0]]), languages[0][language[i]])
                }
        })

*/

// return 0 in the main function means that the program executed successfully. 
// return 1 in the main function means that the program does not execute successfully and there is some error.

// return 1 in if and else statement means true
// return -1 in if and else statement means false

// function that sort the population
function sortByPopulation(property) {
    // we return the value of this function 
    return function (a, b) {
        // if first property is greater than second property then return false
        if (a[property] > b[property])
            return -1;
        // else if, if property second is greater than second property then return true
        else if (a[property] < b[property])
            return 1;
        // in the end excute program successfuly
        return 0;
    }
}

// function that we use to create element and style of the ( (country) and (data) and (width) )
function dataVisualization(country, width, data) {
    // create element   <div>   tag for row of the (country) using ( createElement() )
    var row = document.createElement("div")
    // styleing this element for row of the (country)   <div>   tag using (boostrab)
    row.className = "row my-2 mx-0 p-0"
    // create another   <div>   tag for column of the (country) using ( createElement() )
    var col1 = document.createElement("div")
    // styleing this element for the column of the (country)   <div>   tag using (boostrab)
    col1.className = "col-md-2"
    // override or put this message to the (country) for my   <div>   tag using (innerHTML)
    col1.innerHTML = country


    // create another   <div>   tag for the column of the (width)  using ( createElement() )
    var col2 = document.createElement("div")
    // styling this   <div>   tag for the column of the (witdth) using (boostrab)
    col2.className = "col-md-7"
    // create another   <div>   tag for the progress of the (width)  using ( createElement() )
    var progress = document.createElement("div")
    // styleing this   <div>   tag for the progress of the (width) using (boostrab)
    progress.className = "progress bg-white"
    // create another   <div>   tag for the bar of the (width)  using ( createElement() )
    var bar = document.createElement("div")
    // styling this   <div>   tag for the bar of the (width) using (boostrab) 
    bar.className = "progress-bar bg-warning"
    // The .progressbar also requires some role and aria attributes to make it accessible
    bar.role = "progressbar"
    // accessable styling bar for the width 
    bar.style = width


    // create   <div>   tag for the column of the (width)  using ( createElement() )
    var col3 = document.createElement("div")
    // styleing this   <div>   tag for the column of the (width) using (boostrab)
    col3.className = "col-md-3"
    // override or put this message to the (data) using (innerHTML)
    col3.innerHTML = data


    // (column1) is child of (row)
    row.appendChild(col1)
    // (bar) is child of (progress)
    progress.appendChild(bar)
    // (progress) is child of (column2)
    col2.appendChild(progress)
    // (column2) is child of (row)
    row.appendChild(col2)
    // (column3) is child of (row)
    row.appendChild(col3)
    // (row) is child of (section)
    section.appendChild(row)
}

// function that calculate the width of the country and language data base on this value that they have and other value in the list this is how the range of percentage is build 
function widthCal(value, max) {
    var data = (value / max) * 100
    return "width : " + data + "%"
}
// array to put the language to it
let languages = [{}]

// function to put number of 1 for this language that is undefined and also if we have same language in multiple country then calculate this language to know how much language we have of that language
countries.forEach(function (data, index) {
    // all my language in array object is one by one map to the langs parameter
    // Note: language is array object we declared in above
    languages.map(function (langs) {
        // this   languages   data that we have in file   data.js   is map to the parameter (countryLangs)
        data["languages"].map(function (countryLangs) {
            // if we have language and we don't have the same language of that language means we find undefiend language of that language then by default we take it (1)

            // we put all this language in file   ( data.js )   to my array object language and we search for this language that the same
            if (langs[countryLangs] == undefined) {
                langs[countryLangs] = 1
            }
            // if we have language and we find of this language more than one then we calculate all the same language to know how much we have of this language 

            // we put all this language in file   ( data.js )   to my array object language and we search for this language that the same

            // this condition mean of language is not undefiend means it is number
            else if (typeof (langs[countryLangs]) == "number") {
                langs[countryLangs] += 1
            }
        })
    })
})

// console log the greatest language in the list
console.log(languages)
// putting all the value of country with sorting from greatest to lower to my function  (sortBypopulation)   also putting the data of    (population)    from file   data.js   on it,
// and all this result will put on population variable
var population = countries.sort(sortByPopulation("population"))
// put key of language index 0 to my function   ( Object )
// also puting the sorting value that we get from the function  ( Object )  to my variable   (language)
// this function will make sorting from greatest to lower language base on this two array that we have for the language
var language = Object.keys(languages[0]).sort(function (a, b) { return languages[0][b] - languages[0][a] })
// featching all this element that have id name of   (sectionGraph)  
var section = document.getElementById("sectionGraph")
// featching all this element that have id name of   (population)  
var populationBtn = document.getElementById("population")
// featching all this element that have id name of   (info-text)  
var txt = document.getElementById("info-text")
// featching all this element that have id name of   (languages)  
var languageBtn = document.getElementById("languages")
// amount of this language and country that i want is 10
let amount = 10


// make event for button  ( population ) 
populationBtn.addEventListener("click", function () {
    // override all this data that we have in variable section to this value below "" means empty value, this means language will remove in this case and population will show
    // this section will show the data for us and when we click to this button of event the old data will be disappear and new data will be show
    section.innerHTML = ""
    // put this message to my variable  (txt)
    txt.innerHTML = amount + " Most populated countries in the world"

    // for loop that loop 10 cicle
    for (let i = 0; i < amount; i++) {
        // putting this data of variable pupolation to my   (dataVisulizatin)   function but just the name of this data that we have in populatin variable also the returning value is depending of this index that we put on population using (i) variable of the for loop
        // also putting this data of variable pupolation to my   (widthCal)   function but just the population number of this data that we have in populatin variable also the returning value is depending of this index that we put on population using (i) variable of the for loop
        // also returning index 0 of population variable of population number data
        // and  returning value of population number from variable populationo base on this index number that variable (i) cicle throw on
        dataVisualization(population[i]["name"], widthCal(population[i]["population"], population[0]["population"]), population[i]["population"])
    }
})

// add event to the button language the event will be (click) event
languageBtn.addEventListener("click", function () {
    //  data of section will be desappear when we click to this button and this new data below whill be show
    section.innerHTML = ""
    // puttin this message for variable txt
    txt.innerHTML = amount + " Most spoken languages in the world"
    // for loop that loop 10 cicle
    for (let i = 0; i < amount; i++) {
        // putting this data of variable language to my   (dataVisualization)   function depending of this index number that we put on language variable using (i) variable of the for loop
        // also putting this data of variable language of index 0 from first layer of array and also putting data of layer 2 of array of language but this one is depending of this index number that we put on language variable using (i) variable of the for loop
        // also returning index 0 of language variable data of first layer of array and also index 0 of language variable data of second layer of array
        // and also returning index 0 of language variable data of first layer of array and also returning data of layer 2 of array of language but this one is depending of this index number that we put on language variable using (i) variable of the for loop
        dataVisualization(language[i], widthCal(languages[0][language[i]], languages[0][language[0]]), languages[0][language[i]])
    }
})

// console log the first result of language of index 0
console.log(language[0])
// console log the first result of language of index 0 from first and second layer
console.log(languages[0][language[0]])
