$(document).ready(function(e) {	
$("#wrong-alert").hide();
		$("#wait-alert").hide();
});
function loginUser() {
	$("#wait-alert").show();
	let login = document.getElementById("name").value;
	let password = document.getElementById("password").value;
    let result = checkUser(login, MD5(password));
	if( login === null || password === null || result.length == 0) {
			$("#wait-alert").hide();
		$("#wrong-alert").text("User name or password incorrect!");
		$("#wrong-alert").show();
		return;
	}
	localStorage.setItem('user_ec', login);
	localStorage.setItem('password_ec', MD5(password));
window.location.href = 'index.html';
};