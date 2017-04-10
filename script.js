$(document).ready(function(){
    var v = document.getElementById("fahCel");
    var w = document.getElementById("cond");
    var x = document.getElementById("cityState");
    var y = document.getElementById("temp");
    var z = document.getElementById("weatherImg");
      if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeather);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    function getWeather(position) {
    $.getJSON("https://api.apixu.com/v1/current.json?key=34a034426f2948238e2231121172903&q=" + position.coords.latitude + "," + position.coords.longitude, function (json) {
      if (json.current.temp_f > 70) {
        $("#pageBod").addClass("warm");
      } else {
        $("#pageBod").addClass("cool");
      }
        x.innerHTML = json.location.name + ", " + json.location.region;
        y.innerHTML = json.current.temp_f;
        z.src = json.current.condition.icon;
        w.innerHTML = json.current.condition.text;
        $("#fahCel").click(function (event) {
            event.preventDefault();
          if (v.innerHTML === "F") {
                v.innerHTML = "C";
                y.innerHTML = json.current.temp_c;
        } else {
                v.innerHTML = "F";
                y.innerHTML = json.current.temp_f;
        }
        });
    });
    }
});