/******************************************

	TABLE OF CONTENTS
	---------------------------
		1. Loader Effect
		2. Section Switch Effect
		3. Subscribe Form
		4. Color Configuration

 ******************************************/


/******************************************************************
*******************************		1. Loader Effect
******************************************************************/

(function ($) {
    'use strict';

	var spinner 	= $('.spinner'),
		loadWrap 	= $('#loader-wrap'),
		main 		= $('.main');

	$(window).on('load', function() {
		main.css('visibility', 'visible').addClass('animated fadeIn');
	});

})(jQuery);

/******************************************************************
*******************************		2. Section Switch Effect
******************************************************************/

(function ($) {
    'use strict';

	var contentO 	= $('.content-open'),
		contentC 	= $('.content-close'),		
		content 	= $('.content'),
		main 		= $('.main'),
		detailsWrap = $('.content-details-wrap'),
		contentBg	= $('.background-content'),
		overlay		= $('.overlay'),
		contentMsg 	= $('.content-message-area'),
		msgBg		= $('.msg');

	contentO.on('click', function(){
		content.css('overflow', 'hidden').addClass('content-one');
		main.removeClass('animated slideInDown').addClass('animated slideOutUp');			
		contentC.css('display', 'block');
		detailsWrap.css('opacity', 1).removeClass('content-details-wrap-one').addClass('content-details-wrap-two content-details-color');	
		contentBg.css('opacity', 1);
		overlay.addClass('overlay-one');
		setTimeout(function() {		
			contentMsg.css('visibility', 'visible').removeClass('animated slideOutDown').addClass('animated slideInUp');
			contentC.css('opacity', 1);
		},200);	
		setTimeout(function() {	
				content.css('overflow', 'auto');
		},1500);		
	});

	contentC.on('click', function(){	
		if($(window).outerHeight() > msgBg.outerHeight()-1){
			content.css('overflow', 'hidden');
		}
		contentMsg.removeClass('animated slideInUp').addClass('animated slideOutDown');
		setTimeout(function() {	
			overlay.removeClass('overlay-one');
			detailsWrap.removeClass('content-details-wrap-two content-details-color').addClass('content-details-wrap-one');	
			main.removeClass('animated slideOutUp').addClass('animated slideInDown');
			content.removeClass('content-one');			
			contentC.css('opacity', 0);	
			contentBg.css('opacity', 0);		
			setTimeout(function(){
				contentC.css('display', 'none');
			},500);	
		},200);
	});

})(jQuery);

/******************************************************************
*******************************		3. Subscribe Form
******************************************************************/

(function ($) {
    'use strict';

	var jsInput 	= $( '.js-input' ),
		subButton 	= $('.subscribe-button-styles'),
		subInput 	= $('.subscribe-input-styles');

	jsInput.keyup(function() {
  		if( $(this).val() ) {
     		$(this).addClass('not-empty');
		} 
		else {
			$(this).removeClass('not-empty');
		}
	});

	// Event on submit subscribe form
	subButton.on('click', function() {

		// Get value from input field
      	var email = subInput.val(),
			emailTo = '',
			apiKey = '',
			listID = '',
			is_email_enabled = false,
			is_mailchimp_enabled = false;

		// Subscribe via email
		if( subscribe.emailTo ) {
			is_email_enabled = true;
			emailTo = subscribe.emailTo;
		}
		// Subscribe via mailchimp
		if( subscribe.apiKey && subscribe.listID ) {
			is_mailchimp_enabled = true;
			apiKey = subscribe.apiKey;
			listID = subscribe.listID;
		}

      	// Ajax request for sending mails
        $.ajax({
			type: 'POST',
			url: 'assets/subscribe.php',
			data: {
				// Mailchimp service
				via_mailchimp: is_mailchimp_enabled,
				// Subscribe via email service
				via_email: is_email_enabled,
				// Field value
				email: email,
				// Your email
				email_to: emailTo,
				// Mailchimp api key
				api_key: apiKey,
				// Mailchimp list id
				list_id: listID,
				// Server success message
				success_msg: subscribe.successMsg
			},
			dataType: 'json',
			success: function(json) {
                if(json.valid === 0) {
                	// Set response text below field
                	subInput.css('border', '1px solid tomato');
                }
                else {
                	// Set response text below field
                	subInput.val(json.message);
                	subInput.css('border', '1px solid green');
                	setTimeout(function() {
                		subInput.css('border', '1px solid rgba(244, 244, 244, 0.3)');
                		subInput.val('');
                	}, 3000);
                }
          	},
          	error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }

      	});
      	return false;
    });

})(jQuery);

/******************************************************************
*******************************		4. Color Configuration
******************************************************************/

(function ($) {
    'use strict';

	var customTextColor		= $('.text-color'),
		subButton 			= $('.subscribe-button-styles'),
		contentOpenButton	= $('.content-open'),
		contentCloseButton 	= $('.content-close');

	// Elements the colors are applied to

		customTextColor.css('color', colorOptions.customColor);

		subButton.css('background-color', colorOptions.subscribeColor).hover(function(){
				$(this).css('background-color', colorOptions.subscribeHoverColor);
			}, function(){
				$(this).css('background-color', colorOptions.subscribeColor);
		});

		contentOpenButton.css('background-color', colorOptions.contentOpenColor).hover(function(){
				$(this).css('background-color', colorOptions.contentOpenHoverColor);
			}, function(){
				$(this).css('background-color', colorOptions.contentOpenColor);
		});
		
		contentCloseButton.css('background-color', colorOptions.contentCloseColor).hover(function(){
				$(this).css('background-color', colorOptions.contentCloseHoverColor);
			}, function(){
				$(this).css('background-color', colorOptions.contentCloseColor);
		});

		if($(window).width() <= 991) {
			contentCloseButton.css('background-color', colorOptions.contentCloseHoverColor);	
		}

})(jQuery);

(function ($) {
	'use strict';
	$("#coming-typd").hide();
	var ct = new Typed('#copy-typd',{
		startDelay: 1000,
		typeSpeed: 60,
		showCursor: false,
		strings: ["<p>Give all the conversations to App.<br>SDK, RTM-API and UIKit for Chat. ^450\n <br>October 2017</p> ^600\n <h2>Coming <span class='t-color'>soon</span></h2>"],
		contentType: 'html',
		onComplete: function(self){
			self.stop();
			$('.typed-cursor').css('display','none');
		}
	});

})(jQuery);
