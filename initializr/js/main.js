

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

var height=653;
var countslide=1;

var $slider= $("#containerSlide");
var $slidecont = $slider. find(".allslide");
var $slides = $slidecont.find(".slider");
/*
$("#downBut").on("click",function(){

$slidecont.animate({"margin-top":"-="+height});

countslide++;
if(countslide==$slides){
	countslide=1;
	$slidecont.css("margin-top",0);
}
	  
})*/


$("#downBut").on("click",function(){

	$(".allslide").animate({
	 "margin-top": "-=653px"},1000);
	
	countslide++;

	if (countslide==$(".slider").length) {
		countslide=1;
		$(".allslide").css({"margin-top":"0px"});
	}



});

$("#upBut").on("click",function(){

	$(".allslide").animate({
	 "margin-top": "+=653px"},1000);
	
	/*if (countslide==0) {
		countslide=$(".slider").length-1;
		$(".allslide").css({"margin-top":"-3918px"});
	}*/



})
