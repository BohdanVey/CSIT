function getAll(callback) {

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://csitproject-61e2.restdb.io/rest/csit",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "5c83f68fcac6621685acbd15",
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
	callback(response);
});
}
function getEventByID(id,callback){
	let result = [];
	let settings = {
		"async": false,
		"crossDomain": true,
		"url": 'https://csitproject-61e2.restdb.io/rest/event?q={"_id": "' + id + '"}',
		"method": "GET",
		"headers": {
			"content-type": "application/json",
			"x-apikey": "5c83f68fcac6621685acbd15",
			"cache-control": "no-cache"
		}
	}

	$.ajax(settings).done(function (response) {
		result = response;
		callback(response);
	});
	return result;
}



function getByEmail(email){
	let result = [];
	let settings = {
		"async": false,
		"crossDomain": true,
		"url": 'https://csitproject-61e2.restdb.io/rest/csit?q={"e-mail": "' + email + '"}',
		"method": "GET",
		"headers": {
			"content-type": "application/json",
			"x-apikey": "5c83f68fcac6621685acbd15",
			"cache-control": "no-cache"
		}
	}

	$.ajax(settings).done(function (response) {
		result = response;
	});
	return result;
}
function getByLogin(user){
	let result = [];
	let settings = {
		"async": false,
		"crossDomain": true,
		"url": 'https://csitproject-61e2.restdb.io/rest/csit?q={"user": "' + user + '"}',
		"method": "GET",
		"headers": {
			"content-type": "application/json",
			"x-apikey": "5c83f68fcac6621685acbd15",
			"cache-control": "no-cache"
		}
	}

	$.ajax(settings).done(function (response) {
		result = response;
	});
	return result;
}


function getAllEvent(callback) {
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://csitproject-61e2.restdb.io/rest/event",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "5c83f68fcac6621685acbd15",
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
	callback(response);
});
}

function post(user,email, psw,type,lat,lng,distance){
	psw=MD5(psw);
	console.log(distance,"post");
	distance.toJSON;
var jsondata = {"user":user ,"type": type,"e-mail":email,"password":psw,"friend":[],"lat":lat,"lng":lng,"distance":distance};
console.log(jsondata);
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://csitproject-61e2.restdb.io/rest/csit",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "5c83f68fcac6621685acbd15",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
		localStorage.setItem('user_ec', user);
	localStorage.setItem('password_ec', psw);
	window.location.href = 'index.html';
});
}
function checkUser(user, md5_password){
	let result = [];
	console.log(user,md5_password);
	let settings = {
		"async": false,
		"crossDomain": true,
		"url": 'https://csitproject-61e2.restdb.io/rest/csit?q={"user": "' + user + '", "password": "' + md5_password +'"}',
		"method": "GET",
		"headers": {
			"content-type": "application/json",
			"x-apikey": "5c83f68fcac6621685acbd15",
			"cache-control": "no-cache"
		}
	}

	$.ajax(settings).done(function (response) {
		result = response;
	});
		return result;
}	
function postevent(name,date,hoursBegin,hoursEnd,place,description,image,lat,lng){
	console.log(lat,lng);
var jsondata = {"name": name,"date": date,"hoursBegin":hoursBegin,"hoursEnd":hoursEnd,"place":place,"description":description,"image":image,"visit":[],"lat":lat,"lng":lng};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://csitproject-61e2.restdb.io/rest/event",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "5c83f68fcac6621685acbd15",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
	window.location.href="index.html";
});
}


function addfriend(user,text){

user['friend'].push(text);
var jsondata = {"user":user['user'] ,"type": user['type'],"e-mail":user['email'],"password":user['password'],"friend":user['friend'],"lat":user['lat'],"lng":user['lng']};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://csitproject-61e2.restdb.io/rest/csit/"+ user["_id"] ,
  "method": "PUT",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "5c83f68fcac6621685acbd15",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}
$.ajax(settings).done(function (response) {
	let x=document.querySelector(a['getId']);
});
}

function update(user,callback){
var jsondata = {"user":user['user'] ,"type": user['type'],"e-mail":user['email'],"password":user['password'],"friend":user['friend'],"lat":user['lat'],"lng":user['lng']};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://csitproject-61e2.restdb.io/rest/csit/"+ user["_id"] ,
  "method": "PUT",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "5c83f68fcac6621685acbd15",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}
$.ajax(settings).done(function (response) {
	callback();
});
}

function getByName(name){
	let result = [];
	let settings = {
		"async": false,
		"crossDomain": true,
		"url": 'https://csitproject-61e2.restdb.io/rest/event?q={"name": "' + name + '"}',
		"method": "GET",
		"headers": {
			"content-type": "application/json",
			"x-apikey": "5c83f68fcac6621685acbd15",
			"cache-control": "no-cache"
		}
	}

	$.ajax(settings).done(function (response) {
		result = response;
		console.log(response);
	});
		return result;
}	


function updateEvent(event){
	event=event[0];
	
var jsondata = {"name": event["name"],"date": event["date"],"hoursBegin": event["hoursBegin"],"hoursEnd": event["hoursEnd"],"place": event["place"],"description": event["description"],"image": event["image"],"visit": event["visit"],"lng": event["lng"],"lat": event["lat"]};
	console.log(event["_id"]);
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://csitproject-61e2.restdb.io/rest/event/"+ event["_id"] ,
  "method": "PUT",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "5c83f68fcac6621685acbd15",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}
$.ajax(settings).done(function (response) {
	let x=document.querySelector(a['getId']);
	
	
});
}









//getadress
function places(adress){
	out = ""
	for(let i=0;i<adress.length;i++){
		
		if(adress[i]===' '){
			out+="+";
		}
		else
			out+=adress[i];
	
	}
	console.log(out);
	return out;
}
function getLatLong(address, callback){
	console.log(address);
	let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyCDe0OvJ7MYDqhg6uH79P65f_ixclH1Whg"
	fetch(url)
	.then(data=>{return data.json()})
	.then(result=> {
		console.log(result);
		result=result['results'][0]['geometry']['location'];
		callback(result);
	});
}
function getALLdistanceToEvent(lat1,lon1, callback){
let events=[];
	getAllEvent(
	(response) => {
		console.log(response);
		for(let i=0;i<response.length;i++){
			console.log(response[i],response[i]['_id'],response[i]['lat'],response[i]['lng']);
			events.push(response[i]["_id"]);
			events.push(getDistanceFromLatLonInKm(lat1,lon1,response[i]['lat'],response[i]['lng']));
		}
		console.log(events);
		callback(events);
	});	
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
	d*=100;
	d=Math.round(d);
	d/=100;
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}