const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
let navLink = document.getElementById('main-nav').querySelectorAll('a');
navLink.forEach(function (element, index) {
  element.addEventListener('click', function () {
    let nav = document.getElementById('main-nav');
    if (nav.classList.contains('nav-modal')) {
      document.querySelector('.burger').classList.remove('burger-active');
      nav.classList.toggle('main-nav');
      nav.classList.toggle('nav-modal');

    }
  });
});



document.querySelector('.burger-wraper').addEventListener('click', function () {
  toggleNav()
});

function toggleNav() {
  let burger = document.querySelector('.burger');
  burger.classList.toggle('burger-active');
  var x = document.getElementById("main-nav");
  document.getElementById('main-nav').classList.toggle('nav-modal');
  document.getElementById('main-nav').classList.toggle('main-nav');
}
mySlider('.welcome-slider');
mySlider('.testimonials-slider');
mySlider('.slider-blog');

if(document.querySelector(".posts-list-masonry")){
  var msnry = new Masonry('.posts-list-masonry', {
    itemSelector: '.post-masonry',
    percentPosition: true,
    gutter: 32
  });
}


