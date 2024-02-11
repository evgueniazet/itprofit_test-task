export const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.add("error");
  let errorElement = formField.querySelector(".error-message");
  if (!errorElement) {
    errorElement = document.createElement("div");
    errorElement.className = "error-message";
    formField.appendChild(errorElement);
  }
  errorElement.innerText = message;
};
