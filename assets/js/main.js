(function(){
	$(document).ready(function(){
		wow = new WOW({
			mobile: false
		});
		wow.init();
		
//		var rellax = new Rellax('.rellax',{
//			center: true,
//			round: true
//		});
		
		window.sr = ScrollReveal();
		
		/* ---------------------------------------------- /*
		 * Scroll Animation
		 /* ---------------------------------------------- */

		var upperLimit = 300;
		var scrollLinkElm = 'a#scroll-to-top';
		var scrollSpeed = "slow";
		var scrollStyle = "swing";

		jQuery(scrollLinkElm).hide();
		jQuery(window).scroll(function(){
			var scrollTop = jQuery(document).scrollTop();
			if(scrollTop > upperLimit) {
				jQuery(scrollLinkElm).stop().fadeTo(300,1).show();
			} else {
				jQuery(scrollLinkElm).stop().fadeTo(300,0).hide();
			}
		});
		jQuery(scrollLinkElm).on('tap', function(e){
			e.preventDefault();
			jQuery('html, body').stop().animate({scrollTop:0}, scrollSpeed, scrollStyle);
			return false;
		});
	});
	(function (window, document) {
	  var menu = document.getElementById('menu'),
		  WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

	  function toggleHorizontal() {
		  [].forEach.call(
			  document.getElementById('menu').querySelectorAll('.custom-can-transform'),
			  function(el){
				  el.classList.toggle('pure-menu-horizontal');
			  }
		  );
	  };

	  function toggleMenu() {
		  // set timeout so that the panel has a chance to roll up
		  // before the menu switches states
		  if (menu.classList.contains('open')) {
			  setTimeout(toggleHorizontal, 500);
		  }
		  else {
			  toggleHorizontal();
		  }
		  menu.classList.toggle('open');
		  document.getElementById('toggle').classList.toggle('x');
	  };

	  function closeMenu() {
		  if (menu.classList.contains('open')) {
			  toggleMenu();
		  }
	  }

	  document.getElementById('toggle').addEventListener('click', function (e) {
		  toggleMenu();
		  e.preventDefault();
	  });

	  window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
	  })(this, this.document);
	
	/* ---------------------------------------------- /*
	 * Scroll top
	 /* ---------------------------------------------- */

	$(window).on('load scroll', function() {
		if ($(this).scrollTop() > 180) {
			$('.scroll-up').fadeIn();
		} else {
			$('.scroll-up').fadeOut();
		}
	});

	$('a[href="#totop"]').on('click', function() {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});
	
	/* ---------------------------------------------- /*
	 * Fixed Nav
	 /* ---------------------------------------------- */
	
	var $nav = $('#menu-wrapper');
	var $header = $('.home-header');
	var navHeight = $nav.outerHeight();
	var headerH = $header.outerHeight();
	var navPos = $nav.offset().top;
	var headerPos = $header.offset().top;
	
	$(window).on('load scroll', function(){
		var val = $(this).scrollTop();
		if (val > navHeight) {
			$nav.addClass('is-fixed');
			$('main').css('margin-top', navHeight);
		} else {
			$nav.removeClass('is-fixed');
			$('main').css('margin-top', '0');
		}
	});
	
	var homeSection = $('.home-section'),
		width = Math.max($(window).width(), window.innerWidth),
        mobileTest  = false;
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		mobileTest = true;
	}
	$(window).resize(function() {});
	$(window).scroll(function() {});
	/* ---------------------------------------------- /*
	 * Set sections backgrounds
	 /* ---------------------------------------------- */
	var module = $('.home-section, .section, .module, .module-small, .footer');
	module.each(function(i) {
		if ($(this).attr('data-background')) {
			$(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
		}
	});
	
})(jQuery);
/* jQuery Tap Event */
(function($, window) {
	"use strict";

	var RANGE = 5,
		events = ["click", "touchstart", "touchmove", "touchend"],
		handlers = {
			click: function(e) {
				if(e.target === e.currentTarget)
					e.preventDefault();
			},
			touchstart: function(e) {
				this.jQueryTap.touched = true;
				this.jQueryTap.startX = e.touches[0].pageX;
				this.jQueryTap.startY = e.touches[0].pageY;
			},
			touchmove: function(e) {
				if(!this.jQueryTap.touched) {
					return;
				}

				if(Math.abs(e.touches[0].pageX - this.jQueryTap.startX) > RANGE ||
				   Math.abs(e.touches[0].pageY - this.jQueryTap.startY) > RANGE) {
					this.jQueryTap.touched = false;
				}
			},
			touchend: function(e) {
				if(!this.jQueryTap.touched) {
					return;
				}

				this.jQueryTap.touched = false;
				$.event.dispatch.call(this, $.Event("tap", {
					originalEvent: e,
					target: e.target,
					pageX: e.changedTouches[0].pageX,
					pageY: e.changedTouches[0].pageY
				}));
			}
		};

	$.event.special.tap = "ontouchend" in window? {
		setup: function() {
			var thisObj = this;
			
			if(!this.jQueryTap) {
				Object.defineProperty(this, "jQueryTap", {value: {}});
			}
			$.each(events, function(i, ev) {
				thisObj.addEventListener(ev, handlers[ev], false);
			});
		},
		teardown: function() {
			var thisObj = this;
			
			$.each(events, function(i, ev) {
				thisObj.removeEventListener(ev, handlers[ev], false);
			});
		}
	}: {
		bindType: "click",
		delegateType: "click"
	};

	$.fn.tap = function(data, fn) {
		return arguments.length > 0? this.on("tap", null, data, fn): this.trigger("tap");
	};
})(jQuery, this);
