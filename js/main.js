$(document).ready(function () {

  /* ✅ 메뉴 열기/닫기 */
  $(".menu-icon").on("click", function () {
    $(".menu ul").addClass("active");
  });

  $(".close-btn").on("click", function () {
    $(".menu ul").removeClass("active");
  });

  $(".menu ul li a").on("click", function () {
    if (window.innerWidth <= 899) {
      $(".menu ul").removeClass("active");
    }
  });

  /* ✅ 아티스트 카드 - 더보기 버튼 */
  $(document).on("click", ".more", function () {
    const card = $(this).closest(".artist-info");
    card.toggleClass("active");
    $(this).addClass("clicked");
    setTimeout(() => $(this).removeClass("clicked"), 200);
  });

  /* ✅ 영상 재생 버튼 */
  $(document).on("click", ".play-btn", function () {
    const container = $(this).closest(".video-container");
    const iframe = container.find("iframe");
    let videoUrl = iframe.attr("data-src");

    // 자동재생 추가
    const sep = videoUrl.includes("?") ? "&" : "?";
    videoUrl = videoUrl + `${sep}autoplay=1`;

    container.addClass("playing");
    iframe.attr("src", videoUrl);
  });

  /* ✅ 초기 로딩 시 iframe src 비워두기 (로딩속도 최적화) */
  $(".video-container iframe").each(function () {
    const iframe = $(this);
    const url = iframe.attr("data-src");
    if (url) iframe.removeAttr("src");
  });

});
