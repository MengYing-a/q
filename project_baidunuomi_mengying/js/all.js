$(document).ready(function(){
    $('.liebiao-hover-icon').mouseenter(function(){
        $(this).find(".down").addClass("a");
        $(this).find('.arrow-box').stop().fadeIn(50);
    }).mouseleave(function(){
        $(this).find(".down").removeClass("a");
        $(this).find('.arrow-box').stop().fadeOut(50);
    })
    $('.liebiao-hover1').mouseenter(function(){
        $(this).find('.arrow-box1').stop().fadeIn(50)
    }).mouseleave(function(){
        $(this).find('.arrow-box1').stop().fadeOut(50)
    })
    // 列表页
    // 下拉菜单
    $(".more-txt").click(function(){
        console.log($(this).find(".text").text())
        if($(this).find(".text").text()==="更多"){
            $(this).find(".text").text("收起")
            $(this).find("img").attr("src","Images/arrow-bottom_17a7d56.png").addClass("close-top")
            $(".y-liebiao").css({"height":"120px"});
            $(".t-p").css({"height":"150px"});
            $('.book-liebiao').stop().slideDown(1);
        }else{
            $(this).find(".text").text("更多")
            $(this).find("img").attr("src","Images/arrow-bottom_17a7d56.png").removeClass("close-top")
            $(".y-liebiao").css({"height":"50px"});
            $(".t-p").css({"height":"70px"});
            $('.book-liebiao').stop().slideUp(1);
        }
    })
    // 选项卡
    $(".all-title .btn").click(function(){
        var ind = $(this).index();
        $(".yu-l1>div").eq(ind).addClass("list-block").siblings().removeClass("list-block")
    })
    // 固定导航
    $(window).scroll(function(){
        var height = $(this).scrollTop();
        if(height>455){
            $(".yule-nav").addClass("active-fixed")
        }else{
            $(".yule-nav").removeClass("active-fixed")
        }
    })
    // 列表详情页 ///模态框
    $('.inner-nav .nav-li').click(function(){
        var ind = $(this).index();
        $(this).addClass('color').siblings().removeClass('color');
        $(".a-i-box .all-inner").eq(ind).addClass("a-block").siblings().removeClass("a-block");
        $(".inner-box .box").eq(ind).addClass("block").siblings().removeClass("block");
    })
     // 获取网页高度  模态框
	var height = $(window).height();
	$(".motai-wrap").height(height);
	$("#map").click(function(){
		$(".wrap").fadeIn(100)
	})
	$("#close").click(function(){
		$(".wrap").fadeOut(100)
	})
    $("#map1").click(function(){
		$(".wrap1").fadeIn(200)
	})
    $("#close1").click(function(){
		$(".wrap1").fadeOut(200)
	})
    // 购物车
    // 不同高滚动
    $(".vip-liebiao ul li").click(function(){
        var ind = $(this).index();
        var offset = $(".height").eq(ind).offset().top;
        $("html,body").animate({"scrollTop":offset + "px"},500);
        $(this).addClass('color-pink').siblings().removeClass('color-pink')
    })
    // 固定导航
    $(window).scroll(function(){
		var height = $(this).scrollTop();
		if(height>1100){
			$(".vip-nav").addClass("active")
		}else{
			$(".vip-nav").removeClass("active")
		}
	})
    // 价格加加
   var num = 1;
    $(".num").val(num);
    $(".add").click(function(){
        num++;
        $(".num").val(num);
        num2 = 40*num;
        num3 = 50*num;
        $(".num-title").html("￥" + num2 + "." + "00")
        $(".result").html("￥" + num3 + "." + "00")
    })
    $(".sub").click(function(){
        if(num>0){
            num--;
            $(".num").val(num)
            num2 = 40*num;
            num3 = 50*num;
            $(".num-title").html("￥" + num2 + "." + "00")
            $(".result").html("￥" + num3 + "." + "00")
        }else{
            alert("请输入大于0的数字")
        }
    })
})
