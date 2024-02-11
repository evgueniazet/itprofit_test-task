export const clearFormFields = () => {
  document.querySelectorAll("input, textarea").forEach((field) => {
    field.value = "";
  });
};
