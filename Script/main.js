$(document).ready(function(){
    $('.firstSlider').slick({
      dots: true, //remember to costomize the dots
      arrows: false,
    });
});

$(document).ready(function(){
$('.newsSlider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});