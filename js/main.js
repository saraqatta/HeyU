$(document).ready(function(){
    var scrollTop =0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop > 0){
			$('.top').show(500);
            $('.navbar').addClass ('scrollNav');
        }else if (scrollTop == 0){
			$('.top').hide(500);
            $('.navbar').removeClass('scrollNav');
        }
    });

$('.top').click(function(){
$('body, html').animate({
scrollTop:0}, 500);
});




});