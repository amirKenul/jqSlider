

/*$(document).ready(function(){
	$("li")
	.on("click",function(){
		$(this).hasClass("active");
		var a=$(this).addClass("active");

	})
	if (a == true){
		.on("click",function(){
			$(this).removeClass("bg");
		})
	}


})

*/
$(document).ready(function(){
	$('li')
	.on('click',function(){
		$('li')
		.removeAttr('class')
		$(this)
		.addClass('bg')
	});

});

$(function(){
	$("button")
	.on("click",function(){
		var panelId = $(this).attr("data-panelid");
		$("#"+panelId).toggle();
	});
});