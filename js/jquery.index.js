(function($) {

		var x = 0;
		var y = 0;
		//cache a reference to the topper
		var topper = $("#topper");
		
		// initial background position
		topper.css('backgroundPosition', x + 'px' + ' ' + y + 'px');
		
		//scroll up background position every 90 miliseconds
		window.setInterval(function() {
			topper.css("backgroundPosition", x + 'px' + ' ' + y + 'px');
			y--;
		}, 90);
		}
		
}) (jQuery);