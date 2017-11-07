$(document).ready(function() {

$(".available").on('click', function() {
	$(".form").css("display", "block");
	$(this).removeClass('available').addClass('reserved');
});
	
//	I kept trying various versions of the condition below but never got the class to switch back to ".available"
//	if $(this.input.hasAttribute !== true) {
//		$(this).removeClass('reserved').addClass('available');
//	}
	
 $(".available").mouseenter(function() {
    $(this).fadeTo(500, 0.5);
  });
  $(".available").mouseleave(function() {
    $(this).fadeTo(500, 1);
  });

$(".submit").on('click', function(){
	$(".form").css("display", "none");
});

$(".closeForm").on('click', function() {
	$(".form").css("display", "none");
	$(".available").removeClass('reserve').addClass('available');
});
	

});

