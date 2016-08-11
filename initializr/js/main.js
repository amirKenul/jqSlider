

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


var image=["../img/1.jpg","../img/2.jpg","../img/3.jpg","../img/4.jpg","../img/5jpg"];

count=0;

$(function(){
	$("#upBut").on('click',function(){
		count++;
		$(".imageLitle").css("background-image",image[count]);
		
		if(count==image.length){
			count=0;
	});
		}
});


var height=650px;
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

})
