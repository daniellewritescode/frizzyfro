

    
let submitform = document.querySelector("form");
submitform.addEventListener("submit", citySearch);

let userLocationb = document.querySelector(".btn-info");
userLocationb.addEventListener("click", findCoords);

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
axios.get(apiUrl).then(displayCityweather);
//let h1 = document.querySelector(".cityTempn")
//h1.innerHTML= `${cityTemp}`; 
//let cityTempvar = document.querySelector(h1.innerHTML);


function convertTemp(event){
  event.preventDefault();
  let currentCityTemp = document.querySelector(".cityTemp");
  //let currentCityDegrees = document.querySelector(".fLink");
  
    let farenheitCalc = document.querySelector(".cityTemp");
  //farenheitCalc.innerHTML = `${Math.round(h1.innerHTML* 1.8 + 32)}\xB0F`;
  farenheitCalc.innerHTML = `${Math.round(17* 1.8 + 32)}\xB0F`;
    currentCityTemp.document = `${farenheitCalc}`;
   
  }
  
    function convertCelsius(event){
      event.preventDefault();
      let currentCityTemp = document.querySelector(".cityTemp");
      //let currentCityDegrees = document.querySelector("#cLink");
    
    let celsiusCalc = document.querySelector(".cityTemp");
    //celsiusCalc.innerHTML= (`${(Math.round(h1.innerHTML -32)/1.8)}\u00B0C`);
    celsiusCalc.innerHTML= (`${Math.round((63 -32)/1.8)}\u00B0C`);
      currentCityTemp.document = `${celsiusCalc}`; 
 
    }

      let a = document.querySelector("a");
      a.addEventListener("click", convertTemp);

      let otherClass = document.querySelector("#cLink");
      otherClass.addEventListener("click", convertCelsius);


      function userCoordinates(position){
        let getLat = position.coords.latitude;
        let getLon = position.coords.longitude; 
        let apiKey = "f221ad1bc52d44e22fdecebbd007fb29";
        let units = "imperial";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${getLat}&lon=${getLon}&units=${units}&appid=${apiKey}`;
         
        axios.get(apiUrl).then(displayCityweather);
          }

      function displayCityweather(response) {
        let cityTemp = Math.round(response.data.main.temp);
        let cityName = response.data.name;
        let wDescription = response.data.weather[0].description;
        let feelsLike = Math.round(response.data.main.feels_like);
        let wIcon = response.data.weather[0].icon;
        let windSpeed = Math.round(response.data.wind.speed);
        let h1 = document.querySelector(".cityTempn");  
        let cityDescription = document.querySelector(".cityCondition");
        cityDescription.innerHTML=`${wDescription}<br> Feels like: ${feelsLike}&#176; \xB0F <br> Wind Speed:${windSpeed}mph <br> ${wIcon}`;
          let searchedCity = document.querySelector("#cityChange");
          searchedCity.innerHTML = `${cityName}`;
          h1.innerHTML= `${cityTemp}`;
        }
        
        function findCoords(){
        //becomes a function for the button listener so it doesn't trigger at page open
        navigator.geolocation.getCurrentPosition(userCoordinates);
        }
        function citySearch(event){
          event.preventDefault();
          //need to use call the api for results to display similar to the current button
          let cName = document.querySelector(".form-control");
          let searchedCity = document.querySelector("#cityChange");
          searchedCity.innerHTML = cName.value

          let apiKey = "f221ad1bc52d44e22fdecebbd007fb29";
          let units = "imperial";
          let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cName.value}&units=${units}&appid=${apiKey}`;
         
          axios.get(apiUrl).then(displayCityweather);

        }