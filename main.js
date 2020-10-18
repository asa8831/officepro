$(function () {

  //＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  // ハンバーガーボタン
  //＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

  // ボタンが押された時
  $('.js-burger').on('click', function () {

    $(this).toggleClass('is-cross');
    $('.js-header-nav-container').fadeToggle(500);
    $('body').toggleClass('stop-scroll');

  });


  // メニューが選ばれたとき
  var widthIpad = 768;

  // ipad幅からハンバーガーが出るので、この条件をつけないとPC版でもメニューが消えてしまう
  if ($(window).width() <= widthIpad) {

    $('.js-header__nav-link').on('click', function () {

      $('.js-burger').removeClass('is-cross');
      $('.js-header-nav-container').fadeOut(500);
      $('body').removeClass('stop-scroll');
    });
  }


  //＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  // 上に戻るボタン
  //＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

  // topボタンの外側
  var toTopBtn = $('.js-totop');
  // ボタンが現れる高さ
  var showBtnHeight = 500;
  // 上に戻る早さ0.05秒
  var DURATION = 500;

  $(window).scroll(function () {
   
    if ($(this).scrollTop() > showBtnHeight) {
      toTopBtn.fadeIn();
    } else {
      toTopBtn.fadeOut();
    }

    toTopBtn.click(function () {

      $('body,html').stop().animate({
        scrollTop: 0
      }, DURATION);
      
      return false;

    });

  });

});