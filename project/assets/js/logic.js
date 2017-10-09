$("input[type='text'").keypress(function(event){
	if(event.which===13){
		var item=$(this).val();
		$(this).val("");
		$("ul").append("<li> " + item + "</li>")
	}
});

$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});