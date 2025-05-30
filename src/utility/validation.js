// validation.js
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[A-Za-z]+$/;
const phoneRegex = /^[0-9]{10}$/;
const phone =  /^[0-9]{10}$/;

export const validateForm = (field, value) => {
  let error = "";

  switch (field) {
    case "email":
      if (!emailRegex.test(value)) {
        error = "Invalid email format";
      }
      break;
    case "firstName":
    case "lastName":
      if (!nameRegex.test(value)) {
        error = "Only letters allowed";
      }
      break;
    case "phone":
      if (!phoneRegex.test(value)) {
        error = "Phone number must be 10 digits";
      }
      break;
    default:
      break;
  }

  return error;
};