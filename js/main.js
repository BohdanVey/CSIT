$(document).ready(function(e) {
	
	$("#signin").hide();
    $("#signout").hide();
	$("#logout").hide();

    /* auth */
	let user = localStorage.getItem("user_ec");
	let password = localStorage.getItem("password_ec");
	let result = checkUser(user, password);
	if( user === null || password === null || result.length == 0) {
		$("#signout").toggle();
	}
	else{
		$("#signin").toggle();
		$("#logout").toggle();
	}
	user = result[0]; 


	// logot button
	$("#logout").click(()=>{
		localStorage.removeItem("user_ec");
		localStorage.removeItem("password_ec");
		window.location.href = 'login.html';
	});
    
    
});