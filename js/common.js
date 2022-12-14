$(function(){
    $('.theater .open-list li').on('click', function(){
        $('.theater .open-list li').removeClass('active');
        $(this).toggleClass('active');
    })

        
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
    });
    
    var storeSlide = new Swiper(".store-slide", {
        slidesPerView: 3,
        spaceBetween: 25,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })
})