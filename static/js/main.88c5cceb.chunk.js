(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports=a.p+"static/media/i.37cbaf02.png"},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(3),r=a.n(c),l=(a(15),a(4)),o=a(5),s=a(7),m=a(6),d=a(8),u=(a(16),a(17),a(18),function(e){var t=e.title,a=e.desc,n=e.author,c=e.content,r=e.publishedAt,l=e.img,o=e.link;return i.a.createElement("div",{className:"tc",id:"card"},i.a.createElement("p",{id:"title"},t),i.a.createElement("div",{id:"main"},i.a.createElement("img",{src:l,alt:"Not found",id:"ari"}),i.a.createElement("p",{id:"desc"},a),i.a.createElement("p",{id:"cont"},c)),i.a.createElement("p",{id:"link"},"To read more click",i.a.createElement("a",{href:o},"HERE")),i.a.createElement("div",{className:"end"},i.a.createElement("p",{id:"aut"},"Published By: ",n),i.a.createElement("p",{id:"time"}," Published At: ",r)))}),h=function(e){var t=e.article;return i.a.createElement("div",null,t.map(function(e,a){return i.a.createElement(u,{key:a,title:t[a].title,author:t[a].author,desc:t[a].description,content:t[a].content,publishedAt:t[a].publishedAt,img:t[a].urlToImage,link:t[a].url})}))},p=a(1),E=a.n(p),f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={articles:[]},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=9974f8e9b5114eb786a4712bb59ed8cd").then(function(e){return e.json()}).then(function(t){e.setState({articles:t.articles})})}},{key:"render",value:function(){return 0===this.state.articles.length?i.a.createElement("h1",{className:"load"},"LOADING....."):i.a.createElement("div",{className:"body"},i.a.createElement("div",{className:"head"},i.a.createElement("img",{src:E.a,alt:"logo",className:"i"}),i.a.createElement("p",{id:"h"},"FLASH NEWS"),i.a.createElement("img",{src:E.a,alt:"logo",className:"i"})),i.a.createElement(h,{article:this.state.articles}),i.a.createElement("div",{id:"foot"},i.a.createElement("p",{className:"foot"},"Made by: "),i.a.createElement("p",{id:"name"}," Shreyash Gupta")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.88c5cceb.chunk.js.map