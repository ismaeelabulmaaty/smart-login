var pathparts = location.pathname.split('/');
var baseURL = ''
for (var i = 0; i < pathparts.length - 1; i++) {
    baseURL += '/' + pathparts[i]
}


function validtionInput() {
    if (!document.getElementById("name").value) {
        return false;
    }
    if (!document.getElementById("email").value) {
        return false;
    }
    if (!document.getElementById("password").value) {
        return false;
    }
    return true;
}



function SignUp() {
    var msg = document.getElementById("msg");
    msg.style.display = "block";
    if (!validtionInput()) {
        msg.innerHTML = "Error";
        return;
    }
    msg.innerHTML = "Success";

    location.pathname.split('/')
    var elementname = document.getElementById("name");
    var elementemail = document.getElementById("email");
    var elementpassword = document.getElementById("password");

    var obj = {
        name: elementname.value,
        email: elementemail.value,
        password: elementpassword.value,
    };

    if (localStorage.getItem("lstUsers")) {
        var lstUsers = JSON.parse(localStorage.getItem("lstUsers"));
        lstUsers.push(obj);
        localStorage.setItem("lstUsers", JSON.stringify(lstUsers));
    } else {
        var lstUsers = [];
        lstUsers.push(obj);
        localStorage.setItem("lstUsers", JSON.stringify(lstUsers));
    }
    elementname.value = "";
    elementemail.value = "";
    elementpassword.value = "";
}


function validtionInputLogin() {
    if (!document.getElementById("email").value) {
        return false;
    }
    if (!document.getElementById("password").value) {
        return false;
    }
    return true;
}



function login() {
    var msg = document.getElementById("msg");
    msg.style.display = "block";
    if (!validtionInputLogin()) {
        msg.innerHTML = "Error";
        return;
    }



    var elementpassword = document.getElementById("password");
    var elementemail = document.getElementById("email");
    if (localStorage.getItem("lstUsers")) {
        var lstUsers = JSON.parse(localStorage.getItem("lstUsers"));
        var isValid = false;
        for (var i = 0; i < lstUsers.length; i++) {
            var user = lstUsers[i];
            if (user.email == elementemail.value && user.password == elementpassword.value) {
                localStorage.setItem("SessionName", user.name);
                isValid = true;
            }
        }
        if (isValid) {

            location.replace(baseURL + "/home.html")
            return;
        }

    }
    msg.innerHTML = "Can't find user";
}

function logout() {
    localStorage.removeItem('sessionName')
}


