// Trigger photo take
$(document).ready(function(){
	window.snap = 0;
	window.addEventListener("DOMContentLoaded", function() {
		// Grab elements, create settings, etc.
		var canvas = document.getElementById("canvas"),
			context = canvas.getContext("2d"),
			video = document.getElementById("video"),
			videoObj = { "video": true },
			errBack = function(error) {
				console.log("Video capture error: ", error.code); 
			};

		// Put video listeners into place
		if(navigator.getUserMedia) { // Standard
			navigator.getUserMedia(videoObj, function(stream) {
				video.src = stream;
				video.play();
			}, errBack);
		} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
			navigator.webkitGetUserMedia(videoObj, function(stream){
				video.src = window.URL.createObjectURL(stream);
				video.play();
			}, errBack);
		}
		else if(navigator.mozGetUserMedia) { // Firefox-prefixed
			navigator.mozGetUserMedia(videoObj, function(stream){
				video.src = window.URL.createObjectURL(stream);
				video.play();
			}, errBack);
		}
	}, false);
	function downloadCanvas(link, canvasId, filename){
		link.href = document.getElementById(canvasId).toDataURL();
		link.download = filename;
	}
	$("#snap").click(function(){
		var canvas = document.getElementById("canvas"), context = canvas.getContext("2d");
		context.drawImage(video, 0, 0, 640, 480);
	//	$("a").trigger("click");		
	//	$("#download").click();
		//alert("trigger click");
	});
	$("#download").click(function(){
		downloadCanvas(this, 'canvas', 'image.png');
		window.snap = 1;
	});
/*	$("#generatefaceid").click(function(){
		if(window.snap == 0){
			alert("You have not taken a photo yet!");
			return;
		}
		var faceDetect = new FacePP('
*/


});
/*document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 640, 480);
});*/
// Put event listeners into place
