// ========================
// PART 1: EVENT HANDLING
// ========================

// Click Event
document.getElementById("clickBtn").addEventListener("click", () => {
  document.getElementById("clickMessage").textContent = "Button Clicked! 🎯";
});

// Mouseover Event
document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").style.backgroundColor = "lightblue";
});
document.getElementById("hoverBox").addEventListener("mouseout", () => {
  document.getElementById("hoverBox").style.backgroundColor = "lightgray";
});

// ========================
// PART 2: INTERACTIVE ELEMENTS
// ========================

// Light/Dark Mode Toggle
document.getElementById("toggleThemeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let counter = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});

// ========================
// PART 3: FORM VALIDATION
// ========================
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop default submission

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.getElementById("formSuccess").textContent = "";

  let isValid = true;

  // Get field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email validation (regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  // Password validation (min 6 chars)
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // If valid, show success
  if (isValid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully! ✅";
    document.getElementById("signupForm").reset();
  }
});
