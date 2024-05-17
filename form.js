// form.js
document.getElementById("signin").onsubmit = function() {
    var username = document.querySelector("#signin input[type='text']").value;
    var password = document.querySelector("#signin input[type='password']").value;

    // Perform form validation here if needed
    if (username !== "" && password !== "") {
        // Redirect to Warner Bros.html after successful form submission
        window.location.href = "Warner Bros.html";
    } else {
        // Display an alert or error message if the form fields are not filled correctly
        alert("Please fill out all fields before submitting.");
    }

    return false; // Prevent the default form submission behavior
};