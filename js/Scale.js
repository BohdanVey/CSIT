function distancePic(){
	finddist = document.getElementById("finddist").value;
let j=0;
	let container = document.querySelector("#container");
	container.innerHTML="";
for(let i=1;i<user['distance'].length;i+=2){
	if(user['distance'][i]<=finddist){
	getEventByID(user['distance'][i-1],(element)=>{
		element=element[0];
		console.log(element,'Xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
		newdiv(element,j);
		j++;
		console.log(element);
	});
	}
	}
}
function change(){
	finddist = document.getElementById("finddist").value;
	$("#distance").text(finddist + " kilometers");
}

