$(document).ready(function(){
  $('#carousel').slick({
    	slidesToShow: 3,
	  	slidesToScroll: 1,
	  	autoplay: false,
	  	speed:500,
	  	arrows:true,
	  	centerMode:true,
	  	centerPadding:"0px",
	  	dots:true,
	  	swipeToSlide:true,
	  	edgeFriction:1,
	  	touchThreshold:1000,
	  	focusOnSelect:true
  });

  $('#backgrounds').children('img').hide();
  $('#backgrounds').children('div').hide();
  $('#backgrounds img:first-child').show();

	$('#carousel').on('afterChange', function(event, slick, currentSlide){
	  slide = $('.slick-slide[data-slick-index = '+currentSlide+']');
	  show = slide.children('article').attr('data-bg');
	  $('#backgrounds').children('img').hide();
	  $('#backgrounds').children('div').hide();
	  $('#backgrounds').children('#'+show).show();
	  if(currentSlide == 0) { $('a.center').css('opacity',0).hide();$('#center1').show().css('opacity',1); } 
	  else if(currentSlide == 2) { $('a.center').css('opacity',0).hide();$('#center2').show().css('opacity',1); } 
	  else { $('a.center').css('opacity',0).hide();}
	  console.log(currentSlide);
	});

	$('#carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		slide = $('.slick-slide[data-slick-index = '+nextSlide+']');
		console.log(slide);
		height = slide.find('h1.big').outerHeight();
		$('#rectangle').animate({'height' : height},500);
	});

	$('.open-popup-link').magnificPopup({
	  type:'inline',
	  midClick: true 
	});
	$('.iframepopup').magnificPopup({
	  type:'iframe',
	  midClick: true,
	  iframe: {
	  markup: '<div class="mfp-iframe-scaler">'+
	            '<div class="mfp-close"></div>'+
	            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
	          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

	  patterns: {
	    youtube: {
	      index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

	      id: 'v=', // String that splits URL in a two parts, second part should be %id%
	      // Or null - full URL will be returned
	      // Or a function that should return %id%, for example:
	      // id: function(url) { return 'parsed id'; } 

	      src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
	    },
	    vimeo: {
	      index: 'vimeo.com/',
	      id: '/',
	      src: 'http://player.vimeo.com/video/%id%?autoplay=1'
	    },
	    gmaps: {
	      index: '//maps.google.',
	      src: '%id%&output=embed'
	    }

	    // you may add here more sources

	  },

	  srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
	}
	});
});