
async function getWeather(name) {

    const cityName = name;

    const res = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c99451cb5566760aea5851ed0e24d5f4`);
    const data = await res.json();

    console.log(data);
    console.log(data.weather[0].description);

    place = data;


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

    return weatherStation;    
}





const htmlName = document.getElementById("name");
const htmlTemp = document.getElementById("temp");
const htmlFeelsLike = document.getElementById("feelsLike");
const htmlHumidity = document.getElementById("humidity");
const htmlDescription = document.getElementById("description");
const htmlSubDescripton = document.getElementById("subDescription");
const htmlWindSpeed = document.getElementById("windSpeed");
const htmlIcon = document.getElementById("icon");


// Get a new city
const submitCity = document.getElementById("citySetter"); // Link our HTMLbutton

submitCity.addEventListener("click", async () => {
    // Call the api and get an array of cards + response data
    const city = document.getElementById("cityTextField").value;



    const newCity = getWeather(city);

    const iconURL = (await newCity).icon;
    console.log(iconURL);


    htmlName.innerText = (await newCity).name;
    htmlTemp.innerText = "The temperature is currently " + (await newCity).temp + "°C";
    htmlFeelsLike.innerText = "It feels like " + (await newCity).feelsLike + "°C";
    htmlHumidity.innerText = "Humidity today is at " + (await newCity).humidity + "%";
    htmlWindSpeed.innerText = "With a windspeed of " + (await newCity).windSpeed + "m/s";
    htmlDescription.innerText = "Overall the weather is " + (await newCity).description.toLowerCase();
    htmlSubDescripton.innerText = "Containing " + (await newCity).subDescription;
    htmlIcon.setAttribute("src", `http://openweathermap.org/img/wn/${iconURL}@2x.png`); 
   
})
