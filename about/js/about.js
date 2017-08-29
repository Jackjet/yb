/*******************导航js************************/
//登录效果
$(".sign").mouseenter(function(){
    $(".sign").attr("src","../img/signbtn2.png")
});
$(".sign").mouseleave(function(){
    $(".sign").attr("src","../img/signbtn.png")
});

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