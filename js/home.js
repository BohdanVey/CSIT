$(document).ready(function(e) { 
	$("#signin").hide();
    $("#signout").hide();
	 $("#signout2").hide();
	$("#logout").hide();
	$("#addevent").hide();
	
	user = localStorage.getItem("user_ec");
	let password = localStorage.getItem("password_ec");
	let result = checkUser(user, password);
	if( user === null || password === null || result.length == 0) {
	window.location.href = 'login.html';	
	}
		$("#signin").text(localStorage.getItem("user_ec"));
		$("#signin").toggle();
		$("#logout").toggle();
	user = result[0]; 
		$("#addevent").toggle();
	
	
		//events
		function addToK(k,text){
		let q="#div"+k;
	let divk = document.querySelector(q);
		divk.innerHTML+=`
	<div class="col-lg-14 col-md-16 mb-14" id="visitor">${text}</div>
`
	}
	function have(a){
		for(let i=0;i<a['visit'].length;i++){
			console.log(a['visit'][i]+' '+user['user']);
			if(a['visit'][i]===user['user'])
				return true;
		}
		return false;
	};
		function getadress(text){
		a="https://www.google.com/maps/place/"
		for(var j=0;j<text.length;j++){
			if(text[j]==' ')
				a+='+';
			else
				a+=text[j];
		}
		return a;
	}
	function newdiv(a, k) {
	let container = document.querySelector("#container");
	console.log(a);
	text=getadress(a['place']);
	container.innerHTML += `<div class="col-lg-14 col-md-16 mb-14">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="${a['image']}" alt=""></a>
              <div class="card-body" id="${'div'+k}">
                <h4 class="card-title">
                  <a href="#">${a['name']}</a>
                </h4>
                <h5>${a['date']}</h5>
				  <h5>${a['hoursBegin']}-${a['hoursEnd']}</h5>
				   <a id="href${k}" href="${text}" ><h5 id="text${k}">${a['place']}</h5></a>
                <p class="card-text">${a['description']}</p>
				<h5>VISITORS:</h5>
				</div>
               <div class="card-footer bg-white">
              </div>
            
</div>
			  
          </div>
`	
	$("#wrong-alert"+k).hide();
	let q="#div"+k;
	let alertq="#wrong-alert"+k;
	let divk = document.querySelector(q);
	for(let i=0;i<a['visit'].length;i++){
		addToK(k,a['visit'][i]);
	}
	hr="href"+k;
	k+=1;
}
	
		getAllEvent(
	(response) => {
		for(let i=0;i<response.length;i++){
			if(have(response[i],user))
			newdiv(response[i],i);
		}
	});	
	$("#wait-alert").hide();
	// end events
});
