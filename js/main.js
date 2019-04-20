var map
let user=null;
var IT=[];
var Dance=[];
var Meeting=[];
var Sport=[];
var Another=[];
var IT1=[];
var Dance1=[];
var Meeting1=[];
var Sport1=[];
var Another1=[];
function FIT(x){
	var tr=document.getElementById("IT");
	console.log(tr.checked);
	if(tr.checked===true){
		for(i=0;i<IT1.length;i++){
			addmarker(IT1[i]['lat'],IT1[i]['lng'],IT1[i]['toscroll'],"IT",1);
		}
	}
	else{
		for (i = 0; i<IT.length; i++){
        IT[i].setMap(null);
    }
		IT=[];
}
	if(x==0)
	distancePic();
	}
function FDance(x){
	var tr=document.getElementById("Dance");
	console.log(tr.checked);
	if(tr.checked===true){
		for(i=0;i<Dance1.length;i++){
			addmarker(Dance1[i]['lat'],Dance1[i]['lng'],Dance1[i]['toscroll'],"Dance",1);
		}
	}
	else{
		for (i = 0; i<Dance.length; i++){
        Dance[i].setMap(null);
    }
		Dance=[];
}
	if(x==0)
	distancePic();
	}
function FMeeting(x){
	var tr=document.getElementById("Meeting");
	console.log(tr.checked);
	if(tr.checked===true){
		for(i=0;i<Meeting1.length;i++){
			addmarker(Meeting1[i]['lat'],Meeting1[i]['lng'],Meeting1[i]['toscroll'],"Meeting",1);
		}
	}
	else{
		for (i = 0; i<Meeting.length; i++){
        Meeting[i].setMap(null);
    }
		Meeting=[];
}
	if(x==0)
	distancePic();
	}
function FSport(x){
	var tr=document.getElementById("Sport");
	console.log(tr.checked);
	if(tr.checked===true){
		for(i=0;i<Sport1.length;i++){
			addmarker(Sport1[i]['lat'],Sport1[i]['lng'],Sport1[i]['toscroll'],"Sport",1);
		}
	}
	else{
		for (i = 0; i<Sport.length; i++){
        Sport[i].setMap(null);
    }
		Sport=[];
}
	if(x==0)
	distancePic();
	}
function FAnother(x){
	var tr=document.getElementById("Another");
	console.log(tr.checked);
	if(tr.checked===true){
		for(i=0;i<Another1.length;i++){
			addmarker(Another1[i]['lat'],Another1[i]['lng'],Another1[i]['toscroll'],"Another",1);
		}
	}
	else{
		for (i = 0; i<Another.length; i++){
        Another[i].setMap(null);
    }
		Another=[];
}
	if(x==0)
	distancePic();
	}
function addmarker(lat,lng,toscroll,type,x){
	lat=parseFloat(lat);
	lng=parseFloat(lng);
	var u;
	console.log(u);
  var uluru = {lat: lat, lng: lng};
	var ulur={lat:lat,lng:lng,toscroll:toscroll}
		if(type==="IT"){
      u="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
	}
	if(type==="Dance"){
	u="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"

	}
			if(type==="Meeting"){
     u= "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"

	}
				if(type==="Sport"){

      u= "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    
	}
					if(type==="Another"){

      u="http://maps.google.com/mapfiles/ms/icons/green-dot.png"
    
	}
	console.log(lat,lng,map);
	marker = new google.maps.Marker({
		position: uluru,
		map: map,
		    icon: {
      url: u
    }
	});
	google.maps.event.addListener(marker, 'click', function() { 
	           var x = $(toscroll).position();
		var x1=$("#maincontainer").position();
				console.log(toscroll,x.left,x.top,x1.left,x1.top);
                    window.scrollTo(x1.left+x.left,x1.top+x.top);
	});


	if(type==="IT"){
 IT.push(marker);
			if(x===0)
		IT1.push({lat:lat,lng:lng,toscroll:toscroll});
	}
	if(type==="Dance"){
   Dance.push(marker);
			if(x===0)
		Dance1.push({lat:lat,lng:lng,toscroll:toscroll});
		
	}
			if(type==="Meeting"){
     Meeting.push(marker);
					if(x===0)
				Meeting1.push({lat:lat,lng:lng,toscroll:toscroll});

	}
				if(type==="Sport"){

    Sport.push(marker);
						if(x===0)
					Sport1.push({lat:lat,lng:lng,toscroll:toscroll});
    
	}
					if(type==="Another"){
   Another.push(marker);
							if(x===0)
						Another1.push({lat:lat,lng:lng,toscroll:toscroll});
	}
}
function initMap() {
  // The location of Uluru
setTimeout(() => {
  var uluru={lat:user['lat'],lng:user['lng']};
  // The map, centered at Uluru
  map = new google.maps.Map(
      document.getElementById('map'), {zoom: 20, center: uluru});
});


}
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

	function addnewfriends(text){
			addfriend(user,text);

			$("."+text).hide();
	};
	function addToK(k,text,i,where){
		
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

let f = document.querySelector(friends);
let text1=text;
text=text+'qwerrewq';
f.innerHTML+=`
	<div class="col-lg-14 col-md-16 mb-14 ${text}" id="visitor">${text1}</div>
`



f.innerHTML+=`
<button class="buttonfriend button4 ${text}" onclick="invitefriends('${text1}','${user['user']}','${where}')" id="${text}">Invite friend</button>
`
f.innerHTML+=`<br class=${text}>`;
f.innerHTML+=`<br class=${text}>`;
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
			
			if(a[0]['visit'][j]===user['friend'][i]){
				d=1;
			}		
		}
			if(d===0){

				addToinvitek(k,user['friend'][i],w,name);
				w+=1;
			}
		}

	}
function qqq(){
			return;
		}
	function newdiv(a, k) {
	let q="#div"+k;
	let container = document.querySelector("#container");

	text=getadress(a['place']);
	should='no';
	for(let i=0;i<user['where'].length;i++)
		if(user['where'][i]===a['name'])
			should='yes';
	container.innerHTML += `<div class="col-lg-14 col-md-16 mb-14 full-width" id="height${k}">
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
		let height="#height"+k;
		addmarker(a['lat'],a['lng'],height,a['type'],0);
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
