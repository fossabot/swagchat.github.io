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
//		sr.reveal('.hoge', {});
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
	/* ---------------------------------------------- /*
         * Home section height
         /* ---------------------------------------------- */

//	function buildHomeSection(homeSection) {
//		if (homeSection.length > 0) {
//			if (homeSection.hasClass('home-full-height')) {
//				homeSection.height($(window).height());
//			} else {
//				homeSection.height($(window).height() * 0.8);
//			}
//		}
//	}
	/* ---------------------------------------------- /*
	 * Scroll Animation
	 /* ---------------------------------------------- */

	$('.section-scroll').bind('click', function(e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1000);
		e.preventDefault();
	});
})(jQuery);