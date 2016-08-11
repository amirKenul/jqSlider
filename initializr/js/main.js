

/*

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
});*/





/*var height=653px;
var countSlide=1;
var $slider=$("#slider");
var $container=$(".container-fluid");
$(function(){
	$("#upBut").on('click',function(){	


	$(".container-fluid").animate({"margit-top:-="+height}
		countSlide++;
		if(countSlide==$slider.lenght){
			countSlide=1;
			$container.css("margin-top:0");



		})



});

})*/

$("#containerSlide.allslide").animate({
	margin-top:"-=653px"})

