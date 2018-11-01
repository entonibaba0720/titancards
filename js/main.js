$(document).ready(function() {
    var swiper = new Swiper({
        el: '.swiper-container',
        initialSlide: 3,
        loop: true,
        slideToClickedSlide: true,


        pagination: {
            el: '.swiper-pagination',

        },

    });

    $('.menu_icon').click(function() {
        $('#menu').toggleClass('active');
        $('.menu_icon').hide();
        $('.menu_close').show();
    });

    $('.menu_close').click(function() {
        $('.menu_icon').show();
        $('.menu_close').hide();

    });



});