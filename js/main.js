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
      // ???????????????? ???????????? ??????????????
      var element = $(selector)[0];
      var isResizeble = false;

      var Visible = function(target) {
        // ?????? ?????????????? ????????????????
        var targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
          },
          // ???????????????? ?????????????? ????????
          windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
          };


      if (targetPosition.bottom > windowPosition.top && // ???????? ?????????????? ???????????? ?????????? ???????????????? ???????????? ?????????????? ?????????????? ?????????? ????????, ???? ?????????????? ?????????? ????????????
        targetPosition.top < windowPosition.bottom && // ???????? ?????????????? ?????????????? ?????????? ???????????????? ???????????? ?????????????? ???????????? ?????????? ????????, ???? ?????????????? ?????????? ??????????
        targetPosition.right > windowPosition.left && // ???????? ?????????????? ???????????? ?????????????? ???????????????? ???????????? ?????????????? ?????????? ?????????? ????????, ???? ?????????????? ?????????? ??????????
        targetPosition.left < windowPosition.right) { // ???????? ?????????????? ?????????? ?????????????? ???????????????? ???????????? ?????????????? ???????????? ?????????? ????????, ???? ?????????????? ?????????? ????????????
        // ???????? ?????????????? ?????????????????? ??????????, ???? ?????????????????? ?????????????????? ??????

        console.log('???? ???????????? ?????????????? :)');

        if (!isResizeble) {
          //  ??-?????? ??????????????, ???????????????????? 1 ?????? ?? ??????

          target.classList.add('animate');
          isResizeble = true;
        } else {
          // ???????? ?????????????? ???? ??????????, ???? ?????????????????? ???????? ??????
          target.classList.add('no');
        }
      }



      }



      // ?????????????????? ?????????????? ?????? ?????????????????? ????????????????
      window.addEventListener('scroll', function() {
        Visible(element);
      });

      // ?? ?????????? ???????????????? ?????????????? ??????????. ?? ???? ??????????, ?????????????? ???????????????????? ??????????
      Visible(element);

    }

  }
  
  paint('.info__image');
  paint('.industry__pic');
  paint('.about__image');
  paint('.content__image');

});
