function toggleSidebar() {
    document.querySelector('#hidebar').classList.toggle('active');
}

function go(event) {
    event.preventDefault(); 
    var firstname = document.getElementById('first-name').value;
    var lastname = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert("Login Successful");
    window.location.assign("home.html");
}

document.addEventListener('DOMContentLoaded', function() {
    var storedFirstname = localStorage.getItem('firstname');
    var storedLastname = localStorage.getItem('lastname');
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    if (storedFirstname && storedLastname && storedEmail && storedPassword) {
        document.getElementById('first-name').value = storedFirstname;
        document.getElementById('last-name').value = storedLastname;
        document.getElementById('email').value = storedEmail;
        document.getElementById('password').value = storedPassword;
    }
});
