import { clearError } from "./clearError";
import { showError } from "./showError";

export const validateMessage = (input) => {
  const value = input.value.trim();
  clearError(input);
  if (value === "") {
    console.log("error message");
    showError(input, "Please enter a message");
  }
};
