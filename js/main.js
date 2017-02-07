$(function(){
	$(".ukfb-component-nav > li").on("mousedown",function(){
		$(".ukfb-component-nav > li").removeClass("uk-active");
		$(this).addClass("uk-active");
	});
	
	$(".ukfb-editor-nav > li").on("click",function(){
		$(".ukfb-editor-nav > li").removeClass("uk-active");
		$(this).addClass("uk-active");
	})
})