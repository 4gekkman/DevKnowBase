
/*
* author: http://codingtools.ru/lessons/9/102
*
* */


// создается объект
var TINY={};

// возвращает ссылку на элемент по его ID
function T$(i){return document.getElementById(i)}

// возвращает список элементов с заданным именем тега
function T$$(e,p){return p.getElementsByTagName(e)}


TINY.accordion=function(){
	function slider(n){this.n=n; this.h=[]; this.c=[]}
	slider.prototype.init=function(t,e,m,o,k){
		var a=T$(t), i=x=0; this.s=k||'', w=[], n=a.childNodes, l=n.length; this.m=m||false;
		for(i;i<l;i++){if(n[i].nodeType!=3){w[x]=n[i]; x++}} this.l=x;
		for(i=0;i<this.l;i++){
			var v=w[i]; this.h[i]=h=T$$(e,v)[0]; this.c[i]=c=T$$('div',v)[0]; h.onclick=new Function(this.n+'.pr(false,this)');
			if(o==i){h.className=this.s; c.style.height='auto'; c.d=1}else{c.style.height=0; c.d=-1}
		}
	};
	slider.prototype.pr=function(f,d){
		for(var i=0;i<this.l;i++){
			var h=this.h[i], c=this.c[i], k=c.style.height; k=k=='auto'?1:parseInt(k); clearInterval(c.t);
			if((k!=1&&c.d==-1)&&(f==1||h==d)){
				c.style.height=''; c.m=c.offsetHeight; c.style.height=k+'px'; c.d=1; h.className=this.s; su(c,1)
			}else if(k>0&&(f==-1||this.m||h==d)){
				c.d=-1; h.className=''; su(c,-1)
			}
		}
	};
	function su(c){c.t=setInterval(function(){sl(c)},10)};
	function sl(c){
		var h=c.offsetHeight, d=c.d==1?c.m-h:h; c.style.height=h+(Math.ceil(d/10)*c.d)+'px';
		c.style.opacity=h/c.m; c.style.filter='alpha(opacity='+h*100/c.m+')';
		if((c.d==1&&h>=c.m)||(c.d!=1&&h==1)){if(c.d==1){c.style.height='auto'} clearInterval(c.t)}
	};
	return{slider:slider}
}();