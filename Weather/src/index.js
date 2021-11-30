
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
      function displayCityweather(response) {
        let cityTemp = Math.round(response.data.main.temp);
        let cityName = response.data.name;
        let wDescription = response.data.weather[0].description;
        let feelsLike = Math.round(response.data.main.feels_like);
        let wIcon = response.data.weather[0].icon;
        let windSpeed = Math.round(response.data.wind.speed);
        let h1 = document.querySelector(".cityTemp");  
        h1.innerHTML= `${cityTemp}&#176; F`;
        let cityDescription = document.querySelector(".cityCondition");
        cityDescription.innerHTML=`<img src=http://openweathermap.org/img/wn/${wIcon}@2x.png> <br>${wDescription}<br> Feels Like: ${feelsLike}&#176; \xB0F <br> Wind Speed: ${windSpeed}MPH`;
          let searchedCity = document.querySelector("#cityChange");
          searchedCity.innerHTML = `${cityName}`;
        }
        
        function convertTemp(event){
          event.preventDefault();
         // let currentCityTemp = document.querySelector(".cityTemp");
          //currentCityTemp.document = `${farenheitCalc}`;
          //let currentCityDegrees = document.querySelector(".fLink");
          
            let farenheitCalc = document.querySelector(".cityTemp");
          //farenheitCalc.innerHTML = `${Math.round(h1.innerHTML* 1.8 + 32)}\xB0F`;
          farenheitCalc.innerHTML = `${Math.round(17* 1.8 + 32)}\xB0F`; 
           
          }
          
            function convertCelsius(event){
              event.preventDefault(); 
          
            let celsiusCalc = document.querySelector(".cityTemp");
            //celsiusCalc.innerHTML= (`${(Math.round(h1.innerHTML -32)/1.8)}\u00B0C`);
            celsiusCalc.innerHTML= (`${Math.round((63 -32)/1.8)}\u00B0C`);
        
            //let currentCityTemp = document.querySelector(".cityTemp");
              //currentCityTemp.document = `${celsiusCalc}`; 
         
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
axios.get(apiUrl).then(displayCityweather);

let submitform = document.querySelector("form");
submitform.addEventListener("submit", citySearch);

let a = document.querySelector("#fLink");
a.addEventListener("click", convertTemp);

let otherClass = document.querySelector("#cLink");
otherClass.addEventListener("click", convertCelsius);