$(document).ready(function() {

  $('.mobile-wrap').on('click', function() {
    $('.line-burger').toggleClass('line-active');
    $('.main-header__list').slideToggle();
  });

  $(window).resize(function() {
    if ($(window).width() >= 780) {
      $('.main-header__list').attr('style', '');
      $('.line-burger').removeClass('line-active');
    }
  });

  $('a[href^="#"], a[href^="/#"]').click(function(e) {
    var target = $(this).attr('href').replace('/', '');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
    return false;
  });

  var picture_slider = $('.team__item--pic');
  picture_slider.slick({
    infinite: true,
    draggable: false,
    slidesToShow: 1,
    fade: false,
    arrows: false,
    dots: false,
    asNavFor: '.team__slider'
  });


  var team = $('.team__slider');
  team.slick({
    infinite: true,
    draggable: false,
    slidesToShow: 1,
    fade: false,
    arrows: false,
    dots: true,
    appendDots: $('.team__dots'),
    dotsClass: 'team__dots-list',
    asNavFor: '.team__item--pic'
  });

   if($(team).slick("getSlick").slideCount == 1) {
    $('.team__dots').css('display', 'none');
   }

  $('.team__dots-list li').on('click resize', function() {
    var left = $(this).position().left;
    var style = '.team__dots-list:before {left: ' + (left + 2) + 'px;}';
    $('#dot-slider').html(style);
  });


  $(".stock__elem").on('click', function() {
    $(".stock__elem").removeClass("stock__elem--active").eq($(this).index()).addClass("stock__elem--active");
    var index = $(this).index();
    $(".stock__inner").hide().eq(index).fadeIn();
  })

  $('a[href^="#"], a[href^="/#"]').click(function() {
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
    return false;
  });

  var $fixedMenu = $('.main-header');

  function fixContrastBg() {

    if ($fixedMenu.height() < $(window).scrollTop() + $fixedMenu.height()) {
      $('.block .main-header').addClass("contrast-bg");

    } else {
      $('.block .main-header').removeClass("contrast-bg");
    }
  }

  fixContrastBg();

  $(window).scroll(function() {
    fixContrastBg();
  });

  function paint(selector) {

    if ($(selector).length) {
      // Получаем нужный элемент
      var element = $(selector)[0];
      var isResizeble = false;

      var Visible = function(target) {
        // Все позиции элемента
        var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
          },
          // Получаем позиции окна
          windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
          };


      if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код

        console.log('Вы видите элемент :)');

        if (!isResizeble) {
          //  ф-ция которая, отработает 1 раз и все

          target.classList.add('animate');
          isResizeble = true;
        } else {
          // Если элемент не видно, то запускаем этот код
          target.classList.add('no');
        }
      }



      }



      // Запускаем функцию при прокрутке страницы
      window.addEventListener('scroll', function() {
        Visible(element);
      });

      // А также запустим функцию сразу. А то вдруг, элемент изначально видно
      Visible(element);

    }

  }
  
  paint('.info__image');
  paint('.industry__pic');
  paint('.about__image');
  paint('.content__image');

});
