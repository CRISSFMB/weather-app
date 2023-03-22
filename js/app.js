import { getweather } from "./get-weather.js";
import { form } from "./selectors.js";

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", getweather);
});
