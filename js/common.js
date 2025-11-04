$(document).ready(function () {

  // 메뉴 열기/닫기
  $(".menu-icon").on("click", function () {
    $(this).toggleClass("active");
    $(".menu ul").toggleClass("active");
  });

  // 모바일: 메뉴 클릭하면 닫힘
  $(".menu ul li a").on("click", function () {
    $(".menu ul").removeClass("active");
    $(".menu-icon").removeClass("active");
  });

  // 현재 페이지 활성 메뉴 표시
  const current = window.location.pathname.split("/").pop();
  $(".menu a").each(function () {
    if ($(this).attr("href") === current) {
      $(this).addClass("active");
    }
  });

});
