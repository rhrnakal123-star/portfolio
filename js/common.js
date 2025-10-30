$(document).ready(function () {

  // ---------------------------
  // 🟣 로고 클릭 → 메인 페이지 이동
  // ---------------------------
  $(".logo").on("click", function () {
    window.location.href = "main.html";
  });

  // ---------------------------
  // 🟣 메뉴 클릭 처리
  // ---------------------------
  $(".menu a").on("click", function (e) {
    e.preventDefault();
    const text = $(this).text().trim();

    if (text === "NEWS") {
      window.location.href = "sub.html";
    }
    // ARTIST, ACTOR 는 이동 ❌
  });

  // ---------------------------
  // 🟣 현재 페이지 활성화 표시
  // ---------------------------
  const page = window.location.pathname.split("/").pop();

  $(".menu li").removeClass("active");
  if (page === "sub.html") {
    $(".menu li:contains('NEWS')").addClass("active");
  }

  // ---------------------------
  // 🟣 로고 hover 애니메이션
  // ---------------------------
  $(".logo img").hover(
    function () { $(this).stop().animate({ opacity: 0.7 }, 200); },
    function () { $(this).stop().animate({ opacity: 1 }, 200); }
  );

  // ---------------------------
  // 🟣 메뉴 hover (공통)
  // ---------------------------
  $(".menu a").hover(
    function () { $(this).stop().animate({ opacity: 0.7 }, 200); },
    function () { $(this).stop().animate({ opacity: 1 }, 200); }
  );

  // ---------------------------
  // 🟣 반응형 메뉴 (열기/닫기 아이콘)
  // ---------------------------
  $(".menu-icon").on("click", function () {
    $(this).toggleClass("open");
    $(".menu ul").toggleClass("open");
  });

});
