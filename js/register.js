$(document).ready(function(e) {	
$("#wrong-alert").hide();
	$("#wait-alert").hide();
});
function registerUser() {
	$("#wait-alert").show();
    let email = document.getElementById("email").value;
	let user = document.getElementById("name").value;
	let password = document.getElementById("password").value;
	let type=document.getElementById("type").value;
	let place=document.getElementById("adress").value;
	getLatLong(places(place), (data)=>{
	console.log(data);
post(user,email,password,type,data['lat'],data['lng']);
	});
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
	$("#wait-alert").show();
		localStorage.setItem('user_ec', user);
	localStorage.setItem('password_ec', MD5(password));
	setTimeout(() => {window.location.href = 'index.html';}, 3000);
};	