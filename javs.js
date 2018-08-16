 
var tme = "";

function datime()
{
	var dt = new Date();
	var d = dt.getDate();
	var m = dt.getMonth();
	var y = dt.getFullYear();
	var h = dt.getHours();
	var mn = dt.getMinutes();
	var sc = dt.getSeconds();
	var mnt = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	var mth = mnt[m];
	var ap = "AM";
	if(h==0){ h = 12;}
	if (h >11)
	{
		h = h - 12;
		ap = "PM";
		if (h == 0)
		{
			h = 12;
		}
	}
	if(sc < 10)
	{
		sc = "0"+sc;
	}
	if(mn < 10)
	{
		mn = "0"+mn;
	}
	if(h < 10)
	{
		h = "0"+h;
	}
	var fd = d + " / " + mth + " / " + y + "<br>" + h + " : " + mn + " : " + sc + "  " + ap;
	return fd;
}

function shtm(st)
{
	st = datime();
	document.getElementById("dnt").innerHTML = st;
}
setInterval(shtm, 1);

var mv = "mvsd";
var ch = "chrd";
var up= "upmvd";
var tv = "tvsd";
var g = "gmd"; 
var mvc = "mvscnt";
var chc = "chrcnt";
var upc = "upcnt";
var tvc = "tvcnt"
var gmc = "gmcnt"


function changer(a,b,c,d,e,f,gg,uc,t,gc)
{
		document.getElementById(a).style.display = "block";
		document.getElementById(f).style.display = "block";
		document.getElementById(b).style.display = "none";
		document.getElementById(c).style.display = "none";
		document.getElementById(d).style.display = "none";
		document.getElementById(e).style.display = "none";
		document.getElementById(gg).style.display = "none";
		document.getElementById(uc).style.display = "none";
		document.getElementById(t).style.display = "none";
		document.getElementById(gc).style.display = "none";
}

document.getElementById("mvs").onclick = function(){
		changer(mv,ch,up,tv,g,mvc,chc,upc,tvc,gmc);		
}

document.getElementById("chr").onclick = function(){
		changer(ch,mv,up,tv,g,chc,mvc,upc,tvc,gmc);
}

document.getElementById("upmv").onclick = function(){
		changer(up,mv,ch,tv,g,upc,mvc,chc,tvc,gmc);
}

document.getElementById("tvs").onclick = function(){
		changer(tv,mv,up,ch,g,tvc,mvc,chc,upc,gmc);
}

document.getElementById("gm").onclick = function(){
		changer(g,mv,up,tv,ch,gmc,mvc,chc,upc,tvc);
}

document.getElementById("lth").onclick = function(){
		var thml = "<title>Marvel Cinematic Universe</title> <link rel = \"stylesheet\" type = \"text/css\" href = \"mainW.css\">" ;
		document.getElementById("hdlh").innerHTML = thml;
}

document.getElementById("dth").onclick = function(){
		var thmd = "<title>Marvel Cinematic Universe</title> <link rel = \"stylesheet\" type = \"text/css\" href = \"mainD.css\"> ";
		document.getElementById("hdlh").innerHTML = thmd;
}


