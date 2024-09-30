// Greet the user with a personalized message
document.getElementById('greetButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const greetingDisplay = document.getElementById('greetingDisplay');
    
    if (name) {
        greetingDisplay.textContent = `Hello, ${name}! Welcome to Company X!`;
    } else {
        greetingDisplay.textContent = 'Please enter your name.';
    }
});

// Cancel button functionality to clear form inputs
document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('feedback').value = '';
});

// Handle form submission
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission behavior

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    // Simple validation to check if fields are filled
    if (firstName && lastName && email && feedback) {
        alert('Thank you for your feedback, ' + firstName + ' ' + lastName + '! We have received your message.');
        
        // Clear the form after submission
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('feedback').value = '';
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
