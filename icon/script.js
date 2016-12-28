var slideIndex = 1;
var changeImage;
var slides = document.getElementsByClassName("mySlides");

$(function() {
  $("[class^=menu-]").click(function() {
    $(this).toggleClass("open");
  });

  $(".slides").mouseenter(function () {
  	$(".slides .anchor").fadeOut();
  	carousel();
  });
  $(".slides").mouseleave(function () {
  	if (changeImage) {
  	  $(".slides .anchor").fadeIn();
  	  slideIndex = 1;
  	  
      hideImages();
	  clearTimeout(changeImage);
	}
  });
});

function carousel() {
    var i;
    hideImages();
    
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.visibility = "visible";
	slides[slideIndex-1].style.opacity = "1";
    changeImage = setTimeout(carousel, 2000);
}

function hideImages() {
  for (i = 0; i < slides.length; i++) {
    slides[i].style.visibility = "hidden";
    slides[i].style.opacity = "0";
  }
}
