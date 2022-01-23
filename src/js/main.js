// ドロップダウンメニュー
function mqWindow() {
  const width = $(window).width();
  if (width <= 960) {
    $('.has_child > a').off('click');
    $('.has_child > a').on('click', function () {
      const parentElm = $(this).parent();
      $(parentElm).toggleClass('active');
      $(parentElm).children('ul').stop().slideToggle(500);
      return false;
    });
  } else {
    $('.has_child > a').off('click');
    $('.has_child > a').removeClass('active');
    $('.has_child').children('ul').css('display', '');
  }
}



// グローバルメニューの表示/非表示 23
function FixedAnime() {
  const elemPos = $('.ly_service').offset().top;
  const scroll  = $(window).scrollTop();

  if (scroll <= 20) {
    $('.ly_header').addClass('DownMove');
  } else if (scroll >= elemPos) {
    $('.ly_header').removeClass('UpMove');
    $('.ly_header').addClass('DownMove');
  } else {
    if ($('.ly_header').hasClass('DownMove')) {
      $('.ly_header').removeClass('DownMove');
      $('.ly_header').addClass('UpMove');
    }
  }
}



// ハンバーガーメニューのクリック時の挙動
$('.bl_gnavBtn').click(function () {
  $(this).toggleClass('active');
  $('.bl_gnav').toggleClass('panelactive')
});

$('.bl_gnav a').click(function () {
  $('.bl_gnavBtn').removeClass('active');
  $('.bl_gnav').removeClass('panelactive');
});



// ページ上部まで移動するボタンの表示/非表示 60
function setFadeElement() {
  const windowH = $(window).height();
  const scroll  = $(window).scrollTop();

  const contentsTop_contact = Math.round($('.ly_contact').offset().top);
  const contentsH_contact   = $('.ly_contact').outerHeight(true);

  const contentsTop_footer = Math.round($('.ly_footer').offset().top);
  const contentsH_footer   = $('.ly_footer').outerHeight(true);


  if (scroll + windowH >= contentsTop_contact && scroll + windowH <= contentsTop_contact + contentsH_contact) {
    $('.bl_topBtn').addClass('LeftMove');
    $('.bl_topBtn').removeClass('RightMove');
    $('.bl_topBtn__hide').removeClass('bl_topBtn__hide');
  } else if (scroll + windowH >= contentsTop_footer && scroll + windowH <= contentsTop_footer + contentsH_footer) {
    $('.bl_topBtn').addClass('LeftMove');
    $('.bl_topBtn').removeClass('RightMove');
  } else {
    if (!$('.bl_topBtn__hide').length) {
      $('.bl_topBtn').addClass('RightMove');
      $('.bl_topBtn').removeClass('LeftMove');
    }
  }
}
$('.bl_topBtn').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});



// タブメニュー関連 103
function GethashID(hashIDName) {
  if (hashIDName) {
    $('.bl_tab_btn li').find('a').each(function () {
      let idName = $(this).attr('href');
      if (idName == hashIDName) {
        let parentElm = $(this).parent();
        $('.bl_tab_btn li').removeClass('is_active');
        $(parentElm).addClass('is_active');
        $('.bl_tab_item').removeClass('is_active');
        $(hashIDName).addClass('is_active');
      }
    });
  }
}
$('.bl_tab_btn a').click(function () {
  const idName = $(this).attr('href');
  GethashID(idName);
  return false;
});
$(window).on('load', function () {
  $('.bl_tab_btn li:first-of-type').addClass('is_active');
  $('.bl_tab_item:first-of-type').addClass('is_active');
});



// vegas ファーストビューのスライドショー 148
const windowWidth = window.innerWidth || document.documentElement.clientWidth || 0;
if (windowWidth >= 768) {
  const respImg = [
    {
    src: './src/img/main_01.png'
    },
    {
    src: './src/img/main_02.png'
    },
    {
    src: './src/img/main_03.png'
    }
  ]
  mainVisual(respImg);
} else {
  const respImg = [
    {
    src: './src/img/main_01_sp.png'
    },
    {
    src: './src/img/main_02_sp.png'
    },
    {
    src: './src/img/main_03_sp.png'
    }
  ]
  mainVisual(respImg);
}
function mainVisual(imgs) {
  $('.bl_slider').vegas({
    overlay: false,
    transition: 'fade2',
    transitionDuration: 1500,
    delay: 2500,
    animationDuration: 1000,
    animation: 'random',
    slides: imgs,
    timer: false,
  });
}



// 検索バーの表示/非表示 194
$('.bl_openSearch').click(function () {
  $('.bl_search').addClass('bl_search__active');
});
$('.bl_search_closeBtn').click(function () {
  $('.bl_search').removeClass('bl_search__active');
});



// バックグランド関連のアニメーション 209
function fadeAnime() {
  $('.bgappearTrigger').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('bgappear');
    } else {
      $(this).removeClass('bgappear');
    }
  });
  $('.bgLRextendTrigger').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('bgLRextend');
    } else {
      $(this).removeClass('bgLRextend');
    }
  });
  $('.bgRLextendTrigger').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('bgRLextend');
    } else {
      $(this).removeClass('bgRLextend');
    }
  });
  $('.ly_service_area').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('startwd');
    } else {
      $(this).removeClass('startwd');
    }
  });
}



// shuffle_text 文字がランダムに出現 262
let shuffleText_arr = [];
function TypingInit() {
  $('.js_typing').each(function (i) {
    shuffleText_arr[i] = new ShuffleText(this);
  });
}
function TypingAnime() {
  $('.js_typing').each(function (i) {
    const elemPos = $(this).offset().top - 50;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      if (!$(this).hasClass('endAnime')) {
        shuffleText_arr[i].start();
        shuffleText_arr[i].duration = 800;
        $(this).addClass('endAnime');
      }
    } else {
      $(this).removeClass('endAnime');
    }
  });
}


$(window).resize(function () {
  mqWindow();
});

$(window).scroll(function () {
  TypingInit();
  TypingAnime();
  fadeAnime();
  setFadeElement();
  FixedAnime();
});

$(window).on('load', function () {
  $('.bl_splash_logo').delay(1200).fadeOut('slow');
  $('.bl_splash').delay(1500).fadeOut('slow', function () {
    $('body').addClass('appear');

    mqWindow();
    FixedAnime();
    setFadeElement();

    const hashName = location.hash;
    GethashID(hashName);
  });

  $('.bl_splash_bg').on('animationend', function () {
    fadeAnime();
    $('.endAnime').removeClass('endAnime');
    TypingInit();
    TypingAnime();
  });
});
