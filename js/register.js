function registerUser() {
	$("#wrong-alert").hide();
	$("#wait-alert").show();
    let email = document.getElementById("email").value;
	let login = document.getElementById("name").value;
	let password = document.getElementById("password").value;
	if(getByEmail(email).length != 0){
		$("#wait-alert").hide();
		$("#wrong-alert").text("Email already exists!");
		$("#wrong-alert").show();
		return;
	}
	if(getByLogin(login).length != 0){
		$("#wait-alert").hide();
		$("#wrong-alert").text("Login already exists!");
		$("#wrong-alert").show();
		return;
	}


	localStorage.setItem('login_ec', login);
	localStorage.setItem('password_ec', MD5(password));
	post(email, login, password);
};