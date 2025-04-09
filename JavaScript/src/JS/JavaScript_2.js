function validateForm() {
    // Get the value from the "name" field in the form named "myForm"
    let name = document.forms["myForm"]["name"].value;
    
    // Get the value from the "customerEmail" field in the same form
    let email = document.forms["myForm"]["customerEmail"].value;
    
    // Get the value from the "customerPhone" field
    let phone = document.forms["myForm"]["customerPhone"].value;

    // Check if the name field is empty
    if (name == "") {
        alert("Name must be filled out"); // Show an alert message
        return false; // Stop the form from being submitted
    }

    // Check if the email field is empty
    if (email == "") {
        alert("Email must be filled out"); // Show alert
        return false; // Prevent form submission
    }

    // Check if the phone field is empty
    if (phone == "") {
        alert("Phone must be filled out"); // Show alert
        return false; // Stop form submission
    }
}
