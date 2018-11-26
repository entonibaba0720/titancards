$(document).ready(function() {

    // Section 1 swiper with pagination
    var swiper1 = new Swiper({
        el: '.swiper1',
        initialSlide: 3,
        loop: true,
        slideToClickedSlide: true,
        paginationType: "custom",
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
        breakpoints: {
            // when window width is <= 972px
            972: {
                slidesPerView: 1,
                spaceBetween: 10,
                direction: 'horizontal'
            }
        }
    });

    // Section 3 swiper 
    var swiper3 = new Swiper({
        el: '.swiper3',
        initialSlide: 0,
        loop: true,
        slidesPerView: 3,
        preventClicksPropagation: false,
        slideToClickedSlide: true,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination3',
            paginationClickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is <= 972px
            972: {
                slidesPerView: 1,
                spaceBetween: 10,
                direction: 'horizontal'
            }
        }
    });

    // Section 4 swiper 
    var swiper4 = new Swiper({
        el: '.swiper4',
        initialSlide: 0,
        loop: true,
        slidesPerView: 1,
        preventClicksPropagation: false,
        slideToClickedSlide: true,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination4',
            paginationClickable: true,
        },


    });



    // Menu icon change and show the menu
    $('.menu_icon').click(function() {
        $('#menu').animate({
            right: '0'
        }, 'slow');

        $('.menu_close').show();


    });

    // X close the menu and change the menu icon
    $('.menu_close').click(function() {
        $('#menu').animate({
            right: '-100%'
        }, 'slow');

        $('.menu_close').hide();
    });

    // Show arrows and hide logo when scrolling
    $(document).on('scroll', function() {
        if ($(window).scrollTop() > 100 && $(window).scrollTop() < $(window).height()) {
            $('.logo_header').css('visibility', 'hidden');
            $('.scroll-up').addClass('show');
        }
    });


    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });



















});