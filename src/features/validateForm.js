import { validateEmail } from "./validateEmail";
import { validateName } from "./validateName";
import { validatePhone } from "./validatePhone";
import { validateMessage } from "./validateMessage";

export const validateForm = (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  validateName(nameInput);
  validateEmail(emailInput);
  validatePhone(phoneInput);
  validateMessage(messageInput);
};
