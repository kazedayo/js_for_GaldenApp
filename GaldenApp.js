function redrawImg(obj,img){
	obj.fadeOut(200,function(){
		obj.attr('src',img);
		obj.attr('onclick', 'window.webkit.messageHandlers.imageView.postMessage(\''+img+'\')')
	}).fadeIn(200);
}

$(window).scroll(function(){
	var scrollTop = $(window).scrollTop();
	var windowHeight = $(window).height();		
	var first = false;
	$(".comment").each( function() {
		var offset = $(this).offset();
		if (scrollTop <= offset.top && ($(this).height() + offset.top) < (scrollTop + windowHeight) && first == false) {
			$(this).addClass("read");
			first=true;
		} else {
			$(this).removeClass("read");
			first=false;
		}
	});
});