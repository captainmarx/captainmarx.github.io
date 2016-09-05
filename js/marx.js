	//底部盒子拖动
	function drag(){
		var oBox=document.getElementById('box');
		var y=0;
		var x=0;

		oBox.onmousedown=function(ev){
			var disX=ev.clientX-y;
			var disY=ev.clientY-x;
			document.onmousemove=function(ev){
				y=ev.clientX-disX;
				x=ev.clientY-disY;				
				oBox.style.transform='perspective(800px) rotateX('+-x+'deg) rotateY('+y+'deg)';
			}
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
			}
			return false;
		}
	}
	
	//回到顶部
	function gotop(){
		var oGotop=document.getElementById('gotop');
		window.onscroll=function(){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			if(scrollTop>=300){
				oGotop.style.display='block';
			}else{
				oGotop.style.display='none';
			}	
		}
		oGotop.onclick=function(){
			var timer=null;
			var count=Math.ceil(1000/30);
			var start=document.documentElement.scrollTop||document.body.scrollTop;
			var iTarget=0;
			var time=1000;
			var dis=iTarget-start;
			var n=0;
			clearInterval(timer);
			timer=setInterval(function(){
				n++;
				var a=n/count;
				var cur=start+dis*a*a;
				document.documentElement.scrollTop=document.body.scrollTop=cur;
				if(n>=count){
					clearInterval(timer);
				}
			},30);			
		}
	}

	window.onload=function(){
		drag();
		gotop();
		// var winW=document.documentElement.clientWidth;
		// alert(winW)
	}