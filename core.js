
function myfun(){
	var username = document.getElementById("Username").value;
    //var password = document.getElementById("Password").value;

	if( username=="") {
		document.getElementById("messagess").innerHTML="Please Enter Your Username.";
		return false;
	}

    if (username.length == 5) {
    	document.getElementById("messagess").innerHTML="You are enter right username and password";
		return false;
    }

    else{
    	document.getElementById("messages").innerHTML="password match but username wrong";
    	return false;
    }
	
}