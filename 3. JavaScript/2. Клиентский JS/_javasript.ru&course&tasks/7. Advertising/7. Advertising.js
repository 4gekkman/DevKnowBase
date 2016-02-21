var x = screen.width;
var y = screen.height;
var src = 'http://ads.com/load.js?';
src += 'x='+x+'&y='+y+'&r='+Math.random();
var script = document.createElement('script');
script.src = src;
document.documentElement.children[0].appendChild(script);