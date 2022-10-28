//스크롤 애니메이션//
function Visible( elm, eval ) {
  eval = eval || "object visible";
  var viewportHeight = $(window).height(),
      scrolltop = $(window).scrollTop(),
      y = $(elm).offset().top,
      elementHeight = $(elm).height();

  if (eval === "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
  if (eval === "above") return ((y < (viewportHeight + scrolltop)));
  } 

  $(window).on('scroll',function(){ action(); });
  var introSec = false;
  var webSec = false;
  var proSec = false;
  var proSec1 = false;
  var proSec2 = false;
  var contSec = false;

  function action(){
    //SEC1 animation//
    if (Visible($('#intro'))&&!introSec) {
        introSec=true;
        $(".navigation>li").removeClass("navSelect");
        $(".navigation-1").addClass("navSelect");
        introSec=false;
    }
    //SEC2 animation//
    const spinImg = document.querySelectorAll('.webLI');
    if (Visible($('#webClone'))&&!webSec) {
        webSec=true;
        $(".navigation>li").removeClass("navSelect");
        $(".navigation-2").addClass("navSelect");
        $('.webArt>ul>li').css("animation-play-state", "running");
        webSec=false;
    }
    //SEC3 animation//
    if (Visible($('.proArt-1'))&&!proSec) {
      proSec=true;
      $(".navigation>li").removeClass("navSelect");
      $(".navigation-3").addClass("navSelect");
      $('.webArt>ul>li').css("animation-play-state", "running");
      proSec=false;
  }
    if (Visible($('.proLB-1>a'))&&!proSec1) {
      proSec1=true;
      $('.proArt-1').css("animation-play-state", "running");
    }
    if (Visible($('.proLB-2>a'))&&!proSec2) {
      proSec2=true;
      $('.proArt-2').css("animation-play-state", "running");
  }
  //SEC4 animation//
  if (Visible($('.contectSec'))&&!contSec) {
    contSec=true;
    $('.contectSec').css("animation-play-state", "running");
    $('.cicleWrap').css("animation-play-state", "running");
    $('.infoWrap>span').css("animation-play-state", "running");
    $(".navigation>li").removeClass("navSelect");
    $(".navigation-4").addClass("navSelect");
    contSec=false;
  
  }
}