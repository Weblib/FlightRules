	/* PAGER & STEPS */
	$( document ).on( 'click', '.pager a', function (e) {
		e.preventDefault();

		var pagerid = $(this).parent().parent().parent().attr('data-pagerid');
		var targetid = $(this).attr('data-target');

		$('.pager[data-pagerid="'+pagerid+'"]').find('.active').removeClass('active');
		$(this).parent().addClass('active');

		if($('section[data-pagerid="'+pagerid+'"]').find('section').length !== 0) {
			$('section[data-pagerid="'+pagerid+'"] .step').not('section[data-pagerid!="'+pagerid+'"] .step').removeClass('active');
			$('section[data-pagerid="'+pagerid+'"] .step[data-stepid="'+targetid+'"]' ).not('section[data-pagerid!="'+pagerid+'"] .step').addClass('active');
		}
		else {
			$('section[data-pagerid="'+pagerid+'"] .step').removeClass('active');
			$('section[data-pagerid="'+pagerid+'"] .step[data-stepid="'+targetid+'"]' ).addClass('active');
		}
	});

	/* DROPDOWN LIST ITEMS */
	$( document ).on( 'click', '.item .expand', function (e) {
		var subitem = $(this).parent().next('.item_subcontent');
		subitem.slideToggle('medium', function() {
			if (subitem.is(':visible')) subitem.css('display','inline-block');
		});
		$(this).toggleClass('open');
		$(this).toggleClass('closed');
	});

	$(document).on('click','#expandAll',function(){
		$('.item_subcontent').slideDown('medium', function() {
			if ($('.item_subcontent').is(':visible')) $('.item_subcontent').css('display','inline-block');
		});
		$('.expand').addClass('open');
		$('.expand').removeClass('closed');
	});

	$(document).on('click','#collapseAll',function(){
		$('.item_subcontent').slideUp();
		$('.expand').addClass('closed');
		$('.expand').removeClass('open');
	}); 

	/*
	 * Ajoute un time picker dans un text input
	 */
	function timePicker (box, closeAction) {

		var b = $(box);
		if (b.hasClass('AMPM')) {
			b.timepicker({ 
				showPeriod: true,
				showLeadingZero: true,
				showPeriodLabels: true,
				onClose: function() {
					if (closeAction) closeAction (b);
				}
			});
		}
		else {
			b.timepicker({ 
				onClose: function() {
					if (closeAction) closeAction (b);
				}
			});
		}
	}

	/*
	 * Ajoute un time picker lié sur deux text input
	 */
	function timePeriodPicker (startBox, endBox, closeAction) {
	
		var start = $(startBox);
		var end = $(endBox);

		if (start.hasClass('AMPM')) {
			start.timepicker({ 
				showPeriod: true,
				showLeadingZero: true,
				showPeriodLabels: true,
				onClose: function() {
					if (closeAction) closeAction (start);
				},
				onSelect: function (time, endTimePickerInst ){
					/*end.timepicker('option', {
					   minTime: {
						   hour: endTimePickerInst.hours,
						   minute: endTimePickerInst.minutes
					   }
					});*/
				}
			});
			end.timepicker({ 
				showPeriod: true,
				showLeadingZero: true,
				showPeriodLabels: true,
				onClose: function() {
					if (closeAction) closeAction (end);
				},
				onSelect: function (time, startTimePickerInst ){
					/*start.timepicker('option', {
						maxTime: {
						   hour: startTimePickerInst.hours,
						   minute: startTimePickerInst.minutes
						}
					});*/
				}
			});
		}
		else {
			start.timepicker({ 
				showLeadingZero: true,
				onClose: function() {
					if (closeAction) closeAction (start);
				},
				onSelect: function (time, endTimePickerInst ){
					/*end.timepicker('option', {
					   minTime: {
						   hour: endTimePickerInst.hours,
						   minute: endTimePickerInst.minutes
					   }
					});*/
				}
			});
			end.timepicker({ 
				showLeadingZero: true,
				onClose: function() {
					if (closeAction) closeAction (end);
				},
				onSelect: function (time, startTimePickerInst ){
					/*start.timepicker('option', {
						maxTime: {
						   hour: startTimePickerInst.hours,
						   minute: startTimePickerInst.minutes
						}
					});*/
				}
			});
		}
	}
