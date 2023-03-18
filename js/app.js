const form = document.querySelector("#formulary");
const select = document.querySelector("#pais");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", getweather);
});

function getweather(e) {
  e.preventDefault();

  const city = document.querySelector("#city").value;

  if (city === "") {
    console.log("the city cannot be empty");
    return;
  }

  const apyKey = "bba089efbd03cad9d80398e3aae7cd9b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apyKey}`;

  getDataWeather(url);
}

function getDataWeather(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
}
