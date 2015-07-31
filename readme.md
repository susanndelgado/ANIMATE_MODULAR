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

## BELOW ARE SOME OF MY USES FOR EXAMPLES
__CALL EXAMPLE USING FLEXSLIDER:__
__html:__

```html
<div class="slider-area cto2016 container-fluid">

    <div class="flexslider cto2016 banner">
        <ul class="slides">
            <li class="slide main-slide-0">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="table-an animated fadeIn">
                    <tbody>
                        <tr>
                            <td class="overlay-left">&nbsp;</td>
                            <td class="container table-cont">
                            <div class="caption col-md-12">
                                <div class="slide-ele element1-1 animated fadeInLeftBig" data-animation="fadeInLeftBig" style="display:none;">
                                   element content
                                </div>
                                 <div class="slide-ele element1-2 animated fadeInLeftBig" data-animation="fadeInLeftBig" style="display:none;">
                                   element content
                                </div>
                            </div>
                            </td>
                            <td class="overlay-right">&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            </li>

            <li class="slide main-slide-1">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="table-an">
                    <tbody>
                        <tr>
                            <td class="overlay-left">&nbsp;</td>
                            <td class="container table-cont">
                            <div class="caption col-md-12">
                                <div class="slide-ele element2-1 animated fadeInLeftBig" data-animation="fadeInLeftBig"style="display:none;">content</div>
                                <div class="slide-ele element2-2 animated fadeInLeftBig" data-animation="fadeInLeftBig"style="display:none;">content</div>
                                </div>
                            </div>
                            </td>
                            <td class="overlay-right">&nbsp;</td>
                        </tr>
                    </tbody>
                </table>

            </li>

        </ul>
    </div>

</div>
```
__js:__
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
                    prevText: bPrev,       
                    nextText: bNext,
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
```html
     <div class="animPos" data-animation="fadeInLeftBig" data-count="1">
        content
     </div>
```
__js:__
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
```html
<div class="groupAnim">
    <div class="animPos" data-animation="fadeInLeftBig" data-count="1">
       content
    </div>
    <div 
       class="animPos" data-animation="fadeInRightBig" data-count="2">
        content
    </div>
</div>
```
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
