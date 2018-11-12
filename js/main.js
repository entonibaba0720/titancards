$(document).ready(function() {

    // Section 1 swiper with pagination
    var swiper1 = new Swiper({
        el: '.swiper1',
        initialSlide: 3,
        loop: true,
        slideToClickedSlide: true,
        pagination: {
            el: '.swiper-pagination1',
            paginationClickable: true,
        },
    });

    // Section 2 swiper with pagination
    var swiper2 = new Swiper({
        el: '.swiper2',
        initialSlide: 0,
        loop: true,
        slidesPerView: 3,
        preventClicksPropagation: false,
        slideToClickedSlide: true,
        pagination: {
            el: '.swiper-pagination2',
            paginationClickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    // Menu icon change and show the menu
    $('.menu_icon').click(function() {
        $('#menu').animate({
            right: '0'
        }, 'slow');
        $('.menu_icon').hide();
        $('.menu_close').show();
    });

    // X close the menu and change the menu icon
    $('.menu_close').click(function() {
        $('#menu').animate({
            right: '-100%'
        }, 'slow');
        $('.menu_icon').show();
        $('.menu_close').hide();
    });

    // Show arrows and hide logo when scrolling
    $(document).on('scroll', function() {
        if ($(window).scrollTop() > 100 && $(window).scrollTop() < $(window).height()) {
            $('.logo_header').css('visibility', 'hidden');
            $('.scroll-up').addClass('show');
        } else {
            $('.logo_header').css('visibility', 'visible');
            $('.scroll-up').removeClass('show');
        }
    });





});