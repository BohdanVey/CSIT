let user
$(document).ready(function(e) {

	function newdiv(a, k) {
	let container = document.querySelector("#container");
	console.log(a);
	container.innerHTML += `<div class="col-lg-14 col-md-16 mb-14">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="${a['image']}" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">${a['name']}</a>
                </h4>
                <h5>${a['date']}</h5>
				  <h5>${a['hourbegin']}-${a['hourend']}</h5>
				   <a id="href${k}" href="#" ><h5 id="text${k}">${a['place']}</h5></a>
                <p class="card-text">${a['description']}</p>
              </div>
              <div class="card-footer bg-white">
              </div>
            </div>
          </div>
`
	hr="href"+k;
	k+=1;
	console.log(hr,document.getElementById(hr)	);
}
	
	getAllEvent(
	(response) => {
		for(let i=0;i<response.length;i++){
			newdiv(response[i], i);
		}
	});	
	
	
	
	$("#signin").hide();
    $("#signout").hide();
	 $("#signout2").hide();
	$("#logout").hide();
	$("#addevent").hide();
    /* maps */
	var i = 0;
	for (i=0; i < 3; i++) {
		let adres="href"+i;
		let text=document.getElementById("text"+i).textContent;

		a="https://www.google.com/maps/place/"
		for(var j=0;j<text.length;j++){
			if(text[j]==' ')
				a+='+'
			else
				a+=text[j]
		}
	
		$("#"+adres).attr("href",a);
	}

	    /* auth */
	 user = localStorage.getItem("user_ec");
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
	if(user.type===1){
		$("#addevent").toggle();
	}

	// logot button
	$("#logout").click(()=>{
		localStorage.removeItem("user_ec");
		localStorage.removeItem("password_ec");
		window.location.href = 'login.html';
	});
    
    
});
