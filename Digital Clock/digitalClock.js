//main.js Digital Clock

setInterval (function() {
	var currentTime = new Date();
	if (currentTime.getHours() > 12){ // the clock is defined to display 12 hours and not 24
		document.getElementById("hours").innerHTML = currentTime.getHours() - 12;
	}else{
		document.getElementById("hours").innerHTML = currentTime.getHours();//system hour
	}

	document.getElementById("minuts").innerHTML = currentTime.getMinutes();//system minuts
	if (currentTime.getSeconds() < 10){
			document.getElementById("seconds").innerHTML = "0" + currentTime.getSeconds();// les then 10 seconds add "0" for display
	}else{

		document.getElementById("seconds").innerHTML = currentTime.getSeconds();
	}
	document.getElementById("milliseconds").innerHTML = currentTime.getMilliseconds();// get system milliseconds
},100);