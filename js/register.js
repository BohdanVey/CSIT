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
	post(user,email, password,type);

};	