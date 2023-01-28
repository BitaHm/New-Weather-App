let apiKey = "db76eb94032db381b6033ef59e08505b";

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-field");
  city = city.value;
  let h1 = document.querySelector("#city-name");
  h1.innerHTML = city;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=db76eb94032db381b6033ef59e08505b&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
/* API Keys didnt work
function getForecast(coordinates){
  let apiKey = "8161b4309ee03faae957729ba7104797";
  let apiURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid${apiKey}&units=metric`
  axios.get(apiURL).then(showTemperature);
}

*/
function showTemperature(response) {
    console.log(response)

  celesiusTemp = Math.round(response.data.main.temp);
  feelsLikeC = Math.round(response.data.main.feels_like);
  maxC = Math.round(response.data.main.temp_max);
  minC = Math.round(response.data.main.temp_min);
  /// data select
  let temperature = Math.round(celesiusTemp);
  let humidity = Math.round(response.data.main.humidity);
  let high = Math.round(response.data.main.temp_max);
  let low = Math.round(response.data.main.temp_min);
  let wind = Math.round(response.data.wind.speed);
  let feelsLike = Math.round(response.data.main.feels_like)
  /// element select
  let temperatureElement = document.querySelector("#current-temp");
  let description = document.querySelector("#weather-description");
  let windSpeedElement = document.querySelector("#wind-speed");
  let airHumidityElement = document.querySelector("#air-humidity");
  let feelsLikeElement = document.querySelector("#feels-like");
  let max = document.querySelector("#high");
  let min = document.querySelector("#low");
  let iconElement = document.querySelector("#current-icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  /// modify
  temperatureElement.innerHTML = `${temperature}°C`;
  description.innerHTML = response.data.weather[0].description.toUpperCase();
  windSpeedElement.innerHTML = `${wind} km/hr`;
  airHumidityElement.innerHTML = `${humidity}%`;
  feelsLikeElement.innerHTML = `${feelsLike}°C`;
  max.innerHTML = `${high}°C`;
  min.innerHTML = `${low}°C`;

  
}

let searchCity = document.querySelector("#searchButton");
searchCity.addEventListener("click", search);

// Day & Hour
let today = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[today.getDay()];
let hour = today.getHours();
let minutes = today.getMinutes();

let newDayTime = document.querySelector("#dayTime");
newDayTime.innerHTML = `${day} ${hour}:${minutes}`;

/// C to F

let faranhait = document.querySelector("#faranhait");

function convertToF(event) {
  event.preventDefault();
  celesius.classList.remove("active1");
  faranhait.classList.add("active1");
  let fTemp = Math.round(celesiusTemp * 9) / 5 + 32;
  let feelsToF = Math.round(feelsLikeC * 9) / 5 + 32;
  let maxToF = Math.round(maxC * 9) / 5 + 32;
  let minToF = Math.round(minC * 9) / 5 + 32;
  let tempToF = document.querySelector("#current-temp");
  let feelsTof = document.querySelector("#feels-like");
  let maxTof = document.querySelector("#high");
  let minTof = document.querySelector("#low");
  tempToF.innerHTML = Math.round(fTemp) + '°F';
  feelsTof.innerHTML = Math.round(feelsToF) + '°F';
  maxTof.innerHTML = Math.round(maxToF) + '°F';
  minTof.innerHTML = Math.round(minToF) + '°F';
}

let celesiusTemp = null;
let feelsLikeC = null;
let maxC = null;
let minC = null;

faranhait.addEventListener("click", convertToF);


let celesius = document.querySelector("#celecius");


function convertToCelesius(event){
    event.preventDefault();
    celesius.classList.add("active1");
    faranhait.classList.remove("active1");
    let tempToC = document.querySelector("#current-temp");
    let feelsToC = document.querySelector("#feels-like");
    let maxToC = document.querySelector("#high");
    let minToC = document.querySelector("#low");
    tempToC.innerHTML = Math.round(celesiusTemp)+ '°C';
    feelsToC.innerHTML = Math.round(feelsLikeC)+ '°C';
    maxToC.innerHTML = Math.round(maxC)+ '°C';
    minToC.innerHTML = Math.round(minC)+ '°C';
}

celesius.addEventListener("click", convertToCelesius)



//showTemperature();*/
