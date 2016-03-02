xfg(function(){
	/**
	 * 导航更多
	xfg(".xfg_subnav").find("span.more").click(function(){
		if(xfg(this).attr('data')&&xfg(this).attr('data')=='on'){
			xfg(this).removeAttr('data').css("background-image","url(images/icon_2.png)");
			xfg(this).parents(".xfg_subnav").find("div.i").hide(300);
		}else{
			xfg(this).attr('data','on').css("background-image","url(images/icon_4.png)");
			xfg(this).parents(".xfg_subnav").find("div.i").show(300);
		}
	});*/
	
	//返回顶部
	xfg("#backtop .totop").click(function(){
		if(xfg.browser.version != "6.0") { 
			xfg("body,html").animate({scrollTop:0},1000);
			return false;
		}
	});

	//二维码
	xfg("#backtop .ewm").hover(function(){
		if(!xfg("#wxBox").is(":animated")){
			xfg("#wxBox").fadeIn(1000);
		}
	},function(){
		xfg("#wxBox").fadeOut(300);
	});
});