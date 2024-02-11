export const clearError = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  const errorElement = formField.querySelector(".error-message");
  if (errorElement) {
    formField.removeChild(errorElement);
  }
};
