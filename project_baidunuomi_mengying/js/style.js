$(".banner-btn li").click(function(){
    var ind = $(this).index();
    var val = -100% * ind;
    $(".banner-img ul").stop().animate({"marginLeft": val},500)
    $(this).addClass("active").siblings("li").removeClass("active")
})