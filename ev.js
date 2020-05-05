let didScroll = false;
let isTransitioning = true;

$(document).ready(function () {
    let sound = true;
    $("#audio1")[0].volume = 0;

    let delay = 0.9;
    $(window).on("load", function () {
        $('#content').children().each(function () {
            $(this).addClass('loaded');
            $(this).css('animation-delay', delay + 's');
            delay -= 0.3;
        });

        setTimeout(function () {
            $('#background1').slideDown();
            $('#fifth').slideDown();
            $('#sixth').slideDown();
            $("#audio1").animate({
                volume: 0.8
            }, 3000);
        }, 1800);

        setTimeout(function () {
            $('#background2').css('display', 'block');
            $('#background3').css('display', 'block');
            $('#background4').css('display', 'block');
            isTransitioning = false;
        }, 2000);
    });

    $('map').imageMapResize();
    
    $(window).on("scroll", function() {
        
    });

    requestAnimationFrame(onScroll);
});

const scrollLayers = [0, 2000, 3000, 5000, 6000, 8000];
const transition = 2000;

function onScroll() {
    var scroll = $(window).scrollTop();
    if (isTransitioning) {
        $(document).scrollTop(0);
    } else {
        if (scroll === scrollLayers[0]) {
            $('#background1').css('opacity', 1);
            $('#background2').css('opacity', 1);
            $('#background3').css('opacity', 1);
            $('#skyline1').css('opacity', 1);
            $('#skyline2').css('opacity', 1);
            $('#skyline3').css('opacity', 1);
            $('#skyline4').css('opacity', 1);
        } else if (scroll < scrollLayers[1]) {
            $('#background1').css('opacity', (scrollLayers[1] - scroll) / transition);
            $('#background2').css('opacity', 1);
//            $('#background3').css('opacity', 1);
            $('#skyline1').css('opacity', (scrollLayers[1] - scroll) / transition);
            $('#skyline2').css('opacity', 1);
//            $('#skyline3').css('opacity', 1);
//            $('#skyline4').css('opacity', 1);
        } else if (scroll >= scrollLayers[1] && scroll < scrollLayers[2]) {
            $('#background1').css('opacity', 0);
            $('#background2').css('opacity', 1);
//            $('#background3').css('opacity', 1);
            $('#skyline1').css('opacity', 0);
            $('#skyline2').css('opacity', 1);
//            $('#skyline3').css('opacity', 1);
//            $('#skyline4').css('opacity', 1);
        } else if (scroll >= scrollLayers[2] && scroll < scrollLayers[3]) {
            $('#background1').css('opacity', 0);
            $('#background2').css('opacity', (scrollLayers[3] - scroll) / transition);
            $('#background3').css('opacity', 1);
            $('#skyline1').css('opacity', 0);
            $('#skyline2').css('opacity', (scrollLayers[3] - scroll) / transition);
            $('#skyline3').css('opacity', 1);
//            $('#skyline4').css('opacity', 1);
        } else if (scroll >= scrollLayers[3] && scroll < scrollLayers[4]) {
            $('#background1').css('opacity', 0);
            $('#background2').css('opacity', 0);
            $('#background3').css('opacity', 1);
            $('#fifth').css('opacity', 1);
            $('#skyline1').css('opacity', 0);
            $('#skyline2').css('opacity', 0);
            $('#skyline3').css('opacity', 1);
//            $('#skyline4').css('opacity', 1);
            $('#moon').css('opacity', 0);
        } else if (scroll >= scrollLayers[4] && scroll < scrollLayers[5]) {
            $('#background1').css('opacity', 0);
            $('#background2').css('opacity', 0);
            $('#background3').css('opacity', (scrollLayers[5] - scroll) / transition);
            $('#fifth').css('opacity', 0);
            $('#skyline1').css('opacity', 0);
            $('#skyline2').css('opacity', 0);
            $('#skyline3').css('opacity', (scrollLayers[5] - scroll) / transition);
            $('#skyline4').css('opacity', 1);
            $('#moon').css('opacity', (scroll - scrollLayers[4]) / transition);
            console.log((scroll - scrollLayers[4]) / transition);
        } else {
            $('#background3').css('opacity', 0);
            $('#skyline3').css('opacity', 0);
            $('#moon').css('opacity', 1);
        }

        //sun positioning
        if (scroll < scrollLayers[4]) {
            angle = scroll / 60 + 5;
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