	function addnewfriends(text){
			addfriend(user,text);
		console.log(text);
			$("."+text).hide();
	};
$(document).ready(function(e) { 
	$("#signin").hide();
    $("#signout").hide();
	 $("#signout2").hide();
	$("#logout").hide();
	$("#addevent").hide();
		$("#friends").hide();
	user = localStorage.getItem("user_ec");
	let password = localStorage.getItem("password_ec");
	let result = checkUser(user, password);
	if( user === null || password === null || result.length == 0) {
	window.location.href = 'login.html';	
	}
		$("#signin").text(localStorage.getItem("user_ec"));
		$("#signin").toggle();
		$("#logout").toggle();
		$("#friends").toggle();
	user = result[0]; 
		$("#addevent").toggle();
	
	
//events

		function addToK(k,text,i){
		let q="#div"+k;
		let friend="N"+k+"friend"+i;
	let divk = document.querySelector(q);
	
		divk.innerHTML+=`
	<div class="${friend} friend"></div>
`
let friends=".N"+k+"friend"+i;
console.log(friend,friends);
			
let f = document.querySelector(friends);
f.innerHTML+=`
	<div class="col-lg-14 col-md-16 mb-14" id="visitor">${text}</div>
`
for(let i=0;i<user['friend'].length;i++){
if(user['friend'][i]===text || text===user['user'])
	return;
}
if(text===user['user'])
	return;
f.innerHTML+=`
<button class="buttonfriend button4 ${text}" onclick="addnewfriends('${text}')" id="${text}">Add to friend</button>
`

	}
	function have(a){
		for(let i=0;i<a['visit'].length;i++){
		
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
	};
	function find(a,text){
		for(let i=0;i<a['visit'].length;i++){
			if(a['visit'][i]===text)
				return false;
		}
		return true;
	}
		function newdiv(a, k) {
	if(find(a,user['user'])){
		return;
	}
	let container = document.querySelector("#container");
	console.log(a);
	text=getadress(a['place']);
	container.innerHTML += `<div class="col-lg-14 col-md-16 mb-14 full-width" >
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="${a['image']}" alt=""></a>
              <div class="card-body" id="${'div'+k}">
                <h4 class="card-title">
                  <a href="#">${a['name']}</a>
                </h4>
                <h5>${a['date']}</h5>
				  <h5>${a['hoursBegin']}-${a['hoursEnd']}</h5>
				   <a id="href${k}" href="${text}" ><h5 id="text${k}">${a['place']}</h5></a>
					<h5>${getDistanceFromLatLonInKm(user['lat'],user['lng'],a['lat'],a['lng'])} kilometers</h5>
                <p class="card-text">${a['description']}</p>
				<h5>VISITORS:</h5>
				</div>
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
		addToK(k,a['visit'][i],i);
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
	
	
	
	$("#wait-alert").hide();
	// end events
});
