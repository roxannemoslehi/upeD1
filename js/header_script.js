$(document).ready(function(){
	    $(".nav-item").hover(function() { 
        $(this).css("background", "#3EACC7");
        $(this).css( 'cursor', 'pointer');
    },
    function() {
        $(this).css("background", "#303030");
    });
});