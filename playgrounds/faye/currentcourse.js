$(document).ready(function(){
	var line1 = new ProgressBar.Line('#track-progress-container1', {
    color: '#FCB03C'

	});

	var line2 = new ProgressBar.Line('#track-progress-container2', {
    color: '#FCB03C'

	});

	var line3 = new ProgressBar.Line('#track-progress-container3', {
    color: '#FCB03C'

	});

	var circle = new ProgressBar.Circle('#course-progress-container', {
    color: '#FCB03C',
    strokeWidth: 3,
    trailWidth: 1,
    duration: 1500,
    text: {
        value: '0'
    }
	});

	circle.animate(1.0);  // Number from 0.0 to 1.0

	line1.animate(1.0);  // Number from 0.0 to 1.0
	line2.animate(0.6);  // Number from 0.0 to 1.0
	line3.animate(0.3);  // Number from 0.0 to 1.0
});