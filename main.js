import { getNewContent } from './ajax/ajax.js';

let txtHandler = function(e) {
    /* ajax load event
     * puts received text 
     * onto the dom 
     * into the dom
     */

    let obj = JSON.parse(e.target.responseText);    // objectify response
                    debugger;                                // and use it

    console.log(obj.name); 
            $('.test').append("<p>" + JSON.stringify(data.name) + "</li>");
            $('.test').append("<p>" + JSON.stringify(data.sys.country) + "</p>");
            debugger;
        }
    })
}



function getWeatherData(){
    debugger;
    let weatherData = new XMLHttpRequest();
    //weatherData.addEventListener("button", getWea)
    weatherData.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Kolding&appid=1c40c518571d79e7f81134c6c8e517ba")
    weatherData.res = 'JSON';
    weatherData.send();

    console.log(weatherData);
}*/

let txtHandler = function(e) {
    /* ajax load event
     * puts received text 
     * onto the dom 
     * into the dom
     */

    let obj = JSON.parse(e.target.responseText);    // objectify response
                    debugger;                                // and use it

    console.log(obj.name); 
            $('.test').append("<p>" + JSON.stringify(data.name) + "</li>");
            $('.test').append("<p>" + JSON.stringify(data.sys.country) + "</p>");
            debugger;
        }
    })
}



function getWeatherData(){
    debugger;
    let weatherData = new XMLHttpRequest();
    //weatherData.addEventListener("button", getWea)
    weatherData.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Kolding&appid=1c40c518571d79e7f81134c6c8e517ba")
    weatherData.res = 'JSON';
    weatherData.send();

    console.log(weatherData);
}*/

let txtHandler = function(e) {
    /* ajax load event
     * puts received text 
     * onto the dom 
     * into the dom
     */

    let obj = JSON.parse(e.target.responseText);    // objectify response
                    debugger;                                // and use it

    console.log(obj.name); 
}


let showStarter = function () {
    document.getElementById("fortune").addEventListener("click", function() {
        getNewContent("http://api.openweathermap.org/data/2.5/weather?q=Kolding&appid=1c40c518571d79e7f81134c6c8e517ba", txtHandler);
    });
}

window.addEventListener("load", showStarter);                   // kick off JS

