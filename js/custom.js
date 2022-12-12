/*for slider*/
    $(document).ready(function() {
        $(".lion_slider").owlCarousel({   
            autoplay:false,
            items : 1,
            stagePadding: 400,
            center: true,
            margin:200,
            smartSpeed:1200,
            loop:true,
            mouseDrag:true,
            nav:true,
            navText:['<img src="images/l_arrow.png">','<img src="images/r_arrow.png">']
        });
    });


/* for background image */
$( ".parant-img" ).each(function( index ) {
            var BG = $(this).find('.back-img img').attr('src');
            $(this).css('background-image', 'url(' + BG + ')');
            $('.back-img img').hide();
    });

/*slow scrolling*/
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
	    if( target.length ) {
        	event.preventDefault();
        	$('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    	}
	});

/* for page jquery plugin */
    $(document).ready(function() {
        $('#fullpage').fullpage({
            sectionsColor: ['', '', ''],
            anchors: ['firstPage', 'secondPage', '3rdPage', 'undefined', '5rdPage','6rdPage','7rdPage','8rdPage'],
            menu: '#menu',
           });
        });

/* for video playing jquery */
	$('.video').parent().click(function () {
	    if($(this).children(".video").get(0).paused){
	        $(this).children(".video").get(0).play();
	        $(this).children(".playpause").fadeOut();
	    }
        else{
	        $(this).children(".video").get(0).pause();
	        $(this).children(".playpause").fadeIn();
	    }
	});

/*blinker js*/
    function blinker(){
        $('.blinking').fadeIn(2000); 
        setInterval(2000);
               }
        

/* match hight*/
	jQuery(document).ready(function($) {
		var winheight = $(window).height();
		$(".window_height").height(winheight);
        $('video').each((i,v) => v.play());
	});

/*for menu */
(function() {
    
    $.fatNav();
    
}());

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

