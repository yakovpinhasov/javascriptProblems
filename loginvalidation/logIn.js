
$(document).ready(function(){
	$('failed').hide();
})

function validate(){

	var username = document.getElementById("username").value;// get username
	var password = document.getElementById("password").value;// getpassword
	if (username == "" || password == "") // checks if user name blank than alert to the user
		{ 
			alert("Please fill out both fields");
			return false;
		}
	if ( password == "12345" && username == "yakov") /* Fixed username and Password*/
		{ 
			window.location.href= "logInSuccess.html";// if correct take to the desired web
		}
		// if failed change the cackground to black and alert the user
		else  {
			$('failed').show();
			document.body.style.backgroundColor = "black";
			alert("wrong username or password");
		}
}
