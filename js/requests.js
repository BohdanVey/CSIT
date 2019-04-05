function getAll() {

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
});
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

function post(user,email, psw,type,lat,lng){
	psw=MD5(psw);
var jsondata = {"user":user ,"type": type,"e-mail":email,"password":psw,"friend":[],"lat":lat,"lng":lng};
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
  console.log(response);
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


function getdistance(x1,y1,x2,y2){
var latitude1 = x1;
var longitude1 = y1;
var latitude2 = x2;
var longitude2 = y2;

var distance = google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(latitude1, longitude1), new google.maps.LatLng(latitude2, longitude2));
}