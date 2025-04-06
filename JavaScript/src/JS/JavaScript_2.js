function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["customerEmail"].value;
    let phone = document.forms["myForm"]["customerPhone"].value;
    

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (phone == "") {
        alert("Phone must be filled out");
        return false;
    }
}