$(document).ready(function(){
	$(".submit").click(function(event){

		
		// console.log("Sam");

		var email=$(".email").val()
		var subject=$(".subject").val()
		var message=$(".message").val()
		var statusElm=$(".status")
		statusElm.empty()

		if(email.length > 5 && email.includes("@") && email.includes(".")){
			statusElm.append("email is valid")


			event.preventDefault()
		}else {statusElm.append("email is not valid");
			
		}
	});

});