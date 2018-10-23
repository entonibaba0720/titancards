$(document).ready(function(){
    var swiper = new Swiper({
        el: '.swiper-container',
        initialSlide: 3,
        loop: true,
        slideToClickedSlide: true,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
        },
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    });
});





