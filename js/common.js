$(function () {
    $('.theater .open-list li').on('click', function () {
        $('.theater .open-list li').removeClass('active');
        $(this).toggleClass('active');
    })

    // slide check 
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
    
    var boxOfficeList = new Swiper(".box-office-slide", {
        slidesPerView: 4,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 25,
        // slidesPerColumnFill: "row",
        grid: {
            rows: 2,
            fill: 'row',
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
    })
    
    var recommendEvent = new Swiper(".recommend-slide-container", {
        slidesPerView: 4,
        spaceBetween: 20,
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        on : {
            slideChange: function() {
                let currentSlide = $(recommendEvent.slides[recommendEvent.activeIndex]);
                let nextSlide = recommendEvent.slides[recommendEvent.activeIndex + 3];
            
                $('.swiper-slide').removeClass('off');
                
                if(!$(nextSlide).hasClass('off')){
                    $(nextSlide).addClass('off')
                }else{
                    $(currentSlide).removeClass('off')
                }
            }
        }
    })

})