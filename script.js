function showMessage() {
    document.getElementById("message").innerHTML = "Thanks for visiting my website! 😊";
}

function validateForm() {
    let name = document.getElementById("name").value;
    let mail = document.getElementById("email").value;

    if (name === "" || mail === "") {
        document.getElementById("formMessage").innerHTML = "Please fill in all fields.";
        document.getElementById("formMessage").style.color = "red";
        return false;
    }

    document.getElementById("formMessage").innerHTML = "Message sent successfully!";
    document.getElementById("formMessage").style.color = "green";
    return false; // Disable real submission for demo
}
