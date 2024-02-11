import { clearError } from "./clearError";
import { showError } from "./showError";

export const validateName = (input) => {
  const value = input.value.trim();
  clearError(input);
  if (value === "") {
    showError(input, "Please enter your name");
    return false;
  }
  return true;
};
