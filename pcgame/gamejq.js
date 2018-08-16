var px = 640;
var py = 330;
var pxi = 640;
var pyi = 330;

var cnt = 0;

var scor = 0;

function mvl()
{
	px = px + 100;
	if (px >= 1075) {px = px - 250;}
	var spx = px + "px";
	cnt = cnt + 1;
	$("#ctrg").animate({left : spx},1000, function(){
		var s = Math.floor( Math.random()*20) ;
		if(s>=0 && s<=6) {
			mvl();
		}
		else if(s>=7 && s<=13){
			mvr();
		}
		else if(s>=14 && s<= 16){
			mvd();
		}
		else {
			mvu();
		}
		});
	//console.log("x = "+px+" and y = "+py);
}
function mvr()
{
	px = px - 100;
	if (px <= 205) {px = px + 250;}
	var spx = px + "px";
	cnt = cnt + 1;
	$("#ctrg").animate({left : spx},1000, function(){
		var s = Math.floor( Math.random()*20) ;
		if(s>=0 && s<=6) {
			mvl();
		}
		else if(s>=7 && s<=13){
			mvr();
		}
		else if(s>=14 && s<= 16){
			mvd();
		}
		else {
			mvu();
		}
		});
	//console.log("x = "+px+" and y = "+py);
}
function mvd()
{
	py = py + 100;
	if (py >= 555) {py = py - 250;}
	var spy = py + "px";
	cnt = cnt + 1;
	$("#ctrg").animate({top : spy},1000, function(){
		var s = Math.floor( Math.random()*20) ;
		if(s>=0 && s<=6) {
			mvl();
		}
		else if(s>=7 && s<=13){
			mvr();
		}
		else if(s>=14 && s<= 16){
			mvd();
		}
		else {
			mvu();
		}
		});
	//console.log("x = "+px+" and y = "+py);
}
function mvu()
{
	py = py - 100;
	if (py <= 105) {py = py + 250;}
	var spy = py + "px";
	cnt = cnt + 1;
	$("#ctrg").animate({top : spy},1000,  function(){
		var s = Math.floor( Math.random()*20) ;
		if(s>=0 && s<=6) {
			mvl();
		}
		else if(s>=7 && s<=13){
			mvr();
		}
		else if(s>=14 && s<= 16){
			mvd();
		}
		else {
			mvu();
		}
		});
	//console.log("x = "+px+" and y = "+py);
}


$("#playbt").click(function plbtn(){
	
	$("#ctrg").animate({opacity : '1'},500);
	var s = Math.floor( Math.random()*20) ;
	if(s>=0 && s<=6) {
		mvl();
	}
	else if(s>=7 && s<=13){
		mvr();
	}
	else if(s>=14 && s<= 16){
		mvd();
	}
	else {
		mvu();
	}
	
});

$("#psbt").click(function(){
	$("#ctrg").stop();
});

var kss = [];
var k1 = 0;
var k2 = 0;

/*
$(window).keydown(function(e){
	var ks = e.which;
	if(k1==0)
	{
		k1 = ks;
	}
	
	if(ks==37 && k1==37)
	{
		pxi = pxi - 5;
		if (pxi <= 205) {pxi = pxi + 5;}
		var spxi = pxi + "px";
		cnt = cnt + 1;
		$("#irn").animate({left : spxi},1);
		kss.push(ks);
	}
	else if(ks==38 && k1==38)
	{
		pyi = pyi - 5;
		if (pyi <= 105) {pyi = pyi + 5;}
		var spyi = pyi + "px";
		cnt = cnt + 1;
		$("#irn").animate({top : spyi},1);
		kss.push(ks);
	}
	else if(ks==39 && k1==39)
	{
		pxi = pxi + 5;
		if (pxi >= 1075) {pxi = pxi - 5;}
		var spxi = pxi + "px";
		cnt = cnt + 1;
		$("#irn").animate({left : spxi},1);
		kss.push(ks);
	}
	else if(ks==40 && k1==40)
	{
		pyi = pyi + 5;
		if (pyi >= 555) {pyi = pyi - 5;}
		var spyi = pyi + "px";
		cnt = cnt + 1;
		$("#irn").animate({top : spyi},1);
		kss.push(ks);
	}
	else if((ks==38 && k1==37) || (ks==37 && k1==38))
	{
		pyi = pyi - 5;
		if (pyi <= 105) {pyi = pyi + 5;}
		var spyi = pyi + "px";
		cnt = cnt + 1;
		pxi = pxi - 5;
		if (pxi <= 205) {pxi = pxi + 5;}
		var spxi = pxi + "px";
		$("#irn").animate({top : spyi , left : spxi},1);
		kss.push(ks);
	}
	else if((ks==38 && k1==39) || (ks==39 && k1==38))
	{
		pyi = pyi - 5;
		if (pyi <= 105) {pyi = pyi + 5;}
		var spyi = pyi + "px";
		cnt = cnt + 1;
		pxi = pxi + 5;
		if (pxi >= 1075) {pxi = pxi - 5;}
		var spxi = pxi + "px";
		$("#irn").animate({top : spyi , left : spxi},1);
		kss.push(ks);
	}
	else if((ks==40 && k1==37) || (ks==37 && k1==40))
	{
		pyi = pyi + 5;
		if (pyi >= 555) {pyi = pyi - 5;}
		var spyi = pyi + "px";
		cnt = cnt + 1;
		pxi = pxi - 5;
		if (pxi <= 205) {pxi = pxi + 5;}
		var spxi = pxi + "px";
		$("#irn").animate({top : spyi , left : spxi},1);
		kss.push(ks);
	}
	else if((ks==40 && k1==39) || (ks==39 && k1==40))
	{
		pyi = pyi + 5;
		if (pyi >= 555) {pyi = pyi - 5;}
		var spyi = pyi + "px";
		cnt = cnt + 1;
		pxi = pxi + 5;
		if (pxi >= 1075) {pxi = pxi - 5;}
		var spxi = pxi + "px";
		$("#irn").animate({top : spyi , left : spxi},1);
		kss.push(ks);
	}

});
var dsc = 0;
$(window).keyup(function(f){
	k2 = 0;
	k1 = 0;
	dsc++;
	//alert(f.which);
	kss = [];
});
*/

$(window).mousemove(function(e){
	var spxi = e.clientX;
	if(spxi >= 1075){spxi = 1075;}
	else if(spxi <= 205){spxi = 205;}
	var spyi = e.clientY;
	if(spyi >= 555){spyi = 555;}
	else if(spyi <= 105){spyi = 105;}
	$("#irn").animate({top : spyi , left : spxi},1);
});

$("#ctrg").click(function(){
	$("#ctrg").stop();
	$("#ctrg").animate({opacity : '0.0'},500);
	scor++;
	$("#scr").html(scor);
});