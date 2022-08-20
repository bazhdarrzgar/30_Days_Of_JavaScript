/*

// sudo code

1. 
    declaration of featching this element from html using 

2. 
    function getSelectedValue() {
        featching value of tag  <planet>
    }

3. 
    // we don't use (e) parameter but we are using to finish the number of paramter inside (addEventListener) without this we get error try this :)
    button.addEventListener(click, e => {
        if (input == '') {
            removing startup image using remove() method
            taking style for the action
            show this message = 'Mass is require'
        }
        else {
            if (select == none) {
                removing startup image using remove() method
                taking style for the action
                removing image of any other planet if we have using remove() method
                taking style for the action
                show this message = 'Please! Select planet
            }
            else {
                if (select == 'mercury') {
                    calculation of mathmatical for this planet
                    removing startup image using remove()
                    taking style for the action
                    taking new image suing  src keyword
                    show this message = 'Mass of object on mercury'
                }
                else if (select == 'venus') {
                    calculation of mathmatical for this planet
                    removing startup image using remove()
                    taking style for the action
                    taking new image suing  src keyword
                    show this message = 'Mass of object on venus'
                }
                else if (select == 'earth') {
                    calculation of mathmatical for this planet
                    removing startup image using remove()
                    taking style for the action
                    taking new image suing  src keyword
                    show this message = 'Mass of object on earth'
                }
                else if (select == 'mars') {
                    calculation of mathmatical for this planet
                    removing startup image using remove()
                    taking style for the action
                    taking new image suing  src keyword
                    show this message = 'Mass of object on mars'
                }
                else if (select == 'jupiter') {
                    calculation of mathmatical for this planet
                    removing startup image using remove()
                    taking style for the action
                    taking new image suing  src keyword
                    show this message = 'Mass of object on jupiter'
                }
                else if (select == 'saturn') {
                    calculation of mathmatical for this planet
                    removing startup image using remove()
                    taking style for the action
                    taking new image suing  src keyword
                    show this message = 'Mass of object on saturn'
                }
                else if (select == 'uranus') {
                    calculation of mathmatical for this planet
                    removing startup image using remove()
                    taking style for the action
                    taking new image suing  src keyword
                    show this message = 'Mass of object on uranus'
                }
                else if (select == 'neptune') {
                    calculation of mathmatical for this planet
                    removing startup image using remove()
                    taking style for the action
                    taking new image suing  src keyword
                    show this message = 'Mass of object on neptune'
                }
                else if (select == 'pluto') {
                    calculation of mathmatical for this planet
                    removing startup image using remove()
                    taking style for the action
                    taking new image suing  src keyword
                    show this message = 'Mass of object on pluto'
                }
                
                let mass2 = mass.toFixed(3)
                mass1.innerHTML = mass2 + 'N'
            }
        }
    }

*/

// declaration of featching this element from html using 

// getElementById: featching all this element that use this id name
// getElementByClassName: featching all this element that use this class name
// getElementByTagName: featching all this element that use this tag name

const btnCalculateWeight = document.getElementById('btnCalculateWeight')
const text = document.getElementById('text')
const startingImage = document.getElementById('startingPic')
const results = document.getElementById('results')
const result = document.getElementById('result')
const resultOfPlanet = document.getElementById('resultOfPlanet')
const resultInCircle = document.getElementById('resultInCircle')
const mass1 = document.getElementById('mass')
const planetImage = document.getElementById('planetImage')


let select
// function that get back just value of element tag    <planets>
function getSelectedValue() {
    select = document.getElementById('planets').value
}

