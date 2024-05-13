$(function () {
	window.isActive = true;
	$(window).focus(function () {
		window.isActive = true;
		updatePageStatus();
		updatePageTitle();
	});
	$(window).blur(function () {
		window.isActive = false;
		updatePageStatus();
		updatePageTitle();
	});
	updatePageStatus();
});

function updatePageStatus() {
	var statusElement = $("#status");
	if (!window.isActive) {
		statusElement
			.text("No, the page is not active!")
			.addClass("inactive")
			.removeClass("active");
		$("body").css("background-color", "red");
	} else {
		statusElement
			.text("Yes, the page is active!")
			.addClass("active")
			.removeClass("inactive");
		$("body").css("background-color", "green");
	}
}

function updatePageTitle() {
	var newTitle = window.isActive ? "Active 🙂" : "Inactive 🙁";
	$("title").text(newTitle);
}
