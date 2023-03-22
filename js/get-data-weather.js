import { cleanHTML } from "./clean-html.js";
import { showError } from "./show-error.js";
import { spinnerShow } from "./spinner.js";
import { showResult } from "./show-result.js";

export function getDataWeather(url) {
  spinnerShow(true);

  setTimeout(() => {
    fetch(url)
      .then((res) => {
        cleanHTML();
        spinnerShow(false);
        return res.json();
      })
      .then((data) => showResult(data))
      .catch((e) => showError("city dont found"));
  }, 3000);
}
