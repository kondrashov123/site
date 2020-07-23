
function chancge() {
	$(this).prev().toggleClass("active")}
	$(function(){
		$('div.hides h2').click(function(){
			$(this).next().slideToggle();
			$(this).toggleClass('active');
		})
	} )
