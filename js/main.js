$(document).ready(function () {

  // 햄버거 클릭 시 메뉴 toggle
  $('.menu-icon').on('click', function() {
    const isActive = $(this).hasClass('active');
    $(this).toggleClass('active');   // 햄버거 ↔ X 전환
    $('.menu ul').toggleClass('active');

    // 메뉴 표시 상태 강제 보정
    if (!isActive) {
      $('.menu ul').stop(true, true).slideDown(250).addClass('active');
    } else {
      $('.menu ul').stop(true, true).slideUp(250, function() {
        $(this).removeClass('active');
      });
    }
  });


  // -----------------------------
  // 💡 창 크기 변경 시 자동 초기화
  // -----------------------------
  function resizeMenu() {
    const winWidth = $(window).width();

    // ① 900px 초과 시 (데스크탑 모드)
    if (winWidth > 900) {
      $('.menu ul').stop(true, true).css({
        display: 'flex'
      }).removeClass('active');
      $('.menu-icon').removeClass('active'); // ✅ X → 햄버거 복귀
    } 
    // ② 900px 이하 시 (모바일 모드)
    else {
      $('.menu ul').stop(true, true).css({
        display: 'none'
      }).removeClass('active');
    }
  }

  $(window).on('resize', resizeMenu);
  resizeMenu();


  // -----------------------------
  // 🎥 영상 클릭 시 재생
  // -----------------------------
  $('.video-container').on('click', function () {
    var $container = $(this);
    if ($container.hasClass('playing')) return;

    var videoUrl = $container.data('video');
    var iframe = $('<iframe>', {
      src: videoUrl + '&autoplay=1',
      allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      allowfullscreen: true,
      title: 'YouTube video player',
      frameborder: '0',
      referrerpolicy: 'strict-origin-when-cross-origin'
    });

    $container.addClass('playing').append(iframe);
    $container.find('iframe').css('display', 'block');
  });


  // -----------------------------
  // 👥 아티스트 카드 슬라이드
  // -----------------------------
  $('.artist-section:first-child .arrow.left').on('click', function () {
    $('.artist-cards').animate({ scrollLeft: '-=400' }, 400);
  });
  $('.artist-section:first-child .arrow.right').on('click', function () {
    $('.artist-cards').animate({ scrollLeft: '+=400' }, 400);
  });


  // -----------------------------
  // 🔄 더보기 버튼 클릭 효과
  // -----------------------------
  $('.more').on('click', function () {
    $(this).text('로딩중...')
      .css({ background: '#3C1AB8', color: '#fff' })
      .delay(500)
      .queue(function (next) {
        $(this).text('더보기').css({ background: '#ACCCF5', color: '#222' });
        next();
      });
  });

  // -----------------------------
  // ⬅️➡️ 화살표 클릭 애니메이션
  // -----------------------------
  $('.arrow').on('click', function () {
    $(this).addClass('active');
    setTimeout(() => $(this).removeClass('active'), 200);
  });

});


















$(document).ready(function () {

  // menu hover opacity animation
  $('.menu ul li a').hover(
    function () {
      $(this).stop().animate({ opacity: 0.7 }, 200);
    },
    function () {
      $(this).stop().animate({ opacity: 1 }, 200);
    }
  );

});
