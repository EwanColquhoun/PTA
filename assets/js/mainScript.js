// Variables
let btt = document.getElementById('back-to-top');
let main = document.getElementById('maincont');
let burger = document.getElementById('burger')
let miniNav = document.getElementById('mini-nav')
let blurb = document.getElementById('blurb');

// Back to top button
btt.addEventListener('click', function(){
    window.scrollTo(0,0);
});

// Mobile Nav
function remove_nav(){
    console.log('called')
    if (miniNav.classList.contains('show')){
        miniNav.classList.remove('show')
        console.log('removed')
    } else {
        console.log('error')
    }
}

// Activates the mobile nav links
// burger.addEventListener('click', function(){
//     miniNav.classList.toggle('show')
// })

// Bar Chart
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
      datasets: [{
        label: '£ Raised',
        data: [4500, 5000, 2000, 6000, 8000, 10000],
        borderWidth: 1,
        borderColor: '#394a5e',
        backgroundColor: '#75179b',
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

// Events slideshow
let slideIndex = 1;
let slideIndex2 = 1;
showSlides(slideIndex);
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusSlides2(m) {
  showSlides2(slideIndex2 += m);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function currentSlide2(m) {
  showSlides2(slideIndex2 = m);
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

main.onclick = remove_nav;
blurb.onclick = remove_nav;