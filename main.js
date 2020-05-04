  $(document).ready(function () {

      $('#volume').click(function (e) {
          if (sound) {
              $("#audio1")[0].volume = 0;
              $('#sound').attr('src', 'volume-off.png');
              sound = false;
          } else {
              $("#audio1")[0].volume = 0.8;
              $('#sound').attr('src', 'volume-on.png');
              sound = true;
          }
      });

      $('#back-button').click(function (e) {
          e.preventDefault();
          href = $(this).attr('href');
          $("#audio1").animate({
              volume: 0
          }, 800);
          $('#environment').fadeOut(800, function () {
              window.location = href;
          });
      });

  });