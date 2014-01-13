/* ===================================================
 * jWueryPopup.js v1.0
 * ===================================================
 * Copyright 2013 CMYKPLUSWHITE, Inc.
 * Dec 19. 2013, Jeewhan Kim
 * =================================================== */

(function($){

	"use strict";

	$.fn.extend({

		jwPopup: function(options) {

			var defaults = {
				bgcolor: "#FFF",
				top: 100,
				opacity: 0.7,
				speed: 300
			}

			var overlay = $('<div class="jwpopup-overlay"></div>');
			if($(".jwpopup-overlay").length == 0) $("body").append(overlay);

			options = $.extend(defaults, options);

			return this.each(function() {

				$(this).click(function(e){
					
					var popup_id = $(this).attr("href");

					$(".jwpopup-overlay").click(function(){
						if($(popup_id).is(":visible")) close_popup(popup_id);
						else return;
					});

					var popup_height = $(popup_id).outerHeight();
					var popup_width = $(popup_id).outerWidth();

					$(".jwpopup-overlay").css({'display':'block', opacity:0});
					$(".jwpopup-overlay").css({'background-color': options.bgcolor});
					$(".jwpopup-overlay").fadeTo(options.speed, options.opacity);

					$(popup_id).css({
						'display' : 'block',
						'position' : 'absolute',
						'opacity' : 0,
						'z-index' : 11000,
						'left' : 50 + '%',
						'margin-left' : (-popup_width/2) + 'px',
						'top' : options.top + 'px'
					});

					$(popup_id).fadeTo(options.speed, 1);

				});

			});

			function close_popup(popup_id){
				
				$(".jwpopup-overlay").fadeOut(200);
				$(".jwpopup-overlay").css({'background-color': "none"});
				$(popup_id).css({'display':'none'});			
				
			}
		}
	});
})(jQuery);