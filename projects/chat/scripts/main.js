$(document).ready(function(){function s(a){var e=Math.floor(Math.random()*r.length);_.isEmpty(a)?(t=prompt("Please enter a valid username."),s(t)):($(".unicornIcon").css("background-image",r[e]),$("#userName").html(a))}function a(){var s=Math.floor(Math.random()*i.length);return i[s]}function e(){$.get("https://stark-hamlet-3153.herokuapp.com/chats.json",function(s){c(s);var a=document.getElementById("message-board");a.scrollTop=a.scrollHeight},"json")}function n(){$.post("https://stark-hamlet-3153.herokuapp.com/chats",{chat:{username:t,message:$("#message-box").val()}},"json")}ion.sound({sounds:[{name:"Bloop"},{name:"magic"}],volume:.5,path:"images/",preload:!0});var o=0,r=["url(../images/icon1.png)","url(../images/icon2.png)","url(../images/icon3.png)","url(../images/icon4.png)","url(../images/icon5.png)","url(../images/icon6.jpeg)","url(../images/icon7.png)"],i=["Genghis Khan reportedly decided not to conquer India after meeting a unicorn, which bowed down to him; he viewed it as a sign from his dead father and turned his army back.","Unicorns cannot grow wings","You cannot be granted immortality from devouring a unicorn.","Unicorns can purify water better than any filtering system in the United States.","Dragons will not eat unicorns, but the two, when introduced to each other, were never comfortable around each other.","The King James version of the Old Testament contains nine references to unicorns, thanks to a mistranslation of the Hebrew word re’em. The original word was likely the Assyrian rimu (auroch), an extinct species of wild ox.","Unicorns prefer sour skittles over original skittles!"];e();var t=prompt("Please enter your username.");s(t);var c=function(s){for(var a=_.template('<div class="row"><span class="nameDisplay">@<%= username %>: &nbsp </span> <span class ="message"><%= message %></span> &nbsp <span class="tStamp"> <%= time_stamp %> </span> </div>'),e=0;e<s.length;e++)s[e].id>o&&($("#message-board").append(a(s[e])),$("#message-board").emoticonize(),o=s[e].id,ion.sound.play("Bloop"))};$("#send-button").click(function(){"help"===$("#message-box").val()||"Help"===$("#message-box").val()?($("#message-board").append('<div class="row"> <span class="botName"> @UnicornBot </span> <span class="botMessage"> Welcome to Unicorn Chat. If you need to change your username, simply click on the username button </span> </div>'),$("#message-board").append('<div class="row"> <span class="botName"> @UnicornBot </span> <span class="botMessage"> Type "Unicorn" for a special surprise! </span> </div>'),$("#message-box").val("")):"Unicorn"===$("#message-box").val()||"unicorn"===$("#message-box").val()?($("#message-board").css("background-image","url(../images/unicorn3.jpg)"),$("#message-board").css("background-size","cover"),$("#message-box").val("")):"!Unifacts"===$("#message-box").val()||"!unifacts"===$("#message-box").val()?($("#message-board").append('<div class="row"> <span class="botName"> @UnicornBot </span> <span class="botMessage">'+a()+" </span> </div>"),ion.sound.play("magic"),$("#message-box").val("")):(n(),$("#message-box").val(""))}),$("#message-box").keyup(function(s){13===s.which&&("help"===$("#message-box").val()||"Help"===$("#message-box").val()?($("#message-board").append('<div class="row"> <span class="botName"> @UnicornBot </span> <span class="botMessage"> Welcome to Unicorn Chat. If you need to change your username, simply click on the username button </span> </div>'),$("#message-board").append('<div class="row"> <span class="botName"> @UnicornBot </span> <span class="botMessage"> Type "Unicorn" for a special surprise! </span> </div>'),$("#message-board").append('<div class="row"> <span class="botName"> @UnicornBot </span> <span class="botMessage"> Type "!Unifacts" for unicorn facts! </span> </div>'),$("#message-box").val("")):"Unicorn"===$("#message-box").val()||"unicorn"===$("#message-box").val()?($("#message-board").css("background-image","url(../images/unicorn3.jpg)"),$("#message-board").css("background-size","cover"),$("#message-box").val("")):"!Unifacts"===$("#message-box").val()||"!unifacts"===$("#message-box").val()?($("#message-board").append('<div class="row"> <span class="botName"> @UnicornBot </span> <span class="botMessage">'+a()+" </span> </div>"),ion.sound.play("magic"),$("#message-box").val("")):(n(),$("#message-box").val("")))}),$("#userName").click(function(){t=prompt("Please enter your username."),s(t)}),setInterval(e,1e3)});