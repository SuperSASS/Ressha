(()=>{function p(o,e,a,t){return new window.APlayer({container:o,fixed:e,autoplay:a,audio:t,theme:"#E34E4F",volume:.2,listFolded:!0})}var i=p;function d(){let o=document.getElementsByClassName("typeQQ");for(let e of Array.from(o)){let a={QQ:e.getElementsByClassName("btns-cell--QQ")[0].innerHTML.slice(4),img:e.getElementsByClassName("btns-cell--img")[0],title:e.getElementsByClassName("btns-cell--title")[0]};e.classList.contains("private")&&e.getElementsByClassName("btns-cell--QQ")[0].remove(),a.img.setAttribute("src","https://q1.qlogo.cn/headimg_dl?dst_uin="+a.QQ+"&spec=640"),fetch("https://tenapi.cn/qqname/?qq="+a.QQ).then(t=>t.json()).then(t=>{a.title.innerHTML=t.name}).catch(()=>{a.title.innerHTML="\u540D\u79F0\u83B7\u53D6\u5931\u8D25\u4E86qwq\u2026\u2026"})}}var n=d;function h(){let o=document.getElementsByClassName("article-subtitleHitokoto"),e=document.getElementById("hitokotoID-href");for(let a of Array.from(o))fetch("https://v1.hitokoto.cn/?c=a&c=c").then(t=>t.json()).then(t=>{let r="\u300C"+t.hitokoto+"\u300D<br/><div class=article-subtitleHitokoto--author >\u2014\u2014 "+(t.from_who&&t.from_who!="null"?t.from_who:"")+(t.from&&t.from!="null"?"\u300E"+t.from+"\u300F":"")+"</div>";a.innerHTML=r,e&&(e.setAttribute("href","https://hitokoto.cn/?uuid="+t.uuid),e.innerHTML=t.id)}).catch(console.error)}var l=h;var g=[{name:"\u672A\u3060\u77E5\u3089\u308C\u306C\u7269\u8A9E \uFF5E Anticipated Dream",artist:"\u51CB\u53F6\u68D5",url:"http://music.163.com/song/media/outer/url?id=28234322.mp3",cover:"http://p1.music.126.net/QlGmIQzGCnnlDW87sf-LSg==/109951167115042566.jpg"},{name:"\u5149\u306E\u964D\u308B\u68EE\uFF5Ethiqua ol shua\uFF5E",artist:"\u971C\u6708\u306F\u308B\u304B",url:"http://music.163.com/song/media/outer/url?id=28481816.mp3",cover:"http://p2.music.126.net/nHsEiP54pWWaZpsv50TA-Q==/5850501371605299.jpg"},{name:"\u30AA\u30CE\u30DE\u30C8\u30DA\u30E1\u30AC\u30CD",artist:"\u306D\u3053\u307C\u30FC\u308D / \u521D\u97F3\u30DF\u30AF",url:"http://music.163.com/song/media/outer/url?id=487029007.mp3",cover:"http://p2.music.126.net/RIVYdP43J8eE7-l-tpqU8Q==/18658712325244093.jpg"},{name:"\u30D0\u30C3\u30AF\u30D5\u30A1\u30A4\u30A2",artist:"BBHF",url:"http://music.163.com/song/media/outer/url?id=1937939443.mp3",cover:"http://p2.music.126.net/7hxRntYcrTLa-rBPDJ2iTw==/109951167288628919.jpg"},{name:"You are my irreplaceable treasure",artist:"Laur",url:"http://music.163.com/song/media/outer/url?id=1825038091.mp3",cover:"http://p1.music.126.net/2z9vtD631xcqQip2Gtnbrg==/109951165780073537.jpg"},{name:"\u52D5\u304F\u3001\u52D5\u304F",artist:"\u4E45\u4FDD\u30E6\u30EA\u30AB / \u6C34\u702C\u3044\u306E\u308A",url:"http://music.163.com/song/media/outer/url?id=520461943.mp3",cover:"http://p2.music.126.net/SxU9ZctOvc4lJHDa-vcKyg==/109951163072078462.jpg"},{name:"\u4E09\u5343\u66F2",artist:"MeLo_\u7EFF\u841D\u7EC4",url:"http://music.163.com/song/media/outer/url?id=2020954381.mp3",cover:"http://p1.music.126.net/K0T_k6aYhO6pVUT2zUL6Ag==/109951166876070639.jpg"},{name:"Gracefully",artist:"\u68B6\u6D66\u7531\u8A18",url:"http://music.163.com/song/media/outer/url?id=26491720.mp3",cover:"http://p2.music.126.net/3Ns9ENQKwbQbjv4ItY-5Vg==/109951165561010116.jpg"},{name:"\u6674\u308C\u308B\u306A\u3089",artist:"Guiano",url:"http://music.163.com/song/media/outer/url?id=1839474020.mp3",cover:"http://p1.music.126.net/M6JINT-YzbR95liqI13oBw==/109951168551085464.jpg"},{name:"\u30A4\u30CE\u30BB\u30F3\u30C8",artist:"*Luna / \u306D\u3093\u306D",url:"http://music.163.com/song/media/outer/url?id=1881977987.mp3",cover:"http://p1.music.126.net/qPNjfPCMyuWbsJaMvoZsmQ==/109951166466398404.jpg"}],m=g;var f=window.ParamsManager.getParams(),s={_createAplayer:()=>{let o=f.aplayerParam,e=document.getElementById("aplayer-global");((o&&o.hideglobal)??!1)||i(e,!0,!1,m);let t=document.getElementById("aplayer-article"),r=(o&&o.list)??null;if(r){let c=o.fixed??!1,u=o.autoplay??!1;i(t,c,u,r)}else t.remove()},init:()=>{n(),l(),s._createAplayer()}};window.addEventListener("load",()=>{setTimeout(function(){s.init()},0)});})();
