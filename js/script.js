$(document).ready(function(){
// When the document is ready
	$(".overlay").mouseenter(function(){
	// .overlay div opacity is set to 0 default
	// when you mouse over the .overlay div
		$(this).animate({opacity: 0.9});
		// the moused over overlay div will animate the 
		// opacity to 1
		$(this).mouseleave(function(){
		// when the mouse leaves the overlay div
			$(this).animate({opacity: 0});
			// the overlay div's opacity will be set to 0
		})
	});
	// jQuery .animate method does not allow color animations
	// unless a plugin is used.
	$(".fa-envelope-o").on("click", function(){
		$("#hidden-email").slideToggle(700);
	});
	$("#project-link").on("click", function(){
		$.smoothScroll({
			scrollTarget: "#project-container",
			offset: -100
		});
		return false;
	});
	$("#about-link").on("click", function(){
		$.smoothScroll({
			scrollTarget: "#about-container",
			offset: -100
		});
		return false;
	});
	$("#contact-link").on("click", function(){
		$.smoothScroll({
			scrollTarget: "#footer-anchor"
		});
		return false;
	});
});