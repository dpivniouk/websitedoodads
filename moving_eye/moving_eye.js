var iris = document.getElementsByClassName('eyeballiris');
var pupil = document.getElementsByClassName('eyeballpupil');

document.onmousemove = function eyeballmove(){
	var x = 10*event.clientX/window.innerWidth + '%';
	var y = 10*event.clientY/window.innerHeight + '%';
	var p = 15*event.clientX/window.innerWidth + '%';
	var q = 15*event.clientY/window.innerHeight + '%';

	iris[0].style.left = x;
	iris[0].style.top = y;
	iris[0].style.transform = 'translate('+ x + ',' + y +')';
	
	pupil[0].style.left = p;
	pupil[0].style.top = q;
	pupil[0].style.transform = 'translate('+ p + ',' + q +')';

}