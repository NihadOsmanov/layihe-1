$(function () {
  const nexticon = '<i class="fas fa-chevron-right"></i>';
  const previcon = '<i class="fas fa-chevron-left"></i>';

  $(".products-slider").owlCarousel({
    loop: false,
    items: 4,
    nav: false,
    margin: 30,
    nav: true,
    navText: [previcon, nexticon]
  });
});

// let color1 = document.querySelector('.color-darksgreen');
// let color2 = document.querySelector('.color-grey');
// let color2 = document.querySelector('.color-beige');

// color1.addEventListener('click' , function(){
//     document.querySelector('.img-card-3').style.
// })
