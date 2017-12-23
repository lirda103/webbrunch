// JavaScript Document

$(function(){
	
	//導覽列按鈕
	$('.icon-th-list').click(function(){
		$('.nav-widthMAX ul').slideDown(500);
		$('.icon-th-list').hide();
		$('.icon-cancel').show();
	});
	$('.icon-cancel').click(function(){
		$('.nav-widthMAX ul').slideUp(500);
		$('.icon-cancel').hide();
		$('.icon-th-list').show();
	});

	//漢堡系列按鈕
	$('#hBTN').click(function (){
		$('html,body').animate({scrollTop:$('#hamburger').offset().top-30},1500,'easeOutElastic');
	});

	//三明治系列按鈕
	$('#sBTN').click(function (){
		$('html,body').animate({scrollTop:$('#sandwich').offset().top-30},1700,'easeOutBounce');
	});

	//超值系列按鈕
	$('#saleBTN').click(function (){
		$('html,body').animate({scrollTop:$('#sale').offset().top-30},1200,'easeOutBounce');
	});

	//TOP按鈕
	$('.top').click(function(){
		/*控制整個網頁頁面，屬性scrollTop可控制捲軸的位置*/
		$('html,body').animate({scrollTop:0},800,'easeOutBounce');
		/*使原本的HTML超連結失去效果，針對只讀取jQuery效果*/
		return false;
	});

	
	$(document).scroll(function(){
		var theTOP=$(window).scrollTop();
		if(theTOP>300){
			$('.top').stop().animate({opacity:'1'},1000);
		}
		if(theTOP<300){
			$('.top').stop().animate({opacity:'0'},1000);
		}
	});
});