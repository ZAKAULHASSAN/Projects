const inputBox = document.querySelector(".inBox");
const searchButton = document.querySelector("#search-button");
const weather_image = document.querySelector(".weather-image");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body")

async function checkWhether(city){
    const api_key = "a7960ae0fdf4670741ad6834c5f6987d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
     console.log(weather_data);
     if(weather_data.cod === '404'){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
     }
     else{
        weather_body.style.display = "flex";
        location_not_found.style.display = "none";
     }
     
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/h`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_image.src = "/images/cloud.png";
            break;
        case 'Clear':
            weather_image.src = "/images/clear.png";
            break;
        case 'Rain':
            weather_image.src = "/images/rain.png";
            break;
        case 'Mist':
            weather_image.src = "/images/mist.png";
            break;
        case 'Snow':
            weather_image.src = "/images/snow.png";
            break;
    }
}
searchButton.addEventListener("click",()=>{
    checkWhether(inputBox.value);
})