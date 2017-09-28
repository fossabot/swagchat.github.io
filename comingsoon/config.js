/******************************************

    TABLE OF CONTENTS
    ---------------------------
        1. COLOR CONFIGURATION
        2. SUBSCRIBE CONFIGURATION

 ******************************************/
	
/******************************************************************
*******************************     1. COLORS CONFIGURATION
******************************************************************/
	
	var	colorOptions 	= {

		// Custom Text Color
		customColor				:	'rgba(22, 182, 234, 1)',

		// Subscribe Button Background Color
		subscribeColor			:	'rgba(22, 182, 234, 1)',

		// Subscribe Button Hover  Background Color
		subscribeHoverColor		: 	'rgba(22, 182, 234, 0.5)',

		// Content Open Button Background Color
		contentOpenColor		:	'rgba(22, 182, 234, 0)',

		// Content Open Button Hover Background Color
		contentOpenHoverColor	:	'rgba(22, 182, 234, 1)',

		// Content Close Background Color
		contentCloseColor		:	'rgba(22, 182, 234, 0)',

		// Content Close Hover Background Color
		contentCloseHoverColor	:	'rgba(22, 182, 234, 1)',

	}

/******************************************************************
*******************************     2. SUBSCRIBE CONFIG
******************************************************************/

	// CHOOSE BEETWEN MAILCHIMP AND SIMPLE SUBSCRIBE VIA EMAIL, ALSO YOU CAN KEEP BOTH. 

	var subscribe = {

		// DELETING OPTIONS BELOW OR LEAVE IT BLANK YOU WILL DISABLE OPTION TO SUBSCRIBE USER VIA MAILCHIMP

			// MAILCHIMP API KEY WHICH WILL BE USED TO CONNECT YOUR SUBSCRIBE FORM AND MAILCHIM ACCOUNT
			// ----------------------------------------------------------------------------------------

			apiKey: '07f194f089052200fe4bf9a2b1a3a104-us15',


			// MAILCHIMP LIST ID WHICH WILL BE USED TO INSERT NEW USER TO YOUR SUBSCRIBE LIST
			// -------------------------------------------------------------------------------

			listID: '48dbc51079',


			// RESPONSE MESSAGE IF EMAIL IS VALID AND SENT TO YOUR SYSTEM
			// ----------------------------------------------------------

			successMsg: 'Thanks for your interest!',


		// DELETING OPTION BELOW OR LEAVE IT BLANK YOU WILL DISABLE OPTION TO SUBSCRIBE USER VIA EMAIL

			// EMAIL ADDRESS WHICH WILL BE USED TO NOTIFY YOU WHEN NEW USER SUBSCRIBE ON YOUR SYSTEM
			// -------------------------------------------------------------------------------------

			emailTo: 'yallowina.themes@gmail.com'
	}
