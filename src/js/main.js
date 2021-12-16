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
    src: './src/img/main_01.jpg'
    },
    {
    src: './src/img/main_02.jpg'
    },
    {
    src: './src/img/main_03.jpg'
    }
  ]
  mainVisual(respImg);
} else {
  const respImg = [
    {
    src: './src/img/main_01_sp.jpg'
    },
    {
    src: './src/img/main_02_sp.jpg'
    },
    {
    src: './src/img/main_03_sp.jpg'
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


$(window).scroll(function () {
  TypingInit();
  TypingAnime();
  fadeAnime();
});

TypingInit();
TypingAnime();
