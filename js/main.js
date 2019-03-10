$(document).ready(function(e) {
	
	$("#signin").hide();
    $("#signout").hide();
	 $("#signout2").hide();
	$("#logout").hide();
	
    /* auth */
	var i = 0;
	for (i=0; i < 3; i++) {
		let adres="href"+i;
		let text=document.getElementById("text"+i).textContent;
		console.log(adres)
		a="https://www.google.com/maps/place/"
		for(var j=0;j<text.length;j++){
			if(text[j]==' ')
				a+='+'
			else
				a+=text[j]
		}
		console.log(a)
		$("#"+adres).attr("href",a);
	}
	let user = localStorage.getItem("user_ec");
	let password = localStorage.getItem("password_ec");
	let result = checkUser(user, password);
	if( user === null || password === null || result.length == 0) {
		$("#signout").toggle();
		$("#signout2").toggle();
	}
	else{
		$("#signin").text(localStorage.getItem("user_ec"));
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
