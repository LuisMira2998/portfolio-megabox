$(function () {
    // ================ header ================
    $(window).on('scroll', function(){
        let boxOfficeSection = $('.box-office-section').offset().top;
        let nowScroll = $(window).scrollTop();

        if ( boxOfficeSection <= nowScroll ) {
            $('#header').addClass('active');
            $('.sale-button').addClass('top');
            $('.top-button').fadeIn(300);
        } else {
            $('#header').removeClass('active');
            $('.sale-button').removeClass('top');
            $('.top-button').fadeOut(300);
        }

        // console.log('섹션 높이: ' + boxOfficeSection + '지금스크롤 : ' + nowScroll)
    })

    // ================ top button ================
})
