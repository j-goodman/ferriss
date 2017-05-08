window.onload = function () {
  var i;
  var slides;

  slides = document.getElementsByTagName('img');
  document.currentSlide = 0;
  for (i=0 ; i<slides.length ; i++) {
    slides[i].index = i;
  }
  updateSlides(slides, document.currentSlide);
  setupSwitches(slides);
};

var updateSlides = function (slides, currentSlide) {
  for (i=0 ; i<slides.length ; i++) {
    if (slides[i].index < document.currentSlide) {
      slides[i].classList.add('above');
    } else if (slides[i].index > document.currentSlide) {
      slides[i].classList.add('below');
    } else {
      slides[i].className = '';
    }
  }
};

var setupSwitches = function (slides) {
  var down;
  var up;

  up = document.getElementById('up');
  down = document.getElementById('down');

  up.onclick = function () {
    if (document.currentSlide > 0) {
      changeSlide(-1, slides);
    }

  };

  down.onclick = function () {
    if (document.currentSlide < slides.length) {
      changeSlide(1, slides);
    }

  };
};

var changeSlide = function (direction, slides) {
  document.currentSlide += direction;
  updateSlides(slides, document.currentSlide);
};
