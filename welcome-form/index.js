// Welcome form style
document.getElementById('submit-button').addEventListener('click', function () {
    const emailField = document.getElementById('email-field');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('password-field');
    const userPasword = passwordField.value;
    if (userEmail == "sobuj@gmail.com" && userPasword == "sobuj") {
        window.open("../next-form/index.html");
    }
    else {
        console.log('invalid');
    }
    emailField.value = '';
    passwordField.value = '';
});
