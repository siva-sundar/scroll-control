$(document).ready(function() {

	// Smooth Scrolling for anchor tags
	$(document).on('click', 'a.smooth', function(event){
    event.preventDefault();
    smoothScrollTo($.attr(this, 'href'));
	});

  // Scroll Control sections
	var scrollControl = ScrollControl([
		'#section1',
		'#section2',
		'#section3',
		'#section4'
	]);

  // Backspace and up/down arrow keys
	$(document).keydown(function(e) {
    if (e.which==38) {
    	e.preventDefault();
    	scrollControl.prevSection();
    } else if (e.which==40) {
    	e.preventDefault();
    	scrollControl.nextSection();
    } else if (e.which==32) {
    	e.preventDefault();
    	scrollControl.nextSection();
    }
	});
});
