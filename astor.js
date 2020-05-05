 $(document).ready(function () {
     
     resizeCube();
     $("#audio1")[0].volume = 0;
     
     $(window).on('resize', resizeCube);
     
     const delays = [0.5, 0.7, 0.9, 1.1, 1.3, 1.5, 1.7, 1.5, 1.7, 1.7]
     let index = 0;
     $('#content').children().each(function () {
         $(this).addClass('loaded');
         $(this).css('animation-delay', delays[index] + 's');
         index++;
     });

     $('map').imageMapResize();

     let isTransitioning = true;
     setTimeout(function () {
         $('#background').slideDown();
         isTransitioning = false;
         $("#audio1").animate({volume: 0.7}, 2000);
     }, 1900);
     
     setTimeout(function () {
         $('.cube-container').addClass('blinking');
     }, 8000);
     
     let isSpinning = false;
     $('.cube').click(function() {
         $('.cube-container').removeClass('blinking');
        if(!isSpinning) {
            $('.cube').addClass('spinning');
            $('.cube').css('cursor', 'default');
            isSpinning = true;
            setTimeout(function() {
                $('.cube').removeClass('spinning');
                $('.cube').css('cursor', 'pointer');
                isSpinning = false;
            }, 20000);
        } 
     });

     $(window).scroll(function () {
         var scroll = $(window).scrollTop();
         let index = 9;
         if (isTransitioning) {
             $(document).scrollTop(0);
         } else {
             $('#content').children().each(function () {
                 $(this).removeClass('loaded');
                 $(this).css('opacity', '1');
                 $(this).css('transform', 'translate3d( 0, 0,' + (scroll / 120 * index) + 'px ) rotateX(0deg)');
                 index--;
             });
         }
     });
 });

function resizeCube() {
    let width = $( document ).width();
//    console.log($(window).height());
//    console.log(width);
    let cubeWidth = width / 1440;
    let cubeHeight = $(window).height() / 765;
    let scale;
    if(width > $(window).height()) {
        scale = cubeWidth;
    } else {
        scale = Math.max(cubeWidth, cubeHeight);
    }
    const offset = $('#content').offset().top + cubeWidth * 50;
    const position = 25 * scale + 125;

     $('.cube-container').css('transform', 'scale('+scale+')');
    $('.cube-container').css('left', (width / 2 - ($('.cube').innerWidth()) / 2) + 'px');
//    $('.wrapper').css('bottom', offset + 'px');
}

 function getRandom(min, max) {
     return Math.floor(Math.random() * (max - min) + min);
 }