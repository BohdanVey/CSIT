	function getadress(text){
		a="https://www.google.com/maps/place/";

		for(var j=0;j<text.length;j++){
			if(text[j]==' ')
				a+='+';
			else
				a+=text[j];
		}
		return a;
	}
function time(k){
	x="#wrong-alert"+k;
	setTimeout(() => {$(x).hide();}, 2000);
}
let user
	function addnewfriends(text){
			addfriend(user,text);

			$("."+text).hide();
	};
	function addToK(k,text,i,where){
		console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
		let q="#div"+k;
		should='no';
		for(let i=0;i<user['who'].length;i+=1)
			if(user['who'][i]===text && user['where'][i]==where)
				should='yess';
		let friend="N"+k+"friend"+i;
	let divk = document.querySelector(q);
	
		divk.innerHTML+=`
	<div class="${friend} friend should"></div>
`
let friends=".N"+k+"friend"+i;
console.log(friend,friends);
			
let f = document.querySelector(friends);
f.innerHTML+=`
	<div class="col-lg-14 col-md-16 mb-14 ${should}" id="visitor">${text}</div>
`
if(user===null || user['friend']===undefined)
	return;
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

	function invitefriends(text,who,where){
		let text1=text+'qwerrewq';
		$("."+text1).hide();
		e=getByLogin(text);
		e=e[0];
		console.log(e);
		e['who'].push(who);
		e['where'].push(where);
		update(e);
	}

	function addToinvitek(k,text,i,where){
		fr=getByLogin(text);
		fr=fr[0];
		for(let i=0;i<fr['who'].length;i++)
		if(fr['who'][i]===user['user'] && fr['where'][i]===where)
		return;
		let q="#div1"+k;
		let friend="N"+k+"friends"+i;
	let divk = document.querySelector(q);
		divk.innerHTML+=`
	<div class="${friend} friends"></div>
`
let friends=".N"+k+"friends"+i;
console.log(friend,friends);
let f = document.querySelector(friends);
let text1=text;
text=text+'qwerrewq';
f.innerHTML+=`
	<div class="col-lg-14 col-md-16 mb-14 ${text}" id="visitor">${text1}</div>
`

console.log(fr['who'],fr['where'],user['user'],where);

f.innerHTML+=`
<button class="buttonfriend button4 ${text}" onclick="invitefriends('${text1}','${user['user']}','${where}')" id="${text}">Invite friend</button>
`
f.innerHTML+=`</br class=${text}>`;
f.innerHTML+=`</br class=${text}>`;
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
let used=[];
	function invithere(name,k){
		a=getByName(name);
		
		let d=0;
		let w=0;
		for(let i=0;i<a[0]['visit'].length;i++){
			if(a[0]['visit'][i]===user['user']){
				d=1;
			}
		}
		if(d===0){
			$("#wrong-alert"+k).text("You must visit this event");
				$("#wrong-alert"+k).show();
				time(k);
			return;
		}
		for(let i=0;i<used.length;i++)
			if(used[i]===name)
				return;
		used.push(name);
		let qqqqq="#invitebtn"+k;
	
		for(let i=0;i<user['friend'].length;i++){
			d=0;
				for(let j=0;j<a[0]['visit'].length;j++){
					console.log(a[0]['visit'][j],user['friend'][i]);
			if(a[0]['visit'][j]===user['friend'][i]){
				d=1;
			}		
		}
			if(d===0){

				addToinvitek(k,user['friend'][i],w,name);
				w+=1;
			}
		}
console.log(w);
	}
function qqq(){
			return;
		}
	function newdiv(a, k) {
	
	let container = document.querySelector("#container");
	console.log(a['place']+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
	text=getadress(a['place']);
	should='no';
	for(let i=0;i<user['where'].length;i++)
		if(user['where'][i]===a['name'])
			should='yes';
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
  			<button onclick="visitThis('${a['name']}',${k})" id="btn${k}" class="button ${should}" >Visit</button>
			<button onclick="invithere('${a['name']}',${k})" id="invitebtn${k}" class="invite" >Invite</button>
			 <div class="card-body" id="${'div1'+k}"></div>
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
		addToK(k,a['visit'][i],i,a['name']);
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
	$("#friends").hide();
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
		$("#friends").toggle();
	user = result[0]; 
	if(user.type===1){
		$("#addevent").toggle();
	}
	}
	// logot button
	$("#logout").click(()=>{
		localStorage.removeItem("user_ec");
		localStorage.removeItem("password_ec");
		window.location.href = 'login.html';
	});
    
    
});
