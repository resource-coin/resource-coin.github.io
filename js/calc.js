// JavaScript Document
jQuery(document).ready(function(e) {
	var procent = 0.03125;
	
	jQuery("#res_slider").slider({
		min:100,
		max:1000000,
		value:500000,
		step:100,
		range:'min',
      	create: function() {
			jQuery(".slider_res .res_inp").val(sepNum(jQuery(this).slider("value")));
      	},
      	slide: function( event, ui ) {
			jQuery(".slider_res .res_inp").val(sepNum(ui.value));
      	},
		stop: function( event, ui ) {
			calc();
		}
    });
	jQuery(".slider_res .res_inp").change(function(){
		var val = jQuery(this).val()+" ";
		var tmp = "", n_pos, p_pos = 0;
		while((n_pos = val.indexOf(" ", p_pos)) != -1){
			tmp = tmp+val.substring(p_pos,n_pos);
			p_pos = n_pos+1;	
		}
		val = parseInt(tmp);
		if(isNaN(val)){
			alert("Ошибка ввода");
			val = 500000;
		}
		val = (Math.floor(val/100))*100;
		if(val<100 || val>1000000){
			val = 500000;
		}
		jQuery(this).val(sepNum(val));
		jQuery("#res_slider").slider("value",val);
		calc();
	});
	jQuery("#day_slider").slider({
		min:1,
		max:32,
		value:16,
		step:1,
		range:'min',
      	create: function() {
			jQuery(".slider_day .day_inp").val(sepNum(jQuery(this).slider("value")));
			calc();
      	},
      	slide: function( event, ui ) {
			jQuery(".slider_day .day_inp").val(sepNum(ui.value));
      	},
		stop: function( event, ui ) {
			calc();
		}
    });
	jQuery(".slider_day .day_inp").change(function(){
		var val = parseInt(jQuery(this).val());
		if(isNaN(val)){
			alert("Ошибка ввода");
			val = 16;
		}
		val = Math.floor(val);
		if(val<1 || val>32){
			val = 16;
		}
		jQuery(this).val(val);
		jQuery("#day_slider").slider("value",val);
		calc();
	});
	
	function sepNum(n){
		var step = 1;
		var res = "";
		var tmp;
		while(n/step>=1){
			tmp = Math.floor(n/step);
			tmp+="";
			res = tmp.slice(-3)+" "+res;
			step*=1000
		}
		return res;
	}
	
	function calc(){
		var sum = jQuery(".slider_res .res_inp").val()+" ";
		var tmp = "", n_pos, p_pos = 0;
		while((n_pos = sum.indexOf(" ", p_pos)) != -1){
			tmp = tmp+sum.substring(p_pos,n_pos);
			p_pos = n_pos+1;	
		}
		sum = parseInt(tmp);
		var day = parseInt(jQuery(".slider_day .day_inp").val());
		var result_procent = day*procent;
		var result_res = sum+(sum*result_procent);
		var reuslt_eth = result_res*0.001;
		result_procent *= 100;
		jQuery(".calc_bl .result_bl .name span").text(result_procent);
		jQuery(".calc_bl .result_bl .sum .res span").text(sepNum(result_res));
		jQuery(".calc_bl .result_bl .sum .eth span").text(parseInt(reuslt_eth*100)/100);
	}
	
});