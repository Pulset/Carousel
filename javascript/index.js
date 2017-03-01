$(function(){
	//添加li
	var l=$('li').length;
	for (var i =1; i<=l; i++) {
		var li="<li>"+i+"</li>";
		$('.number').append(li);
	}

	var i=0;
	var next=function(){
		i++;
		if (i==l) {i=0}
		$('.number>li').eq(i).css('background','red').siblings().css('background','grey');
		$('.pic li').eq(i).stop().fadeIn(500).siblings().stop().fadeOut(500);
	};

	$('.pic li').eq(0).show();
	$('.number li').eq(0).css('background','red');

	$('.number>li').mouseover(function(){
		var index=$(this).index();
		i=index;
		$(this).css('background','red').siblings().css('background','grey');
		$('.pic li').eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
		 
	});

	//左右按钮
	$('.right').click(function () {
		next();
	});
	$('.left').click(function () {
		i--;
		if (i===-1) {i=l-1}
		$('.number>li').eq(i).css('background','red').siblings().css('background','grey');
		$('.pic li').eq(i).fadeIn(500).siblings().fadeOut(500);
	});

	//定时器
	var timer=setInterval(next,2000);
	$('.container').hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(next,2000);
	});
	
});