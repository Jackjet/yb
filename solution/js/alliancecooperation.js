/**
 * Created by qi on 2016/12/8.
 */
$(".sign").mouseenter(function(){
    $(".sign").attr("src","img/signbtn2.png");
});
$(".sign").mouseleave(function(){
    $(".sign").attr("src","img/signbtn.png");
});

/**********************************************************************/

//手机号码验证
function phoneValidate(o){
    var re=/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;
    if(!re.test(o)){
        return 5;
    }
    return 0;
}
//qq号码验证
function qqValidate(o){
    var re=/^\d{5,12}$/;
    if(!re.test(o)){
        return 4;
    }
    return 0;
}

function valiData()
{
	var name=$.trim($("#applyname").val());
	var applytel=$.trim($("#applytel").val());
	var applymessage=$.trim($("#applymessage").val());
	var applyqq=$.trim($("#applyqq").val());
	if(name==null || name==""){
		return 1;
	}else if(applytel==null || applytel==""){
		return 2;
	}else if(applymessage==null || applymessage==""){
		return 3;
	}
	if(applyqq!=null && applyqq!=""){
		if(qqValidate(applyqq)==4)
		{
			return 4;
		}
	}
	return phoneValidate(applytel);
}

function submit(){
	var num=valiData();
	if(num==1){
		alert("姓名不能为空");
		return;
	}else if(num==2){
		alert("手机号码不能为空");
		return;
	}else if(num==3){
		alert("留言不能为空");
		return;
	}else if(num==4){
		alert("qq号格式错误");
		return;
	}else if(num==5){
		alert("手机号码格式错误");
		return;
	}
	
	$("#form1").submit();
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





























