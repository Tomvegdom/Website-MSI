function weatherBalloon(cityID) {
    var key = 'fc6016f2348ea837cf44397c9342138b';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID +
        '&appid=' + key)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            drawWeather(data); // Call drawWeather
        })
        .catch(function () {
            // catch any errors
        });
}

window.onload = function () {
    weatherBalloon(2745774);
}

function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var description = d.weather[0].description;
    var humidity = d.main.humidity;
    var pressure = d.main.pressure;

    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;
    document.getElementById('humidity').innerHTML = `Humidity: ${humidity}%`;
    document.getElementById('pressure').innerHTML = `Pressure: ${pressure} hPa`;

    var weatherElement = document.getElementById('weather');

    // Reset className before applying new class
    weatherElement.className = '';

    if (description.indexOf('rain') > 0) {
        weatherElement.classList.add('rainy');
    } else if (description.indexOf('cloud') > 0) {
        weatherElement.classList.add('cloudy');
    } else if (description.indexOf('sunny') > 0) {
        weatherElement.classList.add('sunny');
    }
}