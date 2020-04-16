 $(document).ready(function () {
     $('map').imageMapResize();

     $(window).scroll(function () {
         var scroll = $(window).scrollTop();
         let index = 9;
         $('#content').children().each(function () {
             $(this).css('transform', 'translate3d( 0, 0,' + (scroll / 80 * index) + 'px )');
             index--;
         });
     });

     let time = 0;

     requestAnimationFrame(animateFountain);

     function animateFountain() {
         if (time >= 0 && time < 10) {
             $('#fountain').css('background-image', 'url(wasquapa/fountain2-01.png)');
         } else if (time >= 10 && time < 20) {
             $('#fountain').css('background-image', 'url(wasquapa/fountain3-01.png)');
         } else if (time >= 20 && time < 30) {
             $('#fountain').css('background-image', 'url(wasquapa/fountain4-01.png)');
         } else if (time >= 30 && time < 40) {
             $('#fountain').css('background-image', 'url(wasquapa/fountain5-01.png)');
         } else if (time >= 40 && time < 50) {
             $('#fountain').css('background-image', 'url(wasquapa/fountain6-01.png)');
         } else if (time >= 50 && time < 60) {
             $('#fountain').css('background-image', 'url(wasquapa/fountain7-01.png)');
         } else if (time >= 60 && time < 70) {
             $('#fountain').css('background-image', 'url(wasquapa/fountain8-01.png)');
         } else if (time >= 70 && time < 80) {
             $('#fountain').css('background-image', 'url(wasquapa/fountain9-01.png)');
         } else if (time >= 80 && time < 90) {
             $('#fountain').css('background-image', 'url(wasquapa/fountain10-01.png)');
         } else if (time >= 90 && time < 100) {
             $('#fountain').css('background-image', 'url(wasquapa/fountain11-01.png)');
         } else if (time >= 100 && time < 110) {
             $('#fountain').css('background-image', 'url(wasquapa/fountain12-01.png)');
         } else if (time >= 110 && time < 120) {
             $('#fountain').css('background-image', 'url(wasquapa/fountain13-01.png)');
         } else {
             $('#fountain').css('background-image', 'url(wasquapa/fountain-01.png)');
         }

         time = (time + 1) % 120;
         requestAnimationFrame(animateFountain);
         //                console.log(time);
     }

     $('#branch').click(petalFall);

     const sways = ['sway-1', 'sway-2', 'sway-3', 'sway-4'];

     function petalFall() {
         const ani = '';
         $('.petal').each(function () {
             const duration = getRandom(8, 20);
             let str = 'fall ' + duration + 's linear,';
             if (getRandom(0, 2) > 0) {
                 str += ' blow-soft-left ' + getRandom(10, 30) + 's ease-in,';
             } else {
                 str += ' blow-soft-right ' + getRandom(10, 30) + 's ease-in,';
             }
             str += ' ' + sways[getRandom(0, 4)] + ' 2.5s infinite linear';
             console.log(str);
             $(this).css('animation', str);
             $(this).css('animation-play-state', 'running');
             $(this).fadeIn().delay((duration - 3) * 1000).fadeOut(3000);
         });

     }

     function getRandom(min, max) {
         return Math.floor(Math.random() * (max - min) + min);
     }
 });