Custom Css3 ANIMATION Module 
 
  Works with animate.css and jquery to create css3 animations. 
  Looks for data attribute: data-animation on elements to create animations.
  
  This script is written for projects I work on daily so you can use it 
  however you may need to modify it to work for you.

Requires:
  @required jquery 
  @required animate.css 



CALL EXAMPLES:
  Example of On Slider:
     ANIMATIONS.ANIMATIONTYPE('OBJECT CLASS OR ID',slider.currentSlide, 'ACTION');
  Example of Single Element:
     ANIMATIONS.ANIMATIONTYPE('OBJECT CLASS OR ID', 'ACTION');
  Example on group of elements:
  	ANIMATIONS.animateMuli('Parent CLASS OR ID','Child CLASS OR ID','ACTION'); 

  ACTIONS: IN/OUT
  DATA ATTRIBUTE must be defined on target element data-animation="ANIMATE.CSS TYPE NAME"
  EXAMPLE:
  		data-animation="fadeInLeftBig"

