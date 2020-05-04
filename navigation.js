  $(document).ready(function () {
      $('body').fadeIn(800);

      $('map').imageMapResize();

      $('#archMap').click(function (e) {
          e.preventDefault();
          fadeClick($(this));
      });

      $('#building-map').click(function (e) {
          e.preventDefault();
          fadeClick($(this));
      });

      $('#cube-map').click(function (e) {
          e.preventDefault();
          fadeClick($(this));
      });
      
      let offset = 70;

      $(document).bind('mousemove', function (e) {
          $('#hover-text').css({
              top: e.pageY - offset,
              left: e.pageX - $('#new-york').offset().left - $("#hover-text").width() / 2
          });
      });

      $('#archMap').hover(function () {
          $('#hover-text > p').text('Washington Square Park');
          offset = 70;
          $('#hover-text').show();
          $('#arch-img').css('transform', 'scale(1.05)');
      }, function () {
          $('#hover-text').hide();
          $('#arch-img').css('transform', 'scale(1)');
      });
      
      $('#building-map').hover(function () {
          $('#hover-text > p').text('East Village');
          offset = 50;
          $('#hover-text').show();
          $('#building-img').css('transform', 'scale(1.05)');
      }, function () {
          $('#hover-text').hide();
          $('#building-img').css('transform', 'scale(1)');
      });
      
      $('#cube-map').hover(function () {
          $('#hover-text > p').text('Astor Place');
          offset = 50;
          $('#hover-text').show();
          $('#cube-img').css('transform', 'scale(1.05)');
      }, function () {
          $('#hover-text').hide();
          $('#cube-img').css('transform', 'scale(1)');
      });
  });

  function fadeClick(element) {
      let href = element.attr('href');
      $('#container').fadeOut(800, function () {
          window.location = href;
      });
  }