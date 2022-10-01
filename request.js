
let getWeather = (data) => {
   
    let weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${data}&APPID=fe2e25be076abfb7b948ebb4743d71d2` ;
}

let getWeatherDataValue = () => {
    let enteredData = document.getElementById('data').value;

    // console.log(enteredData);
  
    getWeather(enteredData);


}



