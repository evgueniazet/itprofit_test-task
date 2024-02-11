import { clearFormFields } from "./clearFormFields";

export const submitForm = (formData) => {
  return fetch("http://localhost:9090/api/registration", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      clearFormFields();
      showSuccessMessage(data.message);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
};

const showSuccessMessage = (message) => {
  const successMessage = document.getElementById("successMessage");
  const successMessageText = successMessage.querySelector(
    ".success-message-text"
  );
  successMessageText.innerText = message;
  successMessage.classList.add("active");
};
