function getWidthCom(){
	if(document.body.clientWidth==0){
		return document.documentElement.clientWidth;
	}
	return document.body.clientWidth;
}
function getHeightCom(){
	if(document.body.clientHeight==0){
		return document.documentElement.clientHeight;
	}
	return document.body.clientHeight;
}
var bodyWidthCom = getWidthCom();
var bodyHeightCom = getHeightCom();
/********************************************↓悬浮窗********************************************/
var suspensionWindowH=$("#suspensionWindow").height();
var screenHeight=screen.height;

$(".suspension1").mouseenter(function(){
    $(".suspension1").attr("src","img/qq3.png");
});
$(".suspension1").click(function(){
    $("#lijizhixun").trigger("click");//模拟执行id=a的事件
});
$(".suspension1").mouseleave(function(){
    $(".suspension1").attr("src","img/qq2.png");
});
$(".suspension2").mouseenter(function(){
    $(".suspension2").attr("src","img/sao.png");
    $(".suspension4").css("display","block");
});
$(".suspension2").mouseleave(function(){
    $(".suspension2").attr("src","img/sao2.png");
    $(".suspension4").css("display","none");
});

$(".suspension3").mouseenter(function(){
    $(".suspension3").attr("src","img/top2.png");
});
$(".suspension3").mouseleave(function(){
    $(".suspension3").attr("src","img/top.png");
});

var myScrollTop=function() //获得当前窗口显示区顶点位置
{
    return document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
};
var kefuTop=(screenHeight-suspensionWindowH)/2;
function mymovemenu() // 随着窗口的拉动，实时调整广告在窗口中的位置
{
    /*$("#da").html(myScrollTop());*/
    if(myScrollTop()>0)
    {
        $(".suspension3").css("display","block");
    }else{
        $(".suspension3").css("display","none");
    }
    document.getElementById("suspensionWindow").style.top=myScrollTop()+kefuTop+'px';
    setTimeout("mymovemenu();",10);
}
//返回顶部
$(".suspension3").click(function () {
    var speed=200;//滑动的速度
    $('body,html').animate({ scrollTop: 0 }, speed);
    return false;
});
mymovemenu();
/********************************************↑悬浮窗********************************************/
