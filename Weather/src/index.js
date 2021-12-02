
    function citySearch(event){
      event.preventDefault();
      let cName = document.querySelector(".form-control-sm");
      let searchedCity = document.querySelector("#cityChange");
      searchedCity.innerHTML = cName.value

      let apiKey = "f221ad1bc52d44e22fdecebbd007fb29";
      let units = "imperial";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cName.value}&units=${units}&appid=${apiKey}`;
      
      axios.get(apiUrl).then(displayCityweather);

    }
    function displayCityweather(response) {
      let cityTemp = Math.round(response.data.main.temp);
      let cityName = response.data.name;
      let wDescription = response.data.weather[0].description;
      let feelsLike = Math.round(response.data.main.feels_like);
      let wIcon = response.data.weather[0].icon;
      let windSpeed = Math.round(response.data.wind.speed); 
      let lon = response.data.coord.lon;
      let lat = response.data.coord.lat;    
      let h1 = document.querySelector(".cityTemp");  
        h1.innerHTML= `${cityTemp}&#176; F`;
      let cityDescription = document.querySelector(".cityCondition");
        cityDescription.innerHTML=`<img src=http://openweathermap.org/img/wn/${wIcon}@2x.png> <br>${wDescription}<br> Feels Like: ${feelsLike}&#176; \xB0F <br> Wind Speed: ${windSpeed}MPH`;
      let searchedCity = document.querySelector("#cityChange");
          searchedCity.innerHTML = `${cityName}`;
          fTemp = Math.round(response.data.main.temp);

      cityCoordinates(lon,lat);
     }
        
function cityCoordinates(lon,lat){
  let apiKey = "f221ad1bc52d44e22fdecebbd007fb29";
      let units = "imperial";
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=${units}&appid=${apiKey}`;
      axios.get(apiUrl).then(displayCityForecast);
  
}
function displayCityForecast(response){
    let forecast = response.data.daily
    let fiveDayForecast = document.querySelector(".forecaststuff");
    
    let forecastHTML = `<div class="row">`;

    forecast.forEach(function (forecastedDow, index) {
      let fDow = forecastedDow.dt*1000;
      let forecastedDate = new Date((fDow));
      let daysofWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      let forecastedDay = daysofWeek[forecastedDate.getDay(forecastedDow)];
      let fSunrise = forecastedDow.sunrise*1000;
      let fSunset= forecastedDow.sunset*1000;
    let forecastedSunrise = new Date(fSunrise);
    let forecastedSunset = new Date(fSunset);
    let fSRHour = forecastedSunrise.getHours(fSunrise);
    let fSSHour = forecastedSunset.getHours(fSunset);
    let fSRMin = forecastedSunrise.getMinutes(fSunrise);
    let fSSMin = forecastedSunset.getMinutes(fSunset);

      if (index < 5) {
        forecastHTML =
          forecastHTML +
          `
          <div class="col forecast">${forecastedDay} <br>
          <img
          src="http://openweathermap.org/img/wn/${
            forecastedDow.weather[0].icon
          }@2x.png"
          alt=""
          width="42"
        /><br>
            <span> High: ${Math.round(
              forecastedDow.temp.max
            )}° <br>
            Low: ${Math.round(
              forecastedDow.temp.min
            )}° <br>
            Sunrise: ${fSRHour}:${fSRMin} <br>
            Sunset: ${fSSHour}:${fSSMin}
            </span>
          </div>
    `;
            }
    forecastHTML = forecastHTML + `</div>`;
    fiveDayForecast.innerHTML = forecastHTML;
   
  })
    
};  


    
let monthsofYear = ["January","February","March","April","May","June","July","August","September","October","November","December"]
let daysofWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let now = new Date();
let currentMonth = monthsofYear[now.getMonth()];
let currentDay = daysofWeek[now.getDay()];
let currentHours = now.getHours();
let currentMinutes = now.getMinutes();
let currentDate = now.getDate();
let currentYear = now.getFullYear();
let currentTimeCalc = (`${currentDay}, ${currentMonth} ${currentDate}, ${currentYear} <br>
${currentHours}:${currentMinutes} ET`);
let currentTime = document.querySelector(".timeofDay");
currentTime.innerHTML = `${currentTimeCalc}`;
let apiKey = "f221ad1bc52d44e22fdecebbd007fb29";
let units = "imperial";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&units=${units}&appid=${apiKey}`;
let fTemp = null;
axios.get(apiUrl).then(displayCityweather);

let submitform = document.querySelector("form");
submitform.addEventListener("submit", citySearch);
