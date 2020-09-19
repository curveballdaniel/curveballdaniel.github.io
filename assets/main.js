$(document).ready(function(){
	setTimeout(function() {
    $(".top-left-notification").toggleClass("red-notification");
    $(".top-right-notification").toggleClass("green-notification");
    $(".bottom-left-notification").toggleClass("yellow-notification");
	}, 500);
});
