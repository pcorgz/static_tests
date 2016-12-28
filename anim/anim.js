var $eyeWrapper = $(".move-eye");
var $eye = $(".eye.eye-move");
var $iris = $(".eye.eye-move > div");
var posX = 0;
var posY = 0;
var eyeCenter = {
	x: 40,
	y: 40
}

$(function() {
	initPos();

	$(".move-eye").mousemove(function (e){
		var x, y;

		//e.target == $(".move-eye .eye.eye-move > div")[0]

		x = e.pageX - posX;// - ($eyeWrapper.width() / 2) -  $eye.width()  - ($iris.width()  / 2) ;
		y = e.pageY - posY;// - ($eyeWrapper.height() / 2) - $eye.height() - ($iris.height() / 2) ;

		if (x <= 0) x = 0; if (x > $eyeWrapper.outerWidth()) x = $eyeWrapper.outerWidth();
		if (y <= 0) y = 0; if (y > $eyeWrapper.outerHeight()) y = $eyeWrapper.outerHeight();

		var onePercX = 100 / $eyeWrapper.outerWidth();
		var onePercY = 100 / $eyeWrapper.outerHeight();

		x *= onePercX;
		y *= onePercY;

		if (x <= 20) x = 20; if (x >=  80) x = 80;
		if (y <= 25) y = 25; if (y >= 75) y = 75;

		//console.log("X: " + x + ", Y: " + y);

		$iris.css({
			left: x + "%",
			top:  y + "%"
		});
	});
});

function initPos() {
	posX = $eyeWrapper.position().left;
	posY = $eyeWrapper.position().top;
}
