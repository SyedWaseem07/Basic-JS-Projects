const api_key = "2903411ec5193092ab568c20132f950e";
const api_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})

async function checkWeather(city){
    const response = await fetch(api_url + city + `&appid=${api_key}`);
    if(response.status == 404) {
        document.querySelector('.error').style.display = "block"
        document.querySelector('.weather').style.display = "none"
        return;
    }
    document.querySelector('.error').style.display = "none"

    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    
    if(data.weather[0].main === "Clouds") {
        weatherIcon.src = "./images/clouds.png";
    } else if(data.weather[0].main === "Clear") {
        weatherIcon.src = "./images/clear.png";
    } else if(data.weather[0].main === "rain") {
        weatherIcon.src = "./images/rain.png";
    } else if(data.weather[0].main === "Drizzle") {
        weatherIcon.src = "./images/drizzle.png";
    } else {
        weatherIcon.src = "./images/mist.png";
    }
    document.querySelector('.weather').style.display = "block";
}

setInterval(() => {
    if(searchBox.value === '') 
        document.querySelector('.weather').style.display = "none";
}, 1500)
