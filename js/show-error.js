export function showError(msg) {
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
