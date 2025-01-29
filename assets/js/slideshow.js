// Events slideshow
let slideIndex = 1;
let slideIndex2 = 1;
let mobSlideIndex = 1;
let mobSlideIndex2 = 1;
showSlides(slideIndex);
showSlides2(slideIndex2);
mobShowSlides(mobSlideIndex)
mobShowSlides2(mobSlideIndex2)

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusSlides2(m) {
  showSlides2(slideIndex2 += m);
}

function mobPlusSlides(sl) {
  mobShowSlides(mobSlideIndex += sl);
}

function mobPlusSlides2(sl2) {
  mobShowSlides2(mobSlideIndex2 += sl2);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function currentSlide2(m) {
  showSlides2(slideIndex2 = m);
}

function mobCurrentSlide(sl) {
  mobShowSlides(mobSlideIndex = sl);
}

function mobCurrentSlide2(sl2) {
  mobShowSlides2(mobSlideIndex2 = sl2);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

function showSlides2(m) {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  if (m > slides2.length) {slideIndex2 = 1}
  if (m < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "flex";
  dots2[slideIndex2-1].className += " active";
}

function mobShowSlides(sl){
  let i;
  let slides = document.getElementsByClassName("small-fund-card");
  let dots = document.getElementsByClassName("mob-dot");
  if (sl > slides.length) {mobSlideIndex = 1}
  if (sl < 1) {mobSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[mobSlideIndex-1].style.display = "flex";
  dots[mobSlideIndex-1].className += " active";
}

function mobShowSlides2(sl2){
  let i;
  let slides = document.getElementsByClassName("small-soc-card");
  let dots = document.getElementsByClassName("mob-dot2");
  if (sl2 > slides.length) {mobSlideIndex2 = 1}
  if (sl2 < 1) {mobSlideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[mobSlideIndex2-1].style.display = "flex";
  dots[mobSlideIndex2-1].className += " active";
}