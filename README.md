# Form Validation Webpage

This is a simple form validation webpage built using HTML, CSS, and JavaScript. 

## Features

- **HTML:**
    - Uses semantic HTML elements like `<form>`, `<label>`, `<input>`, `<textarea>`, etc.
    - Includes Bootstrap 5 for basic styling.
    - Utilizes SVG icons from Bootstrap Icons for visual appeal.
- **CSS:**
    - Provides a clean and responsive design.
    - Styles the form elements and error messages.
    - Uses media queries for mobile responsiveness.
- **JavaScript:**
    - Implements form validation on submit.
    - Validates the following fields:
        - Name (only alphabets and spaces allowed)
        - Age (must be a number and at least 18 years old)
        - Email (must be a valid email address from navgurukul.org or google.com)
        - Password (must be at least 8 characters long)
        - Mobile Number (must be a 10-digit number)
    - Displays error messages for invalid input.
    - Stores the form data in the browser's `localStorage` upon successful submission.

## Functionality

1. The form collects basic user information: Name, Date of Birth, Age, Email, Password, Mobile Number, and Address.
2. Upon form submission, JavaScript functions are triggered to validate the user's input based on the defined criteria.
3. If any validation fails, an error message is displayed below the corresponding input field, highlighting the issue.
4. If all validation checks pass, the data is stored in the browser's `localStorage`.
5. After successful validation and storage, an alert message confirms the form submission.

## How to Use

1. Open `index.html` in a web browser.
2. Fill in the form with your details.
3. Click on the "SUBMIT" button.
4. If there are any errors, correct them and resubmit.
5. Upon successful submission, you'll see a confirmation alert.

## File Structure

```
└── index.html
└── script.js
└── styles.css

```

- `index.html`: Contains the HTML structure of the form.
- `script.js`: Contains the JavaScript code for form validation and data handling.
- `styles.css`: Contains the CSS rules for styling the webpage.
