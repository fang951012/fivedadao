$(function(){
//--------------------点击隐藏显示
	$(".click").click(function(){
	  $(".fixedone").hide(1000);
	  $(".fixe").show(1000);
	  
	});
	$('.fixe').click(function(){
	  $(".fixedone").show(1000);
	  $(".fixe").hide(1000);
	});
	
		
            //回到顶部
var speed = 800;//滚动速度

			var h=document.body.clientHeight;

			


            $(".fixedtwo5").click(function () {

			  	$('html,body').animate({

					scrollTop: '0px'
				},
				speed);			
            });
//省级联动
$("#sjld").sjld("#shenfen","#chengshi","#quyu");

//点击换边框
$('.le2').click(function(){
	$('.le2').css('border','1px solid red');
	$('.le').css('border','0');
})
$('.le').click(function(){
	$('.le').css('border','1px solid red');
	$('.le2').css('border','0');
})
});
