function distancePic(){
	finddist = document.getElementById("finddist").value;
let j=0;
var tr=document.getElementById("Dance");
		if(tr.checked===true){
	tr.checked=false;
	FDance(1);
	Dance=[];
	Dance1=[];
	tr.checked=true;
		}
		if(tr.checked===true){
	tr=document.getElementById("IT");
	tr.checked=false;
	FIT(1);
	IT=[];
	IT1=[];
	tr.checked=true;
		}
		tr=document.getElementById("Sport");
		if(tr.checked===true){
	tr.checked=false;
	FSport(1);
	Sport=[];
	Sport1=[];
	tr.checked=true;	
		}
			tr=document.getElementById("Meeting");
		if(tr.checked===true){
	tr.checked=false;
	FMeeting(1);
	Meeting=[];
	Meeting1=[];
	tr.checked=true;	
		}
		tr=document.getElementById("Another");
	if(tr.checked===true){
	tr.checked=false;
	FAnother(1);
	Another=[];
	Another1=[];
	tr.checked=true;
	}
	
	let container = document.querySelector("#container");
	container.innerHTML="";
getAllEvent(
	(response) => {
		for(let i=0;i<response.length;i++){
			if(getDistanceFromLatLonInKm(user['lat'],user['lng'],response[i]['lat'],response[i]['lng'])<=finddist && document.getElementById(response[i]['type']).checked===true){
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

