$(document).ready(function(e) {
	
	$("#signin").hide();
    $("#signout").hide();
	$("#logout").hide();

    /* auth */
	let login = localStorage.getItem("login_ec");
	let password = localStorage.getItem("password_ec");
	let result = checkUser(login, password);
	if( login === null || password === null || result.length == 0) {
		$("#signout").toggle();
	}
	else{
		$("#signin").toggle();
		$("#logout").toggle();
	}
	user = result[0]; 


	// logot button
	$("#logout").click(()=>{
		localStorage.removeItem("login_ec");
		localStorage.removeItem("password_ec");
		window.location.href = 'login.html';
	});
    
    
});