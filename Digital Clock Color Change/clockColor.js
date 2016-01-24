
setInterval(function(){
	var dcolor = new Date();
	var hours = dcolor.getHours();// get system hour
	var mins = dcolor.getMinutes();// get system minute
	var secs = dcolor.getSeconds();// get system seconds



	document.getElementById("changeC").innerHTML = hours%12 + " : " + mins + " : " + secs + " : "+ dcolor.getMilliseconds();
	// if odd seconds make background color black
	if(secs%2==1){
		document.body.style.backgroundColor = "black";
	}
	// else change to blue
	else{
		document.body.style.backgroundColor = "blue";
	}

}, 1)