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
     
     let isSpinning = false;
     $('.cube').click(function() {
        if(!isSpinning) {
            $('.cube').addClass('spinning');
            isSpinning = true;
            setTimeout(function() {
                $('.cube').removeClass('spinning');
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
    let window = $( document ).width();
     let cubeWidth = window / 1440;
    const offset = $('#content').offset().top + cubeWidth * 50;
    console.log($('#content').offset().top);
    console.log(offset);
    const position = 100 * cubeWidth + 50;

     $('.cube-container').css('transform', 'scale('+cubeWidth+')');
    $('.cube-container').css('left', (window / 2 - ($('.cube').innerWidth()) / 2) + 'px');
    $('.wrapper').css('bottom', offset + 'px');
}

function spinCube() {
    
}

 function getRandom(min, max) {
     return Math.floor(Math.random() * (max - min) + min);
 }