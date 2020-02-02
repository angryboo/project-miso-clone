
var dropdown = $('.nav__drop-down');
var sublist = $('.nav__sublist');
var subitem = $('nav__sublist-item')
var header = $('header')
var body = $('body')



dropdown.on('click keyup focus', function(e){
    sublist.slideDown();
    sublist.removeClass('sublist-hide');
    sublist.addClass('sublist-act');
    header.addClass('scroll-bottom');
})
dropdown.on('focusout', function(e){
    sublist.slideUp();
    sublist.addClass('sublist-hide');
    sublist.removeClass('sublist-act');
    header.removeClass('scroll-bottom');
})

$(document).scroll(function() {
	var scroll = $(document).scrollTop();
	if (scroll > 0) {
        $(header).addClass("scroll-bottom");
	} else {
        $(header).removeClass("scroll-bottom");
	}
});