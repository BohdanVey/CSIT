function time(k){
	x="#wrong-alert"+k;
	setTimeout(() => {$(x).hide();}, 2000);
}
let user
	function addnewfriends(text){
			addfriend(user,text);

			$("."+text).hide();
	};
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
if(user['friend'][i]===text )
	return;
}
console.log(text,user['user']);
if(text===user['user'])
	return;
f.innerHTML+=`
<button class="buttonfriend button4 ${text}" onclick="addnewfriends('${text}')" id="${text}">Add to friend</button>
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
	function find(a,user){
		for(let i=0;i<a['visit'].length;i++){
			for(let j=0;j<user['friend'].length;j++ )
			if(a['visit'][i]===user['friend'][j])
				return false;
		}
		return true;
	}
	function newdiv(a, k) {
		if(find(a,user)){
		return;
	}
	let container = document.querySelector("#container");
	console.log(a);
	text=getadress(a['place']);
	container.innerHTML += `<div class="col-lg-14 col-md-16 mb-14 full-width">
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
  			<button onclick="visitThis('${a['name']}',${k})" id="btn${k}" class="button " >Visit</button>
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
$(document).ready(function(e) {
		
		$("#wait-alert").show();
	
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
		window.location.href="login.html";
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
