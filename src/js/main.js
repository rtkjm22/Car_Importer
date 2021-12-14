// 

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
});

TypingInit();
TypingAnime();
