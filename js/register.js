$(document).ready(function(e) {	
$("#wrong-alert").hide();
});
function registerUser() {
    let email = document.getElementById("email").value;
	let user = document.getElementById("name").value;
	let password = document.getElementById("password").value;
	let type=document.getElementById("type").value;
	console.log(type)
	if(type==="Student")
		type=0;
	else{
		type=1;
	}
		if(getByEmail(email).length != 0){
		$("#wait-alert").hide();
		$("#wrong-alert").text("Email already exists!");
		$("#wrong-alert").show();
		return;
	}
	if(getByLogin(user).length != 0){
		$("#wait-alert").hide();
		$("#wrong-alert").text("Login already exists!");
		$("#wrong-alert").show();
		return;
	}
	post(user,email, password,type);
		localStorage.setItem('user_ec', user);
	localStorage.setItem('password_ec', MD5(password));
	setTimeout(() => {window.location.href = 'index.html';}, 2000);
};	