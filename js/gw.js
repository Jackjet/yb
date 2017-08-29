
$(document).ready(function(){


   /*轮播图*/ 
    var mySwiper = new Swiper('.swiper-container',{
        pagination: '.pagination',
        loop:true,
        autoplay: 3000,//自动滑动
        grabCursor: true,
        paginationClickable: true // 分页器点击切换
      })
      $('.arrow-left').on('click', function(e){
        e.preventDefault()
        mySwiper.swipePrev()
      })
      $('.arrow-right').on('click', function(e){
        e.preventDefault()
        mySwiper.swipeNext()
      });


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



/************************特效**********************/
//登录效果
$(".sign").mouseenter(function(){
    $(".sign").attr("src","img/signbtn2.png");
});
$(".sign").mouseleave(function(){
    $(".sign").attr("src","img/signbtn.png");
});
//产品中心鼠标经过效果
$(".product-img1").mouseenter(function(){
    $(".product-img1").attr("src","img/phone2.png");
});
$(".product-img2").mouseenter(function(){
    $(".product-img2").attr("src","img/redpacket2.png");
});
$(".product-img3").mouseenter(function(){
    $(".product-img3").attr("src","img/api2.jpg");
});
$(".product-img4").mouseenter(function(){
    $(".product-img4").attr("src","img/OEM2.png");
});

$(".product-img1").mouseleave(function(){
    $(".product-img1").attr("src","img/phone.png");
});
$(".product-img2").mouseleave(function(){
    $(".product-img2").attr("src","img/redpacket.png");
});
$(".product-img3").mouseleave(function(){
    $(".product-img3").attr("src","img/api.png");
});
$(".product-img4").mouseleave(function(){
    $(".product-img4").attr("src","img/OEM.png");
});

//解决方案鼠标经过效果
$("#solutionCase1").mouseenter(function(){
    $("#btnimg1").attr("src","img/detail2.png");
});
$("#solutionCase2").mouseenter(function(){
    $("#btnimg2").attr("src","img/detail2.png");
});
$("#solutionCase3").mouseenter(function(){
    $("#btnimg3").attr("src","img/detail2.png");
});

$("#solutionCase1").mouseleave (function(){
    $("#btnimg1").attr("src","img/detail.png");
});
$("#solutionCase2").mouseleave (function(){
    $("#btnimg2").attr("src","img/detail.png");
});
$("#solutionCase3").mouseleave (function(){
    $("#btnimg3").attr("src","img/detail.png");
});



//合作案例鼠标经过效果
$('.case-show li').hover(function(){
    $(this).children('.wchat').show();
},function(){
    $(this).children('.wchat').hide();
});





