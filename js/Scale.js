function distancePic(){
	finddist = document.getElementById("finddist").value;
let j=0;
	let container = document.querySelector("#container");
	container.innerHTML="";
getAllEvent(
	(response) => {
		for(let i=0;i<response.length;i++){
			if(getDistanceFromLatLonInKm(user['lat'],user['lng'],response[i]['lat'],response[i]['lng'])<=finddist){
		newdiv(response[i],j);
		j++;
	}
		}
	});	

}
function change(){
	finddist = document.getElementById("finddist").value;
	$("#distance").text(finddist + " kilometers");
}

