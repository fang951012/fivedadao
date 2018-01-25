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
	//----------------------------------
	var data=JSON.parse(document.cookie.split('=')[1])[0];
	$('#buycarname').html(data.name);
	$('#buycarimg').attr("src",data.imgurl);
	$('#buycardanjia').html(data.danjia);
	$('#zongjia').html(data.zongjia);
	$('#shuxing').html(data.shuxing);
	$('#zong').html(data.zongjia);
	$('#pat').html(data.shanchu);
	//加减
	
	var aCount = document.getElementById('Center').value;

        $('#Right').click(function(){
		aCount++;
		
		if (aCount <= 1){
			aCount=1;
		}
		document.getElementById('Center').value = aCount;
		setTotal();  
	})
	
	$('#Left').click(function(){
		aCount--;
		if (aCount <= 1){
			aCount=1;
		}
		document.getElementById('Center').value = aCount;
		setTotal();  
	});
	

	$('#zongjia')
	$('#zong')
	function setTotal(){
		var s = 0;
		$('#list').each(function(){
			var d = $(this).find('#buycardanjia').text();//单价
			var n = $(this).find('#Center').val();//数量
			if(parseInt(d)=='' || undefined || null || isNaN(d) || isNaN(parseInt(n))){
				d = 0;
			}
			s += parseInt(d) * parseFloat(n);
		});
		$('#zong').html(s.toFixed(1));
		$('#list1').each(function(){
			var d = $(this).find('#buycardanjia').text();//单价
			var n = $(this).find('#Center').val();//数量
			if(parseInt(d)=='' || undefined || null || isNaN(d) || isNaN(parseInt(n))){
				d = 0;
			}
			s += parseInt(d) * parseFloat(n);
		});
		$('#zongjia').html(s.toFixed(2));
	}
	
	//删除
//	$('#pat').click(function(){
//		$('#list').css('display','none');
//	}
	
});