 /** 
  * @desc Custom Css3 ANIMATION Module 
  * Works with animate.css and jquery to create css3 animations 
  * Looks for data attribute: data-animation on elements to create animations 
  * @author Susan Delgado susanndelgado@gmail.org
  * @authorUrl www.sdelgado.com
  * @required jquery 
  * @required animate.css 
  * MIT License (MIT)
  * Copyright (c) 2015 Susan Delgado 
*/
/*

* 
CALL EXAMPLES
  Example of Oon Slider:
     ANIMATIONS.ANIMATIONTYPE('OBJECT CLASS OR ID',slider.currentSlide, 'ACTION');
  Example of Single Element:
     ANIMATIONS.ANIMATIONTYPE('OBJECT CLASS OR ID', 'ACTION');
  Example on group of elements:
  	ANIMATIONS.animateMuli('Parent CLASS OR ID','Child CLASS OR ID','ACTION'); 

  ACTIONS: IN/OUT
  DATA ATTRIBUTE must be defined on target element data-animation="ANIMATE.CSS TYPE NAME"
  	EXAMPLE:
  		data-animation="fadeInLeftBig"

*/
 var ANIMATIONS = (function (self) {

      function __init() {

      		if($('html').hasClass('IE')){
      			 var version = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
      			_globals.ie_version = version;

      		} 
      		$(_globals.ulList ).hide();
      		
      }
      var _globals = {
      	ie_version:100,
      	listItem:''
      }
       	function __animateEl(el,action){
       		 if(Modernizr.csstransitions) { 
       		 	var el = el;

       		 	"use strict";
       		 	if(action === 'in'){
			        var i = 0;
			        var animaDelay = 0;	

       		 		if(Modernizr.csstransitions) {
	       		 		$(el).css('-webkit-animation-delay', animaDelay+'s');
			            $(el).css('-moz-animation-delay',  animaDelay+'s');
			            $(el).css('-0-animation-delay',  animaDelay+'s');
			            $(el).css('-ms-animation-delay',  animaDelay+'s');
			            $(el).css('animation-delay-delay',  animaDelay+'s');
	                        $(el).show().addClass('animated').addClass($(el).attr('data-animation'));
                    }else{
		                var timing;
		                $(el).hide();
		                i = $(el).attr('data-count');		              
		                $(el).delay(300*i).fadeIn('slow');
		            }
		            i++;
		            animaDelay = animaDelay+0.2;



       		 	} else{
       		 		if(Modernizr.csstransitions) {
       		 			$(el).removeClass($(el).attr('data-animation')).removeClass('animated').hide();
       		 		}else{
       		 			 $(this).hide();
			        }
       		 	}
       		 }
       	}
       	function __animateHover(el,action){
       		 if(Modernizr.csstransitions) { 
       		 	var el = el;

       		 	"use strict";
       		 	if(action === 'in'){
			        var i = 0;
			        var animaDelay = 0;	

       		 		if(Modernizr.csstransitions) {
	       		 		$(el).css('-webkit-animation-delay', animaDelay+'s');
			            $(el).css('-moz-animation-delay',  animaDelay+'s');
			            $(el).css('-0-animation-delay',  animaDelay+'s');
			            $(el).css('-ms-animation-delay',  animaDelay+'s');
			            $(el).css('animation-delay-delay',  animaDelay+'s');
	                        $(el).show().addClass('animated').addClass($(el).attr('data-animation'));
                    }else{
		                var timing;
		                $(el).hide();
		                i = $(el).attr('data-count');		              
		                $(el).delay(300*i).fadeIn('slow');
		            }
		            i++;
		            animaDelay = animaDelay+0.2;



       		 	} else{
       		 		if(Modernizr.csstransitions) {
       		 			$(el).removeClass($(el).attr('data-animation')).removeClass('animated');
       		 		}else{
       		 			
			        }
       		 	}
       		 }
       	}
       	function __animateMuli(parent,child,action){
       			_globals.ulList =  $(child).parent();
       			_globals.listItem = $(child).parent().find('li');

       		
	        "use strict";
		    if(action === 'in'){
		        var i = 0;
		        var animaDelay = 0;		        
		      

		        $(parent+' '+child).each(function( ) {
		            if(Modernizr.csstransitions) { 

		                $(this).css('-webkit-animation-delay', animaDelay+'s');
		                $(this).css('-moz-animation-delay', animaDelay+'s');
		                $(this).css('-0-animation-delay', animaDelay+'s');
		                $(this).css('-ms-animation-delay', animaDelay+'s');
		                $(this).css('animation-delay-delay', animaDelay+'s');

		                $(this).show().addClass('animated').addClass($(this).attr('data-animation'));

		            }else{
		                var timing;
		                
		                if(child = 'li'){
		                	//for list in IE8 and below seq elements come in at the same time so elements do not shift when appearing 
		                	 $(_globals.listItem).hide();
		                	  if (i === 0){timing = 0;}else if(i === 1){timing = 300;} else{ timing = 300 * i;}
		                	  $(_globals.listItem).delay(timing).fadeIn('slow');

		            	} else{
		            		$(parent+' '+child).hide();
			                if (i === 0){timing = 0;}else if(i === 1){timing = 300;} else{ timing = 300 * i;}
			                $(this).delay(timing).fadeIn('slow');
		            	}
		            		
		            	
		            }
		            i++;
		            animaDelay = animaDelay+0.2;


		        });

		    }else{
		        var j = 0;
		        $(parent+' '+child).css('display', 'none');

			        $(parent+' '+child).each(function( ) {
			         if(Modernizr.csstransitions) { 

			             $(this).removeClass($(this).attr('data-animation')).removeClass('animated').hide();

			         }else{
			            $(this).hide();
			        }
			        j++;
			    });
			   }
       	}
       	function __animateCaption(slideClass,index,action){
       		var slide=slideClass;

       		// alert(slide+index);
	        "use strict";
		    if(action === 'in'){
		        var i = 0;
		        var animaDelay = 0;		        
		        $(slide+index+':not([class*=clone]) .caption').css('display', 'block');

		        $(slide+index+':not([class*=clone]) .caption>div').each(function( ) {
		            if(Modernizr.csstransitions) { 

		                $(this).css('-webkit-animation-delay', animaDelay+'s');
		                $(this).css('-moz-animation-delay', animaDelay+'s');
		                $(this).css('-0-animation-delay', animaDelay+'s');
		                $(this).css('-ms-animation-delay', animaDelay+'s');
		                $(this).css('animation-delay-delay', animaDelay+'s');

		                $(this).show().addClass('animated').addClass($(this).attr('data-animation'));

		            }else{
		                var timing;
		                $(slide+index+':not([class*=clone]) .caption>div').hide();
		                if (i === 0){timing = 0;}else if(i === 1){timing = 300;} else{ timing = 300 * i;}
		                $(this).delay(timing).fadeIn('slow');
		            }
		            i++;
		            animaDelay = animaDelay+0.2;


		        });

		    }else{
		        var j = 0;
		        $(slide+index+':not([class*=clone]) .caption').css('display', 'none');

			        $(slide+index+':not([class*=clone]) .caption>div').each(function( ) {
			         if(Modernizr.csstransitions) { 

			             $(this).removeClass($(this).attr('data-animation')).removeClass('animated').hide();

			         }else{
			            $(this).hide();
			        }
			        j++;
			    });
			   }
       } 
       
       __init();
      /*Reveal module API methods*/
      return {
          setSlider: function(slider){
            __setup(slider);
          },
          animateCaption: function(slideClass,index,action){
          	//animates details for each slide based on attributes
            __animateCaption(slideClass,index,action);
          },
          animateEl: function(el,action){
          	//animates details for each slide based on attributes
            __animateEl(el,action);
          },
          animateHover: function(el,action){
          	//animates details for each slide based on attributes
            __animateHover(el,action);
          },
          animateMuli: function(parent,child,action){
          	//animates Parents Children one after another
            __animateMuli(parent,child,action);
          }

      };
  }(ANIMATIONS || {}));

  //ready

