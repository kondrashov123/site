
function chancge() {
	$(this).prev().toggleClass("active")}
	$(function(){
		$('#div > h2').click(function(){
			$(this).next().slideToggle();
			$(this).toggleClass('active');
		})
	} )
