document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("registrationForm");
  var bookButton = form.querySelector("button[type='submit']");
  
  // Function to check if any form field is empty
  function checkEmptyFields() {
      var fields = form.querySelectorAll("input");
      for (var i = 0; i < fields.length; i++) {
          if (fields[i].value.trim() === "") {
              return true; // At least one field is empty
          }
      }
      return false; // No empty fields
  }
  
  // Function to validate email using regular expression
  function validateEmail(email) {
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  }
  
  
  
  bookButton.addEventListener("click", function(event) {
      if (checkEmptyFields()) {
          event.preventDefault(); // Prevent default form submission
          alert("Please fill in all the data to proceed booking.");
      }
      else {
          var emailField = document.getElementById("email");
          var email = emailField.value.trim();
          if (!validateEmail(email)) {
              event.preventDefault(); // Prevent default form submission
              alert("Please enter a valid email address.");
          }
          
      }
  });
  
  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
      
      // Validate the form fields
      var name = document.getElementById("name").value;
      var from = document.getElementById("from").value;
      var to = document.getElementById("to").value;
      var phone = document.getElementById("phone").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var rePassword = document.getElementById("re-password").value;
      
      if (name.trim() === "" || from.trim() === "" || to.trim() === "" || phone.trim() === "" || email.trim() === "" || password.trim() === "" || rePassword.trim() === "") {
          alert("Please fill in all the data to proceed booking.");
          return;
      }
      if (password !== rePassword) {
          alert("Passwords do not match.");
          return;
      }
      
      // If all validations pass, construct and display the final message
      var finalMessage = "Mr. " + name + " Your Ticket has been Successfully Booking from " + from + " to " + to + "Thanks You!";
      alert(finalMessage);
      form.reset(); // Reset the form fields
  });
});

// Ticket Number Generation
var ticketNumbers = [];

        function generateTicketNumber() {
            var ticketNumber;
            do {
                ticketNumber = Math.floor(10000000 + Math.random() * 90000000);
            } while (ticketNumbers.includes(ticketNumber));
            return ticketNumber;
        }

        function bookTicket() {
            var ticketNumber = generateTicketNumber();
            ticketNumbers.push(ticketNumber);
            alert("Your unique ticket number is: " + ticketNumber);
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

