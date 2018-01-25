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
});