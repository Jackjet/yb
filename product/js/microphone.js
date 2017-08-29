/********************************************↓顶部********************************************/
/*******************导航js************************/

$("#daohang1").mouseenter(function(){
    $("#daohang1").css({
    	"border":"0px"
    });
});
$("#daohang1").mouseleave(function(){
    $("#daohang1").css({
    	"border-bottom":"1px solid white"
    });
});
//登录效果
$(".sign").mouseenter(function(){
    $(".sign").attr("src","img/signbtn2.png")
});
$(".sign").mouseleave(function(){
    $(".sign").attr("src","img/signbtn.png")
});
/********************************************↑顶部********************************************/
/****************************center******************************/
/**
 * 鼠标经过时调用
 * @param {Object} packageId 套餐ID
 */
function changeBuyStyle(packageId){
	$("#microphone_buy_head_jingdian").removeClass();
	$("#microphone_buy_head_huangjin").removeClass();
	$("#microphone_buy_head_zuanshi").removeClass();
	$("#microphone_buy_body_jingdian").removeClass();
	$("#microphone_buy_body_huangjin").removeClass();
	$("#microphone_buy_body_zuanshi").removeClass();
	$("#microphone_buy_body_line_jingdian").removeClass();
	$("#microphone_buy_body_line_huangjin").removeClass();
	$("#microphone_buy_body_line_zuanshi").removeClass();
	switch (packageId) {
		case 1:
		 $("#microphone_buy_head_jingdian").addClass("microphone_buy_head_focus");
		 $("#microphone_buy_head_huangjin").addClass("microphone_buy_head");
		 $("#microphone_buy_head_zuanshi").addClass("microphone_buy_head");
		 $("#microphone_buy_body_jingdian").addClass("microphone_buy_body_focus");
		 $("#microphone_buy_body_huangjin").addClass("microphone_buy_body");
		 $("#microphone_buy_body_zuanshi").addClass("microphone_buy_body");
		 $("#microphone_buy_body_line_jingdian").addClass("microphone_buy_body_line_focus");
		 $("#microphone_buy_body_line_huangjin").addClass("microphone_buy_body_line");
		 $("#microphone_buy_body_line_zuanshi").addClass("microphone_buy_body_line");
		break;
		case 2:
		 $("#microphone_buy_head_jingdian").addClass("microphone_buy_head");
		 $("#microphone_buy_head_huangjin").addClass("microphone_buy_head_focus");
		 $("#microphone_buy_head_zuanshi").addClass("microphone_buy_head");
		 $("#microphone_buy_body_jingdian").addClass("microphone_buy_body");
		 $("#microphone_buy_body_huangjin").addClass("microphone_buy_body_focus");
		 $("#microphone_buy_body_zuanshi").addClass("microphone_buy_body");
		 $("#microphone_buy_body_line_jingdian").addClass("microphone_buy_body_line");
		 $("#microphone_buy_body_line_huangjin").addClass("microphone_buy_body_line_focus");
		 $("#microphone_buy_body_line_zuanshi").addClass("microphone_buy_body_line");
		break;
		case 3:
		 $("#microphone_buy_head_jingdian").addClass("microphone_buy_head");
		 $("#microphone_buy_head_huangjin").addClass("microphone_buy_head");
		 $("#microphone_buy_head_zuanshi").addClass("microphone_buy_head_focus");
		 $("#microphone_buy_body_jingdian").addClass("microphone_buy_body");
		 $("#microphone_buy_body_huangjin").addClass("microphone_buy_body");
		 $("#microphone_buy_body_zuanshi").addClass("microphone_buy_body_focus");
		 $("#microphone_buy_body_line_jingdian").addClass("microphone_buy_body_line");
		 $("#microphone_buy_body_line_huangjin").addClass("microphone_buy_body_line");
		 $("#microphone_buy_body_line_zuanshi").addClass("microphone_buy_body_line_focus");
		break;
	}
	$(".microphone_buy_head").css({
		"width":"330px",
		"height":"73px",
		"background":"url(img/microphone_buy_head_gray.png) center no-repeat",
		"text-align":"center",
		"line-height":"73px",
		"font-size":"18px",
		"color":"#FEFFFD",
		"border-top-right-radius":"0px",
		"border-top-left-radius":"0px",
		"margin-top":"40px"
	});
	$(".microphone_buy_head_focus").css({
		"width":"330px",
		"height":"113px",
		"background":"url(img/microphone_buy_head_blue.png) center no-repeat",
		"text-align":"center",
		"line-height":"113px",
		"font-size":"25px",
		"color":"#FEFFFD",
		"border-top-right-radius":"5px",
		"border-top-left-radius":"5px",
		"margin-top":"0px"
	});
	$(".microphone_buy_body").css({
		"width":"330px",
		"height":"548px",
		"background-color":"#F2F3F8",
		"text-align":"center",
		"border":"0px solid #2E9FE5",
		"border-bottom-right-radius":"0px",
		"border-bottom-left-radius":"0px"
	});
	$(".microphone_buy_body_focus").css({
		"width":"328px",
		"height":"578px",
		"background-color":"#F2F3F8",
		"text-align":"center",
		"border":"1px solid #2E9FE5",
		"border-top":"0px",
		"border-bottom-right-radius":"5px",
		"border-bottom-left-radius":"5px"
		
	});
	$(".microphone_buy_body_focus img").attr('src',"img/microphone_buy_btn_b.png");
	$(".microphone_buy_body_focus img").css({
		"width":"148px",
		"height":"50px",
		"margin-top":"37px"
	});
	$(".microphone_buy_body_line_focus").css({
		"width":"328px",
		"height":"1px",
		"background-color":"#42A8E8",
		"margin-top":"30px",
		"margin-right":"0px",
		"margin-left":"0px"
	});
	$(".microphone_buy_body_span").css({
		"color":"#494C53",
		"display":"block",
		"padding-top":"105px",
		"font-size":"25px"
	});
	$(".microphone_buy_body_sup").css({
		"font-size":"25px"
	});
	$(".microphone_buy_body_bold").css({
		"font-size":"40px"
	});
	$(".microphone_buy_body img").attr('src',"img/microphone_buy_btn.png");
	$(".microphone_buy_body img").css({
		"margin-top":"37px",
		"cursor":"pointer"
	});
	$(".microphone_buy_body_line").css({
		"width":"250px",
		"height":"1px",
		"background-color":"#E3E6ED",
		"margin-top":"30px",
		"margin-right":"40px",
		"margin-left":"40px"
	});
	$(".microphone_buy_body_desc").css({
		"color":"#818C9E",
		"margin-top":"40px",
		"background":"rgba(0,0,0,0)",
		"font-family": "微软雅黑",
		"font-size":"15px"
	});
}
changeBuyStyle(2);
/**
 * 立即咨询
 */
BizQQWPA.addCustom({aty: '0', a: '0', nameAccount: 800153166, selector: 'lijizhixun'});
function customer(){
	$("#lijizhixun").trigger("click");//模拟执行id=a的事件
}


$(function(){

//吸顶导航
    $(window).scroll(function(){
       if($(window).scrollTop()>=100){
            $('.top-title').css({'position':'fixed','top':'0px','background':'rgba(0,0,0,0.6)'})
        }else{
            $('.top-title').css({'position':'absolute','top':'0px','background':'transparent'});
        }
    });


// 更多
    $('#more').click(function(){
        $('.more-show').toggle();
    });

});
