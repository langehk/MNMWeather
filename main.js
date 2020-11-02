import { getNewContent } from './ajax/ajax.js';

let apiKey = "1c40c518571d79e7f81134c6c8e517ba";
let divelm = document.getElementById("weatherInfo");

function convertToCelcius(x){
    let kelvin = 273;
    let temp = x - kelvin; 
    temp = Math.round(temp);
    return temp;
}

let txtHandler = function(e) {
    /* ajax load event
     * puts received text 
     * onto the dom 
     * into the dom
     */

    let obj = JSON.parse(e.target.responseText);    // objectify response
                                                    // and use it

    let city = document.createTextNode("City: " + obj.name + " "); 
    let temp = document.createTextNode("Tempareture: " + convertToCelcius(obj.main.temp) + " °C "); 
    let wind = document.createTextNode("Wind speed: " + Math.round(obj.wind.speed) + " m/s ");
    let main = document.createTextNode("Condition: " + obj.weather[0].main);
    
    debugger;
    divelm.appendChild(city); 
    divelm.appendChild(temp);
    divelm.appendChild(wind);
    divelm.appendChild(main);

}

let showStarter = function () {
    document.getElementById("searchButton").addEventListener("click", function() {
        let searchLocation = document.getElementById("searchLocation").value;
        getNewContent(`http://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${apiKey}`, txtHandler);
    });
}


window.addEventListener("load", showStarter);                   // kick off JS

