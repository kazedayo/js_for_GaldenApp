function redrawImg(obj,img){
	obj.fadeOut(200,function(){
		obj.attr('data-src',img);
		obj.attr('class','b-lazy');
		obj.attr('src','https://img.eservice-hk.net/upload/2018/05/17/213108_b95f899cf42b6a9472e11ab7f8c64f89.gif');
		obj.attr('onclick', 'window.webkit.messageHandlers.imageView.postMessage(\''+img+'\')')
	}).fadeIn(200);
}

$(window).scroll(function() {
	$(".comment").each( function() {
		var top_of_element = $(this).offset().top;
    	var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    	var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    	var top_of_screen = $(window).scrollTop();

    	if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        	// The element is visible, do something
        	$(this).addClass("showing");
    	}
    	else {
        	// The element is not visible, do something else
        	$(this).removeClass("showing");
    	}
	});
});
