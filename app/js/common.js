$(document).ready(function(){

	//mob menu
	$('.menu-bar').on('click', function(){
		$('.header').toggleClass('open-menu');
	});

	$('.filter-col__checkbox').on('click', function(){
		$(this).toggleClass('filter-col__checkbox-check');
		if($(this).find('input')[0].hasAttribute('checked'))
			$(this).find('input').removeAttr('checked','checked');
		else
			$(this).find('input').attr('checked','checked');
	});

	$('.filter-col__down').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('filter-col__down-open');
		$(this).find('ul').slideToggle(200);
	});

	if($(window).width() > 820){
		$('.sidebar').css('margin-top', $('.content-title').outerHeight() + 'px');
	}


});