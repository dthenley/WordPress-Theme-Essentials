
//-- Sticky Nav -->
	$(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
          $('.navbar.site-nav').addClass('shrink');
        } else {	
          $('.navbar.site-nav').removeClass('shrink');
        }
      });
