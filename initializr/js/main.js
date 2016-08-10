

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
		
		$(".imageLitle").css("background-image:"+count[0]);
		count++;
		if(count==4){
			count=0;


	});
		}
})