
    function citySearch(event){
      event.preventDefault();
      let cName = document.querySelector(".form-control");
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
  let fDay = response.data.daily[0].dt*1000;
  let fSunrise = response.data.daily[0].sunrise*1000;
  let fSunset= response.data.daily[0].sunset*1000;
  let fHtemp = response.data.daily[0].temp.max;
  let fLtemp = response.data.daily[0].temp.min;
  let fwdesc = response.data.daily[0].weather[0].description;
  let fwicon = response.data.daily[0].weather[0].icon;

let daysofWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let forecastedDate = new Date(fDay);
let forecastedSunrise = new Date(fSunrise);
let forecastedSunset = new Date(fSunset);
let forecastedDay = daysofWeek[forecastedDate.getDay(fDay)];
let forecastedSRHour = forecastedSunrise.getHours(fSunrise);
let forecastedSSHour = forecastedSunset.getHours(fSunset);
  console.log(response) 
  console.log("fDay "+fDay)
  console.log("fSunrise "+fSunrise)
  console.log("fsunSet "+fSunset)
  console.log(`Hi Temp ${fHtemp}`) 
  console.log(`Low Temp ${fLtemp}`) 
  console.log(`Description ${fwdesc}`) 
  console.log(`Icon ${fwicon}`)
  console.log("forecastedDay "+forecastedDay)
  console.log("forecastedDate "+forecastedDate)
  console.log("forecastedSunrise "+forecastedSunrise)
  console.log(`forecastedSunrise Time ${forecastedSRHour}:${forecastedSunrise.getMinutes(fSunrise)}`)
  console.log("forecastedSunset "+forecastedSunset)
  console.log(`forecastedSunset Time ${forecastedSSHour}:${forecastedSunset.getMinutes(fSunset)}`)


}
    function convertTemp(event){
      event.preventDefault();          
      let farenheitCalc = document.querySelector(".cityTemp");
        farenheitCalc.innerHTML = `${fTemp}\xB0F`; 
     }
          
    function convertCelsius(event){
      event.preventDefault(); 
      let celsiusCalc = document.querySelector(".cityTemp");
      let makeitCelsius = Math.round((fTemp-32)/1.8);
      celsiusCalc.innerHTML= `${makeitCelsius} \u00B0C`;
      }
    
let monthsofYear = ["January","February","March","April","May","June","July","August","September","October","November","December"]
let daysofWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let now = new Date();
let currentMonth = monthsofYear[now.getMonth()];
let currentDay = daysofWeek[now.getDay()];
let currentHours = now.getHours();
let currentMinutes = now.getMinutes();
let currentDate = now.getDate();
let currentYear = now.getFullYear();
let currentTimeCalc = (`${currentDay}, ${currentMonth} ${currentDate}, ${currentYear} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

let a = document.querySelector("#fLink");
a.addEventListener("click", convertTemp);

let otherClass = document.querySelector("#cLink");
otherClass.addEventListener("click", convertCelsius);