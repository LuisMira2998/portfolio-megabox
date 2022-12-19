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

    // ================ top button ================
    $('.top-button').on('click', function() {
        $('html, body').animate({scrollTop: '0'}, 680);
    })
})
