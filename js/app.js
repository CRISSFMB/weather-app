const form = document.querySelector("#formulary");
const select = document.querySelector("#pais");
const resultado = document.querySelector("#resultado");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", getweather);
});

function getweather(e) {
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

function getDataWeather(url) {
  fetch(url)
    .then((res) => {
      cleanHTML();
      return res.json();
    })
    .then((data) => showResult(data))
    .catch((e) => console.log(e));
}

function showResult(data) {
  console.log(data);
  const {
    main: { temp, temp_max, temp_min },
  } = data;

  const tempNormal = kevinTodeDegrees(temp);
  const tempMax = kevinTodeDegrees(temp_max);
  const tempMin = kevinTodeDegrees(temp_min);

  const paragraph = document.createElement("p");
  paragraph.classList.add("font-bold", "text-6xl");
  paragraph.innerHTML = `${tempNormal} &#8451`;

  const div = document.createElement("div");
  div.classList.add("text-center", "text-white");
  div.appendChild(paragraph);
  const resultado = document.querySelector("#resultado");
  resultado.append(div);
}

function kevinTodeDegrees(deg) {
  return parseInt(deg - 273.15);
}

function showError(msg) {
  const paragraph = document.createElement("p");
  paragraph.textContent = msg;
  paragraph.classList.add(
    "error",
    "bg-red-100",
    "border-red-400",
    "text-red-700",
    "px-4",
    "py-3",
    "rounded",
    "max-w-md",
    "mx-auto",
    "mt-6",
    "text-center"
  );

  const ExistError = document.querySelector(".error");

  if (!ExistError) {
    const container = document.querySelector(".container");
    container.appendChild(paragraph);
    setTimeout(() => {
      paragraph.remove();
    }, 3000);
    return;
  }
}

function cleanHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}
