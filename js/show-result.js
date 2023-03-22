import { kevinTodeDegrees } from "./kelvin-to-degrees.js";

export function showResult(data) {
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
