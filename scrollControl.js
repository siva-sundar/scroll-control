// Pedro Gomes Smooth Scroll Control
// 2017 © MIT License
// https://github.com/gomesphoto/scroll-control
//
// Simple and easy-to-use jQuery ScrollControl for Viewport-sized sections
// For more information consult the README.md file
//
// REQUIRES JQUERY


// Smooth Scroll jQuery Method
var smoothScrollTo = function(where) {
	$('html, body').animate({
    scrollTop: $(where).offset().top
  }, 500);
}


// Maps sections height and distance from top
// @param {Array} sections
// @returns {Object} with methods nextSection and prevSection
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
