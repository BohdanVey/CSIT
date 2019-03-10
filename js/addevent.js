function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}


function addevent() {
	let file=document.getElementById("image").files[0];
	getBase64(file).then(
	  image => {
		    let name = document.getElementById("name").value;
			let date = document.getElementById("date").value;
			let hourbegin = document.getElementById("hourbegin").value;
			let hourend=document.getElementById("hourend").value;
			let place=document.getElementById("place").value;
			let description=document.getElementById("description").value;
			postevent(name,date,hourbegin,hourend,place,description,image);
			alert("Ready");
	  }
	);
};	


