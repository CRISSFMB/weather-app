export function spinnerShow(isLoading) {
  const spinner = document.querySelector(".sk-fading-circle");
  if (isLoading) {
    spinner.classList.remove("hidden");
  } else {
    spinner.classList.add("hidden");
  }
}
