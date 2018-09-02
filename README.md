## Scroll Control

A jQuery script for smooth scrolling between sections, identifies height and distance from top.
Easy to use and can be applied to any eventListeners.

## Pre-Requisites

`jQuery`
you can download from http://jquery.com/ or using Google's hosted libraries at https://developers.google.com/speed/libraries/#jquery

## How to install

Download the scrollControl.js and add script tag to your website
(don't forget to always put jQuery before the script tag)

Then on your main .js file, set the sections after the DOM fully loads

```
// Scroll Control sections
	var scrollControl = ScrollControl([
		'#section1',
		'#section2',
		'#section3',
		'#section4'
	]);
```

Finally set the event listeners for the smooth scroll

```
// Up and Down Arrow Keys
	$(document).keydown(function(e) {
    if (e.which==38) { //
    	e.preventDefault();
    	scrollControl.prevSection();
    } else if (e.which==40) {
    	e.preventDefault();
    	scrollControl.nextSection();
    }
	});
  ```

  That's it, you're done!

  Enjoy!
