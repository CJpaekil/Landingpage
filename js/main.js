$(function(){
   
 
  $('.slider').slick({
  
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    centerMode: true,
    variableWidth: true,
    dots: true,
    
    
  });
  
 
  $('.slider2').slick({
  
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    centerMode: false,
    variableWidth: false,
    dots: false,
    asNavfor:"#thumbnail_slider"
    
  });
  $('#thumbnail_slider').slick({
  
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    centerMode: false,
    variableWidth: false,
    dots: false,
    asNavfor:"header .slider2",
    swipe: false,
  });
  
  
  

  $('.slick-next').click(function () {
    if ($(this).hasClass('slick-disabled')) {
      $('.regular_3').slick('slickGoTo', 0);
     
      
    };
  });
 

});

  
$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
 

      } else {
          $('.globalMenuSp').removeClass('active');

      }
  });
});