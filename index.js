function toggleSidebar() {
    document.querySelector('#hidebar').classList.toggle('active');
}

    function go(){
        
    var firstname = document.getElementById('first-name').value;
    var lastname = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(
        firstname == "NITIN" && lastname == "YADAV" && email == "nitinyadav27032006@gmail.com" && password == "nitin@123")
        {
        alert(" Login Successfull")
        window.location.assign("home.html")
    }
    else{
        alert("Wrong Details")
    }
}
