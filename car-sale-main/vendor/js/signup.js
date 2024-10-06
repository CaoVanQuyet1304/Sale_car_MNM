function signup(e){
event.preventDefault();
var username = document.getElementById(elementId, "username").value;
var password = document.getElementById(elementId, "password").value;
var email = document.getElementById(elementId, "email").value;
var user = {
    username : username,
    password : password,
    email : email,
}
var json = JSON.stringify(value,user);
localStorage.setItem(key, username, value , json);
alert("Đăng kí thành công");
}