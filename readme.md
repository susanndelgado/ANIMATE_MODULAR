# Custom Css3 ANIMATION Module 
 
  Works with animate.css and jquery to create css3 animations. 
  Looks for data attribute: data-animation on elements to create animations.
  __Note:__
  This script is written for projects I work on daily so you can use it 
  however you may need to modify it to work for you.

## Requires
  @required jquery 
  @required animate.css 



## USAGE EXAMPLES
__Example of On Slider:__
```javascript
ANIMATIONS.ANIMATIONTYPE('OBJECT CLASS OR ID',slider.currentSlide, 'ACTION');
```
__Example of Single Element:__
```javascript
ANIMATIONS.ANIMATIONTYPE('OBJECT CLASS OR ID', 'ACTION');
```
__Example on group of elements:__
```javascript
ANIMATIONS.animateMuli('Parent CLASS OR ID','Child CLASS OR ID','ACTION'); 
```
###ACTIONS: IN/OUT
DATA ATTRIBUTE must be defined on target element data-animation="ANIMATE.CSS TYPE NAME"
__EXAMPLE:__
```javascript
data-animation="fadeInLeftBig"
```

## BELOW ARE SOME OF MY USES FOR REFERENCE
__CALL EXAMPLE USING FLEXSLIDER:__
```javascript
 $('.slide .caption .slide-ele').hide().css('display:none;');
        // *===========================================
        //  FLEXSLIDER CUSTOM ANIMATIONS for banner : 
        //          ANIMATIONS MODULE sets animations on captions per an element with in each slide
        //              -use data-animation to set animation type from Animate.css 
        //              -Slides should be named with an index number (ex: slide-0, slide-1, ...)
        //              -each '> div' with in .caption will be animated seperately 
        // *=========================================================
          
            if($('.slider-area .flexslider.banner').length){

                $('.slider-area .flexslider.banner').flexslider({
                    animation: "slide",
                    controlNav: true,
                    directionNav: true,
                    slideshow: true,
                    touch: true,
                    controlsContainer: '.flex-container .container',
                    prevText: 'Prev',       
                    nextText: 'Next',
                    start: function(slider){
                        //animate
                        if(Modernizr.csstransitions) {
                            setTimeout(ANIMATIONS.animateCaption('.main-slide-',slider.currentSlide, 'in'), 100);
                        } else{
                            setTimeout(function(){
                                ANIMATIONS.animateCaption('.main-slide-',slider.currentSlide, 'in');
                            }, 100);
                        }
                    },
                    before: function(slider){
                        //hide
                        $('.slide-ele,.slide-btn').hide();
                        if(Modernizr.csstransitions) {
                            setTimeout(ANIMATIONS.animateCaption('.main-slide-',slider.currentSlide), 100); 
                        } else{
                            setTimeout(function(){
                                ANIMATIONS.animateCaption('.main-slide-',slider.currentSlide);
                            }, 100);
                           
                        }
                         
                    },
                    after: function(slider){
                        //show

                        if(Modernizr.csstransitions) {
                            setTimeout(ANIMATIONS.animateCaption('.main-slide-',slider.currentSlide, 'in'), 100);  
                        } else{
                            setTimeout(function(){
                                ANIMATIONS.animateCaption('.main-slide-',slider.currentSlide, 'in');
                            }, 100);

                            
                        } 
                    } 
                });

            }

```
__CALL EXAMPLE USING WAYPOINTS ON SINGLE ELEMENTS:__
```javascript
        // *==============================================================================
        //  WAYPOINTS : 
        //          Checks offsets for animations on single elements
        // *==========================================================================
        
            //reset animation on element
            $('.animPos').waypoint({
                horizontal: false,
                offset: -400,
                handler:function() {
                    ANIMATIONS.animateEl($(this),'out');
                }
            });
            //start animation on element
            $('.animPos').waypoint({
                horizontal: false,
                offset: 10,
                handler:function() {
                     ANIMATIONS.animateEl($(this),'in');
                }
            });  
        

```
__CALL EXAMPLE USING WAYPOINTS IN A GROUP OF ELEMENTS:__
```javascript
        
            // //Animate a group in sequa
            $('.groupAnim .animChild').hide();
            $('.groupAnim').waypoint({
                 horizontal: false,
                    offset: 'bottom-in-view',
                    handler:function(direction) {
                        // alert(direction)
                            ANIMATIONS.animateMuli('.groupAnim','.animChild','in'); 
                            //CLASS .IE8 is add by other seperate code for ie8 only any other class can be targeted
                            $('.IE8 #thumbgallery').parent().show();
                    }
            }) ;

        

```



## License

This Animation Module is MIT license.  
For more information click [here](https://github.com/susanndelgado/animation_module/blob/master/LICENSE).
