$(document).ready(function () {

  // ✅ 메뉴 열기/닫기
  $(".menu-icon").on("click", function () {
    $(".menu ul").addClass("active"); // 무조건 열기
  });

  // ✅ X 버튼 닫기
  $(".close-btn").on("click", function () {
    $(".menu ul").removeClass("active"); // 무조건 닫기
  });

  // ✅ 메뉴 항목 클릭 시 모바일만 닫기
  $(".menu ul li a").on("click", function () {
    if (window.innerWidth <= 899) { // 반응형 기준 동일하게
      $(".menu ul").removeClass("active");
    }
  });



  /* --- fix: unified JS for video play + more btn animation --- */
  $(function () {

    // 비디오 재생 처리
    $(document).on('click', '.video-container .play-btn', function (e) {
      e.preventDefault();
      const $container = $(this).closest('.video-container');
      const videoUrl = $container.attr('data-video') || $container.find('iframe').data('src');

      if (!videoUrl) return;

      const $iframe = $container.find('iframe');
      if ($iframe.length) {
        const separator = videoUrl.indexOf('?') === -1 ? '?' : '&';
        $iframe.attr('src', videoUrl + separator + 'autoplay=1&mute=0');
      }

      $container.addClass('playing');
    });

    // 더보기 버튼 애니메이션
    $(document).on('click', '.more', function (e) {
      e.preventDefault();
      const $more = $(this);
      const $info = $more.closest('.artist-info');
      $info.toggleClass('active');

      $more.addClass('clicked');
      setTimeout(() => $more.removeClass('clicked'), 180);
    });

    // 비디오 초기 로드 최적화
    $('.video-container').each(function () {
      const $iframe = $(this).find('iframe');
      if ($iframe.length && $iframe.data('src')) {
        $iframe.removeAttr('src');
      }
    });
  });




  /* ✅ ✅ ✅ 현재 페이지 메뉴 강조 (메인 + 서브 + 모바일 메뉴 모두 적용됨) */
  const currentPage = window.location.pathname.split("/").pop(); // 현재 페이지 파일명

  $(".menu a").each(function () {
    if ($(this).attr("href") === currentPage) {
      $(this).addClass("active"); // 빨간색 강조
    }
  });

});
