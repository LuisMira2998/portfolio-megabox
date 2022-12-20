$(function () {
    // ================ header ================
    $(window).on('scroll', function(){
        let boxOfficeSection = $('.box-office-section').offset().top;
        let nowScroll = $(window).scrollTop();

        if ( boxOfficeSection <= nowScroll ) {
            $('#header').addClass('active');
            $('.sale-button').addClass('top');
            $('.top-button').addClass('on');
        } else {
            $('#header').removeClass('active');
            $('.sale-button').removeClass('top');
            $('.top-button').removeClass('on');
        }
        // console.log('섹션 높이: ' + boxOfficeSection + '지금스크롤 : ' + nowScroll)
    })

    var boxOfficeList = new Swiper(".box-office-slide", {
        slidesPerView: 6,
        spaceBetween: 20,
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
    })

        // slide check 
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
    });
})
