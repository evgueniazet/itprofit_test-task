import "./styles.scss";
import Inputmask from "inputmask";
import { validateForm } from "./features/validateForm";
import { validateEmail } from "./features/validateEmail";
import { validateName } from "./features/validateName";
import { validatePhone } from "./features/validatePhone";
import { validateMessage } from "./features/validateMessage";

const validateInput = (input, validator) => {
  if (formSubmitted) {
    validator(input);
  }
};

const addInputValidationListener = (input, validator) => {
  input.addEventListener("input", () => validateInput(input, validator));
};

const form = document.querySelector("form");
const modalWindowBtn = document.querySelector(".modal-window-btn");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-btn");

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

addInputValidationListener(nameInput, validateName);
addInputValidationListener(emailInput, validateEmail);
addInputValidationListener(phoneInput, validatePhone);
addInputValidationListener(messageInput, validateMessage);

const phoneMask = new Inputmask({
  mask: "+7 (999) 999-99-99",
  placeholder: "+7 (___) ___-__-__",
});
phoneMask.mask(phoneInput);

modalWindowBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});
