$(document).ready(function () {
  // 📰 뉴스 아이템 페이드인 애니메이션
  $(".news-item").css({ opacity: 0, transform: "translateY(50px)" });

  $(window).on("scroll", function () {
    $(".news-item").each(function () {
      const top = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll + windowHeight > top + 100) {
        $(this).animate({ opacity: 1, top: 0 }, 800).css({
          transform: "translateY(0)",
          transition: "all 0.6s ease-out"
        });
      }
    });
  });
});
