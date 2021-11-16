const apiKey = "c99451cb5566760aea5851ed0e24d5f4"
let cityName = "London";

let weatherMap = {}; 

async function getWeather() {
    const res = await fetch (`api.openweathermap.org/data/2.5/weather?q={${cityName}}&appid={${apiKey}}`);
    const data = await res.json(); 

    console.log(data);

    weatherMap = data; 
    console.log(weatherMap);
}
getWeather();