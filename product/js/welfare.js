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
/****************************center******************************/
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
