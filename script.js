document.getElementById('myForm').addEventListener('submit', function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Fetch values from the form
    const name = document.getElementById('name').value.trim();
    const date = document.getElementById('dob').value.trim();
    const age = parseInt(document.getElementById('age').value.trim());
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const contact = document.getElementById('number').value.trim();
    const address = document.getElementById('address').value.trim();

    let valid = true;
    // Validate Name
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(name)) {
        document.querySelector('.nameError').textContent = "Enter only text";
        valid = false;
    }
    else {
        document.querySelector('.nameCorrect').textContent = "Correct";
    }

    // Validate Age
    if (isNaN(age) || age < 18) {
        document.querySelector('.ageError').textContent = "Age is invailid";
        valid = false;
    }
    else {
        document.querySelector('.ageCorrect').textContent = "Correct";
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@(navgurukul\.org|google\.com)$/;
    if (!emailPattern.test(email)) {
        document.querySelector('.emailError').textContent = "Please enter a valid email";
        valid = false;
    }
    else {
        document.querySelector('.emailCorrect').textContent = "Correct";
    }

    // Validate Password
    if (password.length < 8) {
        document.querySelector('.passError').textContent = "Password must be at least 8 characters long.";
        valid = false;
    }
    else {
        document.querySelector('.passCorrect').textContent = "Correct";
    }

    // Validate Contact number
    if (contact.length != 10) {
        document.querySelector('.contactError').textContent = "Enter 10 digits number";
        valid = false;
    }
    else {
        document.querySelector('.contactCorrect').textContent = "Correct";
    }

    // If all validations pass
    if (valid) {
        localStorage.setItem('name', name);
        localStorage.setItem('dob', date);
        localStorage.setItem('age', age);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('contact', contact);
        localStorage.setItem('address', address);
        alert('Form submitted successfully!');
        document.getElementById('myForm').submit(); // Submit the form
    }
});