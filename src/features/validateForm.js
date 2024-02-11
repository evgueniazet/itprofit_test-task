import { validateEmail } from "./validateEmail";
import { validateName } from "./validateName";
import { validatePhone } from "./validatePhone";
import { validateMessage } from "./validateMessage";
import { submitForm } from "./submitForm";

export const validateForm = (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  let formIsValid = true;

  formIsValid = validateName(nameInput) && formIsValid;
  formIsValid = validateEmail(emailInput) && formIsValid;
  formIsValid = validatePhone(phoneInput) && formIsValid;
  formIsValid = validateMessage(messageInput) && formIsValid;

  if (formIsValid) {
    const formData = new FormData();
    formData.append("name", nameInput.value);
    formData.append("email", emailInput.value);
    formData.append("phone", phoneInput.value);
    formData.append("message", messageInput.value);

    submitForm(formData);
  }
};
