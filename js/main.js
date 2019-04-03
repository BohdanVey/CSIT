function time(k){
	x="#wrong-alert"+k;
	setTimeout(() => {$(x).hide();}, 2000);
}
let user
	function addToK(k,text){
		let q="#div"+k;
	let divk = document.querySelector(q);
		divk.innerHTML+=`
	<div class="col-lg-14 col-md-16 mb-14" id="visitor">${text}</div>
`
	}
	function visitThis(name,k){
		a=getByName(name);

		for(let i=0;i<a[0]['visit'].length;i++){
		
			if(a[0]['visit'][i]===user['user']){
				$("#wrong-alert"+k).show();
				time(k);
				return;
			}
		}
			a[0]['visit'].push(user['user']);
		updateEvent(a);
		addToK(k,user['user']);
	}
$(document).ready(function(e) {
		
		$("#wait-alert").show();
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
  			<button onclick="visitThis('${a['name']}',${k})" id="btn${k}" class="button" >Visit</button>
					<div class="alert alert-danger my-alert" role="alert" id="${"wrong-alert"+k}">You already visit this</div>
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
			newdiv(response[i], i);
		}
	});	
	
	
	
	$("#signin").hide();
    $("#signout").hide();
	 $("#signout2").hide();
	$("#logout").hide();
	$("#addevent").hide();
		$("#wait-alert").hide();
    /* maps */
	var i = 0;


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
