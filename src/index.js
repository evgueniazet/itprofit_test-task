import "./styles.scss";
import Inputmask from "inputmask";
import { validateForm } from "./features/validateForm";
import { validateEmail } from "./features/validateEmail";
import { validateName } from "./features/validateName";
import { validatePhone } from "./features/validatePhone";
import { validateMessage } from "./features/validateMessage";

const form = document.querySelector("form");

let formSubmitted = false;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm(event);
  formSubmitted = true;
});

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

nameInput.addEventListener("input", () => {
  if (formSubmitted) {
    validateName(nameInput);
  }
});

emailInput.addEventListener("input", () => {
  if (formSubmitted) {
    validateEmail(emailInput);
  }
});

phoneInput.addEventListener("input", () => {
  if (formSubmitted) {
    validatePhone(phoneInput);
  }
});

messageInput.addEventListener("input", () => {
  if (formSubmitted) {
    validateMessage(messageInput);
  }
});

const phoneMask = new Inputmask({
  mask: "+7 (999) 999-99-99",
  placeholder: "+7 (___) ___-__-__",
});

phoneMask.mask(phoneInput);
