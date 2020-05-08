$(document).ready(function(){
	$(".submit").click(function(event){

		
		// console.log("Sam");

		var email=$(".email").val()
		var subject=$(".subject").val()
		var message=$(".message").val()
		var age=$(".age").val()
		var education=$(".education").val()
		var ielts=$(".ielts").val()
		var single=$(".single").val()
        var son=$(".single").val()
        var porpus=$(".porpus").val()
        var reject=$(".reject").val()




		var statusElm=$(".status")
		statusElm.empty()

		if(email.length > 5 && email.includes("@") && email.includes(".")){
			statusElm.append("")


			// event.preventDefault()
		}else {statusElm.append("email is not valid");
			
		}
	});

});
