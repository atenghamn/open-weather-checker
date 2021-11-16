
let cityName = "London";

async function getWeather(name) {

    const cityName = name;

    const res = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c99451cb5566760aea5851ed0e24d5f4`);
    const data = await res.json(); 


   const weatherStation = {
        temp:  data.main.temp,
        feelsLike:  data.main.feels_like,
        humidity: data.main.humidity,
        description: data.weather[0].main,
        subDescription: data.weather[0].description,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon
    }

    return weatherStation;
}

const paris = getWeather("Paris");


