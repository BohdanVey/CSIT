function loginUser() {

	let login = document.getElementById("name").value;
	let password = document.getElementById("password").value;
    let result = checkUser(login, MD5(password));
	if( login === null || password === null || result.length == 0) {
		return;
	}
	localStorage.setItem('login_ec', login);
	localStorage.setItem('password_ec', MD5(password));
	window.location.href = 'index.html';
};