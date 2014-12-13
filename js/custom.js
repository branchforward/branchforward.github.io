(function ($) {
	$("nav a[href!='#']").on('click', function(e) {
	   // store hash
	   var target = this.hash;

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // animate
	   $('html, body').animate({
		   scrollTop: $(this.hash).offset().top
		 }, 1000, function(){

		   // when done, add hash to url
		   // (default click behaviour)
		   window.location.hash = target;
		 });
	});
})(jQuery);
