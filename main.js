function getWeather(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Kolding&appid=1c40c518571d79e7f81134c6c8e517ba',
        type:'GET',
        dataType: 'JSON',
        data:JSON.stringify({ }),
        success: function(data){
            
            console.log(data.sys.country);
            
            $('.test').append("<p>" + JSON.stringify(data.name) + "</li>");
            $('.test').append("<p>" + JSON.stringify(data.sys.country) + "</p>");
            debugger;
        }
    })
}



