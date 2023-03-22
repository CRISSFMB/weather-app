import { getDataWeather } from "./get-data-weather.js";
import { showError } from "./show-error.js";

export function getweather(e) {
  e.preventDefault();

  const city = document.querySelector("#city").value;

  if (city === "") {
    showError("please write a city");
    return;
  }

  const apyKey = "bba089efbd03cad9d80398e3aae7cd9b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apyKey}`;

  getDataWeather(url);
}
