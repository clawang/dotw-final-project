$(document).ready(function () {
    let delay = 0.3;
    $('#content').children().each(function () {
        $(this).addClass('loaded');
        $(this).css('animation-delay', delay + 's');
        delay += 0.3;
    });

    $('map').imageMapResize();

    let isTransitioning = true;
    setTimeout(function () {
        $('#background1').slideDown();
    }, 1700);

    setTimeout(function () {
        $('#background2').css('display', 'block');
        $('#background3').css('display', 'block');
        isTransitioning = false;
    }, 2000);

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (isTransitioning) {
            $(document).scrollTop(0);
        } else {
            if (scroll < 1000) {
                $('#background1').css('opacity', (1000 - scroll) / 1000);
            } else if (scroll >= 1000 && scroll < 2000) {
                $('#background1').css('opacity', 0);
                $('#background2').css('opacity', 1);
            } else if (scroll >= 2000 && scroll < 3000) {
                $('#background1').css('opacity', 0);
                $('#background2').css('opacity', (3000 - scroll) / 1000);
            } else {
                $('#background1').css('opacity', 0);
                $('#background2').css('opacity', 0);
            }
        }
    });
});