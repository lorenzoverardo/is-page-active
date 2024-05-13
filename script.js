$(function () {
	window.isActive = true;
	$(window).focus(function () {
		window.isActive = true;
		updatePageStatus();
	});
	$(window).blur(function () {
		window.isActive = false;
		updatePageStatus();
	});
	updatePageStatus();
});

function updatePageStatus() {
	var statusElement = $("#status");
	if (!window.isActive) {
		statusElement
			.text("No, the page is not active")
			.addClass("inactive")
			.removeClass("active");
		$("body").css("background-color", "red");
	} else {
		statusElement
			.text("Yes, the page is active")
			.addClass("active")
			.removeClass("inactive");
		$("body").css("background-color", "green");
	}
}
