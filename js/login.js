$(function(){
//回到顶部
var speed = 800;//滚动速度
			var h=document.body.clientHeight;
            $(".fixedtwo5").click(function () {
			  	$('html,body').animate({
					scrollTop: '0px'
				},
				speed);			
            });
 //--------------------点击隐藏显示
	$(".click").click(function(){
	  $(".fixedone").hide(1000);
	  $(".fixe").show(1000);
	  
	});
	$('.fixe').click(function(){
	  $(".fixedone").show(1000);
	  $(".fixe").hide(1000);
	});
//正则验证
	// user
var user_Boolean = false;
var password_Boolean = false;
var varconfirm_Boolean = false;
var emaile_Boolean = false;
var Mobile_Boolean = false;
// password
$('.reg_password').blur(function(){
  if ((/^[a-z0-9_-]{6,16}$/).test($(".reg_password").val())){
    $('.password_hint').html("").css("color","green");
    password_Boolean = true;
  }else {
    $('.password_hint').html("请输入正确的密码").css("color","red");
    password_Boolean = false;
  }
});

// Mobile
$('.reg_mobile').blur(function(){
  if ((/^1[34578]\d{9}$/).test($(".reg_mobile").val())){
    $('.mobile_hint').html("").css("color","green");
    Mobile_Boolean = true;
  }else {
    $('.mobile_hint').html("请输入正确的手机号码").css("color","red");
    Mobile_Boolean = false;
  }
});
//-----------------------选项卡
$('#menu li').bind('click', function () {
            let iIndex = $(this).index();
            $('#menu li').removeClass('active').eq(iIndex).addClass('active');
            $('.login1-1').css('display', 'none').eq(iIndex).css({display: 'block'});
        });
});

