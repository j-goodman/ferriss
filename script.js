window.onload = function () {
  var i;
  var slides;

  document.getElementById('slides').className = '';

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
    if (document.currentSlide < slides.length - 1) {
      changeSlide(1, slides);
    }
  };
};

var changeSlide = function (direction, slides) {
  var slideContainer;

  slideContainer = document.getElementById('slides');
  slideContainer.classList.add('blur');

  setTimeout(function () {
    this.className = '';
  }.bind(slideContainer), 400);

  document.currentSlide += direction;
  updateSlides(slides, document.currentSlide);
};

onkeydown = function (event) {
  switch (event.keyCode) {
    case 38:
      document.getElementById('up').onclick();
      break;
    case 40:
      document.getElementById('down').onclick();
      break;
  }
};
