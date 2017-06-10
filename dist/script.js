var smoothScrollTo = function(where) {
	$('html, body').animate({
    scrollTop: $( where ).offset().top
  }, 500);
}

var ScrollControl = function(sections) {

	var sortedSections = sections
		.map(function(section) {
			return {
				selector: section,
				offsetTop: $(section).offset().top
			};
		})
		.sort(function(sectionA, sectionB) {
			return sectionA.offsetTop - sectionB.offsetTop;
		})
		.map(function(section, idx, array) {
			if (idx > 0)
				section.prev = array[idx - 1].selector;
			if (idx < array.length - 1)
				section.next = array[idx + 1].selector;

			return section;
		});

	var sectionMap = sortedSections
		.reduce(function(obj, section){
			obj[section.selector] = section;
			return obj;
		}, {});

	function currentSection() {
		var currentScrollTop = $(window).scrollTop();

		return sortedSections.slice().reverse().find(function(section) {
			return section.offsetTop <= currentScrollTop;
		});
	}

	function nextSection() {
		var next = currentSection().next;
		if (next) {
			smoothScrollTo(next);
		}
	}

	function prevSection() {
		var prev = currentSection().prev;
		if (prev) {
			smoothScrollTo(prev);
		}
	}

	return {
		nextSection: nextSection,
		prevSection: prevSection
	};
}


$(document).ready(function() {

	//Toggling Menu
	$('.menu,.close,.navigation a').click(function(){
		$('.navigation').toggleClass('navHidden');
	});

	//Smooth Scrolling
	$(document).on('click', 'a.smooth', function(event){
    event.preventDefault();
    smoothScrollTo($.attr(this, 'href'));

	});

	var scrollControl = ScrollControl([
		'#Portfolio',
		'#Welcome',
		'#About',
		'#Contact'
	]);

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

	//Keydown Carousel Slides
	$(document).keydown( function(e) {
    if( e.which==37) {
    	e.preventDefault();
      $('.left').trigger( "click" );
    } else if(e.which==39) {
    	e.preventDefault();
      $('.right').trigger( "click" );
    }
	});
});
