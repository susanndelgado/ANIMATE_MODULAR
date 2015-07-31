# Custom Css3 ANIMATION Module 
 
  Works with animate.css and jquery to create css3 animations. 
  Looks for data attribute: data-animation on elements to create animations.
  __Note:__
  This script is written for projects I work on daily so you can use it 
  however you may need to modify it to work for you.

## Requires
  @required jquery 
  @required animate.css 



## CALL EXAMPLES
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

## License

This Animation Module is MIT license.  
For more information click [here](https://github.com/susanndelgado/animation_module/blob/master/LICENSE).