document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("registrationForm");
  
  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
      
      // Validate the form fields
      var name = document.getElementById("name").value.trim();
      var age = document.getElementById("age").value.trim();
      var from = document.getElementById("from").value.trim();
      var to = document.getElementById("to").value.trim();
      var date = document.getElementById("date").value.trim();
      var time = document.getElementById("time").value.trim();
      var phone = document.getElementById("phone").value.trim();
      var email = document.getElementById("email").value.trim();
      
      // Clear previous error messages
      clearErrorMessages();
      
      // Check for empty fields
      if (!name) {
          displayErrorMessage("nameError", "Please enter your name.");
          return;
      }
      if (!age) {
          displayErrorMessage("ageError", "Please enter your age.");
          return;
      }
      if (!from) {
          displayErrorMessage("fromError", "Please enter the departure location.");
          return;
      }
      if (!to) {
          displayErrorMessage("toError", "Please enter the destination.");
          return;
      }
      if (!date) {
          displayErrorMessage("dateError", "Please select a date.");
          return;
      }
      if (!time) {
          displayErrorMessage("timeError", "Please select a time.");
          return;
      }
      if (!phone) {
          displayErrorMessage("phoneError", "Please enter your phone number.");
          return;
      }
      if (!email) {
          displayErrorMessage("emailError", "Please enter your email address.");
          return;
      }
      
      // Validate email format
      if (!validateEmail(email)) {
          displayErrorMessage("emailError", "Please enter a valid email address.");
          return;
      }

      // If all validations pass, construct and display the final message
      var finalMessage = "Mr. " + name + ", your ticket has been successfully booked from " + from + " to " + to + ". Thank you!";
      alert(finalMessage);
      form.reset(); // Reset the form fields
  });
  
  // Function to validate email using regular expression
  function validateEmail(email) {
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  }

  // Function to display an error message
  function displayErrorMessage(elementId, message) {
      var errorElement = document.getElementById(elementId);
      errorElement.textContent = message;
  }

  // Function to clear all error messages
  function clearErrorMessages() {
      var errorElements = document.querySelectorAll(".error-message");
      errorElements.forEach(function(element) {
          element.textContent = "";
      });
  }
});




// Ticket Number Generation
var ticketNumbers = [];

function generateTicketNumber() {
  var ticketNumber;
  do {
      ticketNumber = Math.floor(10000000 + Math.random() * 90000000);
  } while (ticketNumbers.includes(ticketNumber));
  ticketNumbers.push(ticketNumber);
  return ticketNumber;
}

// Ticket Number Cancellation

function deleteTicket() {
  var pname = document.getElementById("pname").value;
  var ticketNumber = document.getElementById("ticketNumber").value;

  // Reset error message
  document.getElementById('ticketNumberError').textContent = '';

  // Check if ticketNumber is empty
  if (!ticketNumber.trim()) {
      document.getElementById('ticketNumberError').textContent = 'Enter your ticket details.';
      return; // Exit the function early
  }

  // If ticketNumber is not empty, proceed with cancellation
  alert(pname + " Your Ticket number " + ticketNumber + " has been Cancelled.");
}


// Login

document.addEventListener('DOMContentLoaded', function() {
  var loginForm = document.getElementById('loginForm');
  var loginButton = document.getElementById('loginButton');
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');
  var emailError = document.getElementById('emailError');
  var passwordError = document.getElementById('passwordError');

  // Add event listener to the login button
  loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default button click behavior

    // Get email and password values
    var email = emailInput.value;
    var password = passwordInput.value;

    // Check if email and password are not empty
    if (!email || !password) {
      if (!email) {
        showError(emailInput, emailError, "Please enter your email.");
      }
      if (!password) {
        showError(passwordInput, passwordError, "Please enter your password.");
      }
      return; // Exit function if email or password is empty
    }

    // Example check for valid credentials (replace with your authentication logic)
    if (email === "admin@mail.com" && password === "admin") {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to index.html after successful login
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });

  // Function to show error message and change input border color
  function showError(input, errorElement, message) {
    input.classList.add('error'); // Add error class to input field
    errorElement.textContent = message; // Set error message
  }
});


// Logout Function
document.addEventListener('DOMContentLoaded', function() {
  var logoutLink = document.getElementById('logout');

  // Add click event listener to the logout link
  logoutLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Redirect to the login page
    window.location.href = "login.html";
  });
});

// Signup Page

document.addEventListener('DOMContentLoaded', function () {
  var signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', function (event) {
      event.preventDefault();

      var name = document.getElementById('sname').value;
      var email = document.getElementById('semail').value;
      var password = document.getElementById('spassword').value;
      var confirmPassword = document.getElementById('sconfirmpassword').value;

      // Reset error messages
      document.querySelectorAll('.error-message').forEach(function (error) {
          error.textContent = '';
      });

      // Check if any field is empty
      if (!name) {
          document.getElementById('nameError').textContent = 'Please enter your name.';
          return;
      }

      if (!email) {
          document.getElementById('emailError').textContent = 'Please enter your email address.';
          return;
      }

      // Validate email using regular expression
      if (!validateEmail(email)) {
          document.getElementById('emailError').textContent = 'Please enter a valid email address.';
          return;
      }

      if (!password) {
          document.getElementById('passwordError').textContent = 'Please enter your password.';
          return;
      }

      if (!confirmPassword) {
          document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
          return;
      }

      if (password !== confirmPassword) {
          document.getElementById('confirmPasswordError').textContent = "Your Passwords don't match. Please try again.";
          return;
      }

      // If all validations pass
      alert("Hi " + name + "! Thanks for signing up. Welcome to our website.");
      window.location.href = "login.html"; // Redirect to login page
  });

  // Function to validate email using regular expression
  function validateEmail(email) {
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  }
});

