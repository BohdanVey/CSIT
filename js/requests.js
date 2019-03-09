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

function post(user,email, psw,type){
	psw=MD5(psw);
var jsondata = {"User":user ,"Type": type,"e-mail":email,"password":psw,"Visit":[]};
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
function checkUser(login, md5_password){
	let result = [];
	let settings = {
		"async": false,
		"crossDomain": true,
		"url": 'https://csitproject-61e2.restdb.io/rest/csit?q={"user": "' + users + '", "password": "' + md5_password +'"}',
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