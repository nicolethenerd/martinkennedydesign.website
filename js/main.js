/// One page scrolling ///

$(document).ready(function () {
   $('#nav').onePageNav();
});

///nav-menu hide, and reappear ///

$(document).ready(function () {
   $(window).scroll(function () {
      if ($(window).scrollTop() > 1000 &&
         $(".nav-wrapper").css("position") != "fixed") {
         $(".nav-wrapper").slideUp(function () {
            $(".nav-wrapper").css("position", "fixed")
            $(".nav-wrapper").slideDown('1000')
         })
      } else if ($(window).scrollTop() <= 600) {
         $(".nav-wrapper").css("position", "initial")
      }
   })
})

//// Menu Icon Toggle ///

$(document).ready(function () {
   $(".menu-icon").click(function () {
      $("nav ul").slideToggle();
   })
})

document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

<!-- Hide Menu  @ 768px-->

var menu = $('nav ul');

$(window).resize(function () {
   var w = $(window).width();
   if (w > 768 && menu.is(':hidden')) {
      menu.removeAttr('style');
   }
});

/// toggle class for background on scroll ///

$(document).ready(function () {
   $(window).scroll(function () {
      $('.nav-wrapper').toggleClass("bg-nav", ($(window).scrollTop() > 100));
   });
});

$(window).resize(function () {
   var w = $(window).width();
   if (w > 768) {
      $('.nav-wrapper').toggleClass("bg-none");
   }
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 700) {
        $(".print-svg").addClass("path");
    } else {
        $(".print-svg").removeClass("path");
    }
});


// Add parallax (stellar.js)

$('.jumbotron').stellar();



// Lightbox


$(document).ready(function() {
    var $lightbox = $('#lightbox');

    $('[data-target="#lightbox"]').on('click', function(event) {
        var $img = $(this).find('img'),
            src = $img.attr('src'),
            alt = $img.attr('alt'),
            css = {
                'maxWidth': $(window).width() - 100,
                'maxHeight': $(window).height() - 100
            };

        $lightbox.find('.close').addClass('hidden');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });

    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');

        $lightbox.find('.modal-dialog').css({'width': $img.width()});
        $lightbox.find('.close').removeClass('hidden');
    });
});
