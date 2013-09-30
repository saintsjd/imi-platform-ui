/*global define */
define([], function () {
    'use strict';

    $("#support-link,#support-bar .close").click(function(){
    	$("#support-bar").slideToggle();
    });

	$('.filter-btn').click(function(){
		
		var whichBtn = $(this).attr('id').split('-')[0];
		$("#"+whichBtn+"-filter").slideToggle();
		/*var alreadyActive = $(this).parent().hasClass('active');
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

		*/
		return false;
	});

	$('.update-btn').click(function(){

		$('.filter-btn').removeClass('active');
		$('.filter').slideUp();
		return false;
	});


    return '\'Allo \'Allo!';
});