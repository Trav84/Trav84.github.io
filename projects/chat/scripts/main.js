$(document).ready(function(){function e(s){var a=Math.floor(Math.random()*r.length);_.isEmpty(s)?(c=prompt("Please enter a valid username."),e(c)):($(".unicornIcon").css("background-image",r[a]),$("#userName").html(s))}function s(){var e=Math.floor(Math.random()*i.length);return i[e]}function a(){$.get("https://stark-hamlet-3153.herokuapp.com/chats.json",function(e){m(e);var s=document.getElementById("message-board");s.scrollTop=s.scrollHeight},"json")}function n(){$.post("https://stark-hamlet-3153.herokuapp.com/chats",{chat:{username:c,message:$("#message-box").val()}},"json")}function o(e){var s=document.createElement("embed");s.setAttribute("src",e),s.setAttribute("hidden",!0),s.setAttribute("autostart",!0),document.body.appendChild(s)}var t=0,r=["url(../images/icon1.png)","url(../images/icon2.png)","url(../images/icon3.png)","url(../images/icon4.png)","url(../images/icon5.png)","url(../images/icon6.jpeg)","url(../images/icon7.png)"],i=["Genghis Khan reportedly decided not to conquer India after meeting a unicorn, which bowed down to him; he viewed it as a sign from his dead father and turned his army back.","Unicorns cannot grow wings","You cannot be granted immortality from devouring a unicorn.","Unicorns can purify water better than any filtering system in the United States.","Dragons will not eat unicorns, but the two, when introduced to each other, were never comfortable around each other.","The King James version of the Old Testament contains nine references to unicorns, thanks to a mistranslation of the Hebrew word re’em. The original word was likely the Assyrian rimu (auroch), an extinct species of wild ox.","Unicorns prefer sour skittles over original skittles!"];a();var c=prompt("Please enter your username.");e(c);var m=function(e){for(var s=_.template('<div class="row"><span class="nameDisplay">@<%= username %>: &nbsp </span> <span class ="message"><%= message %></span> &nbsp <span class="tStamp"> <%= time_stamp %> </span> </div>'),a=0;a<e.length;a++)e[a].id>t&&($("#message-board").append(s(e[a])),$("#message-board").emoticonize(),t=e[a].id,o("images/Bloop.wav"))};$("#send-button").click(function(){"help"===$("#message-box").val()||"Help"===$("#message-box").val()?($("#message-board").append('<div class="row"> <span class="botName"> @UnicornBot </span> <span class="botMessage"> Welcome to Unicorn Chat. If you need to change your username, simply click on the username button </span> </div>'),$("#message-board").append('<div class="row"> <span class="botName"> @UnicornBot </span> <span class="botMessage"> Type "Unicorn" for a special surprise! </span> </div>'),$("#message-box").val("")):"Unicorn"===$("#message-box").val()||"unicorn"===$("#message-box").val()?($("#message-board").css("background-image","url(../images/unicorn3.jpg)"),$("#message-board").css("background-size","cover"),$("#message-box").val("")):"!Unifacts"===$("#message-box").val()||"!unifacts"===$("#message-box").val()?($("#message-board").append('<div class="row"> <span class="botName"> @UnicornBot </span> <span class="botMessage">'+s()+" </span> </div>"),o("images/magic.wav"),$("#message-box").val("")):(n(),$("#message-box").val(""))}),$("#message-box").keyup(function(e){13===e.which&&("help"===$("#message-box").val()||"Help"===$("#message-box").val()?($("#message-board").append('<div class="row"> <span class="botName"> @UnicornBot </span> <span class="botMessage"> Welcome to Unicorn Chat. If you need to change your username, simply click on the username button </span> </div>'),$("#message-board").append('<div class="row"> <span class="botName"> @UnicornBot </span> <span class="botMessage"> Type "Unicorn" for a special surprise! </span> </div>'),$("#message-board").append('<div class="row"> <span class="botName"> @UnicornBot </span> <span class="botMessage"> Type "!Unifacts" for unicorn facts! </span> </div>'),$("#message-box").val("")):"Unicorn"===$("#message-box").val()||"unicorn"===$("#message-box").val()?($("#message-board").css("background-image","url(../images/unicorn3.jpg)"),$("#message-board").css("background-size","cover"),$("#message-box").val("")):"!Unifacts"===$("#message-box").val()||"!unifacts"===$("#message-box").val()?($("#message-board").append('<div class="row"> <span class="botName"> @UnicornBot </span> <span class="botMessage">'+s()+" </span> </div>"),o("images/magic.wav"),$("#message-box").val("")):(n(),$("#message-box").val("")))}),$("#userName").click(function(){c=prompt("Please enter your username."),e(c)}),setInterval(a,1e3)});