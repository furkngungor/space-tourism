$(".Header-hamburger-button").on("click",() => {
  $(".Header-menu").addClass("show-menu");
  $(".Header-hamburger-button").css("display","none");
});

$(".Header-close-button").on("click",() => {
  $(".Header-menu").removeClass("show-menu");
  $(".Header-hamburger-button").css("display","flex");
});