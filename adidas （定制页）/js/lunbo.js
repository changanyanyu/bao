 var swiper = new Swiper('.swiper-container', {
            spaceBetween: 50,
            slidesPerView: 2,
            centeredSlides: true,
            autoplay:2000,
            slideToClickedSlide: true,
            grabCursor: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            scrollbar: '.swiper-scrollbar',
            pagination: '.swiper-pagination',
            history: 'slide',
        });