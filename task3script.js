document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();  

   
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let pass = document.getElementById("password");

    
    let nameErr = document.getElementById("nameError");
    let emailErr = document.getElementById("emailError");
    let passErr = document.getElementById("passError");

    let isValid = true;

    
    if (name.value.trim() === "") {
        nameErr.textContent = "Name is required";
        name.classList.add("invalid");
        name.classList.remove("valid");
        isValid = false;
    } else {
        nameErr.textContent = "";
        name.classList.remove("invalid");
        name.classList.add("valid");
    }

    if (email.value.trim() === "") {
        emailErr.textContent = "Email is required";
        email.classList.add("invalid");
        email.classList.remove("valid");
        isValid = false;
    } 
    else if (!email.value.includes("@")) {
        emailErr.textContent = "Email must contain '@'";
        email.classList.add("invalid");
        email.classList.remove("valid");
        isValid = false;
    }
    else {
        emailErr.textContent = "";
        email.classList.remove("invalid");
        email.classList.add("valid");
    }

    if (pass.value.trim() === "") {
        passErr.textContent = "Password is required";
        pass.classList.add("invalid");
        pass.classList.remove("valid");
        isValid = false;
    } 
    else if (pass.value.length < 8) {
        passErr.textContent = "Password must be at least 8 characters";
        pass.classList.add("invalid");
        pass.classList.remove("valid");
        isValid = false;
    }
    else {
        passErr.textContent = "";
        pass.classList.remove("invalid");
        pass.classList.add("valid");
    }

    
    if (isValid) {
        alert("Form submitted successfully!");
    }
});