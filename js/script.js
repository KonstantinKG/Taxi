$(document).ready(function () {
   $('.header__link').on('click', function () {
      $('.header__link').removeClass('active');
      $(this).addClass('active');
   });

   $(window).scroll(function(){
      if(window.pageYOffset > 10){
         $('.header').addClass('bg');
      } else {
         $('.header').removeClass('bg');
      }
   });


   function ibg() {
      $.each($('.ibg'), function (index, val) {
         if ($(this).find('img')) {
            const getImgUrl = $(this).find('img').attr('src');
            $(this).css('background-image', "url(" + getImgUrl +")");
         }
      });
   }
   ibg();
});