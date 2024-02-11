import { clearError } from "./clearError";
import { showError } from "./showError";

export const validatePhone = (input) => {
  const value = input.value.trim();
  clearError(input);
  if (value === "") {
    showError(input, "Please enter your phone number");
    return false;
  }
  return true;
};