$(function(){
  

    $('.venobox').venobox(); 

    $('.project').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
      });
    $('.project-2').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
      });

    
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    

});