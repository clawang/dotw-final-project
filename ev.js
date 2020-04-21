let didScroll = false;
let isTransitioning = true;

$(document).ready(function () {
    let delay = 0.3;
    $('#content').children().each(function () {
        $(this).addClass('loaded');
        $(this).css('animation-delay', delay + 's');
        delay += 0.3;
    });

    $('map').imageMapResize();


    setTimeout(function () {
        $('#background1').slideDown();
    }, 1700);

    setTimeout(function () {
        $('#background2').css('display', 'block');
        $('#background3').css('display', 'block');
        $('#background4').css('display', 'block');
        isTransitioning = false;
    }, 2000);

    requestAnimationFrame(onScroll);

    //    $(window).scroll(function () {
    //        didScroll = true;
    //    });
    //
    //    window.setInterval(function () {
    //        if (didScroll) {
    //            didScroll = false;
    //            onScroll();
    //        }
    //    }, 25);

    //    $(window).scroll($.throttle(100, function () {
    //
    //    }));

    //    requestAnimationFrame(float);
});

function onScroll() {
    var scroll = $(window).scrollTop();
    if (isTransitioning) {
        $(document).scrollTop(0);
    } else {
        if (scroll === 0) {
            $('#background1').css('opacity', 1);
            $('#background2').css('opacity', 1);
            $('#background3').css('opacity', 1);
        } else if (scroll < 1000) {
            $('#background1').css('opacity', (1000 - scroll) / 1000);
            $('#background2').css('opacity', 1);
            $('#background3').css('opacity', 1);
        } else if (scroll >= 1000 && scroll < 1500) {
            $('#background1').css('opacity', 0);
            $('#background2').css('opacity', 1);
            $('#background3').css('opacity', 1);
        } else if (scroll >= 1500 && scroll < 2500) {
            $('#background1').css('opacity', 0);
            $('#background2').css('opacity', (2500 - scroll) / 1000);
            $('#background3').css('opacity', 1);
        } else if (scroll >= 2500 && scroll < 3000) {
            $('#background1').css('opacity', 0);
            $('#background2').css('opacity', 0);
            $('#background3').css('opacity', 1);
            $('#fifth').css('opacity', 1);
        } else {
            $('#background1').css('opacity', 0);
            $('#background2').css('opacity', 0);
            $('#background3').css('opacity', (4000 - scroll) / 1000);
            $('#fifth').css('opacity', 0);
        }

        //sun positioning
        if (scroll < 4000) {
            angle = scroll / 35 + 5;
            $('#fifth').css('transform', 'rotate(' + angle + 'deg)');
        }

    }
    requestAnimationFrame(onScroll);
}

let clouds = [];
clouds[0] = {
    element: $('#cloud1'),
    xPos: 0,
    offset: 1
}
clouds[1] = {
    element: $('#cloud2'),
    xPos: 0,
    offset: 0.9
}
clouds[2] = {
    element: $('#cloud3'),
    xPos: 0,
    offset: -1
}
clouds[3] = {
    element: $('#cloud4'),
    xPos: 0,
    offset: -0.7
}

function float() {

    clouds.forEach(function (cloud) {
        cloud.xPos += cloud.offset;
        console.log(cloud.xPos);
        cloud.element.css('margin-left', cloud.xPos);
    })

    requestAnimationFrame(float);
}