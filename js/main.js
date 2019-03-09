$(document).ready(function(e) {
	
	$("#login").hide();
    $("#unlogin").hide();
	$("#logout").toggle();

    /* auth */
	let login = localStorage.getItem("login_ec");
	let password = localStorage.getItem("password_ec");
	let result = checkUser(login, password);
	if( login === null || password === null || result.length == 0) {
		$("#unlogin").toggle();
	}
	if( login === null || password === null || result.length == 0) {
		$("#login").toggle();
		$("#logout").toggle();
	}
	user = result[0]; // set user


	// logot button
	$("#logout").click(()=>{
		localStorage.removeItem("login_ec");
		localStorage.removeItem("password_ec");
		window.location.href = 'login.html';
	});
    
    
});