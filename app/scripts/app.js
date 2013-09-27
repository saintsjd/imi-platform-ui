/*global define */
define([], function () {
    'use strict';

	$('.filter-btn a').click(function(){
		
		var whichBtn = $(this).attr('id').split('-')[0];
		var alreadyActive = $(this).parent().hasClass('active');
		var filterOpen = $('.filter-btn.active').length;


		$('.filter-btn').removeClass('active');
		$('.filter').slideUp(function(){
			console.log('up');
		});

		if( !alreadyActive ){
			$('#' + whichBtn + '-filter-btn').parent().addClass('active');
			$('#' + whichBtn + '-filter').slideDown('slow');
			filterOpen = true;
		}


		return false;
	});

	$('.update-btn').click(function(){

		$('.filter-btn').removeClass('active');
		$('.filter').slideUp();
		return false;
	});

	$("#support-link").click(function(){
		$("#support-bar").slideToggle();
	});

	$("#support-bar .close").click(function(){
		$("#support-bar").slideUp();
	});

	$("#filter-update-btn").click(function(){
		$("#filter-bar").toggleClass("active");


	});

$('#filter-bar').affix({
    offset: {
      top: 100
    , bottom: 10
    }
  })

    return '\'Allo \'Allo!';
});