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

function post(user,email, psw,type){
	psw=MD5(psw);
var jsondata = {"user":user ,"type": type,"e-mail":email,"password":psw,"visit":[' ']};
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
function postevent(name,date,hoursBegin,hoursEnd,place,description,image){
var jsondata = {"name": name,"date": date,"hoursBegin":hoursBegin,"hoursEnd":hoursEnd,"place":place,"description":description,"image":image,"visit":[]};
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
	
var jsondata = {"name": event["name"],"date": event["date"],"hoursBegin": event["hoursBegin"],"hoursEnd": event["hoursEnd"],"place": event["place"],"description": event["description"],"image": event["image"],"visit": event["visit"]};
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