// take event for my button when user click on 
btnCalculateWeight.addEventListener('click', e => {
    // if my value of field weight is empty then
    if (text.value == '') {
        // remove this image that is show when my page is load in start using    ( remove() )   method
        startingImage.remove()
        // also make this style happen for tag result
        result.style.display = 'block'
        result.style.margin = '150px 280px'
        result.innerHTML = 'Mass is required'
    }
    // else do that
    else {
        let mass
        // if my option is none then
        if (select == 'none') {
            // remove this image that is show when my page is load in start using    ( remove() )   method
            startingImage.remove()
            // also taking this style for tag result
            result.style.display = 'block'
            // also removing other image that show for other option planet using    ( remove() )   method
            planetImage.remove()
            // also taking this style for tag result
            result.style.margin = '130px 280px'
            // and after that show this message for tag result
            result.innerHTML = 'Please! Select planet'
        }
        // else then do all this think below
        else {
            // if we choose (mercury)
            if (select == 'mercury') {
                // calculate this mathmatical for mass
                mass = text.value * 3.7
                // removing this image that show when we see it when my page is load in start
                startingImage.remove()
                // taking this style for tag result
                result.style.display = 'block'
                // taking this image when my choosing option is mercury planet using   (src)   keyword
                planetImage.src = "./images/mercury.png"
                // also show this message
                resultOfPlanet.innerHTML = 'Mass of object on Mercury'
            }
            // if we choose (venus)
            else if (select == 'venus') {
                // calculate this mathmatical for mass
                mass = text.value * 8.87
                // removing this image that show when we see it when my page is load in start
                startingImage.remove()
                // taking this style for tag result
                result.style.display = 'block'
                // taking this image when my choosing option is venus planet using   (src)   keyword
                planetImage.src = "./images/venus.png"
                // also show this message
                resultOfPlanet.innerHTML = 'Mass of object on Venus'
            }
            // if we choose (earth)
            else if (select == 'earth') {
                // calculate this mathmatical for mass
                mass = text.value * 9.798
                // removing this image that show when we see it when my page is load in start
                startingImage.remove()
                // taking this style for tag result
                result.style.display = 'block'
                // taking this image when my choosing option is earth planet using   (src)   keyword
                planetImage.src = "./images/earth.png"
                // also show this message
                resultOfPlanet.innerHTML = 'Mass of object on Earth'
            }
            // if we choose (mars)
            else if (select == 'mars') {
                // calculate this mathmatical for mass
                mass = text.value * 3.71
                // removing this image that show when we see it when my page is load in start
                startingImage.remove()
                // taking this style for tag result
                result.style.display = 'block'
                // taking this image when my choosing option is mars planet using   (src)   keyword
                planetImage.src = "./images/mars.png"
                // also show this message
                resultOfPlanet.innerHTML = 'Mass of object on Mars'
            }
            // if we choose (jupiter)
            else if (select == 'jupiter') {
                // calculate this mathmatical for mass
                mass = text.value * 24.92
                // removing this image that show when we see it when my page is load in start
                startingImage.remove()
                // taking this style for tag result
                result.style.display = 'block'
                // taking this image when my choosing option is jupiter planet using   (src)   keyword
                planetImage.src = "./images/jupiter.png"
                // also show this message
                resultOfPlanet.innerHTML = 'Mass of object on Jupiter'
            }
            // if we choose (saturn)
            else if (select == 'saturn') {
                // calculate this mathmatical for mass
                mass = text.value * 3.7
                // removing this image that show when we see it when my page is load in start
                startingImage.remove()
                // taking this style for tag result
                result.style.display = 'block'
                // taking this image when my choosing option is saturn planet using   (src)   keyword
                planetImage.src = "./images/saturn.png"
                // also show this message
                resultOfPlanet.innerHTML = 'Mass of object on Saturn'
            }
            // if we choose (uranus)
            else if (select == 'uranus') {
                // calculate this mathmatical for mass
                mass = text.value * 10.44
                // removing this image that show when we see it when my page is load in start
                startingImage.remove()
                // taking this style for tag result
                result.style.display = 'block'
                // taking this image when my choosing option is uranus planet using   (src)   keyword
                planetImage.src = "./images/uranus.png"
                // also show this message
                resultOfPlanet.innerHTML = 'Mass of object on Uranus'
            }
            // if we choose (neptune)
            else if (select == 'neptune') {
                // calculate this mathmatical for mass
                mass = text.value * 11.15
                // removing this image that show when we see it when my page is load in start
                startingImage.remove()
                // taking this style for tag result
                result.style.display = 'block'
                // taking this image when my choosing option is neptune planet using   (src)   keyword
                planetImage.src = "./images/neptune.png"
                // also show this message
                resultOfPlanet.innerHTML = 'Mass of object on Neptune'
            }
            // if we choose (pluto)
            else if (select == 'pluto') {
                // calculate this mathmatical for mass
                mass = text.value * 0.58
                // removing this image that show when we see it when my page is load in start
                startingImage.remove()
                // taking this style for tag result
                result.style.display = 'block'
                // taking this image when my choosing option is pluto planet using   (src)   keyword
                planetImage.src = "./images/pluto.png"
                // also show this message
                resultOfPlanet.innerHTML = 'Mass of object on Pluto'
            }

            // in the end 
            // show the result with limitation of three number after dot (.) using    toFixed(length of number after dot (.))
            let mass2 = mass.toFixed(3)
            // put or override this result to the tag   <mass>
            mass1.innerHTML = mass2 + 'N'
        }
    }
})

