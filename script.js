window.onload = function () {
  var currentSlide;
  var i;
  var slides;
  slides = document.getElementsByTagName('img');
  currentSlide = 0;
  for (i=0 ; i<slides.length ; i++) {
    slides[i].index = i;
  }
  updateSlides(slides, currentSlide);
};

var updateSlides = function (slides, currentSlide) {
  for (i=0 ; i<slides.length ; i++) {
    if (slides[i].index < currentSlide) {
      slides[i].classList.add('above');
    } else if (slides[i].index > currentSlide) {
      slides[i].classList.add('below');
    }
  }
};

setupSwitches = function () {

};
