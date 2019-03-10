function addevent() {
	image=document.getElementById("image").value;
    let name = document.getElementById("name").value;
	let date = document.getElementById("date").value;
	let hourbegin = document.getElementById("hourbegin").value;
	let hourend=document.getElementById("hourend").value;
	let place=document.getElementById("place").value;
	let description=document.getElementById("description").value;
	postevent(name,date,hoursBegin,hoursEnd,place,description,image);
	alert("Ready");
};	