// scroll from section to section

$(document).ready(function() {
  $(".wrapper").fullpage({
    autoScrolling: true,
    navigation: true,
    navigationPosition: "left",
    dragAndMove: true
  });
});

// call Polyfill of object-fit for IE

$(function() {
  objectFitImages();
});

// slider

$(document).ready(function() {
  $(".slider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
