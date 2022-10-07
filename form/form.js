const form = document.querySelector("form"),
  nameField = form.querySelector(".name-field"),
  nameInput =  nameField.querySelector(".name"),
  addressField = form.querySelector(".address-field"),
  addressInput =  addressField.querySelector(".address"),
  phoneField = form.querySelector(".phone-field"),
  phoneInput =  phoneField.querySelector(".phone"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password");

// Name Validation
function checkName() {
    const namePattern = /^[a-zA-Z\s]{1,100}$/;
    if (!nameInput.value.match(namePattern)) {
      return nameField.classList.add("invalid"); //adding invalid class if name value do not mathced with namePattern
    }
    nameField.classList.remove("invalid"); //removing invalid class if name value matched with namePattern
  }

// Address Validation
function checkAddress() {
  const addressPattern = /^[a-zA-Z\s0-9]{1,100}$/;
  if (!addressInput.value.match(addressPattern)) {
    return addressField.classList.add("invalid"); //adding invalid class if address value do not mathced with addressPattern
  }
  addressField.classList.remove("invalid"); //removing invalid class if address value matched with addressPattern
}

// Phone Number Validation
function checkPhone() {
  const phonePattern = /^\+?([ -]?\d+)+|\(\d+\)([ -]\d+)$/;
  if (!phoneInput.value.match(phonePattern)) {
    return phoneField.classList.add("invalid"); //adding invalid class if phone number value do not mathced with phonePattern
  }
  phoneField.classList.remove("invalid"); //removing invalid class if phone number value matched with phonePattern
}

// Email Validation
function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid"); //adding invalid class if email value do not mathced with emailPattern
  }
  emailField.classList.remove("invalid"); //removing invalid class if email value matched with emailPattern
}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});

// Password Validation
function createPass() {
  const passPattern = /^[A-Za-z0-9]\w{8,14}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
  }
  passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}

// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  checkName();
  checkAddress();
  checkPhone();
  checkEmail();
  createPass();

  //calling function on key up
  nameInput.addEventListener("keyup", checkName);
  addressInput.addEventListener("keyup", checkAddress);
  phoneInput.addEventListener("keyup", checkPhone);
  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);

  if (
    !nameField.classList.contains("invalid") &&
    !addressField.classList.contains("invalid")&&
    !phoneField.classList.contains("invalid")&&
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});
