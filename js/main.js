
var dropdown = $('.nav__drop-down');
var sublist = $('.nav__sublist');
var subitem = $('nav__sublist-item')
var header = $('header')

dropdown.on('click keyup focus', function(e){
    sublist.slideDown();
    header.addClass('scroll-bottom');
})
dropdown.on('focusout', function(e){
    sublist.slideUp();
    header.removeClass('scroll-bottom');
})


$(document).scroll(function() {
	var scroll = $(document).scrollTop();
	if (scroll > 0) {
        header.addClass('scroll-bottom');
	} else {
        header.removeClass('scroll-bottom');
	}
});



var tabs = $('.consumer__tap-list [role="tab"]');
var tabButton = $('.consumer__tabpanel-question-button')
var tabContent = $('.consumer__tabpanel-question-content')

tabs.on('click', function(e){
	e.preventDefault();
	$(this).attr('aria-selected', true).siblings().attr('aria-selected', false);
	var selectedId = '#' + $(this).attr('aria-controls');
	$(selectedId).addClass('section-act').siblings().removeClass('section-act');
});


tabButton.on('click', function(e){
    $(this).next().slideToggle();
    $(this).find('i').toggleClass("fas fa-angle-down");
    $(this).find('i').toggleClass("fas fa-angle-up");
});

