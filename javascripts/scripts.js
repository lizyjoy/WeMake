//smooth anchor scrolling

$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');

  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
            location.hash = target;
          });
        });
      }
    }
  });

  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }

	
	
	$(window).scroll( function() {
	    if($(this).scrollTop() > 710) {
	        //alert('reached it');
	        
	        //instant, adds class of on
	        //$('.top-button').addClass('on');
	        
	        //for fading
	        $('.top-button').fadeIn(100);
	        
	    } else {
	        //alert('above it');
	       
	       //Instant
	       //$('.top-button').removeClass('on');
	       
	       //For fading
	       $('.top-button').fadeOut(100);
	       
	    }
	});
	
	
	
	

		
	



});//closing doc




//rotating homepage images images
$(window).load(function() {



	//fading in the first slide
	$('.loader').fadeOut(100);

	$('.slide-1').fadeIn(500, function(){
	
	
	      			$('#intro-wrap').removeClass('orange');	
      				$('#intro-wrap').addClass('beige');	
	
	});	
		
	
/* Changing Slides begining
	
	var slideshow = setInterval(function() {
      // Change images every 5 secs
      
      	//fade out active

      	$('.active').fadeOut(500);
      	
      	
      	//making active a variable
      	var cur_slide = $('.active');
      	
      	
      	
      	

      	


      			//loop the slideshow 
      	
			    if($(cur_slide).next().length == 0) {
					
					//$('#news ul li:first-child').addClass('active');
	
					//going to the next slide
      				
      				
      				$(cur_slide).parent().find('li').eq(0).fadeIn(500);
      				$(cur_slide).parent().find('li').eq(0).addClass('active');
      	
      		      	//remove active
      				$(cur_slide).removeClass('active');

					
					
				}
				else { 
				
					
					//going to the next slide
      				$(cur_slide).next().fadeIn(500);
      				$(cur_slide).next().addClass('active');
      	
      		      	//remove active
      				$(cur_slide).removeClass('active');	
					
				}
					      	
       				
      				
      				
      				
     	
      	
      
      	

      	
      	
      	
	

      
      
      
      
	}, 5000);



		//alert('hello');
		
		Changing Slides end*/


});//closing doc







	
	
	
	

