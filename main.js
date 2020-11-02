import { getNewContent } from './ajax/ajax.js';

let apiKey = "1c40c518571d79e7f81134c6c8e517ba";
let divelm = document.getElementById("weatherInfo");
let advDivElm = document.getElementById("advWeatherInfo");
let lang = "&lang=en"; // Sprog. (Dansk = da)

let advancedButton = document.getElementById("advancedButton");
let pCity = document.getElementById("city");
let pTemp = document.getElementById("temp");
let pWind = document.getElementById("wind");
let pMain = document.getElementById("main");
let lat;
let long; 

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
    divelm.innerHTML="";
    let obj = JSON.parse(e.target.responseText);    // objectify response
                                                    // and use it

    let city = document.createTextNode("City: " + obj.name + " "); 
    let temp = document.createTextNode("Tempareture: " + convertToCelcius(obj.main.temp) + " °C "); 
    let wind = document.createTextNode("Wind speed: " + Math.round(obj.wind.speed) + " m/s ");
    let main = document.createTextNode("Condition: " + obj.weather[0].main);

    lat = obj.coord.lat; // Sætter latitude
    long = obj.coord.lon; // Sætter longitude
    
    pCity.appendChild(city); 
    pTemp.appendChild(temp);
    pWind.appendChild(wind);
    pMain.appendChild(main);

    divelm.appendChild(pCity);
    divelm.appendChild(pTemp);
    divelm.appendChild(pWind);
    divelm.appendChild(pMain);

}

let advHandler = function(e){
    let obj = JSON.parse(e.target.responseText);
    
    let uv = document.createTextNode("Uv index: " + Math.round(obj.value));

    advDivElm.appendChild(uv);

}

let getBasicWeather = function () {
    advDivElm.innerHTML = "";
    document.getElementById("searchButton").addEventListener("click", function() {
        let searchLocation = document.getElementById("searchLocation").value;
        getNewContent(`http://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${apiKey}${lang}`, txtHandler);
        advancedButton.hidden = false; // Viser advanced button.
    });
    
}

let getUVIndex = function() {
    document.getElementById("advancedButton").addEventListener("click",function() {
        advancedButton.hidden = true; //Skjuler knappen.
        getNewContent(`http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${long}&appid=${apiKey}`, advHandler);
    });
}

/*
let getAdvancedWeather = function () {
    document.getElementById("advanced").addEventListener("click", function() {
        let searchLocation = document.getElementById("searchLocation").value;
        getNewContent(`http://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${apiKey}`, advHandler);
    });
}*/

let showStarter = function(){
    //getAdvancedWeather();
    getBasicWeather(); 
    getUVIndex();
}

window.addEventListener("load", showStarter);                  // kick off JS

