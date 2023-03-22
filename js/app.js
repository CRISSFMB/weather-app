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
    name,
    main: { temp, temp_max, temp_min },
  } = data;

  const tempNormal = kevinTodeDegrees(temp);
  const tempMaximun = kevinTodeDegrees(temp_max);
  const tempMinimun = kevinTodeDegrees(temp_min);

  const cityName = document.createElement("p");
  cityName.textContent = `weather in ${name}`;
  cityName.classList.add("font-bold", "text-2xl");

  const tempNormalParagraph = document.createElement("p");
  tempNormalParagraph.classList.add("font-bold", "text-6xl");
  tempNormalParagraph.innerHTML = `${tempNormal} &#8451`;

  const tempMaxParagraph = document.createElement("p");
  tempMaxParagraph.classList.add("text-xl");
  tempMaxParagraph.innerHTML = `Max: ${tempMaximun} &#8451`;

  const tempMinParagraph = document.createElement("p");
  tempMinParagraph.classList.add("text-xl");
  tempMinParagraph.innerHTML = `Min: ${tempMinimun} &#8451`;

  const div = document.createElement("div");
  div.classList.add("text-center", "text-white");

  div.appendChild(tempNormalParagraph);
  div.appendChild(tempMaxParagraph);
  div.appendChild(tempMinParagraph);
  div.appendChild(cityName);

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
