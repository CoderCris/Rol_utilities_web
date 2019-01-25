function roll(){
	

	var para = document.createElement("p");
	var value = Math.floor(Math.random() * (document.getElementById("faces").innerHTML));
	para.appendChild(value);
	document.getElementById("rollResult").appendChild(para);
}

function dummie(){
	document.getElementById("rollResult").innerHTML = 'It works!!'
}