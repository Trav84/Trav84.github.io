$(document).ready(function(){function e(){var e=new Date,t=e.getHours(),n=e.getMinutes(),o=e.getSeconds();document.getElementById("clock").innerHTML=t%12+":"+n+":"+o}function t(){var e=document.getElementsByTagName("body");e[0].style.backgroundColor="rgb("+r.join(",")+")",r[0]+=10,r[1]+=15,r[2]+=20;for(var t in r)r[t]>=255?r[t]=0:0===r[t]&&(r[t]=5)}var n=document.getElementById("message");console.log(n);var o=document.getElementsByClassName("list");console.log(o);var s=document.getElementsByTagName("li");console.log(s);setInterval(e,1e3),setInterval(t,1e3);var r=[5,5,5];setInterval(function(){function e(e,t){e.style.transform="rotate("+t+"deg)",e.style.transform="-webkit-transform: rotate(360deg)",e.style.transform="-moz-transform: rotate(360deg)"}var t=document.getElementById("second-hand"),n=document.getElementById("minute-hand"),o=document.getElementById("hour-hand"),s=new Date;e(t,6*s.getSeconds()),e(n,6*s.getMinutes()),e(o,30*(s.getHours()%12)+s.getMinutes()/2)},1e3);var g=1,c=1;$(window).keydown(function(e){console.log(e.which),37===e.which?(g+=5,$(".moving-box").css("right",g)):39===e.which?(g-=5,$(".moving-box").css("right",g)):40===e.which?(c+=5,$(".moving-box").css("top",c)):38===e.which&&(c-=5,$(".moving-box").css("top",c))}),$(".moving-box").drag(function(e){".moving-box"==e.target&&$(".moving-box").css("left",screenX)})});