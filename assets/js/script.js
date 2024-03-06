
$(document).ready(function() {

    //This function hides the dropdown menu then displays it when hovering over the search bar form
    $(".dropdown").hide();

    $(".searchBox").hover(function(){
        $(".dropdown").fadeToggle(200);
    })

    //This function gets geolocation data from the browser and uses it to make a call for both the current weather data and location in the corner as well as the 5 day forecast information for your current location. 
   function localWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    } else {
        $("#location").text("Location data not available. Search location to see weather results")
    }

    function success(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=imperial&appid=37049b04aa62927b70b6cb2d0bde88ff")
            .then(response => {
                return response.json();
            })
            .then(data => {
                var temp = Math.round(data.main.temp);
                var location = data.name;
                var condition = data.weather[0].icon;
                var conditionURL = "http://openweathermap.org/img/w/" + condition + ".png";
                $("#temp").text(temp);
                $("#location").text(location);
                $("#icon").attr('src', conditionURL);
        
            });
            fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long + "&units=imperial&appid=37049b04aa62927b70b6cb2d0bde88ff")
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                var temp1 = data.list[1].main.temp;
                var temp2 = data.list[9].main.temp;
                var temp3 = data.list[17].main.temp;
                var temp4 = data.list[25].main.temp;
                var temp5 = data.list[33].main.temp;
                $("#temp1").text(temp1);
                $("#temp2").text(temp2);
                $("#temp3").text(temp3);
                $("#temp4").text(temp4);
                $("#temp5").text(temp5);
                var day1 = data.list[1].dt_txt;
                var day2 = data.list[9].dt_txt;
                var day3 = data.list[17].dt_txt;
                var day4 = data.list[25].dt_txt;
                var day5 = data.list[33].dt_txt;
                $("#day1").text(day1);
                $("#day2").text(day2);
                $("#day3").text(day3);
                $("#day4").text(day4);
                $("#day5").text(day5);
                var hum1 = data.list[1].main.humidity;
                var hum2 = data.list[9].main.humidity;
                var hum3 = data.list[17].main.humidity;
                var hum4 = data.list[25].main.humidity;
                var hum5 = data.list[33].main.humidity;
                $("#hum1").text(hum1);
                $("#hum2").text(hum2);
                $("#hum3").text(hum3);
                $("#hum4").text(hum4);
                $("#hum5").text(hum5);
                var icon1 = data.list[1].weather[0].icon;
                var icon2 = data.list[9].weather[0].icon;
                var icon3 = data.list[17].weather[0].icon;
                var icon4 = data.list[25].weather[0].icon;
                var icon5 = data.list[33].weather[0].icon;
                var icon1URL = "http://openweathermap.org/img/w/" + icon1 + ".png";
                var icon2URL = "http://openweathermap.org/img/w/" + icon2 + ".png";
                var icon3URL = "http://openweathermap.org/img/w/" + icon3 + ".png";
                var icon4URL = "http://openweathermap.org/img/w/" + icon4 + ".png";
                var icon5URL = "http://openweathermap.org/img/w/" + icon5 + ".png";
                $("#icon1").attr('src', icon1URL);
                $("#icon2").attr('src', icon2URL);
                $("#icon3").attr('src', icon3URL);
                $("#icon4").attr('src', icon4URL);
                $("#icon5").attr('src', icon5URL);
                
            });


    };
    };
    localWeather();

    
    //This function takes the inputted city from the search bar form and uses that to make a call for the weather info for that city. Then it overwrites the currently displayed weather data. 
    function searchWeather(cityName) {
        event.preventDefault();
        var cityName =$("#searchInput").val();
        console.log(cityName);
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&units=imperial&appid=37049b04aa62927b70b6cb2d0bde88ff")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            var tempCur = data.list[1].main.temp;
            var conditionCur = data.list[1].weather[0].icon;
            var conditionURLCur = "http://openweathermap.org/img/w/" + conditionCur + ".png";
            $("#temp").text(tempCur);
            $("#location").text(cityName);
            $("#icon").attr('src', conditionURLCur);
            var temp1 = data.list[1].main.temp;
            var temp2 = data.list[9].main.temp;
            var temp3 = data.list[17].main.temp;
            var temp4 = data.list[25].main.temp;
            var temp5 = data.list[33].main.temp;
            $("#temp1").text(temp1);
            $("#temp2").text(temp2);
            $("#temp3").text(temp3);
            $("#temp4").text(temp4);
            $("#temp5").text(temp5);
            var day1 = data.list[1].dt_txt;
            var day2 = data.list[9].dt_txt;
            var day3 = data.list[17].dt_txt;
            var day4 = data.list[25].dt_txt;
            var day5 = data.list[33].dt_txt;
            $("#day1").text(day1);
            $("#day2").text(day2);
            $("#day3").text(day3);
            $("#day4").text(day4);
            $("#day5").text(day5);
            var hum1 = data.list[1].main.humidity;
            var hum2 = data.list[9].main.humidity;
            var hum3 = data.list[17].main.humidity;
            var hum4 = data.list[25].main.humidity;
            var hum5 = data.list[33].main.humidity;
            $("#hum1").text(hum1);
            $("#hum2").text(hum2);
            $("#hum3").text(hum3);
            $("#hum4").text(hum4);
            $("#hum5").text(hum5);
            var icon1 = data.list[1].weather[0].icon;
            var icon2 = data.list[9].weather[0].icon;
            var icon3 = data.list[17].weather[0].icon;
            var icon4 = data.list[25].weather[0].icon;
            var icon5 = data.list[33].weather[0].icon;
            var icon1URL = "http://openweathermap.org/img/w/" + icon1 + ".png";
            var icon2URL = "http://openweathermap.org/img/w/" + icon2 + ".png";
            var icon3URL = "http://openweathermap.org/img/w/" + icon3 + ".png";
            var icon4URL = "http://openweathermap.org/img/w/" + icon4 + ".png";
            var icon5URL = "http://openweathermap.org/img/w/" + icon5 + ".png";
            $("#icon1").attr('src', icon1URL);
            $("#icon2").attr('src', icon2URL);
            $("#icon3").attr('src', icon3URL);
            $("#icon4").attr('src', icon4URL);
            $("#icon5").attr('src', icon5URL);
            
        });
        
    };
    
    //This function creates a new list item for each search result saved. I ran out of time to figure out local storage and couldnt get the elements to be inputed into the form on click. I believe its due to the onload function? 
    var citiesArr = [];
    function saveCities(data) {
        event.preventDefault();
        citiesArr.push($("#searchInput").val());
        $("#savedCities").text("");
        console.log(citiesArr);
        
        $.each(citiesArr, function(index, value) {
            $('#savedCities').append("<li class='citiesList'  onclick='addtotextbox("+index+")'>" + value + '</li>');
            localStorage.setItem(index, value);
        })
        function addtotextbox(id) {
            $("#searchInput").val(citiesArr[id]);
        }
    };
    
    $("form").on("submit", saveCities);
    $("form").on("submit", searchWeather);


    //for future implementation. Historic news articles from the 70s. Will use dayjs to get month and year to attach to fetch call
    function HistoricNews() {
        fetch("https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=yfIuGK0PqAnJff81ejU5wgAcRsP2tEoa/1973/7.json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            
            
        });
    };
    HistoricNews();

    //advert rotation. Once it switches through each advert there is no ad displayed. Will fix this with an array and for loop in the future. 
    function AdRotation(){
       var active = $(".advertInner .active");
       var next = ($(".advertInner .active").next().length > 0) ? 
       $(".advertInner .active").next() : $("m.advertInner img:first");
       active.removeClass("active");
       next.addClass("active");
    }

    setInterval(AdRotation, 60000);
    
    
});