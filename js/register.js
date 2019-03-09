function registerUser() {
    let email = document.getElementById("email").value;
	let login = document.getElementById("name").value;
	let password = document.getElementById("password").value;
	let type=document.getElementById("type").value;
	if(type==="Student")
		type=0;
	else{
		type=1;
	}
	post(email, login, password,type);
};