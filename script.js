document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("registrationForm");
  var bookButton = form.querySelector("button[type='submit']");
  
  // Function to check if any form field is empty
  function checkEmptyFields() {
      var name = document.getElementById("name").value.trim();
      var from = document.getElementById("from").value.trim();
      var to = document.getElementById("to").value.trim();
      var date = document.getElementById("date").value.trim();
      var time = document.getElementById("time").value.trim();
      var phone = document.getElementById("phone").value.trim();
      var email = document.getElementById("email").value.trim();
      
      if (!name || !from || !to || !date || !time || !phone || !email) {
          return true; // At least one field is empty
      }
      return false; // No empty fields
  }
  
  // Function to validate email using regular expression
  function validateEmail(email) {
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  }

  // Function to display an alert message
  function showAlert(message) {
      alert(message);
  }

  // Function to handle form submission
  function handleFormSubmission(event) {
      event.preventDefault(); // Prevent the default form submission

      // Validate the form fields
      var name = document.getElementById("name").value.trim();
      var from = document.getElementById("from").value.trim();
      var to = document.getElementById("to").value.trim();
      var date = document.getElementById("date").value.trim();
      var time = document.getElementById("time").value.trim();
      var phone = document.getElementById("phone").value.trim();
      var email = document.getElementById("email").value.trim();
      
      if (checkEmptyFields()) {
          showAlert("Please fill in all the data to proceed booking.");
          return;
      }

      if (!validateEmail(email)) {
          showAlert("Please enter a valid email address.");
          return;
      }

      // Generate ticket number
      var ticketNumber = generateTicketNumber();

      // If all validations pass, construct and display the final message
      var finalMessage = "Mr. " + name + ", your ticket (Ticket Number: " + ticketNumber + ") has been successfully booked from " + from + " to " + to + ". Thank you!";
      showAlert(finalMessage);
      form.reset(); // Reset the form fields
  }

  // Event listener for form submission
  form.addEventListener("submit", handleFormSubmission);

  // Event listener for the book button click
  bookButton.addEventListener("click", function(event) {
      if (checkEmptyFields()) {
          event.preventDefault(); // Prevent default form submission
          showAlert("Please fill in all the data to proceed booking.");
      }
  });
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

  // Check if ticketNumber is empty
  if (!ticketNumber.trim()) {
      alert("Enter your ticket number.");
      return; // Exit the function early
  }

  // If ticketNumber is not empty, proceed with cancellation
  alert(pname + " Your Ticket number " + ticketNumber + " has been Cancelled.");
}



document.addEventListener('DOMContentLoaded', function() {
  var loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Example check for valid credentials (replace with your authentication logic)
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === "admin@mail.com" && password === "admin") {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to index.html after successful login
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
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

      // Check if any field is empty
      if (!name || !email || !password || !confirmPassword) {
          alert("Please fill in all fields.");
          return; // Exit function if any field is empty
      }

      if (password !== confirmPassword) {
          alert("Your Passwords don't match. Please try again.");
      } else {
          alert("Hi " + name + "! Thanks for signing up. Welcome to our website.");
          window.location.href = "login.html"; // Redirect to login page
      }
  });
});
