// JavaScript Document
/*NEW2*/function parseGetParams(){var $_GET={};var __GET=window.location.search.substring(1).split("&");for(var i=0;i<__GET.length;i++){var getVar=__GET[i].split("=");$_GET[getVar[0]]=typeof(getVar[1])=="undefined"?"":getVar[1];}return $_GET;}
var GET = parseGetParams()
jQuery(window).load(function(e) {
	/*NEW2*/
	var countdown_layout = "", graf_label1, graf_label2;
	var endTime = new Date(2018,04,31);
    var myChart    
	if (GET['lang'] == "it" || GET['lang'] == "es" || GET['lang'] == "pt" || GET['lang'] == "fr" || GET['lang'] == "de" || GET['lang'] == "ch" || GET['lang'] == "id" || GET['lang'] == "hi" || GET['lang'] == "jp" || GET['lang'] == "en"){
		var file = 'lang/'+GET['lang']+'_lang.xml';
		var xhr;
		xhr=new XMLHttpRequest();
		xhr.open('GET', file, true);
		xhr.send();
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300){
				var xml = xhr.responseXML;
				jQuery(".lang_bl select").val(GET['lang']);
				jQuery(".lang_bl select").styler();
				jQuery(".head_desc").html(jQuery(xml).find("headDescription").html());
				jQuery(".sect_top h1").html(jQuery(xml).find("topTitle").html());
				jQuery(".sect_top h1+p").html(jQuery(xml).find("topText").html());
				jQuery(".sect_top .link a").html(jQuery(xml).find("topLink").html());
				jQuery(".sect_top .timer_wrap .name").html(jQuery(xml).find("topCountdownName").html());
				countdown_layout = jQuery(xml).find("topCountdown").html();
				jQuery(".sect_top .top_trigger_wrap .trigger_bl1").html(jQuery(xml).find("topTrigger1").html());
				jQuery(".sect_top .top_trigger_wrap .trigger_bl2").html(jQuery(xml).find("topTrigger2").html());
				jQuery(".sect_top .top_trigger_wrap .trigger_bl3").html(jQuery(xml).find("topTrigger3").html());
				jQuery(".sect_new_resource h2").html(jQuery(xml).find("newResourceTitle").html());
				jQuery(".sect_info h2").html(jQuery(xml).find("infoTitle").html());
				jQuery(".sect_info .info_bl1 h3").html(jQuery(xml).find("infoArt1Name").html());
				jQuery(".sect_info .info_bl1 .text").html(jQuery(xml).find("infoArt1Text").html());
				jQuery(".sect_info .info_bl2 h3").html(jQuery(xml).find("infoArt2Name").html());
				jQuery(".sect_info .info_bl2 .text").html(jQuery(xml).find("infoArt2Text").html());
				jQuery(".sect_info .link a").html(jQuery(xml).find("infoLink").html());
				jQuery(".sect_trade h2").html(jQuery(xml).find("tradeTitle").html());
				jQuery(".sect_trade .trade_bl1 h3").html(jQuery(xml).find("tradeArt1Name").html());
				jQuery(".sect_trade .trade_bl1 .text").html(jQuery(xml).find("tradeArt1Text").html());
				jQuery(".sect_trade .trade_bl2 h3").html(jQuery(xml).find("tradeArt2Name").html());
				jQuery(".sect_trade .trade_bl2 .text").html(jQuery(xml).find("tradeArt2Text").html());
				jQuery(".sect_trade .trade_bl3 h3").html(jQuery(xml).find("tradeArt3Name").html());
				jQuery(".sect_trade .trade_bl3 .text").html(jQuery(xml).find("tradeArt3Text").html());
				jQuery(".sect_trade .trade_bl4 h3").html(jQuery(xml).find("tradeArt4Name").html());
				jQuery(".sect_trade .trade_bl4 .text").html(jQuery(xml).find("tradeArt4Text").html());
				jQuery(".article_wrap1 h2").html(jQuery(xml).find("artArt1Title").html());
				jQuery(".article_wrap1 .text").html(jQuery(xml).find("artArt1Text").html());
				jQuery(".article_wrap1 .list").html(jQuery(xml).find("artArt1List").html());
				jQuery(".article_wrap2 h2").html(jQuery(xml).find("artArt2Title").html());
				jQuery(".article_wrap2 .list").html(jQuery(xml).find("artArt2List").html());
				jQuery(".article_wrap3 h2").html(jQuery(xml).find("artArt3Title").html());
				jQuery(".article_wrap3 .list").html(jQuery(xml).find("artArt3List").html());
				jQuery(".sect_calc h2").html(jQuery(xml).find("calcTitle").html());
				jQuery(".sect_calc .list").html(jQuery(xml).find("calcList").html());
				jQuery(".sect_calc h3").html(jQuery(xml).find("calcTitle2").html());
				jQuery(".sect_calc .slider_res .lab").html(jQuery(xml).find("calcLabelRes").html());
				jQuery(".sect_calc .slider_res .num_bl .text").html(jQuery(xml).find("calcTextRes").html());
				jQuery(".sect_calc .slider_day .lab").html(jQuery(xml).find("calcLabelDay").html());
				jQuery(".sect_calc .slider_day .num_bl .text").html(jQuery(xml).find("calcTextDay").html());
				jQuery(".sect_calc .result_bl").html(jQuery(xml).find("calcResultText").html());
				jQuery(".sect_calc .link a").html(jQuery(xml).find("calcLink").html());
				jQuery(".sect_graf h2").html(jQuery(xml).find("grafTitle").html());
				jQuery(".sect_graf .subtitle").html(jQuery(xml).find("grafSubtitle").html());
				graf_label1 = jQuery(xml).find("grafLabel1").html();
				graf_label2 = jQuery(xml).find("grafLabel2").html();
				jQuery(".sect_graf .link a").html(jQuery(xml).find("grafLink").html());
				jQuery(".sect_work h2").html(jQuery(xml).find("workTitle").html());
				jQuery(".sect_work .work_bl1 .text").html(jQuery(xml).find("workText1").html());
				jQuery(".sect_work .work_bl1 .hide_bl").html(jQuery(xml).find("workHideText1").html());
				jQuery(".sect_work .work_bl2 .text").html(jQuery(xml).find("workText2").html());
				jQuery(".sect_work .work_bl2 .hide_bl").html(jQuery(xml).find("workHideText2").html());
				jQuery(".sect_work .work_bl3 .text").html(jQuery(xml).find("workText3").html());
				jQuery(".sect_work .work_bl3 .hide_bl").html(jQuery(xml).find("workHideText3").html());
				jQuery(".sect_work .work_bl .more_info span").each(function(index, element) {
                    jQuery(this).html(jQuery(xml).find("workHideLink").html());
                });
				jQuery(".sect_map h2").html(jQuery(xml).find("mapTitle").html());
				jQuery(".sect_social h2").html(jQuery(xml).find("socTitle").html());
				jQuery(".sect_social .social_bl1 .text").html(jQuery(xml).find("socText1").html());
				jQuery(".sect_social .social_bl2 .text").html(jQuery(xml).find("socText2").html());
				jQuery(".sect_social .social_bl3 .text").html(jQuery(xml).find("socText3").html());
				jQuery(".sect_social .social_bl4 .text").html(jQuery(xml).find("socText4").html());
				jQuery("#footer .footer_desc").html(jQuery(xml).find("footerDescription").html());
				jQuery(".map_ico .ico1 img").attr("src","pic/maps/"+GET['lang']+"/rus.png");
				jQuery(".map_ico .ico2 img").attr("src","pic/maps/"+GET['lang']+"/kaz.png");
				jQuery(".map_ico .ico3 img").attr("src","pic/maps/"+GET['lang']+"/usa.png");
				jQuery(".map_ico .ico4 img").attr("src","pic/maps/"+GET['lang']+"/china.png");
				jQuery(".map_ico .ico5 img").attr("src","pic/maps/"+GET['lang']+"/india.png");
				jQuery(".map_ico .ico6 img").attr("src","pic/maps/"+GET['lang']+"/aus.png");
				
				
				jQuery("body").removeClass("loaded");
				jQuery(".loader_wrap").stop().fadeTo(500,0).slideUp(0);
				jQuery(".timer_wrap").addClass("play");
				jQuery(".countdown").countdown({
					until: endTime, 
					format: 'DHMS',
					layout: countdown_layout
				});
				var ctx = document.getElementById("myChart").getContext('2d');
				myChart = new Chart(ctx, {
					type: 'line',
					data: {
						labels: ["1","2","...","64","128","...","1024","2 097 152","...", "4 294 967 296"],
						datasets: [{
							label: graf_label1,
							data: [1, 2, 3, 4, 8, 12, 16, 24, 28, 32],
							backgroundColor: [
								'rgba(255,248,126, 0.2)',
							],
							borderColor: [
								'rgba(255,248,126, 1)',
							],
							borderWidth:2,
						},{
							label: graf_label2,
							data: [10.31, 10.62, 10.93, 11.25, 12.5, 13.75, 15, 17.5, 18.75, 20],
							backgroundColor: [
								'rgba(197,108,214, 0.2)',
							],
							borderColor: [
								'rgba(197,108,214, 1)',
							],
							borderWidth:2
						}]
					},
					options: {
						legend:{
							labels:{
								fontColor:"#fff",
							}
						},
						scales: {
							xAxes: [{
								ticks: {
									fontColor:"#fff"
								},
								gridLines:{
									color:'rgba(255,255,255,0.1)'
								}
							}],
							yAxes: [{
								ticks: {
									fontColor:"#fff"
								},
								gridLines:{
									color:'rgba(255,255,255,0.1)'
								}
							}]
						}
					}
				});
				xhr.abort();
			}
		}
	}else{
		jQuery(".lang_bl select").val("ru");
		jQuery(".lang_bl select").styler();
		jQuery("body").removeClass("loaded");
		jQuery(".loader_wrap").stop().fadeTo(500,0).slideUp(0);
		countdown_layout = '<div class="cd_bl days"><div class="num">{dnn}</div><div class="text">День</div></div><div class="cd_bl hour"><div class="num">{hnn}</div><div class="text">часов</div></div><div class="cd_bl min"><div class="num">{mnn}</div><div class="text">минут</div></div><div class="cd_bl sec"><div class="num">{snn}</div><div class="text">секунд</div></div>';
		graf_label1 = 'Количество утилизированных ресурсов за 32 дня';
		graf_label2 = 'Стоимость 10 000 ресурсов';
		jQuery(".timer_wrap").addClass("play");
		jQuery(".countdown").countdown({
			until: endTime, 
			format: 'DHMS',
			layout: countdown_layout
		});
		var ctx = document.getElementById("myChart").getContext('2d');
		myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: ["1","2","...","64","128","...","1024","2 097 152","...", "4 294 967 296"],
				datasets: [{
					label: graf_label1,
					data: [1, 2, 3, 4, 8, 12, 16, 24, 28, 32],
					backgroundColor: [
						'rgba(255,248,126, 0.2)',
					],
					borderColor: [
						'rgba(255,248,126, 1)',
					],
					borderWidth:2,
				},{
					label: graf_label2,
					data: [10.31, 10.62, 10.93, 11.25, 12.5, 13.75, 15, 17.5, 18.75, 20],
					backgroundColor: [
						'rgba(197,108,214, 0.2)',
					],
					borderColor: [
						'rgba(197,108,214, 1)',
					],
					borderWidth:2
				}]
			},
			options: {
				legend:{
					labels:{
						fontColor:"#fff",
					}
				},
				scales: {
					xAxes: [{
						ticks: {
							fontColor:"#fff"
						},
						gridLines:{
							color:'rgba(255,255,255,0.1)'
						}
					}],
					yAxes: [{
						ticks: {
							fontColor:"#fff"
						},
						gridLines:{
							color:'rgba(255,255,255,0.1)'
						}
					}]
				}
			}
		});
	}
		
		
		
		
	
	
	
	
	if(jQuery("#site").width()>991){
		jQuery(".top_parallax").parallax();
		jQuery(".info_parallax").parallax();
		jQuery(".calc_parallax").parallax();
		jQuery(".map_parallax").parallax();
	}
	
	jQuery(".popup_open").click(function(){
		var h = jQuery("#site").height();
		var obj = ".popup_wrapper>."+jQuery(this).attr("href");
		jQuery(".popup_bg").css({"display":"block","height":h}).animate({opacity:1},200);
		jQuery(obj).css({"display":"block"});
		var ih = jQuery(window).innerHeight();
		var wh = jQuery(obj).outerHeight();
		var wt = (ih-wh)/2;
		var st = jQuery(document).scrollTop();
		if(wt<40){wt=40};
		wt = wt+st;
		jQuery(obj).css({"top":wt}).animate({opacity:1},200);
		return false;
	});
	jQuery(".popup_close").click(function(){
		jQuery(this).parents("li").animate({opacity:0},200).hide(0);
		jQuery(".popup_bg").animate({opacity:0},200).hide(0);
	});
	jQuery(".popup_bg").click(function(){
		jQuery(".popup_wrapper>li").animate({opacity:0},200).hide(0);
		jQuery(".popup_bg").animate({opacity:0},200).hide(0);
	});
	
	jQuery("input[type='text'],input[type='email'],input[type='tel'],input[type='password'], textarea").focusin(function(e) {
       jQuery(this).addClass("clean"); 
    });
	jQuery("input[type='text'],input[type='email'],input[type='tel'],input[type='password'], textarea").focusout(function(e) {
       jQuery(this).removeClass("clean"); 
    });
	jQuery("input[type='tel']").mask("+7 (NNN) NNN NN NN",{placeholder:'X'});
	
	jQuery("#popup_call_form").validate({
		rules: {
			tel: "required",
		}
	});
	
	function form_send(form) {
		if(form.valid()){
 	  		var msg   = form.serialize();
        	jQuery.ajax({
          		type: 'POST',
          		url: 'include/mail.php',
          		data: msg,
          		success: function(data) {
					jQuery(".popup_wrapper>li").animate({opacity:0},0).hide(0);
					var h = jQuery("#site").height();
					var obj = ".popup_wrapper>.popup_thanks";
					jQuery(".popup_bg").css({"display":"block","height":h}).animate({opacity:1},200);
					jQuery(obj).css({"display":"block"});
					var ih = jQuery(window).innerHeight();
					var wh = jQuery(obj).outerHeight();
					var wt = (ih-wh)/2;
					var st = jQuery(document).scrollTop();
					if(wt<30){wt=30};
					wt = wt+st;
					jQuery(obj).css({"top":wt}).animate({opacity:1},200);
          		},
          		error:  function(xhr, str){
	    			alert('Возникла ошибка: ' + xhr.responseCode);
          		}
        	});
		}
	}
	jQuery("[type='submit']").click(function(){
		form_send(jQuery(this).parents("form"));
		return false;
	});
	
	jQuery(".scroll_to").click(function(e) {
        var obj = jQuery(this).attr("href");
		jQuery("html, body").animate({"scrollTop":jQuery(obj).offset().top},1200);
		return false;
    });
	
	jQuery(".fb").fancybox({
		buttons:[
			'close'
		],
		afterClose:function(){
			var htm = jQuery("#video_popup .video_bl").html();
			jQuery("#video_popup .video_bl").html('');
			jQuery("#video_popup .video_bl").html(htm);
		}
	});
	
	jQuery(".work_bl .more_info").click(function(e) {
        jQuery(this).parents(".work_bl").find(".hide_bl").slideDown(200);
		jQuery(this).hide(0);
		return false;
    });
	
	/*NEW2*/jQuery(".lang_bl select").change(function(){
		jQuery("body").addClass("loaded");
		jQuery(".loader_wrap").stop().slideDown(0).fadeTo(0,1);
		var file = 'lang/'+jQuery(this).val()+'_lang.xml';
		var lang = jQuery(this).val();
		var xhr;
		xhr=new XMLHttpRequest();
		xhr.open('GET', file, true);
		xhr.send();
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 300){
					var xml = xhr.responseXML;
					jQuery("#res_slider").slider("value",500000);
					jQuery(".slider_res .res_inp").val(500000);
					jQuery("#day_slider").slider("value",16);
					jQuery(".slider_day .day_inp").val(16);
					jQuery(".lang_bl select option[value='"+GET['lang']+"']").attr("selected",true);
					jQuery(".head_desc").html(jQuery(xml).find("headDescription").html());
					jQuery(".sect_top h1").html(jQuery(xml).find("topTitle").html());
					jQuery(".sect_top h1+p").html(jQuery(xml).find("topText").html());
					jQuery(".sect_top .link a").html(jQuery(xml).find("topLink").html());
					jQuery(".sect_top .timer_wrap .name").html(jQuery(xml).find("topCountdownName").html());
					countdown_layout = jQuery(xml).find("topCountdown").html();
					jQuery(".sect_top .top_trigger_wrap .trigger_bl1").html(jQuery(xml).find("topTrigger1").html());
					jQuery(".sect_top .top_trigger_wrap .trigger_bl2").html(jQuery(xml).find("topTrigger2").html());
					jQuery(".sect_top .top_trigger_wrap .trigger_bl3").html(jQuery(xml).find("topTrigger3").html());
					jQuery(".sect_new_resource h2").html(jQuery(xml).find("newResourceTitle").html());
					jQuery(".sect_info h2").html(jQuery(xml).find("infoTitle").html());
					jQuery(".sect_info .info_bl1 h3").html(jQuery(xml).find("infoArt1Name").html());
					jQuery(".sect_info .info_bl1 .text").html(jQuery(xml).find("infoArt1Text").html());
					jQuery(".sect_info .info_bl2 h3").html(jQuery(xml).find("infoArt2Name").html());
					jQuery(".sect_info .info_bl2 .text").html(jQuery(xml).find("infoArt2Text").html());
					jQuery(".sect_info .link a").html(jQuery(xml).find("infoLink").html());
					jQuery(".sect_trade h2").html(jQuery(xml).find("tradeTitle").html());
					jQuery(".sect_trade .trade_bl1 h3").html(jQuery(xml).find("tradeArt1Name").html());
					jQuery(".sect_trade .trade_bl1 .text").html(jQuery(xml).find("tradeArt1Text").html());
					jQuery(".sect_trade .trade_bl2 h3").html(jQuery(xml).find("tradeArt2Name").html());
					jQuery(".sect_trade .trade_bl2 .text").html(jQuery(xml).find("tradeArt2Text").html());
					jQuery(".sect_trade .trade_bl3 h3").html(jQuery(xml).find("tradeArt3Name").html());
					jQuery(".sect_trade .trade_bl3 .text").html(jQuery(xml).find("tradeArt3Text").html());
					jQuery(".sect_trade .trade_bl4 h3").html(jQuery(xml).find("tradeArt4Name").html());
					jQuery(".sect_trade .trade_bl4 .text").html(jQuery(xml).find("tradeArt4Text").html());
					jQuery(".article_wrap1 h2").html(jQuery(xml).find("artArt1Title").html());
					jQuery(".article_wrap1 .text").html(jQuery(xml).find("artArt1Text").html());
					jQuery(".article_wrap1 .list").html(jQuery(xml).find("artArt1List").html());
					jQuery(".article_wrap2 h2").html(jQuery(xml).find("artArt2Title").html());
					jQuery(".article_wrap2 .list").html(jQuery(xml).find("artArt2List").html());
					jQuery(".article_wrap3 h2").html(jQuery(xml).find("artArt3Title").html());
					jQuery(".article_wrap3 .list").html(jQuery(xml).find("artArt3List").html());
					jQuery(".sect_calc h2").html(jQuery(xml).find("calcTitle").html());
					jQuery(".sect_calc .list").html(jQuery(xml).find("calcList").html());
					jQuery(".sect_calc h3").html(jQuery(xml).find("calcTitle2").html());
					jQuery(".sect_calc .slider_res .lab").html(jQuery(xml).find("calcLabelRes").html());
					jQuery(".sect_calc .slider_res .num_bl .text").html(jQuery(xml).find("calcTextRes").html());
					jQuery(".sect_calc .slider_day .lab").html(jQuery(xml).find("calcLabelDay").html());
					jQuery(".sect_calc .slider_day .num_bl .text").html(jQuery(xml).find("calcTextDay").html());
					jQuery(".sect_calc .result_bl").html(jQuery(xml).find("calcResultText").html());
					jQuery(".sect_calc .link a").html(jQuery(xml).find("calcLink").html());
					jQuery(".sect_graf h2").html(jQuery(xml).find("grafTitle").html());
					jQuery(".sect_graf .subtitle").html(jQuery(xml).find("grafSubtitle").html());
					graf_label1 = jQuery(xml).find("grafLabel1").html();
					graf_label2 = jQuery(xml).find("grafLabel2").html();
					jQuery(".sect_graf .link a").html(jQuery(xml).find("grafLink").html());
					jQuery(".sect_work h2").html(jQuery(xml).find("workTitle").html());
					jQuery(".sect_work .work_bl1 .text").html(jQuery(xml).find("workText1").html());
					jQuery(".sect_work .work_bl1 .hide_bl").html(jQuery(xml).find("workHideText1").html());
					jQuery(".sect_work .work_bl2 .text").html(jQuery(xml).find("workText2").html());
					jQuery(".sect_work .work_bl2 .hide_bl").html(jQuery(xml).find("workHideText2").html());
					jQuery(".sect_work .work_bl3 .text").html(jQuery(xml).find("workText3").html());
					jQuery(".sect_work .work_bl3 .hide_bl").html(jQuery(xml).find("workHideText3").html());
					jQuery(".sect_work .work_bl .more_info span").each(function(index, element) {
						jQuery(this).html(jQuery(xml).find("workHideLink").html());
					});
					jQuery(".sect_map h2").html(jQuery(xml).find("mapTitle").html());
					jQuery(".sect_social h2").html(jQuery(xml).find("socTitle").html());
					jQuery(".sect_social .social_bl1 .text").html(jQuery(xml).find("socText1").html());
					jQuery(".sect_social .social_bl2 .text").html(jQuery(xml).find("socText2").html());
					jQuery(".sect_social .social_bl3 .text").html(jQuery(xml).find("socText3").html());
					jQuery(".sect_social .social_bl4 .text").html(jQuery(xml).find("socText4").html());
					jQuery("#footer .footer_desc").html(jQuery(xml).find("footerDescription").html());
					jQuery(".map_ico .ico1 img").attr("src","pic/maps/"+lang+"/rus.png");
					jQuery(".map_ico .ico2 img").attr("src","pic/maps/"+lang+"/kaz.png");
					jQuery(".map_ico .ico3 img").attr("src","pic/maps/"+lang+"/usa.png");
					jQuery(".map_ico .ico4 img").attr("src","pic/maps/"+lang+"/china.png");
					jQuery(".map_ico .ico5 img").attr("src","pic/maps/"+lang+"/india.png");
					jQuery(".map_ico .ico6 img").attr("src","pic/maps/"+lang+"/aus.png");
					
					jQuery("body").removeClass("loaded");
					jQuery(".loader_wrap").fadeTo(500,0).slideUp(0);
					jQuery(".countdown").countdown('option', "layout", countdown_layout);
					xhr.abort();
					myChart = new Chart(ctx, {
						type: 'line',
						data: {
							labels: ["1","2","...","64","128","...","1024","2 097 152","...", "4 294 967 296"],
							datasets: [{
								label: graf_label1,
								data: [1, 2, 3, 4, 8, 12, 16, 24, 28, 32],
								backgroundColor: [
									'rgba(255,248,126, 0.2)',
								],
								borderColor: [
									'rgba(255,248,126, 1)',
								],
								borderWidth:2,
							},{
								label: graf_label2,
								data: [10.31, 10.62, 10.93, 11.25, 12.5, 13.75, 15, 17.5, 18.75, 20],
								backgroundColor: [
									'rgba(197,108,214, 0.2)',
								],
								borderColor: [
									'rgba(197,108,214, 1)',
								],
								borderWidth:2
							}]
						},
						options: {
							legend:{
								labels:{
									fontColor:"#fff",
								}
							},
							scales: {
								xAxes: [{
									ticks: {
										fontColor:"#fff"
									},
									gridLines:{
										color:'rgba(255,255,255,0.1)'
									}
								}],
								yAxes: [{
									ticks: {
										fontColor:"#fff"
									},
									gridLines:{
										color:'rgba(255,255,255,0.1)'
									}
								}]
							}
						}
					});
			}
		}
	});
});