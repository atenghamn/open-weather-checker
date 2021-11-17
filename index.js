
const htmlName = document.getElementById("name");
const htmlTemp = document.getElementById("temp");
const htmlFeelsLike = document.getElementById("feelsLike");
const htmlHumidity = document.getElementById("humidity");
const htmlDescription = document.getElementById("description");
const htmlWindSpeed = document.getElementById("windSpeed");
const htmlIcon = document.getElementById("icon");

async function getWeather(name) {

    const cityName = name;

    const res = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c99451cb5566760aea5851ed0e24d5f4`);
    const data = await res.json();

    console.log(data);




     const weatherStation = {
        name: data.name,
        temp: data.main.temp,
        feelsLike:  data.main.feels_like,
        humidity: data.main.humidity,
        description: data.weather[0].main,
        subDescription: data.weather[0].description,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon
    } 

    console.log(weatherStation.temp);
    console.log(weatherStation.name);

    return weatherStation;
 
   
    
}

const paris = getWeather("Paris");

