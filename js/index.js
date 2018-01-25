$(function(){
	$('#demo01').flexslider({
		animation: "slide",
		direction:"horizontal",
		easing:"swing"
	});
	$('#demo02').flexslider({
		animation: "slide",
		direction:"vertical",
		easing:"swing"
	});
	
	//-------------轮播2----------------------------
	$(document).ready(function(){
        var i=14;
        var page=1;
        var timer=null;
        var jqWidth=$('.a5').width();
        var page_last=Math.ceil($('.a6 ul li').length/i);

        //向右切换
        $('.next').click(function(){ 
            rightMove()
        });

        //向左切换
        $('.prev').click(function(){   
            if(page==1){
                $('.a6').animate({left:'-='+jqWidth*(page_last-1)},'1000');
                page=page_last;
            }else{
                $('.a6').animate({left:'+='+jqWidth},'1000');
                page--;
            };
            $('.a3 span').eq(page-1).addClass('one').siblings('span').removeClass('one');
        });

        
         //鼠标点击小图标的时候切换
         $('.a3 span').click(function(){
             $(this).addClass('one').siblings('span').removeClass('one');
             $('.a6').animate({left:-jqWidth*($('.a3 span').index(this))+'px'},'1000');
             page=$('.a3 span').index(this)+1;

         })

         //定义自动切换功能
         function move(){
             timer=setInterval(function(){
              rightMove();
             },100000);
         };
         move();
        
        //自动切换功能鼠标移入停止
        $('.a1').mouseover(function(){
            clearInterval(timer);
        });
        //自动切换功能鼠标移出开始
        $('.a1').mouseout(function(){
            move();
        });

        //向右移动函数
        function rightMove(){
            if(page==page_last){
                $('.a6').animate({left:'0px'},'1000')
                page=1;
            }else{
                $('.a6').animate({left:'-='+jqWidth},'1000')
                page++;
            };
            $('.a3 span').eq(page-3).addClass('one').siblings('span').removeClass('one');

            };
    });
    
    //--------------------------
    $.fn.tabso=function( options ){

	var opts=$.extend({},$.fn.tabso.defaults,options );
	
	return this.each(function(i){
		var _this=$(this);
		var $menus=_this.children( opts.menuChildSel );
		var $container=$( opts.cntSelect ).eq(i);
		
		if( !$container) return;
		
		if( opts.tabStyle=="move"||opts.tabStyle=="move-fade"||opts.tabStyle=="move-animate" ){
			var step=0;
			if( opts.direction=="left"){
				step=$container.children().children( opts.cntChildSel ).outerWidth(true);
			}else{
				step=$container.children().children( opts.cntChildSel ).outerHeight(true);
			}
		}
		
		if( opts.tabStyle=="move-animate" ){ var animateArgu=new Object();	}
			
		$menus[ opts.tabEvent]( function(){
			var index=$menus.index( $(this) );
			$( this).addClass( opts.onStyle )
				.siblings().removeClass( opts.onStyle );
			switch( opts.tabStyle ){
				case "fade":
					if( !($container.children( opts.cntChildSel ).eq( index ).is(":animated")) ){
						$container.children( opts.cntChildSel ).eq( index ).siblings().css( "display", "none")
							.end().stop( true, true ).fadeIn( opts.aniSpeed );
					}
					break;
				case "move":
					$container.children( opts.cntChildSel ).css(opts.direction,-step*index+"px");
					break;
				case "move-fade":
					if( $container.children( opts.cntChildSel ).css(opts.direction)==-step*index+"px" ) break;
					$container.children( opts.cntChildSel ).stop(true).css("opacity",0).css(opts.direction,-step*index+"px").animate( {"opacity":1},opts.aniSpeed );
					break;
				case "move-animate":
					animateArgu[opts.direction]=-step*index+"px";
					$container.children( opts.cntChildSel ).stop(true).animate( animateArgu,opts.aniSpeed,opts.aniMethod );
					break;
				default:
					$container.children( opts.cntChildSel ).eq( index ).css( "display", "block")
						.siblings().css( "display","none" );
			}
	
		});
		
		$menus.eq(0)[ opts.tabEvent ]();
		
	});
};	

$.fn.tabso.defaults={
	cntSelect : ".content_wrap",
	tabEvent : "mouseover",
	tabStyle : "normal",
	direction : "top",
	aniMethod : "swing",
	aniSpeed : "fast",
	onStyle : "current",
	menuChildSel : "*",
	cntChildSel : "*"
};
$("#move-animate-left").tabso({

		cntSelect:"#leftcon",

		tabEvent:"mouseover",

		tabStyle:"move-animate",

		direction : "left"

	});
//-----------------------------------------
$.fn.Slider = function(options) {
  "use strict";

  var settings = $.extend({
    isAuto: true,
    transTime: 4000,
    animateSpeed: 1000,  
    sliderMode: 'slide', //'slide | fade',
    pointerControl: true,
    pointerEvent: 'click',//'hover' | 'click',
    arrowControl: true,
  }, options);
  var interval;
  var isAnimating     = false;
  var $slider         = $(this);
  var $sliderWrap     = $slider.find('.slider-inner');
  var sliderCount     = $sliderWrap.find('> .item').length;
  var sliderWidth     = $slider.width();
  var currentIndex    = 0;

  var sliderFun = {
    controlInit: function() {
      // pointerControl
      if (settings.pointerControl) {
        
        var html = '';
        html += '<ol class="slider-pointer">';
        for (var i = 0; i < sliderCount; i++) {
          if (i == 0) {
            html += '<li class="active"></li>'
          }else{
            html += '<li></li>'
          }
        }
        html += '</ol>'
        $slider.append(html);
          // 指示器居中
        var $pointer = $slider.find('.slider-pointer');
        $pointer.css({
          left: '50%',
          marginLeft: - $pointer.width()/2
        });
      }
      // pointerControl
      if (settings.arrowControl) {
        var html = "";
        html += '<span class="slider-control prev">&lt;</span>';
        html += '<span class="slider-control next">&gt;</span>'
        $slider.append(html);
      }
      $slider.on('click', '.slider-control.prev', function(event) {
        sliderFun.toggleSlide('prev');
      });
      $slider.on('click', '.slider-control.next', function(event) {
        sliderFun.toggleSlide('next');
      });
    },
    // slider
    sliderInit: function() {
      sliderFun.controlInit();
      // 模式选择
      if (settings.sliderMode == 'slide') {
        // slide 模式
        $sliderWrap.width(sliderWidth * sliderCount);
        $sliderWrap.children().width(sliderWidth);
      }else{
        // mode 模式
        $sliderWrap.children().css({
          'position': 'absolute',
          'left': 0,
          'top': 0
        });
        $sliderWrap.children().first().siblings().hide();
      }
      // 控制事件
      if (settings.pointerEvent == 'hover') {
        $slider.find('.slider-pointer > li').mouseenter(function(event) {
          sliderFun.sliderPlay($(this).index());
        });
      }else{
        $slider.find('.slider-pointer > li').click(function(event) {
          if (currentIndex != $(this).index()) {
				sliderFun.sliderPlay($(this).index())
			}
        });
      }
      // 自动播放
      sliderFun.autoPlay();
    },
    // slidePlay
    sliderPlay: function(index) {
      sliderFun.stop();
      isAnimating = true;
      $sliderWrap.children().first().stop(true, true);
      $sliderWrap.children().stop(true, true);
      $slider.find('.slider-pointer').children()
        .eq(index).addClass('active')
        .siblings().removeClass('active');
      if (settings.sliderMode == "slide") {
        // slide
        if (index > currentIndex) {
          $sliderWrap.animate({
        left: '-=' + Math.abs(index - currentIndex) * sliderWidth + 'px'
    }, settings.animateSpeed, function() {
        sliderFun.stop();
        isAnimating = false;
        sliderFun.autoPlay()
    });
        } else if (index < currentIndex) {
          $sliderWrap.animate({
            left: '+=' + Math.abs(index - currentIndex) * sliderWidth + 'px'
          }, settings.animateSpeed, function() {
            isAnimating = false;
            sliderFun.autoPlay();
          });
        } else {
          return;
        }
      }else{
        // fade
        if ($sliderWrap.children(':visible').index() == index) return;
        $sliderWrap.children().fadeOut(settings.animateSpeed)
          .eq(index).fadeIn(settings.animateSpeed, function() {
            isAnimating = false;
            sliderFun.autoPlay();
          });
      }
      currentIndex = index;
    },
    // toggleSlide
    toggleSlide: function(arrow) {
      if (isAnimating) {
        return;
      }
      var index;
      if (arrow == 'prev') {
        index = (currentIndex == 0) ? sliderCount - 1 : currentIndex - 1;
        sliderFun.sliderPlay(index);
      }else if(arrow =='next'){
        index = (currentIndex == sliderCount - 1) ? 0 : currentIndex + 1;
        sliderFun.sliderPlay(index);
      }
    },
    // autoPlay
    autoPlay: function() {
      if (settings.isAuto) {
        interval = setInterval(function () {
          var index = currentIndex;
          (currentIndex == sliderCount - 1) ? index = 0: index = currentIndex + 1;
          sliderFun.sliderPlay(index);
        }, settings.transTime);
      }else{
        return;
      }
    },
    //stop
    stop: function() {
      clearInterval(interval);
    },
  };
  sliderFun.sliderInit();
}
jQuery(document).ready(function($) {
  $('#slider').Slider();
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
	
		
            //回到顶部
var speed = 800;//滚动速度

			var h=document.body.clientHeight;

			


            $(".fixedtwo5").click(function () {

			  	$('html,body').animate({

					scrollTop: '0px'
				},
				speed);			
            });
});

