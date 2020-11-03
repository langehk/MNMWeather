import { getNewContent } from './ajax/ajax.js';

'use strict'

let apiKey = "1c40c518571d79e7f81134c6c8e517ba";
let divelm = document.getElementById("weatherInfo");
let advDivElm = document.getElementById("advWeatherInfo");
let lang = "&lang=da"; // Sprog. (Dansk = da)

let advancedButton = document.getElementById("advancedButton");
let lat;
let long; 
let weatherInfo; 

function convertToCelcius(x){
    let kelvin = 273.15;
    let temp = x - kelvin; 
    temp = Math.round(temp);
    return temp;
}

/*
Her skriver vi vores data ud 
*/
let txtHandler = function(e) {
    /* ajax load event
     * puts received text 
     * onto the dom 
     * into the dom
     */
    
    weatherInfo = JSON.parse(e.target.responseText);    // objectify response
                                                    // and use it
    let desc = weatherInfo.weather[0].description;
    
    divelm.innerHTML =`
    <p id="city">By: ${weatherInfo.name}</p>
    <p id="temp">Temperatur: ${convertToCelcius(weatherInfo.main.temp)}°</p>
    <p id="wind">Vindhastighed: ${Math.round(weatherInfo.wind.speed)} m/s </p>
    <p id="condition">Vejrforhold: ${desc.charAt(0).toUpperCase() + desc.slice(1)}</p>`;  //Api'et sender den med lille begyndelsesbogstav, derfor ændrer vi det
    lat = weatherInfo.coord.lat; // Sætter latitude
    long = weatherInfo.coord.lon; // Sætter longitude

}


/*
Her skriver vi mere info
*/
let advHandler = function(e){
    let obj = JSON.parse(e.target.responseText);  
    advDivElm.innerHTML = `
    <p id="uv"> UV-index: ${Math.round(obj.value)}</p>
    <p id="lufttryk"> Lufttryk: ${Math.round(weatherInfo.main.pressure)} hPa</p>
    <p id="fugt"> Luftfugtighed: ${Math.round(weatherInfo.main.humidity)}%</p>`;
}

/*
Funktionen, der kører, når vi klikker på søg. Her henter vi info fra API'et
*/
let getBasicWeather = function () {

    document.getElementById("searchButton").addEventListener("click", function() {

    divelm.innerHTML="";
    advDivElm.innerHTML = "";

    let searchLocation = document.getElementById("searchLocation").value;
    getNewContent(`http://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${apiKey}${lang}`, txtHandler);
    advancedButton.hidden = false; // Viser advanced button.
    });

}

/*
Her henter vi UV-index fra API'et
*/
let getAdvancedWeather = function() {
    document.getElementById("advancedButton").addEventListener("click",function() {
        advancedButton.hidden = true; //Skjuler knappen.
        getNewContent(`http://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${long}&appid=${apiKey}`, advHandler);
    });
}


let showStarter = function(){
    getAdvancedWeather();
    getBasicWeather(); 
}

window.addEventListener("load", showStarter);                  // kick off JS

