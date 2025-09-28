// FORM VALIDATION START HERE

const form = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Acess html element
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const subBtn = document.querySelector(".submit");
  const error = document.getElementsByClassName("error");
  // for alert the sucess
  Array.from(error).forEach((e) => {
    e.textContent = "";
  });
  let isValid = true;

  // Regular Expressions
  const namePattern = /^[A-Za-z\s]{3,20}$/;
  const contactPattern = /^[0-9]{10}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // name condition

  if (!namePattern.test(name)) {
    document.getElementById("nameError").textContent =
      "The name field must be required, have 3–20 characters, contain only letters and spaces, and should not include numbers orspecial characters ";
    isValid = false;
  }

  if (!contactPattern.test(contact)) {
    document.getElementById("contactError").textContent =
      " Must be required, exactly 10 digits, and only numbers allowed.";
    isValid = false;
  }

  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "  Must be required, follow proper email format (example@domain.com ), and should not contain spaces.";
    isValid = false;
  }

  if (!passwordPattern.test(password)) {
    document.getElementById("passwordError").textContent =
      " Must be required, at least 8 characters, include one uppercase, one lowercase, one number, and one special character.";
    isValid = false;
  }

  if (password != confirmPassword) {
    document.getElementById("confirm-passwordError").textContent =
      "Please check the password not matched check it !";
    isValid = false;
  }

  // Data saved
  let savedData = [];

  // For errors
if (isValid) {
  let formClass = document.getElementsByClassName("formClass");
  Array.from(formClass).forEach((i) => {
  savedData.push(i.value);
  });

  // Clear all error messages
  Array.from(error).forEach((err) => {
    err.textContent = "";
  });

  console.log(savedData);
  alert("Congratulations! You successfully logged in and are part of a new tech world");
};

});
// FORM VALIDATION END HERE
