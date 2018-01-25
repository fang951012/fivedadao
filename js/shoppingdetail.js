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
            
//放大镜
var magnifierConfig = {
		magnifier : "#magnifier1",//最外层的大容器
		width : 500,//承载容器宽
		height : 500,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 5//缩放比例
	};

	var _magnifier = magnifier(magnifierConfig);

	/*magnifier的内置函数调用*/
	/*
		//设置magnifier函数的index属性
		_magnifier.setIndex(1);

		//重新载入主图,根据magnifier函数的index属性
		_magnifier.eqImg();
	*/
	//-----------------显示隐藏
		$(".click").click(function(){
	  $(".fixedone").hide(1000);
	  $(".fixe").show(1000);
	  
	});
	$('.fixe').click(function(){
	  $(".fixedone").show(1000);
	  $(".fixe").hide(1000);
	});
//---------------------------------加减
var aCount = document.getElementById('ent').value;

        $('.co2').click(function(){
		aCount++;
		
		if (aCount <= 1){
			aCount=1;
		}
		document.getElementById('ent').value = aCount;
	})
	
	$('.co').click(function(){
		aCount--;
		if (aCount <= 1){
			aCount=1;
		}
		document.getElementById('ent').value = aCount;
	});
	//------------选项卡
	 $('#menu li').bind('click', function () {
            let iIndex = $(this).index();
            $('#menu li').removeClass('active').eq(iIndex).addClass('active');
            $('.right').css('display', 'none').eq(iIndex).css({display: 'block'});
        });
        //---------------吸顶
    window.onscroll=function(){
	if($(window).scrollTop()>780){
		$('.five-wrap').css('position','fixed');
		$('.five-wrap').css('top','0');
		$('.five-wrap').css('z-index','99999');
		}else if($(window).scrollTop()<780){
			$(".five-wrap").removeClass("fixed-top-show");
			$('.five-wrap').css('position','relative');
		}
	};
	//cookie
	 $('#cli').bind('click', function () {
           let arr=[];
			arr.push({
				imgurl:'images/153.jpg',
				name:'棕色皮带白色表盘男士针扣石英腕表 DW0211',
				shuxing:'棕色系,男款',
				xiaoji:1452.00,
				danjia:1452.00,
				zongjia:1452.00,
				shanchu:'删除'
			})
			document.cookie="shop="+JSON.stringify(arr);
       });
});