
function urlFinder () {
	if $("#button") = "one" {
		return "www.bronto.com";
	}
	else if $(#button) = "two" {
		return "www.google.com";
	} else {
		return "www.facebook.com";
	}
}

function awesome() {
  chrome.tabs.create({url: urlFinder});
}  

function clickHandler(e) {
  setTimeout(awesome, 1000);
}

function main() {
  // Initialization work goes here.
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
  main();
});