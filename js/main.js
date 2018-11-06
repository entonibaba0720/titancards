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
        $('#menu').animate({
            right: '0'
        }, 'slow');
        $('.menu_icon').hide();
        $('.menu_close').show();
    });

    $('.menu_close').click(function() {
        $('#menu').animate({
            right: '-100%'
        }, 'slow');
        $('.menu_icon').show();
        $('.menu_close').hide();
    });

    $(function() {

        $(document).on('scroll', function() {

            if ($(window).scrollTop() > 100) {
                $('.logo_header').css('visibility', 'hidden');
                $('.scroll-up').addClass('show');
            } else {
                $('.logo_header').css('visibility', 'visible');
                $('.scroll-up').removeClass('show');
            }
        });


    });


});