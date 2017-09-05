// 导航栏输入框
$(document).ready(function(){
	$("#txtId").focus(function(){
		$("#txtId").css({width:'250px'});
	});
	$("#txtId").blur(function(){
		$("#txtId").css({width:'200px'});
	});

});


//导航栏下拉菜单
	$(function(){
		$(".headertwo li").mouseenter(function(){
			var num = $(this).index()
			$(".box").eq(num).slideDown(300).siblings(".box").slideUp(300);
				$(".box").eq(num).mouseenter(function(){
					$(".box").eq(num).css("display","block");
			});
		});
        $(".box").mouseleave(function () {
            $(".box").css("display","none")
        })
		$(".headertwo li").mouseleave(function () {
            $(".box").css("display","none")
        })
		
	});


	// 触发隐藏的二维码
	$(document).ready(function(){
		$(".erwei i:last-child").mouseenter(function(){
			$(".erweimabox").css({display:'block',boxShadow:'0 3px 3px gray',transition:'all 1s'});
		});
		$(".erwei i:last-child").mouseleave(function(){
			$(".erweimabox").css({display:'none'});
		});
	});
