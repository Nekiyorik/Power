$(document).ready(function(){
    $('.slider').slick({
		arrows:true,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
        responsive:[
			{
				breakpoint: 768,
				settings: {
                    arrows:false,
				}
			}
		]
    });
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});
