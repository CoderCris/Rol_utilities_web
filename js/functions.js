function roll(){


	var para = document.createElement("p");
	var value = Math.floor(Math.random() * (document.getElementById("faces").innerHTML));
	para.appendChild(value);
	//document.getElementById("rollResult").innerHTML = Math.floor(Math.random() * (document.getElementById("faces").value));
	document.getElementById("rollResult").innerHTML = Math.random();

}

function dummie(){
	document.getElementById("rollResult").innerHTML = Math.floor(Math.random() * document.getElementById("faces").value);
	//document.getElementById("faces").value * document.getElementById("faces").value
}
