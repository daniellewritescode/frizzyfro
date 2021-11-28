

    
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

function convertTemp(event){
  event.preventDefault();
  let currentCityTemp = document.querySelector(".cityTemp");
  let currentCityDegrees = document.querySelector(".fLink");
  
  console.log(currentCityDegrees)
  
    let farenheitCalc = document.querySelector(".cityTemp");
  farenheitCalc.innerHTML = `${Math.round(17* 1.8 + 32)}\xB0F`;
    currentCityTemp.document = `${farenheitCalc}`;
   
  }
  
    function convertCelsius(event){
      event.preventDefault();
      let currentCityTemp = document.querySelector(".cityTemp");
      let currentCityDegrees = document.querySelector("#cLink");
      console.log(currentCityDegrees)
      
    let celsiusCalc = document.querySelector(".cityTemp");
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
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
         
        axios.get(apiUrl).then(displayCityweather);
          }
      
  /*         function displayCityweather(response) {
      let cityTemp = Math.round(response.data.main.temp);
      let cityName = response.data.name;
      console.log(cityTemp)
      console.log(cityName)
      let h1 = document.querySelector("h1");
      h1.innerHTML= `The current temperature is ${cityTemp}`;
      }
      
      navigator.geolocation.getCurrentPosition(userCoordinates);

      function citySearch(event){
        event.preventDefault();
        let cName = document.querySelector(".form-control");
        let searchedCity = document.querySelector("#cityChange");
        searchedCity.innerHTML = cName.value
      } */

      function displayCityweather(response) {
        let cityTemp = Math.round(response.data.main.temp);
        let cityName = response.data.name;
        let cName = cityName
        let h1 = document.querySelector(".cityTempn");  
        //let cityName = document.querySelector(".form-control");
          let searchedCity = document.querySelector("#cityChange");
          searchedCity.innerHTML = `${cityName}`;
          h1.innerHTML= `${cityTemp}`;
           //let searchedCity = document.querySelector("#cityChange");
          //searchedCity.innerHTML = cName.value 
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

        /* Requirements: When a user searches for a city (example: New York), it should 
          1. display the name of the city on the result page
          2. display the current temperature of the city.

        Bonus point:
        Add a Current Location button using the Geolocation API. 
        display the city and current temperature */