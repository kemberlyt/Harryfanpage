$(document).ready(function() {
	
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
			$('#logo').attr('src',"images/harry-logo-blk.png")
		} else {
			$('#header').removeClass('fixed');
			$('#logo').attr('src',"images/logowhite.png")
		}
	});



	// $('img').mouseover(function(){
	// 	var newSrc = $('#logo').attr("src").replace("images/logowhite.png", "images/harry-logo-blk.png");
	// 	$('#logo').attr("src", newSrc); 
	//   });
	//   $('img').mouseout(function(){
	// 	var newSrc = $('#logo').attr("src").replace("images/harry-logo-blk.png", "images/logowhite.png");
	// 	$('#logo').attr("src", newSrc); 
	//   });

	
	$('.work-box').fancybox();

	
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});