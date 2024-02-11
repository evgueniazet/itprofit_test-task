import { clearError } from "./clearError";
import { showError } from "./showError";

export const validateEmail = (input) => {
  const value = input.value.trim();
  clearError(input);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value === "") {
    showError(input, "Please enter your email");
  } else if (!emailPattern.test(value)) {
    showError(input, "Please enter a valid email address");
  }
};
